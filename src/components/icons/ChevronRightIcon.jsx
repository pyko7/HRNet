import clsx from "clsx";

/**
 * @description Chevron right icon component
 * @param {string} [className] component class name
 * @param {boolean} [ariaHidden] aria hidden attribute
 * @returns
 */
const ChevronRightIcon = ({ className, ariaHidden }) => {
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
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
};

export default ChevronRightIcon;
