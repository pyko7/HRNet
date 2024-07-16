import { useState } from "react";
import { createPortal } from "react-dom";
import Button from "../button/Button";
import TextField from "../textField/TextField";
import DropdownMenu from "../dropdownMenu/DropdownMenu";
import Modal from "../modal/Modal";
import { departments, states } from "../../utils/utils";
import "./Form.css";
import "../textField/TextField.css";
import CustomDatePicker from "../datePicker/DatePicker";

/**
 * @description Create employee form component
 * @returns {React.FC}
 */
const Form = () => {
  const [visible, setVisible] = useState(false);
  const statesName = states.map((state) => state.name);

  const handleClick = (e) => {
    e.preventDefault();
    setVisible(true);
  };
  const handleClose = () => {
    setVisible(false);
  };

  return (
    <>
      <form className="form">
        <TextField id="first-name" label="First Name" />
        <TextField id="last-name" label="Last Name" />

        <CustomDatePicker id="date-of-birth" label="Birth Date" />
        <CustomDatePicker id="start-date" label="Start Date" />

        <TextField id="street" label="Street" />
        <TextField id="city" label="City" />

        <div className="textfield-label-container">
          <label className="label" htmlFor="State">
            State
          </label>
          <DropdownMenu options={statesName} />
        </div>

        <TextField type="number" id="zip-code" label="Zip code" />

        <div className="textfield-label-container">
          <label className="label" htmlFor="Department">
            Department
          </label>
          <DropdownMenu options={departments} />
        </div>

        <Button variant="contained" handleClick={handleClick}>
          Save
        </Button>
      </form>
      {visible &&
        createPortal(
          <Modal title="modal title" onClose={handleClose} />,
          document.body
        )}
    </>
  );
};

export default Form;
