import { useRef, useState } from "react";
import CloseIcon from "../icons/CloseIcon";
import SearchIcon from "../icons/SearchIcon";
import "./Searchbar.css";
import { useDispatch } from "react-redux";
import { searchEmployee } from "../../features/table/tableSlice";

const Searchbar = ({ id, placeholder }) => {
  const [inputValue, setInputValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const handleSearch = (text) => {
    dispatch(searchEmployee(text));
  };

  const handleChange = (e) => {
    const value = e.target.value;

    setInputValue(value);
    handleSearch(value);

    if (value.length >= 1) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleClear = () => {
    setInputValue("");
    setIsVisible(false);
    dispatch(searchEmployee(""));
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="searchbar-container">
      <SearchIcon className="searchbar-icon" />
      <input
        ref={inputRef}
        type="text"
        id={id}
        value={inputValue}
        className="searchbar"
        onChange={handleChange}
        placeholder={placeholder}
      />
      {isVisible && (
        <button className="searchbar-button" onClick={handleClear}>
          <CloseIcon className="searchbar-icon" />
        </button>
      )}
    </div>
  );
};

export default Searchbar;
