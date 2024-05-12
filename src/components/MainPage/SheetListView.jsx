import React from "react";
import Table from "../Table/CommonTable";
import TableColumn from "../Table/CommonTableColumn";
import TableRow from "../Table/CommonTableRow";
import pageIcon from "../../assets/Icons/page.svg";

const SheetListView = ({ sheetMusicData }) => {
  return (
    <>
      <Table headersName={["이름", "곡 버전", "Key"]}>
        <TableRow>
          <TableColumn>
            <img src={pageIcon} alt="페이지 아이콘" />
            아주아주 긴 글 첫번째 게시글입니다.
          </TableColumn>
          <TableColumn>2020-10-25</TableColumn>
          <TableColumn>6</TableColumn>
        </TableRow>
        <TableRow>
          <TableColumn>
            <img src={pageIcon} alt="페이지 아이콘" />
            두번째 게시글입니다.
          </TableColumn>
          <TableColumn>2020-10-25</TableColumn>
          <TableColumn>5</TableColumn>
        </TableRow>
        <TableRow>
          <TableColumn>
            <img src={pageIcon} alt="페이지 아이콘" />
            세번째 게시글입니다.
          </TableColumn>
          <TableColumn>2020-10-25</TableColumn>
          <TableColumn>1</TableColumn>
        </TableRow>
        <TableRow>
          <TableColumn>
            <img src={pageIcon} alt="페이지 아이콘" />
            네번째 게시글입니다.
          </TableColumn>
          <TableColumn>2020-10-25</TableColumn>
          <TableColumn>2</TableColumn>
        </TableRow>
      </Table>
    </>
  );
};

export default SheetListView;
