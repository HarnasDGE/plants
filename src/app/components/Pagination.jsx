import ArrowIcon from "../assets/icons/arrowSecond.svg";

import { Button } from "./Button";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="w-full flex justify-center gap-4 mt-12">
      {currentPage > 1 && (
        <Button
          type="icon"
          color="second"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          <ArrowIcon className={currentPage === 1 ? "opacity-50" : ""} />
        </Button>
      )}
      {[...Array(totalPages)].map((_, index) => (
        <Button
          key={index}
          color={currentPage === index + 1 ? "primary" : "second"}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </Button>
      ))}
      {currentPage < totalPages && (
        <Button
          type="icon"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          <ArrowIcon
            className={`rotate-180 ${
              currentPage === totalPages ? "opacity-50" : ""
            }`}
          />
        </Button>
      )}
    </div>
  );
};
