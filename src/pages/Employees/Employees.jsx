import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import "./Employees.css";

const Employees = () => {
  const employeeList = [
    { title: "First Name", data: "firstName" },
    { title: "Last Name", data: "lastName" },
    { title: "Start Date", data: "startDate" },
    { title: "Department", data: "department" },
    { title: "Date of Birth", data: "dateOfBirth" },
    { title: "Street", data: "street" },
    { title: "City", data: "city" },
    { title: "State", data: "state" },
    { title: "Zip Code", data: "zipCode" },
  ];
  return (
    <Layout title="Current Employees">
      <div id="employee-div" className="container">
        <table id="employee-table" className="display">
          {employeeList.map((employee, idx) => (
            <td key={idx}>{employee.data}</td>
          ))}
        </table>
        <Link to="/" className="link-button">
          Home
        </Link>
      </div>
    </Layout>
  );
};

export default Employees;
