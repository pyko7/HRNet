import { useDispatch } from "react-redux";
import "./Select.css";
import { filterByLength } from "../../features/table/tableSlice";

const Select = ({ options }) => {
  const dispatch = useDispatch();

  const handleClick = (tableLength) => {
    dispatch(filterByLength(tableLength));
  };
  return (
    <div className="select-wrapper">
      <span>Show</span>
      <select className="custom-select" name="length" id="table-length">
        {options.map((option, idx) => (
          <option value={option} key={idx} onClick={() => handleClick(option)}>
            {option}
          </option>
        ))}
      </select>
      <span>entries</span>
    </div>
  );
};

export default Select;
