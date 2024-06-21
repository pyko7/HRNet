import "./Select.css";
import "../textField/TextField.css";
/**
 * @description Select component
 * @param {string} id Select's id
 * @param {string} label Select's label
 * @param {string[]} options List of select options
 * @returns
 */
const Select = ({ label, id, options }) => {
  return (
    <div className="textfield-label-container">
      {label && (
        <label className="label" htmlFor={id}>
          {label}
        </label>
      )}
      <select className="select" id={id}>
        {options.map((option, idx) => (
          <option key={idx}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
