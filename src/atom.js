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
})
