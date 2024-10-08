import { useEffect } from "react";
import { useTableContext } from "../../context/TableContext";
import { lengthNumber } from "../../utils/utils";
import Table from "../../components/table/Table";
import Searchbar from "../../components/searchbar/Searchbar";
import Select from "../../components/select/Select";
import TablePagination from "../table/TablePagination";

/**
 * @description Table container
 * @param {Object} table table displayed
 * @returns
 */
const TableSection = ({ table }) => {
  const { setInitialTableData } = useTableContext();

  useEffect(() => {
    if (table) {
      setInitialTableData(table, lengthNumber[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [table]);

  return (
    <div className="table-section">
      <div className="searchbar-tools-container">
        <Select options={lengthNumber} />
        <Searchbar placeholder="Search an employee..." />
      </div>

      <Table />

      <TablePagination />
    </div>
  );
};

export default TableSection;
