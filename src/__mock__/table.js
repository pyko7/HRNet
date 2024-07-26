const sortEmployees = (table, sortObj) => {
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

export const sortTableData = (employees, sortObj) => {
  const sortedData = sortEmployees(employees, sortObj);
  return sortedData.employees;
};

const filterByLength = (table, lengthValue) => {
  const tableLength = parseInt(lengthValue);
  return !tableLength ? table : table.slice(0, tableLength);
};

export const filterByLengthTableData = (lengthValue, table) => {
  const filteredData = filterByLength(table, lengthValue);
  return filteredData;
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

const searchEmployee = (table, text) => {
  const searchString = text.toLowerCase();

  return filterEmployees(table, searchString);
};

export const searchTableData = (searchString, lengthValue, employees) => {
  let result = [];
  if (searchString.trim() === "") {
    result = filterByLengthTableData(lengthValue, employees);
  } else {
    const employee = searchEmployee(employees, searchString);
    result = filterByLengthTableData(lengthValue, employee);
  }
  return result;
};
