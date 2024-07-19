import { useTableContext } from "../../context/TableContext";
import "./Select.css";

const Select = ({ options }) => {
  const { originalTableData, filterByLengthTableData } = useTableContext();

  const handleChange = (event) => {
    const tableLength = event.target.value;
    filterByLengthTableData(tableLength, originalTableData);
  };

  return (
    <div className="select-wrapper">
      <span>Show</span>
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
      <span>entries</span>
    </div>
  );
};

export default Select;
