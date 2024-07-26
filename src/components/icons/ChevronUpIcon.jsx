/**
 * @description Chevron up icon component
 * @param {string} [className] component class name
 * @param {boolean} [ariaHidden] aria hidden attribute
 * @returns
 */
const ChevronUpIcon = ({ className, ariaHidden = false }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
      aria-hidden={ariaHidden}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 15.75 7.5-7.5 7.5 7.5"
      />
    </svg>
  );
};

export default ChevronUpIcon;
