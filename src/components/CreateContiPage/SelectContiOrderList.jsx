import React, { useState } from "react";
import Table from "../Table/CommonTable";
import TableColumn from "../Table/CommonTableColumn";
import TableRow from "../Table/CommonTableRow";

const SelectContiOrderList = ({ sheetMusicData }) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleCheckboxChange = (index) => {
    setSelectedRows((prevSelectedRows) => {
      if (prevSelectedRows.includes(index)) {
        return prevSelectedRows.filter((i) => i !== index);
      } else {
        return [...prevSelectedRows, index];
      }
    });
  };

  return (
    <>
      <Table headersName={["이름", "곡 버전", "Key"]}>
        {sheetMusicData.map((sheetMusic, index) => (
          <TableRow
            hoverColor={"#f1f1f1"}
            key={index}
            selected={selectedRows.includes(index)}
          >
            <TableColumn>
              <input
                type="checkbox"
                checked={selectedRows.includes(index)}
                onChange={() => handleCheckboxChange(index)}
              />
              {sheetMusic.title}
            </TableColumn>
            <TableColumn>{sheetMusic.version}버전</TableColumn>
            <TableColumn>{sheetMusic.key}</TableColumn>
          </TableRow>
        ))}
      </Table>
    </>
  );
};

export default SelectContiOrderList;
