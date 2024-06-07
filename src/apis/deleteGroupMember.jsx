import axios from "axios";

const deleteGroupMember = async (groupId, memberId) => {
  try {
    const serverResponse = await axios.delete(
      `${process.env.REACT_APP_HOST_URL}/church+/group/delete/${groupId}/${memberId}`
    );
  } catch (error) {
    console.error("악보 삭제 실패:", error);
  }
};

export default deleteGroupMember;
