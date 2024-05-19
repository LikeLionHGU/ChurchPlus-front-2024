import { atom } from "recoil";

export const memberIdState = atom({
  key: "memberIdState",
  default: 0,
});

export const introModalState = atom({
  key: "introModalState",
  default: false, 
})

export const searchBarModalState = atom({
  key: "searchBarModalState",
  default: false,
})

export const KeyModalState = atom({
  key: "KeyModalState",
  default: false,
})

export const uploadModalState = atom({
  key: "uploadModalState",
  default: false,
})