import { useTableContext } from "../../context/TableContext";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import "./Table.css";

const Table = () => {
  const { tableData } = useTableContext();

  return (
    <div className="table-container">
      <table className="table">
        <TableHeader />
        <tbody>
          {tableData?.map((row, idx) => (
            <TableRow row={row} key={idx} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
