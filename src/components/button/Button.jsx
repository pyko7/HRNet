import "./Button.css";
const Button = ({ handleClick, children }) => {
  return (
    <button onClick={handleClick} className="button">
      {children}
    </button>
  );
};

export default Button;
