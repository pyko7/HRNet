import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "../features/employees/employeesSlice";
import tableReducer from "../features/table/tableSlice";

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
    table: tableReducer,
  },
});
