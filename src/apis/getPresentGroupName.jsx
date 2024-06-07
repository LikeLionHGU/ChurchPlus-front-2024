import axios from "axios";

const PresentGroupName = async (groupId) => {
  try {
    const serverResponse = await axios.get(
      // `${process.env.REACT_APP_HOST_URL}/church+/folder/list/${month}`
      `${process.env.REACT_APP_HOST_URL}/church+/group/${groupId}`
    );
    console.log("serverResponse:", serverResponse);
    console.log("serverResponse:", serverResponse.data);
    return serverResponse.data;
  } catch (error) {
    console.error("그룹 불러오기 실패:", error);
    return [];
  }
};

export default PresentGroupName;
