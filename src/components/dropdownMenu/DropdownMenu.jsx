import { useEffect, useRef, useState } from "react";
import ChevronDownIcon from "../icons/ChevronDownIcon";
import "./DropdownMenu.css";

/**
 * @description Dropdown component
 * @param {string[]} options List of select options
 * @param {string} value The selected value
 * @param {function} onChange Callback function to handle value change
 * @returns
 */
const DropdownMenu = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const itemRefs = useRef([]);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    if (onChange) {
      onChange(item);
    }
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
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls="dropdown-list"
        aria-labelledby="dropdown-button"
        className="dropdown-toggle"
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
      >
        <span>{value || "Select an item"}</span>
        <ChevronDownIcon ariaHidden={true} className="dropdown-icon" />
      </button>
      {isOpen && (
        <ul
          id="dropdown-list"
          role="listbox"
          className="dropdown-menu"
          aria-labelledby="dropdown-button"
          aria-activedescendant={`dropdown-item-${focusedIndex}`}
        >
          {options.map((item, index) => (
            <li
              key={item.id ?? index}
              id={`dropdown-item-${index}`}
              role="option"
              ref={(el) => (itemRefs.current[index] = el)}
              tabIndex={-1}
              aria-selected={index === focusedIndex}
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
