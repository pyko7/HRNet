import { useEffect } from "react";
import { useTableContext } from "../../context/TableContext";
import { lengthNumber } from "../../utils/utils";
import Table from "../../components/table/Table";
import Searchbar from "../../components/searchbar/Searchbar";
import Select from "../../components/select/Select";
import Button from "../../components/button/Button";

const TableSection = ({ table }) => {
  const { setInitialTableData } = useTableContext();

  useEffect(() => {
    if (table) {
      setInitialTableData(table, lengthNumber[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [table]);

  return (
    <>
      <div className="searchbar-tools-container">
        <Select options={lengthNumber} />
        <Searchbar placeholder="Search an employee..." />
      </div>
      <div id="employee-div" className="container table-container">
        <Table />
      </div>
      <span>1 to 11 to 64 entries</span>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
        }}
      >
        <Button className="pagination-button">Previous</Button>
        <span className="pagination-number">1</span>
        <span className="pagination-number">2</span>
        <span className="pagination-number">3</span>
        <span className="pagination-number">4</span>
        <Button className="pagination-button">Next</Button>
      </div>
    </>
  );
};

export default TableSection;
