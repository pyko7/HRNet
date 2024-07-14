import Button from "../button/Button";
import "./Modal.css";
// UPDATE CLOSE BUTTON ICON TO SVG COMPONENT

/**
 * @description Modal component
 * @param {string} title Title of the modal
 * @param {string} [subtitle] Subtitle of the modal
 * @param {Function} onClose Callback function to close the modal
 * @returns
 */
const Modal = ({ title, subtitle, onClose }) => {
  return (
    <div className="modal-container">
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal">
        <div className="modal-header">
          <span className="modal-text modal-title">{title}</span>
          <Button variant="standard">X</Button>
        </div>
        <span className="modal-text modal-subtitle">{subtitle}</span>
      </div>
    </div>
  );
};

export default Modal;
