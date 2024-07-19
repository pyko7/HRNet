import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { TableContextProvider } from "../../context/TableContext";
import Layout from "../../components/layout/Layout";
import TableSection from "../../components/tableSection/TableSection";
import "./Employees.css";

const Employees = () => {
  const employees = useSelector((state) => state.employees.employees);

  return (
    <Layout title="Current Employees">
      <div className="page-wrapper">
        <Link to="/">Home</Link>
        <TableContextProvider>
          <TableSection table={employees} />
        </TableContextProvider>
      </div>
    </Layout>
  );
};

export default Employees;
