const startOrResumeGame = (): boolean => {
  const whoIsTurn: string | null = window.localStorage.getItem("turnUser");
  if (whoIsTurn === "true") return false;
  if (whoIsTurn === "false") return true;
  return true;
};

export default startOrResumeGame;
