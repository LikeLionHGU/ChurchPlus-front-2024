import React from "react";
import styled from "styled-components";

const TableRow = styled.tr`
  font-family: "GmarketSansLight";
  &:hover {
    background-color: ${(props) => props.hoverColor || "#e7f0ff"};
    cursor: pointer;
  }
`;

const CommonTableRow = ({ children, hoverColor }) => {
  return <TableRow hoverColor={hoverColor}>{children}</TableRow>;
};

export default CommonTableRow;
