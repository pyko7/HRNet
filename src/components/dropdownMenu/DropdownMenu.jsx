import { useState } from "react";
import "./DropdownMenu.css";
import ChevronDownIcon from "../icons/ChevronDownIcon";

/**
 * @description Dropdown component
 * @param {string[]} options List of select options
 * @returns
 */
const DropdownMenu = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button
        type="button"
        className="dropdown-toggle"
        onClick={toggleDropdown}
      >
        <span>{selectedItem || "Select an item"}</span>
        <ChevronDownIcon aria-hidden="true" className="dropdown-icon" />
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((item, index) => (
            <li key={item.id ?? index} onClick={() => handleItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
