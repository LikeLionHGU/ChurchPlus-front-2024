import axios from "axios";

const deleteContiMusic = async (musicId,setListId) => {
    try {
        await axios.delete(
        `${process.env.REACT_APP_HOST_URL}/church+/setList/delete/${setListId}/${musicId}`
      );
      console.log("악보 삭제 성공")
      
    } catch (error) {
      console.error("악보 삭제 실패:", error);
    }
  };

  export default deleteContiMusic;