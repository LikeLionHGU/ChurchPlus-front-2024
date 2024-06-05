import React from "react";
import Table from "../Table/CommonTable";
import TableColumn from "../Table/CommonTableColumn";
import TableRow from "../Table/CommonTableRow";
import pageIcon from "../../assets/Icons/page.svg";

const SheetListView = ({ sheetMusicData }) => {
  return (
    <>
      <Table headersName={["이름", "곡 버전", "Key"]}>
        {sheetMusicData.map((sheetMusic, index) => (
          <TableRow key={index}>
            <TableColumn>
              <img src={pageIcon} alt="페이지 아이콘" />
              {sheetMusic.musicName}
            </TableColumn>
            <TableColumn>{sheetMusic.version}버전</TableColumn>
            <TableColumn>{sheetMusic.code}</TableColumn>
          </TableRow>
        ))}
      </Table>
    </>
  );
};

export default SheetListView;
