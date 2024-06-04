import axios from "axios";

const getGroupInfo = async (groupId) => {
    try {
      const serverResponse = await axios.get(
        // `${process.env.REACT_APP_HOST_URL}/church+/folder/list/${month}`
        `${process.env.REACT_APP_HOST_URL}/church+/group/list/group/${groupId}`
      );
      console.log("serverRespon:", serverResponse);
      return serverResponse.data.memberGroups;
    } catch (error) {
      console.error("그룹 불러오기 실패:", error);
      return [];
    }
  };

  export default getGroupInfo;