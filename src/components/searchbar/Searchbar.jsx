import { useRef, useState } from "react";
import { useTableContext } from "../../context/TableContext";
import CloseIcon from "../icons/CloseIcon";
import SearchIcon from "../icons/SearchIcon";
import "./Searchbar.css";

const Searchbar = ({ placeholder }) => {
  const { searchTableData } = useTableContext();
  const [inputValue, setInputValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const inputRef = useRef(null);

  const handleSearch = (text) => {
    searchTableData(text);
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
    searchTableData("");

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
