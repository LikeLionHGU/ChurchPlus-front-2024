import axios from "axios";

const groupList = async (memberId) => {
    try {
      const serverResponse = await axios.get(
        // `${process.env.REACT_APP_HOST_URL}/church+/folder/list/${month}`
        `${process.env.REACT_APP_HOST_URL}/church+/group/list/member/${memberId}`
      );
      console.log("serverResponse:", serverResponse);
      return serverResponse.data.groups;
    } catch (error) {
      console.error("그룹 불러오기 실패:", error);
      return [];
    }
  };

  export default groupList;