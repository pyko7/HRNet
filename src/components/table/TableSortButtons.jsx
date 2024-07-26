import ChevronUpIcon from "../icons/ChevronUpIcon";
import ChevronDownIcon from "../icons/ChevronDownIcon";
import Button from "../button/Button";
import { useTableContext } from "../../context/TableContext";
import "./Table.css";

/**
 * @description Buttons used to sort data
 * @param {string} columnKey Key/name of columns
 * @returns
 */
const TableSortButtons = ({ columnKey }) => {
  const { sortTableData } = useTableContext();

  const handleSortAsc = () => {
    const sortConfig = { key: columnKey, direction: "asc" };
    sortTableData(sortConfig);
  };

  const handleSortDesc = () => {
    const sortConfig = { key: columnKey, direction: "desc" };
    sortTableData(sortConfig);
  };

  return (
    <span className="sort-button-container">
      <Button
        ariaLabel="sort ascending"
        variant="standard"
        handleClick={handleSortAsc}
      >
        <ChevronUpIcon className="sort-button" ariaHidden={true} />
      </Button>
      <Button
        ariaLabel="sort descending"
        variant="standard"
        handleClick={handleSortDesc}
      >
        <ChevronDownIcon className="sort-button" ariaHidden={true} />
      </Button>
    </span>
  );
};

export default TableSortButtons;
