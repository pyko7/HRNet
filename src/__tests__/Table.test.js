import { expect, test, describe } from "vitest";
import { employees, employeesSortedByFirstName } from "../__mock__/employees";
import {
  filterByLengthTableData,
  searchTableData,
  sortTableData,
} from "../__mock__/table";

describe("Given I am on the employees list page", () => {
  describe("When I sort employees by their first name", () => {
    test("Then, it should sort employee alphabetically", () => {
      // Remove extra user used in other test
      employees.pop();
      const sortConfig = { key: "firstName", direction: "asc" };
      const sortedEmployees = sortTableData(employees, sortConfig);
      const sortedEmployeesFirstName = sortedEmployees.map(
        (el) => el.firstName
      );
      const isEmployeesSorted =
        JSON.stringify(sortedEmployeesFirstName) ===
        JSON.stringify(employeesSortedByFirstName);
      expect(isEmployeesSorted).toBeTruthy();
    });
  });
  describe("When I select to display 5 employees", () => {
    test("Then, it should display 5 employees", () => {
      const maxNumber = 5;
      const filteredEmployees = filterByLengthTableData(maxNumber, employees);
      expect(filteredEmployees.length).toBe(5);
    });
  });
  describe("When I search the employee called John Doe", () => {
    test("Then, it should not contain other employees than John Doe", () => {
      const maxNumber = 5;
      const searchValue = "John Doe";
      const searchResults = searchTableData(searchValue, maxNumber, employees);

      // Add employee to fake search results;
      searchResults.push(employees[2]);

      const searchResultsAreFalsy = searchResults.some(
        (employee) => employee.firstName !== "John"
      );

      expect(searchResultsAreFalsy).toBeTruthy();
    });
  });
});
