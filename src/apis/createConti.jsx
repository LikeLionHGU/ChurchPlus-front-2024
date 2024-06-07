import axios from "axios";

// 새로운 그룹을 생성하는 API
const createConti = async (requestDate) => {
  try {
    const serverResponse = await axios.post(
      `${process.env.REACT_APP_HOST_URL}/church+/setList/create`,
        requestDate
    );
    // 서버로부터의 응답 처리
    console.log("콘티가 정상적으로 추가되었음", serverResponse);
    return serverResponse;
  } catch (error) {
    // 서버 통신 중 에러 처리
    console.error("콘티 추가 실패:", error);
    throw error; // 에러를 상위 컴포넌트로 전파하거나 다른 처리를 할 수 있음
  }
};

export default createConti;