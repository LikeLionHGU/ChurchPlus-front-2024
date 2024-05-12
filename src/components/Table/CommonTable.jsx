import React from "react";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  margin: 0 auto;
  border-spacing: 0;
`;

const TableHeaderColumn = styled.td`
  padding: 0;
  font-size: 15px;
  padding-bottom: 8px;
  width: 355px;
`;

const CommonTable = (props) => {
  const { headersName, children } = props;

  return (
    <Table>
      <thead>
        <tr>
          {headersName.map((item, index) => {
            return <TableHeaderColumn key={index}>{item}</TableHeaderColumn>;
          })}
        </tr>
      </thead>

      <tbody>{children}</tbody>
    </Table>
  );
};

export default CommonTable;
