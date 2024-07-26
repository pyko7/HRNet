import { createSlice } from "@reduxjs/toolkit";
import { body } from "./body";
const initialState = {
  employees: body,
  // employees: [],
};

export const tableSlice = createSlice({
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

export const { setEmployees, getEmployees } = tableSlice.actions;

export default tableSlice.reducer;
