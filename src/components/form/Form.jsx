import Button from "../button/Button";
import TextField from "../textField/TextField";

const Form = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Hello");
  };
  return (
    <form>
      <TextField type="text" id="firstName" label="First Name" />
      <TextField type="text" id="lastName" label="Last Name" />

      {/* DATE PICKER */}
      <TextField type="text" id="birthDate" label="Birth Date" />
      <TextField type="text" id="startDate" label="Start Date" />
      {/* ////// */}

      <div>
        <div>
          <TextField type="text" id="street" label="Street" />
          <TextField type="text" id="city" label="City" />
          <div>
            <label htmlFor="state" />
            <select id="state">
              <option>Alabama</option>
              <option>Alaska</option>
            </select>
          </div>
          <TextField type="number" id="zipCode" label="zipCode" />
        </div>
        <div>
          <label htmlFor="department" />
          <select id="department">
            <option>Alabama</option>
            <option>Alaska</option>
          </select>
        </div>
      </div>
      <Button handleClick={handleClick}>Save</Button>
    </form>
  );
};

export default Form;
