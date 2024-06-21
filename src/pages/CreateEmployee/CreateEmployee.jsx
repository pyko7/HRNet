import { Link } from "react-router-dom";
import Form from "../../components/form/Form";
import Layout from "../../components/layout/Layout";
import "./CreateEmployee.css";

const CreateEmployee = () => {
  return (
    <Layout title="Create Employee">
      <div className="create-employee-container">
        <Link to="/employees" className="create-employee-link-button">
          View Current Employees
        </Link>
        <div className="create-employee-form-container">
          <Form />
        </div>
      </div>
    </Layout>
  );
};

export default CreateEmployee;
