import React from "react";

interface PaginationProps {
  onNext: () => void;
  onPrev: () => void;
  page: number;
  isLastPage: boolean;
}

const Pagination = ({
  onNext,
  onPrev,
  page,
  isLastPage,
}: PaginationProps): React.ReactElement => {
  return (
    <div className="flex flex-row">
      <button
        className="w-16 p-1 bg-gray-300 rounded hover:opacity-70"
        onClick={onPrev}
        disabled={page <= 1}
      >
        Prev
      </button>
      <span className="w-8 p-1 rounded bg-gray-100 mx-2 flex flex-row justify-center">
        {page}
      </span>
      <button
        className="w-16 p-1 bg-gray-300 rounded hover:opacity-70"
        onClick={onNext}
        disabled={isLastPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
