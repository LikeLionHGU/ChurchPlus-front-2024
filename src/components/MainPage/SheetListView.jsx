import React from "react";
import Table from "../Table/CommonTable";
import TableColumn from "../Table/CommonTableColumn";
import pageIcon from "../../assets/Icons/page.svg";
import CommonTableRow from "../Table/CommonTableRow";

const SheetListView = ({ sheetMusicData, onMusicClick }) => {
  return (
    <>
      <Table headersName={["이름", "곡 버전", "Key"]}>
        {sheetMusicData.map((sheetMusic, index) => (
          <CommonTableRow
            key={index}
            onClick={() => {
              console.log("Clicked on TableRow with ID:", sheetMusic.musicId);
              onMusicClick(sheetMusic.musicId);
            }}
          >
            <TableColumn>
              <img src={pageIcon} alt="페이지 아이콘" />
              {sheetMusic.musicName}
            </TableColumn>
            <TableColumn>{sheetMusic.version}버전</TableColumn>
            <TableColumn>{sheetMusic.code}</TableColumn>
          </CommonTableRow>
        ))}
      </Table>
    </>
  );
};

export default SheetListView;
