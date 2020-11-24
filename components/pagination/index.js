import React from "react";
import { Button, Select } from "antd";

const { Option } = Select;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonsContainer = styled.div``;

const index = ({
  totalResults,
  resultsPerPage,
  currentPage,
  setResultsPerPage,
  setCurrentPage,
}) => {
  //configure what page numbers to display
  let pages = [];
  let totalPages = Math.ceil(totalResults / resultsPerPage);
  if (currentPage <= 4) {
    if (totalPages > 7) {
      for (let i = 1; i <= totalPages && i <= 5; i++) {
        pages.push(i);
      }
      pages.push("...");
      pages.push(totalPages);
    } else {
      for (let i = 1; i <= totalPages && i <= 7; i++) {
        pages.push(i);
      }
    }
  } else if (currentPage >= totalPages - 3) {
    if (totalPages > 7) {
      pages.push(1);
      pages.push("...");
      for (let i = totalPages - 5; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      for (let i = totalPages - 6; i <= totalPages; i++) {
        pages.push(i);
      }
    }
  } else {
    pages.push(1);
    pages.push("...");
    pages.push(currentPage - 2);
    pages.push(currentPage - 1);
    pages.push(currentPage);
    pages.push(currentPage + 1);
    pages.push(currentPage + 2);
    pages.push("...");
    pages.push(totalPages);
  }

  return (
    <Container>
      <ButtonsContainer>
        <Select
          defaultValue={resultsPerPage}
          style={{ width: 120 }}
          bordered={false}
          onChange={(event) => setResultsPerPage(event)}
        >
          <Option value={10}>10 per page</Option>
          <Option value={25}>25 per page</Option>
          <Option value={50}>50 per page</Option>
          <Option value={100}>100 per page</Option>
        </Select>
        <Button
          style={{ margin: "10px" }}
          disabled={!pages.includes(currentPage - 1)}
          onClick={() => {
            if (pages.includes(currentPage - 1)) {
              setCurrentPage(currentPage - 1);
            }
          }}
        >
          Prev
        </Button>
        {pages.map((page, index) => {
          if (page !== "...") {
            return (
              <Button
                key={index}
                type={currentPage === page ? "primary" : "default"}
                style={{ margin: "2px" }}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            );
          } else {
            return <Button key={index}>...</Button>;
          }
        })}

        <Button
          style={{ margin: "10px" }}
          disabled={!pages.includes(currentPage + 1)}
          onClick={() => {
            if (pages.includes(currentPage + 1)) {
              setCurrentPage(currentPage + 1);
            }
          }}
        >
          Next
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default index;
