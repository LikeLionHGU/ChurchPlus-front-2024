import React from "react";
import styled from "styled-components";

const TableColumn = styled.td`
  padding-top: 21px;
  padding-bottom: 19px;
  border-bottom: 0.9px solid #a6a6a6;

  img {
    vertical-align: middle;
    margin-right: 20px;
  }
`;

const CommonTableColumn = ({ children }) => {
  return <TableColumn>{children}</TableColumn>;
};

export default CommonTableColumn;
