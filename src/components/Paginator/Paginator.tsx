import React from "react";
import ReactPaginate from "react-paginate";
import { MainWrapper, Next, Previous } from "./Paginator.style";

interface IPaginator {
  pagesNumber: number;
  initialPage: number;
  currentPage: number;
  handlePageChange: (index: { selected: number }) => void;
}

const Paginator: React.FC<IPaginator> = ({
  pagesNumber,
  currentPage,
  initialPage,
  handlePageChange,
}) => {
  return (
    <MainWrapper>
      <ReactPaginate
        disableInitialCallback={true}
        pageCount={pagesNumber}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        initialPage={initialPage - 1}
        onPageChange={handlePageChange}
        containerClassName="container"
        previousLinkClassName="previous"
        disabledClassName="disabled"
        nextLinkClassName="next"
        activeLinkClassName="active"
        nextLabel={<Next />}
        previousLabel={<Previous />}
        forcePage={currentPage - 1}
      />
    </MainWrapper>
  );
};

export default Paginator;
