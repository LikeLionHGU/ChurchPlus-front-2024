import React from "react";
import Table from "../Table/CommonTable";
import TableColumn from "../Table/CommonTableColumn";
import TableRow from "../Table/CommonTableRow";
import { useRecoilState } from "recoil";
import { selectedRowsAtom } from "../../recoil/atoms/selectRowsAtom";
import styled from "styled-components";

const StyleInput = styled.input`
  margin-right: 20px;
  appearance: none;
  cursor: pointer;
  width: 22px;
  height: 22px;
  border: 1.5px solid #f4f4f4;
  border-radius: 50%;
  vertical-align: middle;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.05), 0 3px 3px rgba(0, 0, 0, 0.1);

  &:checked {
    background-color: #aec3de;
    border: 1.5 solid white;
  }
`;

const SelectContiOrderList = ({ sheetMusicData }) => {
  const [selectedRows, setSelectedRows] = useRecoilState(selectedRowsAtom);

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
              <StyleInput
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
