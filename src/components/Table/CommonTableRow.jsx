import React from "react";
import styled from "styled-components";

const TableRow = styled.tr`
  font-family: "GmarketSansLight";
  &:hover {
    background-color: #e7f0ff;
    cursor: pointer;
  }
`;

const CommonTableRow = ({ children }) => {
  return <TableRow>{children}</TableRow>;
};

export default CommonTableRow;
