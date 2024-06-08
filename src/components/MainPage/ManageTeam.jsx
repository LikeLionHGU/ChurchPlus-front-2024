import React, { useEffect, useRef, useState } from "react";
import ManageTeamImg from "../../asset/Images/Icons/ManageTeamImg.svg";
import CopyIcon from "../../asset/Images/Icons/CopyIcon.svg";
import binIcon from "../../assets/Icons/Bin.svg";
import styled from "styled-components";
import getGroupInfo from "../../apis/getGroupInfo";
import { CopyToClipboard } from "react-copy-to-clipboard";
import deleteGroupMember from "../../apis/deleteGroupMember";
import { memberIdState } from "../../atom";
import { useRecoilState } from "recoil";
import updateTeamManage from "../../apis/updateTeamManage";
import PresentGroupName from "../../apis/getPresentGroupName";

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

const TeamNameInput = styled.input`
  font-family: "GmarketSansLight";
  font-size: 16px;
  margin-left: 24px;
  margin-bottom: 4px;
  border: 0;
  background-color: #f1f1f1;
`;

const ContactNumberInput = styled.input`
  font-family: "GmarketSansLight";
  font-size: 16px;
  margin-left: 25px;
`;

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
  background-color: ${({ isEditing }) => (isEditing ? "#aec3de" : "#d5d8dc")};
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
  const fileInputRef = useRef(null);
  const [groupInfo, setGroupInfo] = useState([]);
  const [newGroupName, setNewGroupName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [memberIds, setMemberIds] = useRecoilState(memberIdState);

  const [isEditing, setIsEditing] = useState(false);
  const groupId = localStorage.getItem("groupId");
  const [formData, setFormData] = useState({
    groupName: "",
    description: "",
  });
  const [presentGroupInfo, setPresentGroupInfo] = useState([]);
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    const fetchGroupInfo = async () => {
      const fetchedGroupInfo = await getGroupInfo(groupId);
      setGroupInfo(fetchedGroupInfo);
      setNewGroupName(fetchedGroupInfo[0]?.groupName || "");

      const ids = fetchedGroupInfo.map((info) => info.memberId);
      setMemberIds(ids);

      setFormData((prevFormData) => ({
        ...prevFormData,
        groupName: fetchedGroupInfo[0]?.groupName || "",
        groupImage: fetchedGroupInfo[0]?.groupImage || "",
        description: fetchedGroupInfo[0]?.description || "",
      }));
    };
    fetchGroupInfo();
  }, [groupId, setMemberIds]);

  useEffect(() => {
    const fetchGroups = async () => {
      const fetchedGroups = await PresentGroupName(groupId);
      setPresentGroupInfo(fetchedGroups);
    };
    fetchGroups();
  }, [groupId]);

  console.log("presentGroupInfo", presentGroupInfo);

  console.log("groupInfo: ", groupInfo);
  console.log("memberIds: ", memberIds);
  console.log("formdata: ", formData);

  const handleImageUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleGroupNameChange = (e) => {
    setNewGroupName(e.target.value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      groupName: e.target.value,
    }));
    console.log("New group name:", e.target.value);
  };

  const [isEditingContact, setIsEditingContact] = useState({});

  const handleContactNumberChange = (e, memberId) => {
    const newContactNumber = e.target.value;
    setContactNumber((prevContactNumber) => ({
      ...prevContactNumber,
      [memberId]: newContactNumber,
    }));

    setFormData((prevFormData) => ({
      ...prevFormData,
      description: newContactNumber,
    }));

    console.log(
      "New contact number for member ID",
      memberId,
      ":",
      newContactNumber
    );
  };

  const handleContactEditClick = (memberId) => {
    setIsEditingContact((prev) => ({
      ...prev,
      [memberId]: true,
    }));
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result);
      console.log("Uploaded image:", reader.result);
    };
    reader.readAsDataURL(file);

    setFormData((prevData) => ({
      ...prevData,
      groupImage: file,
    }));
    setIsEditing(true);
  };

  const handleSubmit = async () => {
    if (window.confirm("팀 정보를 수정하시겠습니까?")) {
      console.log("Form Data Submitted: ", formData);
      try {
        const { groupName, description } = formData;
        console.log("Group ID:", groupId);

        const formDataToSend = new FormData();
        formDataToSend.append("groupName", groupName);
        formDataToSend.append("description", description);
        if (fileInputRef.current.files.length > 0) {
          formDataToSend.append("groupImage", fileInputRef.current.files[0]);
        }

        await updateTeamManage(formDataToSend, groupId);

        window.location.reload();
      } catch (error) {
        console.error("팀 정보 수정 실패:", error);
      }
    }
  };

  console.log("formdata : ", formData);

  const handleDelete = async (deleteGroupId, deleteMemberId) => {
    if (window.confirm("삭제하시겠습니까?")) {
      try {
        const groupId = deleteGroupId;
        const memberId = deleteMemberId;

        await deleteGroupMember(groupId, memberId);
        setGroupInfo(groupInfo.filter((info) => info.memberId !== memberId));
        setMemberIds(memberIds.filter((id) => id !== memberId));
      } catch (error) {
        console.error("그룹 멤버 삭제 실패:", error);
      }
    } else {
      alert("취소");
    }
  };

  return (
    <>
      <TopContents>
        <TeamImg>
          <PreviewImg>
            <img
              src={previewUrl || presentGroupInfo.groupImage}
              alt="악보추가 이미지"
              border="0"
            />
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
                {isEditing ? (
                  <TeamNameInput
                    type="text"
                    value={newGroupName}
                    onChange={handleGroupNameChange}
                  />
                ) : (
                  <UserTeamName onClick={() => setIsEditing(true)}>
                    {groupInfo[0].groupName}
                  </UserTeamName>
                )}
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
          <InfoChangeBtn
            onClick={handleSubmit}
            isEditing={isEditing}
            disabled={!isEditing}
          >
            저장
          </InfoChangeBtn>
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
            <span>연락처</span>
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
              {isEditingContact[userInfo.memberId] ? (
                <ContactNumberInput
                  type="text"
                  value={contactNumber[userInfo.memberId] || ""}
                  onChange={(e) =>
                    handleContactNumberChange(e, userInfo.memberId)
                  }
                />
              ) : (
                <span onClick={() => handleContactEditClick(userInfo.memberId)}>
                  {contactNumber[userInfo.memberId] || "연락처를 입력해주세요"}
                </span>
              )}
            </Note>

            <Bin>
              <span>
                <img
                  src={binIcon}
                  alt="휴지통"
                  border="0"
                  onClick={() => handleDelete(groupId, userInfo.memberId)}
                ></img>
              </span>
            </Bin>
          </TransparentBox>
        ))}
      </BottomContents>
    </>
  );
}
