import { useEffect, useState } from "react";
import clsx from "clsx";
import { useTableContext } from "../../context/TableContext";
import Button from "../button/Button";
import ChevronLeftIcon from "../icons/ChevronLeftIcon";
import ChevronRightIcon from "../icons/ChevronRightIcon";

const TablePagination = () => {
  const { originalTableData, tableDataLength, filterByLengthTableData } =
    useTableContext();
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const paginationLength =
    tableDataLength && Math.ceil(originalTableData.length / tableDataLength);

  const pagination = Array.from(Array(paginationLength).keys());

  const handleClick = (idx) => {
    const data = originalTableData.slice(tableDataLength * idx);
    const newStartIndex = idx * tableDataLength;
    let newEndIndex = newStartIndex + tableDataLength;

    newEndIndex =
      newEndIndex > originalTableData.length
        ? originalTableData.length
        : newEndIndex;
    setStartIndex(newStartIndex);
    setEndIndex(newEndIndex);

    setCurrentIndex(idx);
    filterByLengthTableData(tableDataLength, data);
  };

  const handleNextClick = () => {
    handleClick(currentIndex + 1);
  };

  const handlePreviousClick = () => {
    handleClick(currentIndex - 1);
  };

  useEffect(() => {
    setStartIndex(1);
    setEndIndex(tableDataLength);
  }, [tableDataLength]);

  return (
    <div className="table-pagination-container">
      <span className="pagination-label">
        {startIndex} to {endIndex} of {originalTableData.length} entries
      </span>
      <div className="pagination-inner-container">
        <Button
          variant="standard"
          disabled={currentIndex === 0}
          handleClick={handlePreviousClick}
        >
          <ChevronLeftIcon />
        </Button>
        {pagination.map((el, idx) => (
          <span
            className={clsx(
              "pagination-number",
              currentIndex === idx && "pagination-number-active"
            )}
            key={idx}
            onClick={() => handleClick(idx)}
          >
            {idx + 1}
          </span>
        ))}
        <Button
          variant="standard"
          disabled={currentIndex === pagination.length - 1}
          handleClick={handleNextClick}
        >
          <ChevronRightIcon />
        </Button>
      </div>
    </div>
  );
};

export default TablePagination;
