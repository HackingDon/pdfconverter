import React, { useState } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const PaginationStrap = () => {
  const [page, setPage] = useState(1);
  const [select, setSelect] = useState(1);
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: 500 }}
    >
      <Pagination size="lg">
        <PaginationItem disabled={select === 1}>
          <PaginationLink
            first
            onClick={() => {
              setSelect(1);
              setPage(1);
            }}
          />
        </PaginationItem>
        <PaginationItem disabled={select === 1}>
          <PaginationLink
            previous
            onClick={() => {
              setSelect((prev) => prev - 1);
              page === 1 ? setPage(1) : setPage((prev) => prev - 1);
            }}
          ></PaginationLink>
        </PaginationItem>
        <PaginationItem active={select === page}>
          <PaginationLink>{page}</PaginationLink>
        </PaginationItem>
        <PaginationItem
          onClick={() => setSelect(page + 1)}
          active={select === page + 1}
        >
          <PaginationLink>{page + 1}</PaginationLink>
        </PaginationItem>
        <PaginationItem
          onClick={() => setSelect(page + 2)}
          active={select === page + 2}
        >
          <PaginationLink>{page + 2}</PaginationLink>
        </PaginationItem>
        <PaginationItem disabled={page === 18}>
          <PaginationLink
            next
            onClick={() => {
              setSelect((prev) => prev + 1);
              setPage((prev) => prev + 1);
            }}
          ></PaginationLink>
        </PaginationItem>
        <PaginationItem disabled={page === 20}>
          <PaginationLink
            last
            onClick={() => {
              setSelect(20);
              setPage(18);
            }}
          />
        </PaginationItem>
      </Pagination>
    </div>
  );
};

export default PaginationStrap;
