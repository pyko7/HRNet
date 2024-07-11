import "./SortButton.css";

const SortButton = ({ children, handleClick }) => {
  return (
    <button type="button" onClick={handleClick} className="sort-button-base">
      {children}
    </button>
  );
};

export default SortButton;
