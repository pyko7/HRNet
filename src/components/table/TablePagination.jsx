import { useState } from "react";
import { useTableContext } from "../../context/TableContext";
import Button from "../button/Button";

const TablePagination = () => {
  const { originalTableData, tableDataLength, filterByLengthTableData } =
    useTableContext();
  const [currentIndex, setCurrentIndex] = useState(0);

  const paginationLength =
    tableDataLength && Math.ceil(originalTableData.length / tableDataLength);

  const pagination = Array.from(Array(paginationLength).keys());

  const handleClick = (idx) => {
    const data = originalTableData.slice(tableDataLength * idx);
    setCurrentIndex(idx);
    filterByLengthTableData(tableDataLength, data);
  };

  const handleNextClick = () => {
    handleClick(currentIndex + 1);
  };

  const handlePreviousClick = () => {
    handleClick(currentIndex - 1);
  };

  return (
    <div className="table-pagination-container">
      <Button
        disabled={currentIndex === 0}
        handleClick={handlePreviousClick}
        className="pagination-button"
      >
        Previous
      </Button>
      {pagination.map((el, idx) => (
        <span
          className={
            currentIndex !== idx
              ? "pagination-number"
              : "pagination-number-active"
          }
          key={idx}
          onClick={() => handleClick(idx)}
        >
          {idx + 1}
        </span>
      ))}
      <Button
        disabled={currentIndex === pagination.length - 1}
        className="pagination-button"
        handleClick={handleNextClick}
      >
        Next
      </Button>
    </div>
  );
};

export default TablePagination;
