import { findWinner } from "./find-winner.js";
import { elgameZoneInner, elRobot, elUser } from "./html-Element.js";
import { robotChooser } from "./robot-chooser.js";
import { elStatus } from "./html-Element.js";

export function uiChanger(variant) {
  elUser.src = `./img/${variant}.svg`;
  setTimeout(() => {
    const robot = robotChooser(elgameZoneInner.dataset.mode);
    elRobot.src = `./img/${robot}.svg`;
    const winner = findWinner(variant, robot);
    elStatus.innerText = `WIN ${winner.toLocaleUpperCase()}`;
  }, 1000);
}