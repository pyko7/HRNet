import clsx from "clsx";

/**
 * @description Chevron down icon component
 * @param {string} [className] component class name
 * @param {boolean} [ariaHidden] aria hidden attribute
 * @returns
 */
const ChevronDownIcon = ({ className, ariaHidden }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={clsx("icon-base", className)}
      aria-hidden={ariaHidden}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

export default ChevronDownIcon;
