import axios from "axios";

const getMusicInfo = async (musicId) => {
    try {
      const serverResponse = await axios.get(
        `${process.env.REACT_APP_HOST_URL}/church+/music/${musicId}`
      );
      console.log("serverRespon:", serverResponse);
      return serverResponse.data;
    } catch (error) {
      console.error("악보 불러오기 실패:", error);
      return [];
    }
  };

  export default getMusicInfo;