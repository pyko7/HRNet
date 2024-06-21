import { Link } from "react-router-dom";
import Form from "../../components/form/Form";
import "./CreateEmployee.css";

const CreateEmployee = () => {
  return (
    <div className="layout">
      <div className="create-employee-container">
        <h1 style={{ textAlign: "center" }}>Create Employee</h1>
        <Link to="/employees" className="create-employee-link-button">
          View Current Employees
        </Link>
        <div className="create-employee-form-container">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;
