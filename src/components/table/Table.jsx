import { useTableContext } from "../../context/TableContext";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import "./Table.css";

const Table = () => {
  const { tableData } = useTableContext();

  return (
    <table className="table">
      <TableHeader />
      <tbody>
        {tableData?.map((row, idx) => (
          <TableRow row={row} key={idx} />
        ))}
      </tbody>
    </table>
  );
};
export default Table;
