import { useTableContext } from "../../context/TableContext";
import "./Select.css";

/**
 * @description Select component
 * @param {string[]} options Select's options
 * @returns
 */
const Select = ({ options }) => {
  const { originalTableData, filterByLengthTableData } = useTableContext();

  const handleChange = (event) => {
    const tableLength = event.target.value;
    filterByLengthTableData(tableLength, originalTableData);
  };

  return (
    <div className="select-wrapper">
      <label htmlFor="table-length">Show</label>
      <select
        className="custom-select"
        name="length"
        id="table-length"
        onChange={(e) => handleChange(e)}
      >
        {options.map((option, idx) => (
          <option value={option} key={idx}>
            {option}
          </option>
        ))}
      </select>
      <label htmlFor="table-length">entries</label>
    </div>
  );
};

export default Select;
