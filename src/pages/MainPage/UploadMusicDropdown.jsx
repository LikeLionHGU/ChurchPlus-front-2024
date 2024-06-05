// import React, { useEffect, useRef, useState } from "react";
// import styled from "styled-components";
// import KeyDropdownIcon from "../../asset/Images/Icons/TeamDropdownIcon.svg";

// const KeyItems = styled.div`
//   margin-top: 8px;
//   border: 1px solid #9d9d9d;
//   font-size: 18px;
//   width: 308px;
//   height: 88px;
//   border-radius: 10px;
//   background-color: white;

//   display: ${({ isActive }) => (isActive ? "block" : "none")};
// `;

// const Wrapper = styled.div`
//   display: flex;
//   align-items: left;
//   flex-direction: column;
//   position: relative;
//   z-index: 1;

//   ${KeyItems} {
//     display: ${({ isActive }) => (isActive ? "block" : "none")};
//     position: absolute;
//     top: 45px;
//     left: 0;
//   }
// `;

// const KeyDropdown = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   border: 1px solid #c0c0c0;
//   color: ${({ isSelected }) =>
//     isSelected ? "black" : "gray"}; /* Conditional color */
//   border-radius: 10px;
//   margin-top: 5px;
//   height: 42px;
//   font-family: "GmarketSansLight";
//   padding-left: 10px;
//   font-size: 16px;
//   cursor: pointer;
//   img {
//     margin-right: 10px;
//   }
// `;

// const KeyItemTop = styled.div`
//   margin: 14px 0 10px 38px;
//   height: 28px;
//   width: 215px;
//   font-size: 18px;

//   span {
//     border: 0.9px solid black;
//     height: 28px;
//     width: 33px;
//     border-radius: 6px;
//     padding: 4.4px;
//     margin-right: 8px;
//     cursor: pointer;
//   }
//   span:hover {
//     background-color: #e8e8e8;
//   }
// `;

// const KeyItemBottom = styled.div`
//   margin: 11px 0 10px 33px;
//   height: 28px;
//   width: 226px;
//   font-size: 18px;

//   span {
//     border: 0.9px solid black;
//     height: 28px;
//     width: 33px;
//     border-radius: 6px;
//     padding: 4.3px;
//     margin-right: 10px;
//     cursor: pointer;
//   }

//   span:hover {
//     background-color: #e8e8e8;
//   }
// `;

// function UploadMusicDropdown() {
//   const [isActive, setIsActive] = useState(false);
//   const [selected, setSelected] = useState({ label: "", value: "" });
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     document.addEventListener("click", handleClickOutside);

//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setIsActive(false);
//     }
//   };

//   const keyOptions1 = [
//     { label: "Db", value: 1 },
//     { label: "Eb", value: 2 },
//     { label: "Gb", value: 3 },
//     { label: "Ab", value: 4 },
//     { label: "Bb", value: 5 },
//   ];

//   const keyOptions2 = [
//     { label: "C", value: 6 },
//     { label: "D", value: 7 },
//     { label: "E", value: 8 },
//     { label: "F", value: 9 },
//     { label: "G", value: 10 },
//     { label: "A", value: 11 },
//     { label: "B", value: 12 },
//   ];

//   const handleSelect = (keyOption) => {
//     if (selected.label === keyOption.label) {
//       setSelected({ label: "", value: "" });
//     } else {
//       setSelected({ label: keyOption.label, value: keyOption.value });
//     }
//     setIsActive(false);
//   };

//   return (
//     <Wrapper isActive={isActive}>
//       <div ref={dropdownRef}>
//         <KeyDropdown
//           isSelected={selected.label !== ""}
//           onClick={() => setIsActive(!isActive)}
//         >
//           {selected.label !== ""
//             ? `${selected.label} Key`
//             : "곡의 코드를 선택해주세요"}
//           <img src={KeyDropdownIcon} alt="키 드롭다운 아이콘" />
//         </KeyDropdown>
//         <KeyItems style={{ display: isActive ? "block" : "none" }}>
//           {isActive && (
//             <KeyItemTop>
//               {keyOptions1.map((keyOption) => (
//                 <span
//                   key={keyOption.value}
//                   onClick={() => handleSelect(keyOption)}
//                 >
//                   {keyOption.label}
//                 </span>
//               ))}
//             </KeyItemTop>
//           )}
//           {isActive && (
//             <KeyItemBottom>
//               {keyOptions2.map((keyOption) => (
//                 <span
//                   key={keyOption.value}
//                   onClick={() => handleSelect(keyOption)}
//                 >
//                   {keyOption.label}
//                 </span>
//               ))}
//             </KeyItemBottom>
//           )}
//         </KeyItems>
//       </div>
//     </Wrapper>
//   );
// }

// export default UploadMusicDropdown;

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import KeyDropdownIcon from "../../asset/Images/Icons/TeamDropdownIcon.svg";

const KeyItems = styled.div`
  margin-top: 8px;
  border: 1px solid #9d9d9d;
  font-size: 18px;
  width: 308px;
  height: 88px;
  border-radius: 10px;
  background-color: white;

  display: ${({ isActive }) => (isActive ? "block" : "none")};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  position: relative;
  z-index: 1;

  ${KeyItems} {
    display: ${({ isActive }) => (isActive ? "block" : "none")};
    position: absolute;
    top: 45px;
    left: 0;
  }
`;

const KeyDropdown = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #c0c0c0;
  color: ${({ isSelected }) =>
    isSelected ? "black" : "gray"}; /* Conditional color */
  border-radius: 10px;
  margin-top: 5px;
  height: 42px;
  font-family: "GmarketSansLight";
  padding-left: 10px;
  font-size: 16px;
  cursor: pointer;
  img {
    margin-right: 10px;
  }
`;

const KeyItemTop = styled.div`
  margin: 14px 0 10px 38px;
  height: 28px;
  width: 215px;
  font-size: 18px;

  span {
    border: 0.9px solid black;
    height: 28px;
    width: 33px;
    border-radius: 6px;
    padding: 4.4px;
    margin-right: 8px;
    cursor: pointer;
  }
  span:hover {
    background-color: #e8e8e8;
  }
`;

const KeyItemBottom = styled.div`
  margin: 11px 0 10px 33px;
  height: 28px;
  width: 226px;
  font-size: 18px;

  span {
    border: 0.9px solid black;
    height: 28px;
    width: 33px;
    border-radius: 6px;
    padding: 4.3px;
    margin-right: 10px;
    cursor: pointer;
  }

  span:hover {
    background-color: #e8e8e8;
  }
`;

function UploadMusicDropdown({ onSelect }) {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState({ label: "", value: "" });
  const dropdownRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  const keyOptions1 = [
    { label: "Db", value: 1 },
    { label: "Eb", value: 2 },
    { label: "Gb", value: 3 },
    { label: "Ab", value: 4 },
    { label: "Bb", value: 5 },
  ];

  const keyOptions2 = [
    { label: "C", value: 6 },
    { label: "D", value: 7 },
    { label: "E", value: 8 },
    { label: "F", value: 9 },
    { label: "G", value: 10 },
    { label: "A", value: 11 },
    { label: "B", value: 12 },
  ];

  const handleSelect = (keyOption) => {
    if (selected.label === keyOption.label) {
      setSelected({ label: "", value: "" });
      onSelect("");
    } else {
      setSelected({ label: keyOption.label, value: keyOption.value });
      onSelect(keyOption.label);
      console.log("Selected key:", keyOption.label);
    }
    setIsActive(false);
  };

  return (
    <Wrapper isActive={isActive}>
      <div ref={dropdownRef}>
        <KeyDropdown
          isSelected={selected.label !== ""}
          onClick={() => setIsActive(!isActive)}
        >
          {selected.label !== ""
            ? `${selected.label} Key`
            : "곡의 코드를 선택해주세요"}
          <img src={KeyDropdownIcon} alt="키 드롭다운 아이콘" />
        </KeyDropdown>
        <KeyItems style={{ display: isActive ? "block" : "none" }}>
          {isActive && (
            <KeyItemTop>
              {keyOptions1.map((keyOption) => (
                <span
                  key={keyOption.value}
                  onClick={() => handleSelect(keyOption)}
                >
                  {keyOption.label}
                </span>
              ))}
            </KeyItemTop>
          )}
          {isActive && (
            <KeyItemBottom>
              {keyOptions2.map((keyOption) => (
                <span
                  key={keyOption.value}
                  onClick={() => handleSelect(keyOption)}
                >
                  {keyOption.label}
                </span>
              ))}
            </KeyItemBottom>
          )}
        </KeyItems>
      </div>
    </Wrapper>
  );
}

export default UploadMusicDropdown;
