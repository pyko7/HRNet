import "./Button.css";
/**
 * @description Button component
 * @param handleClick handle click function
 * @param children React children props
 * @param {string} [variant] button variants (contained or standard)
 * @param {string} [className] custom classes
 * @param {string} [type] button type
 * @returns
 */
const Button = ({
  handleClick,
  children,
  variant = "contained",
  className = undefined,
  type = "button",
}) => {
  const buttonStyle =
    variant === "contained"
      ? "button button-contained"
      : "button button-standard";
  return (
    <button
      type={type}
      onClick={handleClick}
      className={className ?? buttonStyle}
    >
      {children}
    </button>
  );
};

export default Button;
