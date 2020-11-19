import React from "react";
import ReactPaginate from "react-paginate";
import { MainWrapper, Next, Previous } from "./Paginator.style";

interface IPaginator {
  pagesNumber: number;
  initialPage: number;
  handlePageChange: (index: { selected: number }) => void;
}

const Paginator: React.FC<IPaginator> = ({
  pagesNumber,
  initialPage,
  handlePageChange,
}) => {
  return (
    <MainWrapper>
      <ReactPaginate
        pageCount={pagesNumber}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        initialPage={initialPage}
        onPageChange={handlePageChange}
        containerClassName="container"
        previousLinkClassName="previous"
        disabledClassName="disabled"
        nextLinkClassName="next"
        activeLinkClassName="active"
        nextLabel={<Next />}
        previousLabel={<Previous />}
      />
    </MainWrapper>
  );
};

export default Paginator;
