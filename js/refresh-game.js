import { elRobot, elStatus } from "./html-Element.js";
import { sectionSwapper } from "./section-swapper-.js";

export function refresh() {
  elRobot.src = "./img/hand-load.svg";
  elStatus.innerText = "";
  sectionSwapper(false);
}