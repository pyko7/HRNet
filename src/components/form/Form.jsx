import { useState } from "react";
import { createPortal } from "react-dom";
import Button from "../button/Button";
import TextField from "../textField/TextField";
import DropdownMenu from "../dropdownMenu/DropdownMenu";
import Modal from "../modal/Modal";
import { departments, emptyEmployeeData, states } from "../../utils/utils";
import CustomDatePicker from "../datePicker/DatePicker";
import { useDispatch } from "react-redux";
import { setEmployees } from "../../features/employees/employeesSlice";
import "./Form.css";
import "../textField/TextField.css";

/**
 * @description Create employee form component
 * @returns {React.FC}
 */
const Form = () => {
  const [visible, setVisible] = useState(false);
  const [employee, setEmployee] = useState(emptyEmployeeData);
  const statesName = states.map((state) => state.name);
  const dispatch = useDispatch();

  const handleInputChange = (field, value) => {
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [field]: value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setEmployees(employee));
    setVisible(true);
  };
  const handleClose = () => {
    setVisible(false);
  };

  return (
    <>
      <form className="form">
        <TextField
          id="first-name"
          label="First Name"
          value={employee.firstName}
          onChange={(value) => handleInputChange("firstName", value)}
        />
        <TextField
          id="last-name"
          label="Last Name"
          value={employee.lastName}
          onChange={(value) => handleInputChange("lastName", value)}
        />

        <CustomDatePicker
          id="date-of-birth"
          label="Birth Date"
          value={employee.birthDate}
          onChange={(value) => handleInputChange("birthDate", value)}
        />
        <CustomDatePicker
          id="start-date"
          label="Start Date"
          value={employee.startDate}
          onChange={(value) => handleInputChange("startDate", value)}
        />

        <TextField
          id="street"
          label="Street"
          value={employee.street}
          onChange={(value) => handleInputChange("street", value)}
        />
        <TextField
          id="city"
          label="City"
          value={employee.city}
          onChange={(value) => handleInputChange("city", value)}
        />

        <div className="textfield-label-container">
          <label className="label" htmlFor="State">
            State
          </label>
          <DropdownMenu
            options={statesName}
            value={employee.state}
            onChange={(value) => handleInputChange("state", value)}
          />
        </div>

        <TextField
          type="number"
          id="zip-code"
          label="Zip code"
          onChange={(value) => handleInputChange("zipCode", value)}
        />

        <div className="textfield-label-container">
          <label className="label" htmlFor="Department">
            Department
          </label>
          <DropdownMenu
            options={departments}
            value={employee.department}
            onChange={(value) => handleInputChange("department", value)}
          />
        </div>

        <Button variant="contained" handleClick={handleClick}>
          Save
        </Button>
      </form>
      {visible &&
        createPortal(
          <Modal title="Employee successfully created" onClose={handleClose} />,
          document.body
        )}
    </>
  );
};

export default Form;
