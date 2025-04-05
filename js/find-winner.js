export function findWinner(user, robot) {
  if (user === robot) {
    return "tied";
  } else if (
    (user === "rock" && (robot === "scissors" || robot === "kaltakesak")) ||
    (user === "paper" && (robot === "rock" || robot === "dino")) ||
    (user === "scissors" && (robot === "paper" || robot === "kaltakesak")) ||
    (user === "kaltakesak" && (robot === "paper" || robot === "dino")) ||
    (user === "dino" && (robot === "scissors" || robot === "rock"))
  ) {
    return "user";
  } else {
    return "robot";
  }
}