import "./Button.css";
/**
 * @description Button component
 * @param handleClick handle click function
 * @returns
 */
const Button = ({ handleClick, children }) => {
  return (
    <button onClick={handleClick} className="button">
      {children}
    </button>
  );
};

export default Button;
