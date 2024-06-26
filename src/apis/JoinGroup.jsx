import axios from "axios";

// 새로운 그룹을 생성하는 API
const joinGroup = async (invitationCode, memberId, position, nickname) => {
  try {
    const serverResponse = await axios.post(
      `${process.env.REACT_APP_HOST_URL}/church+/group/add`,
      {
        invitationCode,
        memberId,
        position,
        nickname,
      }
    );
    // 서버로부터의 응답 처리
    console.log("그룹에 정상적으로 들어옴", serverResponse);

    // groupId를 로컬 스토리지에 저장
    localStorage.setItem("groupId", serverResponse.data.groupId);

    return serverResponse.data; //서버에서 반환한 데이터를 반환할 수 있음
  } catch (error) {
    // 서버 통신 중 에러 처리
    console.error("그룹 추가 실패:", error);
    throw error; // 에러를 상위 컴포넌트로 전파하거나 다른 처리를 할 수 있음
  }
};

export default joinGroup;