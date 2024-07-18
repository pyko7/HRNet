import Button from "../button/Button";
import CloseIcon from "../icons/CloseIcon";
import "./Modal.css";

/**
 * @description Modal component
 * @param {string} title Title of the modal
 * @param {string} [subtitle] Subtitle of the modal
 * @param {string} [buttonName] Name of the button
 * @param {Function} onClose Callback function to close the modal
 * @param {Function} onClick Callback function on save button click
 * @returns
 */
const Modal = ({ title, subtitle, buttonName, onClose, onClick }) => {
  return (
    <div className="modal-container">
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal">
        <div className="modal-header">
          <span className="modal-text modal-title">{title}</span>
          <Button handleClick={onClose} variant="standard">
            <CloseIcon className="modal-close-icon" />
          </Button>
        </div>
        <span className="modal-text modal-subtitle">{subtitle}</span>
      </div>
      {buttonName && <button onClick={onClick}>{buttonName}</button>}
    </div>
  );
};

export default Modal;
