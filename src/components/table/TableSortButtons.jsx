import { useDispatch } from "react-redux";
import { sortEmployees } from "../../features/table/tableSlice";
import ChevronUpIcon from "../icons/ChevronUpIcon";
import ChevronDownIcon from "../icons/ChevronDownIcon";
import SortButton from "../sortButton/SortButton";
import "./Table.css";

const TableSortButtons = ({ columnKey }) => {
  const dispatch = useDispatch();

  const handleSortAsc = () => {
    dispatch(sortEmployees({ key: columnKey, direction: "asc" }));
  };

  const handleSortDesc = () => {
    dispatch(sortEmployees({ key: columnKey, direction: "desc" }));
  };

  return (
    <span className="sort-button-container">
      <SortButton handleClick={handleSortAsc}>
        <ChevronUpIcon className="sort-button" />
      </SortButton>
      <SortButton handleClick={handleSortDesc}>
        <ChevronDownIcon className="sort-button" />
      </SortButton>
    </span>
  );
};

export default TableSortButtons;
