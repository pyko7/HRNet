import "./TextField.css";
/**
 * @description Input component with it associated label
 * @param {string} id Input's id
 * @param {string} type Input's type
 * @param {string} label Input's label
 * @param {string} className Input's className
 * @returns
 */
const TextField = ({ id, type, label, className }) => {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input type={type} id={id} className={`textfield ${className}`} />
    </div>
  );
};

export default TextField;
