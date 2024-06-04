import React, { useEffect, useRef, useState } from "react";
import ManageTeamImg from "../../asset/Images/Icons/ManageTeamImg.svg"
import CopyIcon from "../../asset/Images/Icons/CopyIcon.svg"
import styled from "styled-components";
import getGroupInfo from "../../apis/getGroupInfo";
import { CopyToClipboard } from "react-copy-to-clipboard";


const TopContents = styled.div`
    display: flex;
    margin-top: 28px;
    `

const TeamImg = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 36px;
`
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
`

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
`

const TeamInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 78px;
`

const PreviewInfo = styled.div`
    width: 797px;
    height: 239px;
    background-color: #f1f1f1;
    border-radius: 16px;
    display: flex;
`

const TypeOfInfo = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    margin-top: 40px;
    margin-left: 41px;
`

const TeamName = styled.div`
`

const InviteCode = styled.div`
    margin-top: 40px;
`
const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    font-family: "GmarketSansLight";
    margin-left: 22px;
    margin-top: 40px;
`

const UserTeamName = styled.div`
`

const UserTeamInviteCode = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: row;
`

const InviteCodeText = styled.div`
    margin-right: 2px;
`

const CopyImg = styled.img`
    margin-top: 2px;
    cursor: pointer;
`

const InfoChangeBtn = styled.div`
    width: 79px;
    height: 41px;
    border-radius: 14px;
    background-color: #AEc3de;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin-top: 20px;
    margin-left: auto;
    cursor: pointer;
  box-shadow: 0 0 6px rgba(80, 80, 80, 0.2);
`


const BottomContents = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    margin-left: 36px;
    font-size: 20px;
    width: 1117px;

    span{
        margin-left: 26px;
    }

`

const BlueBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: #e2edff;
    width: 1117px;
    height: 50px;
    border-radius: 10px 10px 0 0;
`

const Name = styled.div`
    display: flex;
    align-items: center;
`

const Position = styled.div`
    display: flex;
    align-items: center;
`

const Note = styled.div`
    display: flex;
    align-items: center;
`

const TransparentBox = styled.div`
    width: 1117px;
    height: 50px;
    border-bottom: 1px solid #d9d9d9;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`


export default function ManageTeam(){
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);
  const [groupInfo, setGroupInfo] = useState([]);

  const groupId = localStorage.getItem("groupId");

  useEffect(() => {
    const fetchGroupInfo = async () => {
        const fetchedGroupInfo = await getGroupInfo(groupId);
        setGroupInfo(fetchedGroupInfo);
      }
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
    return(
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
                  <img
                    src={ManageTeamImg}
                    alt="악보추가 이미지"
                    border="0"
                  ></img>
                )}
                </PreviewImg>
            <ImgChangeBtn onClick={handleImageUploadClick}>사진 교체
            <input
                type="file"
                style={{ display: "none" }}
                onChange={handleFileInputChange}
                ref={fileInputRef}
              />
              </ImgChangeBtn>
        </TeamImg>
        <TeamInfo>
            <PreviewInfo>
                <TypeOfInfo>
                    <TeamName>팀 이름</TeamName>
                    <InviteCode>초대코드</InviteCode>
                </TypeOfInfo>
                {groupInfo.length > 0 &&(
                <UserInfo>
                    <UserTeamName>{groupInfo[0].groupName}</UserTeamName>
                    <UserTeamInviteCode>
                        <InviteCodeText>{groupInfo[0].invitation_code}</InviteCodeText>
                       <CopyToClipboard text={groupInfo[0].invitation_code}
                       onCopy={() => alert("초대코드가 복사되었습니다.")}>
                        <CopyImg src={CopyIcon} alt="" />
                        </CopyToClipboard>
                    </UserTeamInviteCode>
                </UserInfo>
                )}
            </PreviewInfo>
            <InfoChangeBtn>저장</InfoChangeBtn>
        </TeamInfo>
        </TopContents>
        <BottomContents>
        <BlueBox>
            <Name><span>이름</span></Name>
            <Position><span>포지션</span></Position>
            <Note><span>비고</span></Note>
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
          </TransparentBox>
          
        ))}
<TransparentBox>
            <Name><span></span></Name>
            <Position><span></span></Position>
            <Note><span></span></Note>
        </TransparentBox><TransparentBox>
            <Name><span></span></Name>
            <Position><span></span></Position>
            <Note><span></span></Note>
        </TransparentBox><TransparentBox>
            <Name><span></span></Name>
            <Position><span></span></Position>
            <Note><span></span></Note>
        </TransparentBox>
        </BottomContents>
        </>
    )
}