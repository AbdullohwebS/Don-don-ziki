export function robotChooser(mode) {
  const hands = mode === "advanced" ? [("paper", "rock", "scissors", "dino", "kaltakesak")] : [("paper", "rock", "scissors")];
  const randomIndex = Math.trunc(Math.random() * hands.length);
  return hands[randomIndex];
}