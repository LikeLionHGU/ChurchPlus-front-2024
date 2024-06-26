import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import vectorIcons from "../../assets/Icons/Vector.svg";

const KeyItems = styled.div`
  margin-top: 6px;
  border: 1px solid #9d9d9d;
  font-size: 18px;
  width: 280px;
  height: 88px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.08);

  display: ${({ isActive }) => (isActive ? "block" : "none")};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  height: 10vh;
  margin-right: 20px;

  position: relative;
  /* 부모 컨테이너를 기준으로 자식 컴포넌트의 위치를 조정하기 위해 relative를 설정  */
  z-index: 1;

  /* isActive가 true일 때만 드롭다운을 보이도록 설정 */
  ${KeyItems} {
    display: ${({ isActive }) => (isActive ? "block" : "none")};
    position: absolute; /* 드롭다운을 절대 위치로 설정 */
    top: 45px; /* 드롭다운이 키 컴포넌트 아래에 위치하도록 조정 */
    left: 0;
  }
`;

const KeyDropdown = styled.div`
  font-family: "GmarketSansMedium";
  width: 97px;
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
    padding-right: 20px;
    float: right;
  }
`;

const KeyItemTop = styled.div`
  margin: 14px 0 10px 25px;
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
  margin: 11px 0 10px 25px;
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

function KeySelectDropdown({ setSearch }) {
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
      setSearch(""); // 선택이 해제되었음을 상위 컴포넌트에 알림
    } else {
      setSelected(keyOption);
      setSearch(keyOption.label); // 선택한 키 레이블을 상위 컴포넌트로 전달
    }
    setIsActive(false);
  };
  return (
    <Wrapper isActive={isActive}>
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

export default KeySelectDropdown;
