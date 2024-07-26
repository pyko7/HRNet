import { useState } from "react";
import DatePicker from "react-datepicker";
import ForwardedTextField from "./ForwardedTextField";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";

/**
 * CustomDatePicker component with its associated label.
 *
 * @param {string} id - The input's id.
 * @param {string} label - The input's label.
 * @returns {React.FC}
 */
const CustomDatePicker = ({ id, label }) => {
  const [date, setDate] = useState(new Date());

  const handleSelect = (date) => {
    setDate(date);
  };

  const handleChange = (date) => {
    setDate(date);
  };

  return (
    <div className="datepicker-container">
      <DatePicker
        selected={date}
        onSelect={handleSelect}
        onChange={handleChange}
        dateFormat="dd/MM/yyyy"
        calendarStartDay={1}
        popperPlacement="bottom-start"
        customInput={
          <ForwardedTextField
            objectId={id}
            label={label}
            readOnly
            value={date.toLocaleDateString()}
          />
        }
      />
    </div>
  );
};

export default CustomDatePicker;
