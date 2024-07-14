import "./CloseButton.css";

/**
 *
 * @param {Function} handleClick Callback function on click
 * @returns
 */
const CloseButton = ({ handleClick }) => {
  return (
    <button
      className="close-button"
      type="button"
      aria-label="Close button"
      onClick={handleClick}
    >
      X
    </button>
  );
};

export default CloseButton;
