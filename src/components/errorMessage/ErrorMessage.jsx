import "./ErrorMessage.css";

/**
 * @param children React children props
 * @returns
 */
const ErrorMessage = ({ children }) => {
  return <span className="error-message">{children}</span>;
};

export default ErrorMessage;
