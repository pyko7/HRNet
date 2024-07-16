export const filterEmployees = (employees, searchString) => {
  if (searchString.trim() === "") {
    return employees;
  } else {
    return employees.filter((employee) =>
      Object.values(employee).some((value) =>
        String(value).toLowerCase().includes(searchString)
      )
    );
  }
};
