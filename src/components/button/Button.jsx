import "./Button.css";
/**
 * @description Button component
 * @param handleClick handle click function
 * @param children React children props
 * @param {string} [name] button name
 * @param {string} [ariaLabel] aria label attribute
 * @param {string} [variant] button variants (contained or standard)
 * @param {string} [className] custom classes
 * @param {string} [type] button type
 * @param {string} [dataCy] - Cypress attribute
 * @returns
 */
const Button = ({
  handleClick,
  children,
  name = "",
  variant = "contained",
  className = undefined,
  type = "button",
  disabled = false,
  ariaLabel = "",
  dataCy = "",
}) => {
  const buttonStyle =
    variant === "contained"
      ? "button button-contained"
      : "button button-standard";
  return (
    <button
      name={name}
      disabled={disabled}
      type={type}
      onClick={handleClick}
      className={className ?? buttonStyle}
      aria-label={ariaLabel}
      data-cy={dataCy}
    >
      {children}
    </button>
  );
};

export default Button;
