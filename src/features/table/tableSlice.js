import { createSlice } from "@reduxjs/toolkit";
import { filterEmployees } from "./utils";

const initialState = {
  employees: [],
  sortConfig: { key: null, direction: null },
  originalEmployees: [],
};

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setEmployees: (state, action) => {
      state.employees = action.payload;
      state.originalEmployees = action.payload;
    },
    sortEmployees: (state, action) => {
      const { key, direction } = action.payload;
      state.sortConfig = { key, direction };
      state.employees = state.employees.slice().sort((a, b) => {
        if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
        if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
        return 0;
      });
    },
    searchEmployee: (state, action) => {
      const searchString = action.payload.toLowerCase();
      const filteredEmployees = filterEmployees(
        state.originalEmployees,
        searchString
      );

      state.employees = filteredEmployees;
    },
  },
});

export const { setEmployees, sortEmployees, searchEmployee } =
  tableSlice.actions;

export default tableSlice.reducer;
