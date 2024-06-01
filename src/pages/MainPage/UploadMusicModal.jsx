import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import OpenUploadMusic from "../../assets/Icons/OpenUploadMusicLogo.svg";
import ImageUploadLogo from "../../asset/Images/Logos/ImageUploadLogo.svg";
import UploadMusicDropdown from "./UploadMusicDropdown.jsx"
import ExitButton from "../../asset/Images/Buttons/ExitButton.svg"

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
  background: rgba(166, 166, 170, 0.8);
`;

const ModalOpen = styled.div`
  font-family: "GmarketSansLight";
  display: flex;
  align-items: center;
  height: 41px;
  min-width: 145px;
  font-size: 20px;
  text-align: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #9d9d9d;
  border-radius: 10px;
  padding-right: 10px;

  &:hover {
    background-color: #dfdfdf;
  }

  img {
    padding: 10px;
  }
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 590px;
  width: 1050px;
  background-color: white;
  border: none;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopContainer = styled.div`
  display: flex;
  width: 1000px;
  margin-top: 10px;
`;

const Images = styled.img`
  margin-left: auto;
  cursor: pointer;
`;

const MiddleContainer = styled.div`
  display: flex;
  margin-top: 50px;
`;
const UploadImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: #edf4ff;
  width: 390px;
  height: 360px;
  overflow: hidden;
`;

const RightContainer = styled.div`
  width: 390px;
  height: 360px;
  display: flex;
  flex-direction: column;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  margin-bottom: 30px;
`;
const InputText = styled.div`
  font-size: 15px;
`;

const InputValue = styled.input`
  border: 1px solid #c0c0c0;
  border-radius: 10px;
  margin-top: 5px;
  height: 38px;
  font-family: "GmarketSansLight";
  padding-left: 10px;
`;

const InputKeyValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #c0c0c0;
  color: gray;
  border-radius: 10px;
  margin-top: 5px;
  height: 38px;
  font-family: "GmarketSansLight";
  padding-left: 10px;
  font-size: 13px;
  cursor: pointer;
  img{
    margin-right: 10px;
  }
`;

const UploadImageBtn = styled.div`
  width: 220px;
  height: 38px;
  background-color: #ededed;
  font-size: 20px;
  font-family: "GmarketSansLight";
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 23px;
  margin-right: 380px;
  cursor: pointer;
`;

const SubmitBtn = styled.div`
  width: 79px;
  height: 41px;
  margin-top: 2px;
  margin-left: auto;
  border-radius: 14px;
  background-color: #aec3de;
  color: white;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  box-shadow: 0 0 6px rgba(80, 80, 80, 0.2);
  cursor: pointer;
  padding-top: 2px;
`;

export default function UploadMusicModal() {
  const [uploadMusicModal, UploadMusicModal] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [formData, setFormData] = useState({
    musicName: "",
    code: "",
    version: "",
    link: "",
  });
  const toggleUploadMusicModal = () => {
    UploadMusicModal((prevState) => !prevState);
    setFormData({
      musicName: "",
      code: "",
      version: "",
      link: "",
    });
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null; // Clear file input
    }
  };
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    console.log(`${name}: ${value}`);
  };

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

  useEffect(() => {
    if (uploadMusicModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [uploadMusicModal]);

  return (
    <>
      <ModalOpen onClick={toggleUploadMusicModal}>
        <img src={OpenUploadMusic} alt="" />
        <div>악보 업로드</div>
      </ModalOpen>
      {uploadMusicModal && (
        <Modal>
          <Overlay onClick={toggleUploadMusicModal} />
          <ModalContent>
            <TopContainer>
              <Images src={ExitButton} alt="" onClick={toggleUploadMusicModal}/>
            </TopContainer>
            <MiddleContainer>
              <UploadImage>
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
                    src={ImageUploadLogo}
                    alt="악보추가 이미지"
                    border="0"
                  ></img>
                )}
              </UploadImage>
              <RightContainer>
                <InputContainer>
                  <InputText>곡 제목</InputText>
                  <InputValue placeholder="곡 제목을 입력해주세요" />
                </InputContainer>
                <InputContainer>
                  <InputText>곡 코드</InputText>
                  <UploadMusicDropdown />
                </InputContainer>{" "}
                <InputContainer>
                  <InputText>곡 버전</InputText>
                  <InputValue placeholder="곡의 버전을 선택해주세요" />
                </InputContainer>{" "}
                <InputContainer>
                  <InputText>영상 링크</InputText>
                  <InputValue placeholder="https://www.youtube.com" />
                </InputContainer>
              </RightContainer>
            </MiddleContainer>
            <UploadImageBtn onClick={handleImageUploadClick}>
              악보 업로드
              <input
                type="file"
                style={{ display: "none" }}
                onChange={handleFileInputChange}
                ref={fileInputRef}
              />
            </UploadImageBtn>
            <SubmitBtn onClick={toggleUploadMusicModal}>저장</SubmitBtn>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
