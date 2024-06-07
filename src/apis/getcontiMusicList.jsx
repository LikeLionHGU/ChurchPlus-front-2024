import axios from "axios";

const getContiMusicList = async (setListId) => {
    try {
      const serverResponse = await axios.get(
        `${process.env.REACT_APP_HOST_URL}/church+/setList/musicList/${setListId}`
      );
      console.log("serverRespon:", serverResponse);
      return serverResponse.data.musics;
    } catch (error) {
      console.error("악보 불러오기 실패:", error);
      return [];
    }
  };

  export default getContiMusicList;