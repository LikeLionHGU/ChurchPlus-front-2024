import React from "react";
import Table from "../Table/CommonTable";
import TableColumn from "../Table/CommonTableColumn";
import TableRow from "../Table/CommonTableRow";
import { useRecoilState } from "recoil";
import { selectedRowsAtom } from "../../recoil/atoms/selectRowsAtom";
import styled from "styled-components";

const StyleCheckbox = styled.div`
  margin-left: 5px;
  margin-right: 20px;
  cursor: pointer;
  width: 22px;
  height: 22px;
  border: 1.5px solid #f4f4f4;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.05), 0 3px 3px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => (props.checked ? "#aec3de" : "transparent")};
  color: ${(props) => (props.checked ? "white" : "transparent")};
  font-size: 15px;
  font-family: "GmarketSansMedium";
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const SelectContiOrderList = ({ sheetMusicData }) => {
  const [selectedRows, setSelectedRows] = useRecoilState(selectedRowsAtom);

  const handleCheckboxChange = (index) => {
    setSelectedRows((prevSelectedRows) => {
      const existingIndex = prevSelectedRows.findIndex(
        (item) => item.index === index
      );
      if (existingIndex !== -1) {
        return prevSelectedRows.filter((item) => item.index !== index);
      } else {
        return [
          ...prevSelectedRows,
          { index, order: prevSelectedRows.length + 1 },
        ];
      }
    });
  };

  const getOrder = (index) => {
    const selectedRow = selectedRows.find((item) => item.index === index);
    return selectedRow ? selectedRow.order : "";
  };

  return (
    <>
      <Table headersName={["이름", "곡 버전", "Key"]}>
        {sheetMusicData.map((sheetMusic, index) => (
          <TableRow
            hoverColor={"#f1f1f1"}
            key={index}
            selected={selectedRows.some((item) => item.index === index)}
          >
            <TableColumn>
              <Container>
                <StyleCheckbox
                  checked={selectedRows.some((item) => item.index === index)}
                  onClick={() => handleCheckboxChange(index)}
                >
                  {getOrder(index)}
                </StyleCheckbox>
                {sheetMusic.title}
              </Container>
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
