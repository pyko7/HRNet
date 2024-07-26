import { useState } from "react";
import { createPortal } from "react-dom";
import Button from "../button/Button";
import TextField from "../textField/TextField";
import DropdownMenu from "../dropdownMenu/DropdownMenu";
import ErrorMessage from "../errorMessage/ErrorMessage";
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
  const [errors, setErrors] = useState([]);

  const statesName = states.map((state) => state.name);
  const dispatch = useDispatch();

  const handleInputChange = (field, value) => {
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [field]: value,
    }));
  };

  const handleErrors = () => {
    let newErrors = {};

    for (const [key, value] of Object.entries(employee)) {
      if (!value) {
        newErrors[key] = "This field is required";
      }
    }

    setErrors(newErrors);

    for (const [key, value] of Object.entries(employee)) {
      if (!value) {
        newErrors[key] = "This field is required";
      }
    }
    return newErrors;
  };

  const handleClick = (e) => {
    e.preventDefault();
    const formErrors = handleErrors();

    if (Object.keys(formErrors).length === 0) {
      dispatch(setEmployees(employee));
      setVisible(true);
    }
    return;
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <>
      <form className="form">
        <div className="textfield-container">
          <TextField
            id="first-name"
            label="First Name"
            value={employee.firstName}
            onChange={(value) => handleInputChange("firstName", value)}
          />
          {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
        </div>

        <div className="textfield-container">
          <TextField
            id="last-name"
            label="Last Name"
            value={employee.lastName}
            onChange={(value) => handleInputChange("lastName", value)}
          />
          {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
        </div>

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

        <div className="textfield-container">
          <TextField
            id="street"
            label="Street"
            value={employee.street}
            onChange={(value) => handleInputChange("street", value)}
          />
          {errors.street && <ErrorMessage>{errors.street}</ErrorMessage>}
        </div>

        <div className="textfield-container">
          <TextField
            id="city"
            label="City"
            value={employee.city}
            onChange={(value) => handleInputChange("city", value)}
          />
          {errors.city && <ErrorMessage>{errors.city}</ErrorMessage>}
        </div>

        <div className="textfield-label-container">
          <label className="label" htmlFor="State">
            State
          </label>
          <DropdownMenu
            options={statesName}
            value={employee.state}
            onChange={(value) => handleInputChange("state", value)}
          />
          {errors.state && <ErrorMessage>{errors.state}</ErrorMessage>}
        </div>

        <div className="textfield-container">
          <TextField
            type="number"
            id="zip-code"
            label="Zip code"
            onChange={(value) => handleInputChange("zipCode", value)}
          />
          {errors.zipCode && <ErrorMessage>{errors.zipCode}</ErrorMessage>}
        </div>

        <div className="textfield-label-container">
          <label className="label" htmlFor="Department">
            Department
          </label>
          <DropdownMenu
            options={departments}
            value={employee.department}
            onChange={(value) => handleInputChange("department", value)}
          />
          {errors.department && <ErrorMessage>{errors.state}</ErrorMessage>}
        </div>

        <Button variant="contained" handleClick={handleClick}>
          Save
        </Button>
      </form>
      {visible &&
        createPortal(
          <Modal
            title="Employee successfully created"
            buttonName="Got it!"
            onClick={handleClose}
            onClose={handleClose}
          />,
          document.body
        )}
    </>
  );
};

export default Form;
