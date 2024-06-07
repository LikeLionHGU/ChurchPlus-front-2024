import axios from "axios";

const getImageDownloadUrl = async (musicId) => {
    try {
      const serverResponse = await axios.get(
        `${process.env.REACT_APP_HOST_URL}/church+/music/download/${musicId}`
      );
      console.log("serverRespon:", serverResponse);
      return serverResponse.data;
    } catch (error) {
      console.error("악보 불러오기 실패:", error);
      return [];
    }
  };

  export default getImageDownloadUrl;