import { createSlice } from "@reduxjs/toolkit";
import { body } from "./body";

const initialState = {
  employees: [],
  // used for demo
  // employees: body,
};

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    setEmployees: (state, action) => {
      console.log({ action: action.payload });
      state.employees.push(action.payload);
    },
    getEmployees: (state, action) => {
      state.employees = action.payload;
    },
  },
});

export const { setEmployees, getEmployees } = employeesSlice.actions;

export default employeesSlice.reducer;
