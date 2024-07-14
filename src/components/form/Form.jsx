import { useState } from "react";
import { createPortal } from "react-dom";
import Button from "../button/Button";
import TextField from "../textField/TextField";
import DropdownMenu from "../dropdownMenu/DropdownMenu";
import Modal from "../modal/Modal";
import { departments, states } from "../../utils/utils";
import "./Form.css";
import "../textField/TextField.css";

const Form = () => {
  const [visible, setVisible] = useState(false);
  const statesName = states.map((state) => state.name);
  const handleClick = (e) => {
    e.preventDefault();
    setVisible(true);
    console.log("Hello");
  };
  const handleClose = () => {
    setVisible(false);
  };
  return (
    <>
      <form className="form">
        <TextField type="text" id="first-name" label="First Name" />
        <TextField type="text" id="last-name" label="Last Name" />

        {/* DATE PICKER */}
        <TextField type="text" id="date-of-birth" label="Birth Date" />
        <TextField type="text" id="start-date" label="Start Date" />
        {/* ////// */}

        <TextField type="text" id="street" label="Street" />
        <TextField type="text" id="city" label="City" />

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

        <Button handleClick={handleClick}>Save</Button>
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
