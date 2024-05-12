import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import vectorIcons from "../../assets/Icons/Vector.svg";

const Wrapper = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  height: 10vh;
  margin-right: 20px;

  position: relative;
  z-index: 1;
`;

const KeyDropdown = styled.div`
  font-family: "GmarketSansMedium";
  width: 107px;
  height: 31px;
  padding-left: 10px;
  padding-top: 11px;
  border: 1px solid #9d9d9d;
  border-radius: 16px;
  /* margin-bottom: 0.3rem; */
  text-align: center;
  font-size: 16px;

  cursor: pointer;

  img {
    height: 8px;
    padding-top: 7px;
    padding-right: 22px;
    float: right;
  }
`;

const KeyItems = styled.div`
  margin-top: 6px;
  border: 1px solid #9d9d9d;
  font-size: 18px;
  width: 266px;
  height: 88px;
  border-radius: 10px;
  background-color: white;

  display: ${({ isActive }) => (isActive ? "block" : "none")};
`;

const KeyItemTop = styled.div`
  margin: 14px 0 10px 20px;
  /* border: 1px solid red; */
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
  margin: 11px 0 10px 20px;
  /* border: 1px solid red; */
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

function SelectKeyDropdown({ setSelectedKey }) {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState({ label: "", value: "" });
  const dropdownRef = useRef(null); // 드롭다운 요소에 대한 ref를 생성

  useEffect(() => {
    // document에 클릭 이벤트 리스너 추가
    document.addEventListener("click", handleClickOutside);

    return () => {
      // 컴포넌트 언마운트시 이벤트 리스너 제거
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    // 클릭한 요소가 드롭다운 외부에 있을 경우 드롭다운을 닫음
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
      // 이미 선택된 레이블을 다시 선택한 경우 선택을 해제
      setSelected({ label: "", value: "" });
      setSelectedKey(""); // 선택이 해제되었음을 상위 컴포넌트에 알림
    } else {
      setSelected(keyOption);
      setSelectedKey(keyOption.label); // 선택한 키 레이블을 상위 컴포넌트로 전달
    }
    setIsActive(false);
  };
  return (
    <Wrapper>
      <div ref={dropdownRef}>
        <KeyDropdown onClick={(e) => setIsActive(!isActive)}>
          {selected.label !== "" ? selected.label : ""} Key
          <span>
            <img src={vectorIcons} alt="벡터 아이콘" />
          </span>
        </KeyDropdown>
        <KeyItems style={{ display: isActive ? "block" : "none" }}>
          {isActive && (
            <KeyItemTop>
              {keyOptions1.map((keyOption) => (
                <span
                  key={keyOption.value} // key 속성은 고유해야 함.
                  onClick={(e) => handleSelect(keyOption)}
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
                  key={keyOption.value} // key 속성은 고유해야 하므로 keyOption.value로 변경
                  onClick={(e) => handleSelect(keyOption)}
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

export default SelectKeyDropdown;
