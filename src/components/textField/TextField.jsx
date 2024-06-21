import "./TextField.css";
/**
 * @description Input component with it associated label
 * @param {string} id Input's id
 * @param {string} type Input's type
 * @param {string} label Input's label
 * @returns
 */
const TextField = ({ id, type, label }) => {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="label">
          {label}
        </label>
      )}
      <input type={type} id={id} className={"textfield"} />
    </div>
  );
};

export default TextField;
