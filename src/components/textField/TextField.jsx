import "./TextField.css";

/**
 * Input component with its associated label.
 *
 * @param {string} id - The input's id.
 * @param {string} [type="text"] - The input's type.
 * @param {string} label - The input's label.
 * @param {string} value - The input's value.
 * @param {boolean} [readOnly=false] - If true, sets the input to read-only.
 * @param {function} [onChange] - Callback function to handle input change.
 * @param {React.Ref} [forwardedRef] - Ref forwarded to the input element.
 * @param {function} [onClick] - Callback function to handle input click.
 * @param {function} [onFocus] - Callback function to handle input focus.
 * @returns {React.FC}
 */
const TextField = ({
  id,
  type = "text",
  label,
  value,
  readOnly = false,
  onChange,
  forwardedRef,
  onClick,
  onFocus,
}) => {
  const handleChange = (event) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };
  return (
    <div className="textfield-label-container">
      {label && (
        <label htmlFor={id} className="label">
          {label}
        </label>
      )}
      <input
        ref={forwardedRef}
        type={type}
        id={id}
        className="textfield"
        value={value}
        readOnly={readOnly}
        onChange={handleChange}
        onClick={onClick}
        onFocus={onFocus}
      />
    </div>
  );
};

export default TextField;
