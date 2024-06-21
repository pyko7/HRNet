import Button from "../button/Button";
import TextField from "../textField/TextField";
import "./Form.css";
import "../textField/TextField.css";
import Select from "../select/Select";

const Form = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Hello");
  };
  return (
    <form className="form">
      <TextField type="text" id="firstName" label="First Name" />
      <TextField type="text" id="lastName" label="Last Name" />

      {/* DATE PICKER */}
      <TextField type="text" id="birthDate" label="Birth Date" />
      <TextField type="text" id="startDate" label="Start Date" />
      {/* ////// */}

      <TextField type="text" id="street" label="Street" />
      <TextField type="text" id="city" label="City" />

      <Select id="state" label="State" options={["Alabama", "Alaska"]} />

      <TextField type="number" id="zipCode" label="zipCode" />

      <Select
        id="department"
        label="Department"
        options={["Alabama", "Alaska"]}
      />

      <Button handleClick={handleClick}>Save</Button>
    </form>
  );
};

export default Form;
