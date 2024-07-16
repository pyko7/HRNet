import { forwardRef } from "react";
import TextField from "../textField/TextField";

/**
 * ForwardedTextField component that forwards its ref to the TextField component.
 *
 * @param {Object} props - The component props.
 * @param {React.Ref} ref - The ref to be forwarded to the TextField component.
 * @returns {React.FC}
 */
const ForwardedTextField = forwardRef((props, ref) => (
  <TextField {...props} forwardedRef={ref} />
));

ForwardedTextField.displayName = "ForwardedTextField";

export default ForwardedTextField;
