import { useDispatch } from "react-redux";
import { sortEmployees } from "../../features/employees/employeesSlice";
import ChevronUpIcon from "../icons/ChevronUpIcon";
import ChevronDownIcon from "../icons/ChevronDownIcon";
import Button from "../button/Button";
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
      <Button variant="standard" handleClick={handleSortAsc}>
        <ChevronUpIcon className="sort-button" />
      </Button>
      <Button variant="standard" handleClick={handleSortDesc}>
        <ChevronDownIcon className="sort-button" />
      </Button>
    </span>
  );
};

export default TableSortButtons;
