import { atom } from "recoil";

export const memberIdState = atom({
  key: "memberIdState",
  default: 0,
});

export const introModalState = atom({
  key: "introModalState",
  default: false,
});

export const searchBarModalState = atom({
  key: "searchBarModalState",
  default: false,
});

export const KeyModalState = atom({
  key: "KeyModalState",
  default: false,
});

export const uploadModalState = atom({
  key: "uploadModalState",
  default: false,
});

export const readMusicModalState = atom({
  key: "readMusicModalState",
  default: false,
});

export const readMusicModalMemoState = atom({
  key: "readMusicModalMemoState",
  default: false,
});

export const musicIdState = atom({
  key: "musicIdState",
  default: null,
});

export const setListIdState = atom({
  key: "setListIdState",
  default: null,
});

export const musicIdListState = atom({
  key: "musicIdListState",
  default: [],
});

export const contiStepModalState = atom({
  key: "contiStepModalState",
  default: false,
});

export const contiIdState = atom({
  key: "contiIdState",
  default: null,
});

export const contiMusicIndexState = atom({
  key: "contiMusicIndexState",
  default: null,
})

export const newMemberState = atom({
  key: "newMemberState",
  default: false,
})

export const monthState = atom({
  key: "monthState",
  default: "06"
})

export const yearState = atom({
  key: "yearState",
  default: "2024",
})