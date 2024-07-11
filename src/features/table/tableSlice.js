import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [],
};

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setEmployees: (state, action) => {
      state.employees = action.payload;
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
  },
});

export const { setEmployees, sortEmployees } = tableSlice.actions;

export default tableSlice.reducer;
