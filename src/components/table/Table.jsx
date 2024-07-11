import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import { setEmployees } from "../../features/table/tableSlice";
import "./Table.css";

const Table = ({ body }) => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.table.employees);

  useEffect(() => {
    dispatch(setEmployees(body));
  }, [dispatch]);

  return (
    <table className="table">
      <TableHeader />
      <tbody>
        {employees.map((row, idx) => (
          <TableRow row={row} key={idx} />
        ))}
      </tbody>
    </table>
  );
};
export default Table;
