import confetti from "canvas-confetti";

function execConfetti(): void {
  window.localStorage.clear();
  const canvaConfetti = async (): Promise<void> => {
    try {
      await confetti();
    } catch (error) {
      console.error(error);
    }
  };
  canvaConfetti()
    .then(() => {
      console.log();
    })
    .catch((error) => {
      console.error(error);
    });
}

export default execConfetti;
