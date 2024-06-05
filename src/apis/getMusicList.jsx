import axios from "axios";

const getMusicList = async (groupId) => {
    try {
      const serverResponse = await axios.get(
        `${process.env.REACT_APP_HOST_URL}/church+/music/list/${groupId}`
      );
      console.log("serverRespon:", serverResponse);
      return serverResponse.data.musics;
    } catch (error) {
      console.error("악보 불러오기 실패:", error);
      return [];
    }
  };

  export default getMusicList;