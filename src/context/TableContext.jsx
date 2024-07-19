import { createContext, useContext, useState } from "react";
import {
  filterByLength,
  searchEmployee,
  sortEmployees,
} from "../components/table/utils";

const TableContext = createContext();

export const useTableContext = () => {
  return useContext(TableContext);
};

export const TableContextProvider = ({ children }) => {
  const [originalTableData, setOriginalTableData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [tableDataLength, setTableDataLength] = useState(0);

  const setInitialTableData = (data, lengthValue) => {
    if (originalTableData.length < 1) {
      setOriginalTableData(data);
    }
    filterByLengthTableData(lengthValue, data);
  };

  const sortTableData = (sortObj) => {
    const sortedData = sortEmployees(tableData, sortObj);
    setTableData(sortedData);
    return;
  };

  const searchTableData = (searchString) => {
    if (searchString.trim() === "") {
      filterByLengthTableData(tableDataLength, originalTableData);
    } else {
      const employee = searchEmployee(originalTableData, searchString);
      filterByLengthTableData(tableDataLength, employee);
    }
    return;
  };

  const filterByLengthTableData = (lengthValue, table) => {
    const filteredData = filterByLength(table, lengthValue);
    setTableDataLength(lengthValue);
    setTableData(filteredData);
    return;
  };

  return (
    <TableContext.Provider
      value={{
        tableData,
        setTableData,
        originalTableData,
        sortTableData,
        searchTableData,
        filterByLengthTableData,
        setInitialTableData,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};
