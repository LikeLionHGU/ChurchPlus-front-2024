import axios from "axios";

const getContiMusicInfo = async (musicIdList, memberId, groupId) => {
  try {
    const serverResponse = await axios.post(
      `${process.env.REACT_APP_HOST_URL}/church+/music/musicList/${groupId}`,
      {
        memberId,
        groupId,
        musicIdList,
      }
    );
    console.log("serverResponse:", serverResponse);
    return serverResponse.data.musics;
  } catch (error) {
    console.error("악보 불러오기 실패:", error);
    return [];
  }
};

export default getContiMusicInfo;