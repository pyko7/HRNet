import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import { getEmployees } from "../../features/employees/employeesSlice";
import "./Table.css";

const Table = ({ body }) => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.employees);
  console.log({ employees });
  // useEffect(() => {
  //   dispatch(getEmployees(body));
  // }, [dispatch]);

  return (
    <table className="table">
      <TableHeader />
      <tbody>
        {employees?.map((row, idx) => (
          <TableRow row={row} key={idx} />
        ))}
      </tbody>
    </table>
  );
};
export default Table;
