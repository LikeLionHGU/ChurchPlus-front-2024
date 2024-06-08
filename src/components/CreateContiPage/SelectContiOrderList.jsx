// import React, { useEffect } from "react";
// import Table from "../Table/CommonTable";
// import TableColumn from "../Table/CommonTableColumn";
// import TableRow from "../Table/CommonTableRow";
// import { useRecoilState, useSetRecoilState } from "recoil";
// import { selectedRowsAtom } from "../../recoil/atoms/selectRowsAtom";
// import styled from "styled-components";
// import { contiStepModalState, musicIdListState } from "../../atom";

// const StyleCheckbox = styled.div`
//   margin-left: 5px;
//   margin-right: 20px;
//   cursor: pointer;
//   width: 22px;
//   height: 22px;
//   border: 1.5px solid #f4f4f4;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   box-shadow: 0 3px 4px rgba(0, 0, 0, 0.05), 0 3px 3px rgba(0, 0, 0, 0.1);
//   background-color: ${(props) => (props.checked ? "#aec3de" : "transparent")};
//   color: ${(props) => (props.checked ? "white" : "transparent")};
//   font-size: 15px;
//   font-family: "GmarketSansMedium";
// `;

// const Container = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const SelectContiOrderList = ({ sheetMusicData }) => {
//   const [selectedRows, setSelectedRows] = useRecoilState(selectedRowsAtom);
//   const [musicIdList, setMusicIdList] = useRecoilState(musicIdListState);
//   const setContiStepModalState = useSetRecoilState(contiStepModalState);

//   console.log("musicIdList is:", musicIdList);

//   const handleCheckboxChange = (index, musicId) => {
//     setSelectedRows((prevSelectedRows) => {
//       const existingIndex = prevSelectedRows.findIndex(
//         (item) => item.index === index
//       );
//       if (existingIndex !== -1) {
//         // Remove the selected item and reassign orders
//         const newSelectedRows = prevSelectedRows
//           .filter((item) => item.index !== index)
//           .map((item, i) => ({ ...item, order: i + 1 }));
//         return newSelectedRows;
//       } else {
//         return [
//           ...prevSelectedRows,
//           { index, order: prevSelectedRows.length + 1 },
//         ];
//       }
//     });

//     setMusicIdList((prevMusicIdList) => {
//       if (prevMusicIdList.includes(musicId)) {
//         // Remove musicId from the list
//         return prevMusicIdList.filter((id) => id !== musicId);
//       } else {
//         // Add musicId to the list
//         return [...prevMusicIdList, musicId];
//       }
//     });
//   };

//   const getOrder = (index) => {
//     const selectedRow = selectedRows.find((item) => item.index === index);
//     return selectedRow ? selectedRow.order : "";
//   };

//   useEffect(() => {
//     setSelectedRows([]);
//     setMusicIdList([]);
//     setContiStepModalState(false);
//   }, [setSelectedRows, setMusicIdList, setContiStepModalState]);

//   console.log("selectedRows:", selectedRows);

//   if (!Array.isArray(sheetMusicData) || sheetMusicData.length === 0) {
//     return <div>데이터가 없습니다.</div>;
//   }

//   return (
//     <>
//       <Table headersName={["이름", "곡 버전", "Key"]}>
//         {sheetMusicData.map((sheetMusic, index) => (
//           <TableRow
//             hoverColor={"#f1f1f1"}
//             key={index}
//             selected={selectedRows.some((item) => item.index === index)}
//           >
//             <TableColumn>
//               <Container>
//                 <StyleCheckbox
//                   checked={selectedRows.some((item) => item.index === index)}
//                   onClick={() =>
//                     handleCheckboxChange(index, sheetMusic.musicId)
//                   }
//                 >
//                   {getOrder(index)}
//                 </StyleCheckbox>
//                 {sheetMusic.musicName}
//               </Container>
//             </TableColumn>
//             <TableColumn>{sheetMusic.version}버전</TableColumn>
//             <TableColumn>{sheetMusic.code}</TableColumn>
//           </TableRow>
//         ))}
//       </Table>
//     </>
//   );
// };

// export default SelectContiOrderList;

import React, { useEffect } from "react";
import Table from "../Table/CommonTable";
import TableColumn from "../Table/CommonTableColumn";
import CommonTableRow from "../Table/CommonTableRow"; // 수정된 부분: CommonTableRow를 불러옴
import { useRecoilState, useSetRecoilState } from "recoil";
import { selectedRowsAtom } from "../../recoil/atoms/selectRowsAtom";
import styled from "styled-components";
import { contiStepModalState, musicIdListState } from "../../atom";
import DefaultGroomImg from "../../assets/Icons/DefaultGroom.svg";

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

const DefaultSection = styled.div`
  /* border: 1px solid #3e5692; */
  width: 322px;
  height: 316px;
  margin-top: 173px;
  margin-left: 360px;

  img {
    margin-left: 17px;
    height: 209;
    width: 288px;
  }
`;

const DefaultText = styled.div`
  font-size: 30px;
  color: #aec3de;
  margin-left: 4px;
  margin-top: 64px;
`;

const SelectContiOrderList = ({ sheetMusicData }) => {
  const [selectedRows, setSelectedRows] = useRecoilState(selectedRowsAtom);
  const [musicIdList, setMusicIdList] = useRecoilState(musicIdListState);
  const setContiStepModalState = useSetRecoilState(contiStepModalState);

  console.log("musicIdList is:", musicIdList);

  const handleCheckboxChange = (index, musicId) => {
    setSelectedRows((prevSelectedRows) => {
      const existingIndex = prevSelectedRows.findIndex(
        (item) => item.index === index
      );
      if (existingIndex !== -1) {
        const newSelectedRows = prevSelectedRows
          .filter((item) => item.index !== index)
          .map((item, i) => ({ ...item, order: i + 1 }));
        return newSelectedRows;
      } else {
        return [
          ...prevSelectedRows,
          { index, order: prevSelectedRows.length + 1 },
        ];
      }
    });

    setMusicIdList((prevMusicIdList) => {
      if (prevMusicIdList.includes(musicId)) {
        return prevMusicIdList.filter((id) => id !== musicId);
      } else {
        return [...prevMusicIdList, musicId];
      }
    });
  };

  const getOrder = (index) => {
    const selectedRow = selectedRows.find((item) => item.index === index);
    return selectedRow ? selectedRow.order : "";
  };

  useEffect(() => {
    setSelectedRows([]);
    setMusicIdList([]);
    setContiStepModalState(false);
  }, [setSelectedRows, setMusicIdList, setContiStepModalState]);

  console.log("selectedRows:", selectedRows);

  if (!Array.isArray(sheetMusicData) || sheetMusicData.length === 0) {
    return (
      <div>
        <DefaultSection>
          <img src={DefaultGroomImg} alt="디폴트 구름 이미지"></img>
          <DefaultText>악보를 업로드 해보세요!</DefaultText>
        </DefaultSection>
      </div>
    );
  }

  return (
    <>
      <Table headersName={["이름", "곡 버전", "Key"]}>
        {sheetMusicData.map((sheetMusic, index) => (
          <CommonTableRow
            hoverColor={"#f1f1f1"}
            key={index}
            selected={selectedRows.some((item) => item.index === index)}
            onClick={() => handleCheckboxChange(index, sheetMusic.musicId)}
          >
            <TableColumn>
              <Container>
                <StyleCheckbox
                  checked={selectedRows.some((item) => item.index === index)}
                >
                  {getOrder(index)}
                </StyleCheckbox>
                {sheetMusic.musicName}
              </Container>
            </TableColumn>
            <TableColumn>{sheetMusic.version}버전</TableColumn>
            <TableColumn>{sheetMusic.code}</TableColumn>
          </CommonTableRow>
        ))}
      </Table>
    </>
  );
};

export default SelectContiOrderList;
