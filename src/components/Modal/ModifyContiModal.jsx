import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import exitBtnIcon from "../../assets/Icons/ExitBtn.svg";
import binIcon from "../../assets/Icons/Bin.svg";
import shareIcon from "../../assets/Icons/ShareConti.svg";
import printIcon from "../../assets/Icons/printPage.svg";
import editBtn from "../../assets/Icons/EditBtn.svg";
import saveBtn from "../../assets/Icons/SaveBtn.svg";
import { useRecoilState, useRecoilValue } from "recoil";
import { musicIdState, readMusicModalState } from "../../atom";
import getMusicInfo from "../../apis/getMusicInfo";
import updateMusic from "../../apis/updateMusic";
import deleteMusic from "../../apis/deleteMusic";
import getImageDownloadUrl from "../../apis/getImageDownloadUrl";

const modalStyles = `
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`;

const Modal = styled.div`
  ${modalStyles}
  z-index: 3;
`;

const Overlay = styled.div`
  ${modalStyles}
  background: rgba(158, 158, 158, 0.8);
  cursor: pointer;
`;

const ContiModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  border-radius: 35px;
  width: 1100px;
  height: 643px;
`;

const ModalTop = styled.div`
  display: flex;
  margin-top: 35px;
  margin-bottom: 9px;
  height: 40px;
`;

const ContiTitle = styled.div`
  margin-left: 480px;
  font-size: 24px;
  font-family: "GmarketSansLight";
`;

const Icons = styled.div`
  margin-left: auto;
  margin-right: 40px;

  img {
    cursor: pointer;
    margin-right: 15px;
  }
`;

const ModalContent = styled.div`
  display: flex;
`;

const ContiImage = styled.div`
  margin-left: 140px;
  margin-right: 121px;
  width: 360px;
  height: 480px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background-position: top;
  }
`;

const Icon2 = styled.div`
  display: flex;
  justify-content: right;
  margin-bottom: 24px;
  padding-right: 35px;
`;

const Img = styled.img`
  height: 24px;
  width: 24px;
  margin-left: 16px;
  cursor: pointer;
`;

const ContiInfo = styled.div`
  width: 419px;
  height: 500px;
`;

const Btn = styled.img`
  cursor: pointer;
  margin-top: 75px;
  margin-left: 355px;
  width: 79px;
  height: 51px;
`;

const BoldText = styled.div`
  font-size: 18px;
  padding-bottom: 12px;
`;

const LightText = styled.div`
  font-family: "GmarketSansLight";
  font-size: 16px;
  padding-bottom: 35px;
  color: ${({ isEditable }) => (isEditable ? "gray" : "#0d2030")};
`;

const EditableInput = styled.input`
  font-family: "GmarketSansLight";
  font-size: 16px;
  padding-bottom: 35px;
  color: gray;
  border: none;
  outline: none;
  width: 419px;
`;

const LoadingMessage = styled.div`
  margin: auto;
  font-size: 24px;
  font-family: "GmarketSansLight";
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
`;

export default function ModifyContiModal() {
  const [isModalOpen, setIsModalOpen] = useRecoilState(readMusicModalState);
  const [isEditable, setIsEditable] = useState(false);
  const [contiData, setContiData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const musicId = useRecoilValue(musicIdState);
  const [formData, setFormData] = useState({
    musicName: "",
    code: "",
    version: "",
    link: "",
    description: "",
  });
  const fileInputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isImageUpdated, setIsImageUpdated] = useState(false); // 이미지가 업데이트되었는지 여부를 추적하는 상태 변수
  const [imageDownloadUrl, setImageDownloadUrl] = useState([]);

  const toggleModifyContiModal = () => {
    setIsModalOpen((prevState) => !prevState);
    setIsEditable(false);

    // 이미지가 업데이트되었을 경우 페이지를 리로드
    if (isImageUpdated) {
      window.location.reload();
    }
  };

  const toggleEditMode = () => {
    setIsEditable((prevState) => !prevState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result);
        setIsImageUpdated(true); // 이미지가 업로드되었음을 표시
        console.log("Uploaded image:", reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      console.error("전달된 파일이 유효하지 않습니다.");
    }
  };

  useEffect(() => {
    const fetchMusicInfo = async () => {
      setIsLoading(true);
      try {
        const fetchedMusicInfo = await getMusicInfo(musicId);
        setContiData(fetchedMusicInfo);
        setFormData({
          musicName: fetchedMusicInfo.musicName,
          code: fetchedMusicInfo.code,
          version: fetchedMusicInfo.version,
          link: fetchedMusicInfo.link,
          description: fetchedMusicInfo.description || "", // description이 없을 경우 빈 문자열로 설정
          image: fetchedMusicInfo.musicImageUrl,
        });
      } catch (error) {
        console.error("Failed to fetch music info:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMusicInfo();
  }, [musicId]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const handleSubmit = async () => {
    alert("악보를 수정하시겠습니까?");
    console.log("Form Data Submitted: ", formData);
    try {
      const { musicName, code, link, description, version } = formData;
      const groupId = localStorage.getItem("groupId");
      console.log("Group ID:", groupId);

      const formDataToSend = new FormData();
      formDataToSend.append("musicName", musicName);
      formDataToSend.append("code", code);
      formDataToSend.append("link", link);
      formDataToSend.append("description", description);
      formDataToSend.append("groupId", groupId);
      formDataToSend.append("version", version);

      // 이미지 파일이 존재할 경우에만 추가
      if (fileInputRef.current.files[0]) {
        formDataToSend.append("image", fileInputRef.current.files[0]);
      }

      await updateMusic(formDataToSend, musicId);
      setIsEditable(false);
    } catch (error) {
      console.error("악보 수정 실패:", error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm("삭제하시겠습니까?")) {
      try {
        await deleteMusic(musicId);
        window.location.reload();
      } catch (error) {
        console.error("악보 삭제 실패:", error);
      }
    } else {
      alert("취소");
    }
  };

  const handlePrintBtnClick = async () => {
    try {
      const fetchedMusicInfo = await getImageDownloadUrl(musicId);
      setImageDownloadUrl(fetchedMusicInfo);
      window.open(fetchedMusicInfo, "_blank");
    } catch (error) {
      console.error("악보 삭제 실패:", error);
    }
  };

  return (
    <>
      {isModalOpen && (
        <Modal>
          <Overlay onClick={toggleModifyContiModal} />
          <ContiModal>
            {isLoading ? (
              <LoadingMessage>Loading...</LoadingMessage>
            ) : (
              <>
                <ModalTop>
                  <Icons>
                    <img
                      onClick={toggleModifyContiModal}
                      src={exitBtnIcon}
                      alt="캔슬 아이콘"
                    />
                  </Icons>
                </ModalTop>
                <ModalContent>
                  {isEditable ? (
                    previewUrl ? (
                      <ContiImage onClick={handleImageUploadClick}>
                        <img src={previewUrl} alt="Uploaded" />
                        <input
                          type="file"
                          style={{ display: "none" }}
                          onChange={handleFileInputChange}
                          ref={fileInputRef}
                        />
                      </ContiImage>
                    ) : (
                      <ContiImage onClick={handleImageUploadClick}>
                        <img src={contiData.musicImageUrl} alt="Conti Image" />
                        <input
                          type="file"
                          style={{ display: "none" }}
                          onChange={handleFileInputChange}
                          ref={fileInputRef}
                        />
                      </ContiImage>
                    )
                  ) : (
                    <ContiImage>
                      <img src={contiData.musicImageUrl} alt="Conti Image" />
                    </ContiImage>
                  )}
                  <ContiInfo>
                    <Icon2>
                      <Img src={binIcon} alt="쓰레기통 아이콘" onClick={handleDelete} />
                      <Img src={shareIcon} alt="공유 아이콘" onClick={handlePrintBtnClick} />
                    </Icon2>
                    <BoldText>곡 제목</BoldText>
                    {isEditable ? (
                      <EditableInput
                        name="musicName"
                        value={formData.musicName}
                        onChange={handleChange}
                      />
                    ) : (
                      <LightText>{formData.musicName}</LightText>
                    )}
                    <BoldText>곡 코드</BoldText>
                    {isEditable ? (
                      <EditableInput
                        name="code"
                        value={formData.code}
                        onChange={handleChange}
                      />
                    ) : (
                      <LightText>{formData.code}</LightText>
                    )}
                    <BoldText>곡 버전</BoldText>
                    {isEditable ? (
                      <EditableInput
                        name="version"
                        value={formData.version}
                        onChange={handleChange}
                      />
                    ) : (
                      <LightText>{formData.version}</LightText>
                    )}
                    <BoldText>영상 링크</BoldText>
                    {isEditable ? (
                      <EditableInput
                        name="link"
                        value={formData.link}
                        onChange={handleChange}
                      />
                    ) : (
                      <LightText>
                        <Link href={formData.link} target="_blank">
                          {formData.link}
                        </Link>
                      </LightText>
                    )}
                    <Btn
                      src={isEditable ? saveBtn : editBtn}
                      alt="수정버튼"
                      onClick={isEditable ? handleSubmit : toggleEditMode}
                    />
                  </ContiInfo>
                </ModalContent>
              </>
            )}
          </ContiModal>
        </Modal>
      )}
    </>
  );
}
