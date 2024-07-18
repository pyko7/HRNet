import { Link } from "react-router-dom";
import { lengthNumber } from "../../utils/utils";
import Layout from "../../components/layout/Layout";
import Table from "../../components/table/Table";
import Searchbar from "../../components/searchbar/Searchbar";
import Select from "../../components/select/Select";
import "./Employees.css";

const body = [
  {
    firstName: "John",
    lastName: "Doe",
    startDate: "2022-01-15",
    department: "Engineering",
    dateOfBirth: "1990-04-23",
    street: "123 Maple Street",
    city: "Springfield",
    state: "IL",
    zipCode: "62704",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    startDate: "2021-09-01",
    department: "Marketing",
    dateOfBirth: "1985-08-12",
    street: "456 Oak Avenue",
    city: "Madison",
    state: "WI",
    zipCode: "53703",
  },
  {
    firstName: "Michael",
    lastName: "Johnson",
    startDate: "2020-06-30",
    department: "Sales",
    dateOfBirth: "1982-12-17",
    street: "789 Pine Road",
    city: "Austin",
    state: "TX",
    zipCode: "73301",
  },
  {
    firstName: "Emily",
    lastName: "Davis",
    startDate: "2019-03-20",
    department: "HR",
    dateOfBirth: "1995-02-28",
    street: "101 Birch Lane",
    city: "Denver",
    state: "CO",
    zipCode: "80201",
  },
  {
    firstName: "William",
    lastName: "Brown",
    startDate: "2018-11-10",
    department: "Finance",
    dateOfBirth: "1979-07-15",
    street: "202 Cedar Court",
    city: "Seattle",
    state: "WA",
    zipCode: "98101",
  },
  {
    firstName: "William",
    lastName: "Brown",
    startDate: "2018-11-10",
    department: "Finance",
    dateOfBirth: "1979-07-15",
    street: "202 Cedar Court",
    city: "Seattle",
    state: "WA",
    zipCode: "98101",
  },
  {
    firstName: "William",
    lastName: "Brown",
    startDate: "2018-11-10",
    department: "Finance",
    dateOfBirth: "1979-07-15",
    street: "202 Cedar Court",
    city: "Seattle",
    state: "WA",
    zipCode: "98101",
  },
  {
    firstName: "William",
    lastName: "Brown",
    startDate: "2018-11-10",
    department: "Finance",
    dateOfBirth: "1979-07-15",
    street: "202 Cedar Court",
    city: "Seattle",
    state: "WA",
    zipCode: "98101",
  },
  {
    firstName: "William",
    lastName: "Brown",
    startDate: "2018-11-10",
    department: "Finance",
    dateOfBirth: "1979-07-15",
    street: "202 Cedar Court",
    city: "Seattle",
    state: "WA",
    zipCode: "98101",
  },
  {
    firstName: "William",
    lastName: "Brown",
    startDate: "2018-11-10",
    department: "Finance",
    dateOfBirth: "1979-07-15",
    street: "202 Cedar Court",
    city: "Seattle",
    state: "WA",
    zipCode: "98101",
  },
  {
    firstName: "William",
    lastName: "Brown",
    startDate: "2018-11-10",
    department: "Finance",
    dateOfBirth: "1979-07-15",
    street: "202 Cedar Court",
    city: "Seattle",
    state: "WA",
    zipCode: "98101",
  },
  {
    firstName: "William",
    lastName: "Brown",
    startDate: "2018-11-10",
    department: "Finance",
    dateOfBirth: "1979-07-15",
    street: "202 Cedar Court",
    city: "Seattle",
    state: "WA",
    zipCode: "98101",
  },
  {
    firstName: "William",
    lastName: "Brown",
    startDate: "2018-11-10",
    department: "Finance",
    dateOfBirth: "1979-07-15",
    street: "202 Cedar Court",
    city: "Seattle",
    state: "WA",
    zipCode: "98101",
  },
  {
    firstName: "William",
    lastName: "Brown",
    startDate: "2018-11-10",
    department: "Finance",
    dateOfBirth: "1979-07-15",
    street: "202 Cedar Court",
    city: "Seattle",
    state: "WA",
    zipCode: "98101",
  },
  {
    firstName: "William",
    lastName: "Brown",
    startDate: "2018-11-10",
    department: "Finance",
    dateOfBirth: "1979-07-15",
    street: "202 Cedar Court",
    city: "Seattle",
    state: "WA",
    zipCode: "98101",
  },
  {
    firstName: "William",
    lastName: "Brown",
    startDate: "2018-11-10",
    department: "Finance",
    dateOfBirth: "1979-07-15",
    street: "202 Cedar Court",
    city: "Seattle",
    state: "WA",
    zipCode: "98101",
  },
];

const Employees = () => {
  return (
    <Layout title="Current Employees">
      <div className="employee-page-wrapper">
        <Link to="/" className="link-button">
          Home
        </Link>
        <div className="searchbar-tools-container">
          <Select options={lengthNumber} />
          <Searchbar />
        </div>
        <div id="employee-div" className="container table-container">
          <Table body={body} />
        </div>
      </div>
    </Layout>
  );
};

export default Employees;
