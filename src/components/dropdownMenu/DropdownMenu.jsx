import { useEffect, useRef, useState } from "react";
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
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const itemRefs = useRef([]);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
    setFocusedIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (!isOpen && e.key === "Enter") {
      setIsOpen(true);
      setFocusedIndex(0);
    } else if (isOpen) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setFocusedIndex((prevIndex) =>
          prevIndex < options.length - 1 ? prevIndex + 1 : 0
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setFocusedIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : options.length - 1
        );
      } else if (e.key === "Enter" && focusedIndex >= 0) {
        handleItemClick(options[focusedIndex]);
      } else if (e.key === "Escape" || e.key === "Tab") {
        e.preventDefault();
        setIsOpen(false);
      }
    }
  };

  useEffect(() => {
    if (isOpen && focusedIndex >= 0 && itemRefs.current[focusedIndex]) {
      itemRefs.current[focusedIndex].focus();
    }
  }, [isOpen, focusedIndex]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        type="button"
        className="dropdown-toggle"
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
      >
        <span>{selectedItem || "Select an item"}</span>
        <ChevronDownIcon aria-hidden="true" className="dropdown-icon" />
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((item, index) => (
            <li
              key={item.id ?? index}
              ref={(el) => (itemRefs.current[index] = el)}
              tabIndex={-1}
              onClick={() => handleItemClick(item)}
              onKeyDown={handleKeyDown}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
