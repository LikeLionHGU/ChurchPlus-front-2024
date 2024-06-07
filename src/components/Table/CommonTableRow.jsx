// import React from "react";
// import styled from "styled-components";

// const TableRow = styled.tr`
//   font-family: "GmarketSansLight";
//   background-color: ${(props) => (props.selected ? "#e5e5e5" : "transparent")};
//   &:hover {
//     background-color: ${(props) =>
//       props.selected ? "#e5e5e5" : props.hoverColor || "#e7f0ff"};
//     cursor: pointer;
//   }
// `;

// const CommonTableRow = ({ children, hoverColor, selected, onClick }) => {
//   const handleClick = () => {
//     console.log("Clicked on TableRow in CommonTableRow");
//     if (onClick) {
//       onClick();
//     }
//   };

//   return (
//     <TableRow hoverColor={hoverColor} selected={selected} onClick={handleClick}>
//       {children}
//     </TableRow>
//   );
// };

// export default CommonTableRow;

import React from "react";
import styled from "styled-components";

const TableRow = styled.tr`
  font-family: "GmarketSansLight";
  background-color: ${(props) => (props.selected ? "#e5e5e5" : "transparent")};
  &:hover {
    background-color: ${(props) =>
      props.selected ? "#e5e5e5" : props.hoverColor || "#e7f0ff"};
    cursor: pointer;
  }
`;

const CommonTableRow = ({ children, hoverColor, selected, onClick }) => {
  const handleClick = () => {
    console.log("Clicked on TableRow in CommonTableRow");
    if (onClick) {
      onClick();
    }
  };

  return (
    <TableRow hoverColor={hoverColor} selected={selected} onClick={handleClick}>
      {children}
    </TableRow>
  );
};

export default CommonTableRow;
