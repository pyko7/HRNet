import Button from "../button/Button";
import TextField from "../textField/TextField";
import Select from "../select/Select";
import { departments, states } from "../../utils/utils";
import "./Form.css";
import "../textField/TextField.css";

const Form = () => {
  const statesName = states.map((state) => state.name);
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Hello");
  };
  return (
    <form className="form">
      <TextField type="text" id="first-name" label="First Name" />
      <TextField type="text" id="last-name" label="Last Name" />

      {/* DATE PICKER */}
      <TextField type="text" id="date-of-birth" label="Birth Date" />
      <TextField type="text" id="start-date" label="Start Date" />
      {/* ////// */}

      <TextField type="text" id="street" label="Street" />
      <TextField type="text" id="city" label="City" />

      <Select id="state" label="State" options={statesName} />

      <TextField type="number" id="zip-code" label="Zip code" />

      <Select id="department" label="Department" options={departments} />

      <Button handleClick={handleClick}>Save</Button>
    </form>
  );
};

export default Form;
