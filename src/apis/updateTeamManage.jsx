import axios from "axios";

const updateTeamManage = async (formDataToSend, groupId) => {
  try {
    const serverResponse = await axios.patch(
      `${process.env.REACT_APP_HOST_URL}/church+/group/${groupId}`,
      formDataToSend,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log("변경사항이 정상적으로 수정되었음", serverResponse);

    return serverResponse.data;
  } catch (error) {
    console.error("팀 관리페이지 수정 실패:", error);
    throw error;
  }
};

export default updateTeamManage;
