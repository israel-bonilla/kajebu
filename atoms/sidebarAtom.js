import { atom } from 'recoil';

export const activeModuleState = atom({
  key: "activeModuleState",
  default: "",
});

export const activeSubmoduleState = atom({
  key: "activeSubmoduleState",
  default: "",
});