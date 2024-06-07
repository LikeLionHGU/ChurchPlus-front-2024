import axios from "axios";

const updateTeamDescription = async (groupId, memberId, description) => {
  try {
    const serverResponse = await axios.patch(
      `${process.env.REACT_APP_HOST_URL}/church+/group/update/${groupId}/${memberId}`,
      {
        description,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("serverResponse:", serverResponse);
    return serverResponse.data;
  } catch (error) {
    console.error("팀 정보 수정 실패:", error);
    return [];
  }
};

export default updateTeamDescription;
