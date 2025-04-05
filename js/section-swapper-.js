import { elgameZone, elsecondGameZone } from "./html-Element.js";

export function sectionSwapper(boolean) {
  if (boolean) {
    elgameZone.classList.add("hidden");
    elsecondGameZone.classList.remove("hidden");
  } else {
    elgameZone.classList.remove("hidden");
    elsecondGameZone.classList.add("hidden");
  }
}