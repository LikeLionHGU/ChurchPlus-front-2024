import React, { useEffect, useRef, useState } from "react";
import ManageTeamImg from "../../asset/Images/Icons/ManageTeamImg.svg";
import CopyIcon from "../../asset/Images/Icons/CopyIcon.svg";
import binIcon from "../../assets/Icons/Bin.svg";
import styled from "styled-components";
import getGroupInfo from "../../apis/getGroupInfo";
import { CopyToClipboard } from "react-copy-to-clipboard";

const TopContents = styled.div`
  display: flex;
  margin-top: 28px;
`;

const TeamImg = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 36px;
`;
const PreviewImg = styled.div`
  width: 242px;
  height: 242px;
  overflow: hidden;
  border-radius: 20px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImgChangeBtn = styled.div`
  width: 242px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ededed;
  margin-top: 8px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 20px;
`;

const UploadImg = styled.div`
  font-family: "GmarketSansLight";
  font-size: 20px;
`;

const TeamInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 78px;
`;

const PreviewInfo = styled.div`
  width: 724px;
  height: 43px;
  background-color: #f1f1f1;
  border-radius: 10px;
`;

const TeamInformation = styled.div`
  margin-left: 14px;
  margin-top: 12px;
  display: flex;
`;

const InvitationCode = styled.div`
  display: flex;
  margin-left: 14px;
  margin-top: 29px;
`;

const TeamName = styled.div``;

const InviteCode = styled.div``;

const UserTeamName = styled.div`
  margin-left: 24px;
  font-family: "GmarketSansLight";
  color: #7f7f7f;
`;

const InviteCodeText = styled.div`
  margin-right: 2px;
  margin-left: 12px;
  font-family: "GmarketSansLight";
  color: #7f7f7f;
`;

const CopyImg = styled.img`
  margin-top: 2px;
  cursor: pointer;
`;

const InfoChangeBtn = styled.div`
  width: 60px;
  height: 36px;
  border-radius: 14px;
  background-color: #aec3de;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  margin-top: 200px;
  margin-left: auto;
  cursor: pointer;
  box-shadow: 0 0 6px rgba(80, 80, 80, 0.2);
`;

const BottomContents = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  margin-left: 36px;
  font-size: 20px;
  width: 1117px;

  span {
    margin-left: 26px;
  }
`;

const BlueBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 0.4fr;
  background-color: #e2edff;
  width: 1117px;
  height: 50px;
  border-radius: 10px 10px 0 0;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
`;

const Position = styled.div`
  display: flex;
  align-items: center;
`;

const Note = styled.div`
  display: flex;
  align-items: center;
`;

const Bin = styled.div`
  display: flex;
  align-items: center;
  img {
    cursor: pointer;
    width: 24px;
    height: 24px;
  }
`;

const TransparentBox = styled.div`
  width: 1117px;
  height: 50px;
  border-bottom: 1px solid #d9d9d9;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 0.4fr;

  span {
    font-family: "GmarketSansLight";
    font-size: 20px;
  }
`;

export default function ManageTeam() {
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);
  const [groupInfo, setGroupInfo] = useState([]);

  const groupId = localStorage.getItem("groupId");

  useEffect(() => {
    const fetchGroupInfo = async () => {
      const fetchedGroupInfo = await getGroupInfo(groupId);
      setGroupInfo(fetchedGroupInfo);
    };
    fetchGroupInfo();
  }, [groupId]);

  console.log("groupInfo: ", groupInfo);

  const handleImageUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result);
      //사용자가 업로드한 이미지 확인
      console.log("Uploaded image:", reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <>
      <TopContents>
        <TeamImg>
          <PreviewImg>
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="Uploaded"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <img src={ManageTeamImg} alt="악보추가 이미지" border="0"></img>
            )}
          </PreviewImg>
          <ImgChangeBtn onClick={handleImageUploadClick}>
            <UploadImg>이미지 업로드</UploadImg>
            <input
              type="file"
              style={{ display: "none" }}
              onChange={handleFileInputChange}
              ref={fileInputRef}
            />
          </ImgChangeBtn>
        </TeamImg>
        <TeamInfo>
          {groupInfo.length > 0 && (
            <PreviewInfo>
              <TeamInformation>
                <TeamName>팀 이름</TeamName>
                <UserTeamName>{groupInfo[0].groupName}</UserTeamName>
              </TeamInformation>
              <InvitationCode>
                <InviteCode>초대코드</InviteCode>
                <InviteCodeText>{groupInfo[0].invitation_code}</InviteCodeText>
                <CopyToClipboard
                  text={groupInfo[0].invitation_code}
                  onCopy={() => alert("초대코드가 복사되었습니다.")}
                >
                  <CopyImg src={CopyIcon} alt="" />
                </CopyToClipboard>
              </InvitationCode>
            </PreviewInfo>
          )}
          <InfoChangeBtn>저장</InfoChangeBtn>
        </TeamInfo>
      </TopContents>
      <BottomContents>
        <BlueBox>
          <Name>
            <span>이름</span>
          </Name>
          <Position>
            <span>포지션</span>
          </Position>
          <Note>
            <span>비고</span>
          </Note>
          <Bin>
            <span></span>
          </Bin>
        </BlueBox>

        {groupInfo.map((userInfo, index) => (
          <TransparentBox key={index}>
            <Name>
              <span>{userInfo.nickname}</span>
            </Name>
            <Position>
              <span>{userInfo.position}</span>
            </Position>
            <Note>
              <span>010-0000-0000</span>
            </Note>
            <Bin>
              <span>
                <img src={binIcon} alt="휴지통" border="0"></img>
              </span>
            </Bin>
          </TransparentBox>
        ))}
        <TransparentBox>
          <Name>
            <span></span>
          </Name>
          <Position>
            <span></span>
          </Position>
          <Note>
            <span></span>
          </Note>
        </TransparentBox>
        <TransparentBox>
          <Name>
            <span></span>
          </Name>
          <Position>
            <span></span>
          </Position>
          <Note>
            <span></span>
          </Note>
        </TransparentBox>
        <TransparentBox>
          <Name>
            <span></span>
          </Name>
          <Position>
            <span></span>
          </Position>
          <Note>
            <span></span>
          </Note>
        </TransparentBox>
      </BottomContents>
    </>
  );
}
