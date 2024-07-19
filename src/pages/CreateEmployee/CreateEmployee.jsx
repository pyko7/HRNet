import { Link } from "react-router-dom";
import Form from "../../components/form/Form";
import Layout from "../../components/layout/Layout";
import "./CreateEmployee.css";

const CreateEmployee = () => {
  return (
    <Layout title="Create Employee">
      <div className="page-wrapper">
        <Link to="/employees">View Current Employees</Link>
        <div className="create-employee-form-container">
          <Form />
        </div>
      </div>
    </Layout>
  );
};

export default CreateEmployee;
