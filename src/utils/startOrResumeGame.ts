import { type ArrayIcons } from "../types";

const startOrResumeGame = (): ArrayIcons[] => {
  const currentArray: ArrayIcons = window.localStorage.getItem("currentArray");

  if (currentArray) {
    return JSON.parse(currentArray) as ArrayIcons[];
  }

  return Array(9).fill(null) as ArrayIcons[];
};

export default startOrResumeGame;
