import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [],
};

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    saveEmployees: (state, action) => {
      state.employees = action.payload;
    },
  },
});

export const { saveEmployees } = employeesSlice.actions;

export default employeesSlice.reducer;
