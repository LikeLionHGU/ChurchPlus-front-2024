import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import OpenUploadMusic from "../../assets/Icons/OpenUploadMusicLogo.svg";
import ImageUploadLogo from "../../asset/Images/Logos/ImageUploadLogo.svg";
import UploadMusicDropdown from "./UploadMusicDropdown.jsx";
import ExitButton from "../../asset/Images/Buttons/ExitButton.svg";
import createMusic from "../../apis/createSheet.jsx";

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
  padding-right: 6px;

  &:hover {
    background-color: #dfdfdf;
  }

  img {
    padding: 5px;
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
  font-size: 16px;
`;

const InputValue = styled.input`
  border: 1px solid #a6a6a6;
  border-radius: 10px;
  margin-top: 8px;
  height: 38px;
  font-family: "GmarketSansLight";
  padding-top: 4px;
  padding-left: 10px;

  &::placeholder {
    font-size: 16px;
  }
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
  img {
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
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.05), 0 3px 3px rgba(0, 0, 0, 0.05);
`;

// export default function UploadMusicModal() {
//   const [uploadMusicModal, UploadMusicModal] = useState(false);
//   const [previewUrl, setPreviewUrl] = useState(null);
//   const [formData, setFormData] = useState({
//     musicName: "",
//     code: "",
//     version: "",
//     link: "",
//   });
//   const toggleUploadMusicModal = () => {
//     UploadMusicModal((prevState) => !prevState);
//     setFormData({
//       musicName: "",
//       code: "",
//       version: "",
//       link: "",
//     });
//     setPreviewUrl(null);
//     if (fileInputRef.current) {
//       fileInputRef.current.value = null; // Clear file input
//     }
//   };
//   const fileInputRef = useRef(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));

//     console.log(`${name}: ${value}`);
//   };

//   const handleImageUploadClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleFileInputChange = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onload = () => {
//       setPreviewUrl(reader.result);
//       //사용자가 업로드한 이미지 확인
//       console.log("Uploaded image:", reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   useEffect(() => {
//     if (uploadMusicModal) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   }, [uploadMusicModal]);

//   const handleSubmit = async () => {
//     console.log(formData);
//     try {
//       const { musicName, code, link, description, version } = formData;
//       //만일 사용자가 폴더 이름에 -를 사용할 경우 에러 발생할 수 있음
//       const path = `main`;
//       const formattedPath = path.replace("/", "-");
//       const groupId = localStorage.getItem("groupId");

//       const formDataToSend = new FormData();
//       formDataToSend.append("musicName", musicName);
//       formDataToSend.append("code", code);
//       formDataToSend.append("link", link);
//       formDataToSend.append("description", description);
//       formDataToSend.append("groupId", groupId);
//       formDataToSend.append("version", version);
//       formDataToSend.append("path", formattedPath);
//       if (fileInputRef.current.files.length > 0) {
//         formDataToSend.append("image", fileInputRef.current.files[0]);
//       }

//       // createMusic 함수 호출
//       await createMusic(formDataToSend);

//       toggleUploadMusicModal();
//       window.location.reload();
//     } catch (error) {
//       // 에러 처리
//       console.error("악보 추가 실패:", error);
//       // 에러 상태에 따라 사용자에게 알림을 제공하는 등의 추가 작업 수행 가능
//     }
//   };

//   return (
//     <>
//       <ModalOpen onClick={toggleUploadMusicModal}>
//         <img src={OpenUploadMusic} alt="" />
//         <div>악보 업로드</div>
//       </ModalOpen>
//       {uploadMusicModal && (
//         <Modal>
//           <Overlay onClick={toggleUploadMusicModal} />
//           <ModalContent>
//             <TopContainer>
//               <Images
//                 src={ExitButton}
//                 alt=""
//                 onClick={toggleUploadMusicModal}
//               />
//             </TopContainer>
//             <MiddleContainer>
//               <UploadImage>
//                 {previewUrl ? (
//                   <img
//                     src={previewUrl}
//                     alt="Uploaded"
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                     }}
//                   />
//                 ) : (
//                   <img
//                     src={ImageUploadLogo}
//                     alt="악보추가 이미지"
//                     border="0"
//                   ></img>
//                 )}
//               </UploadImage>
//               <RightContainer>
//                 <InputContainer>
//                   <InputText>곡 제목</InputText>
//                   <InputValue placeholder="곡 제목을 입력해주세요" />
//                 </InputContainer>
//                 <InputContainer>
//                   <InputText>곡 코드</InputText>
//                   <UploadMusicDropdown />
//                 </InputContainer>{" "}
//                 <InputContainer>
//                   <InputText>곡 버전</InputText>
//                   <InputValue placeholder="곡의 버전을 선택해주세요" />
//                 </InputContainer>{" "}
//                 <InputContainer>
//                   <InputText>영상 링크</InputText>
//                   <InputValue placeholder="https://www.youtube.com" />
//                 </InputContainer>
//               </RightContainer>
//             </MiddleContainer>
//             <UploadImageBtn onClick={handleImageUploadClick}>
//               악보 업로드
//               <input
//                 type="file"
//                 style={{ display: "none" }}
//                 onChange={handleFileInputChange}
//                 ref={fileInputRef}
//               />
//             </UploadImageBtn>
//             <SubmitBtn onClick={handleSubmit}>저장</SubmitBtn>
//           </ModalContent>
//         </Modal>
//       )}
//     </>
//   );
// }

export default function UploadMusicModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [formData, setFormData] = useState({
    musicName: "",
    code: "",
    version: "",
    link: "",
    description: "",
  });
  const fileInputRef = useRef(null);

  const handleCodeSelect = (selectedCode) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      code: selectedCode, // Set the selected code in the formData
    }));
  };

  const toggleUploadMusicModal = () => {
    setIsModalOpen((prevState) => !prevState);
    setFormData({
      musicName: "",
      code: "",
      version: "",
      link: "",
      description: "",
    });
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null; // 파일 입력 초기화
    }
  };

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

  // const handleFileInputChange = (event) => {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     setPreviewUrl(reader.result);
  //     console.log("Uploaded image:", reader.result);
  //   };
  //   reader.readAsDataURL(file);
  // };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];

    if (file instanceof Blob) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result);
        console.log("Uploaded image:", reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      console.error("전달된 파일이 Blob 형식이 아닙니다.");
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  const handleSubmit = async () => {
    console.log("Form Data Submitted: ", formData);
    try {
      const { musicName, code, link, description, version } = formData;
      const path = `main`;
      const formattedPath = path.replace("/", "-");
      const groupId = localStorage.getItem("groupId");
      console.log("Group ID:", groupId);

      const formDataToSend = new FormData();
      formDataToSend.append("musicName", musicName);
      formDataToSend.append("code", code);
      formDataToSend.append("link", link);
      formDataToSend.append("description", description);
      formDataToSend.append("groupId", groupId);
      formDataToSend.append("version", version);
      formDataToSend.append("path", formattedPath);
      if (fileInputRef.current.files.length > 0) {
        formDataToSend.append("image", fileInputRef.current.files[0]);
      }

      await createMusic(formDataToSend);

      toggleUploadMusicModal();
      window.location.reload();
    } catch (error) {
      console.error("악보 추가 실패:", error);
    }
  };

  return (
    <>
      <ModalOpen onClick={toggleUploadMusicModal}>
        <img src={OpenUploadMusic} alt="" />
        <div>악보 업로드</div>
      </ModalOpen>
      {isModalOpen && (
        <Modal>
          <Overlay onClick={toggleUploadMusicModal} />
          <ModalContent>
            <TopContainer>
              <Images
                src={ExitButton}
                alt=""
                onClick={toggleUploadMusicModal}
              />
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
                  <InputValue
                    name="musicName"
                    value={formData.musicName}
                    onChange={handleInputChange}
                    placeholder="곡 제목을 입력해주세요"
                  />
                </InputContainer>
                <InputContainer>
                  <InputText>곡 코드</InputText>
                  <UploadMusicDropdown
                    name="code"
                    value={formData.code}
                    onChange={handleInputChange}
                    onSelect={handleCodeSelect}
                  />
                </InputContainer>
                <InputContainer>
                  <InputText>곡 버전</InputText>
                  <InputValue
                    name="version"
                    value={formData.version}
                    onChange={handleInputChange}
                    placeholder="곡의 버전을 선택해주세요"
                  />
                </InputContainer>
                <InputContainer>
                  <InputText>영상 링크</InputText>
                  <InputValue
                    name="link"
                    value={formData.link}
                    onChange={handleInputChange}
                    placeholder="https://www.youtube.com"
                  />
                </InputContainer>
                {/* <InputContainer>
                  <InputText>설명</InputText>
                  <InputValue
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="설명을 입력해주세요"
                  />
                </InputContainer> */}
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
            <SubmitBtn onClick={handleSubmit}>저장</SubmitBtn>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
