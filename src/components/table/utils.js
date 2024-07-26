export const sortEmployees = (table, sortObj) => {
  let employees = table;
  const { key, direction } = sortObj;
  const sortConfig = { key, direction };
  employees = employees.slice().sort((a, b) => {
    if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
    if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
    return 0;
  });
  return { employees, sortConfig };
};

const filterEmployees = (table, searchString) => {
  if (searchString.trim() === "") {
    return table;
  } else {
    const searchTerms = searchString.toLowerCase().split(/\s+/);
    return table.filter((employee) =>
      searchTerms.every((term) =>
        Object.values(employee).some((value) =>
          String(value).toLowerCase().includes(term)
        )
      )
    );
  }
};

export const searchEmployee = (table, text) => {
  const searchString = text.toLowerCase();

  return filterEmployees(table, searchString);
};

export const filterByLength = (table, lengthValue) => {
  const tableLength = parseInt(lengthValue);
  return !tableLength ? table : table.slice(0, tableLength);
};
