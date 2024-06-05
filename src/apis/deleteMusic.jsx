import axios from "axios";

const deleteMusic = async (musicId) => {
    try {
      const serverResponse = await axios.delete(
        `${process.env.REACT_APP_HOST_URL}/church+/music/${musicId}`
      );
      
    } catch (error) {
      console.error("악보 삭제 실패:", error);
    }
  };

  export default deleteMusic;