import {
  elgameZoneInner,
  elHands,
  elrefreshGame,
  elmodeChanger,
  elRules,
  elRulesModal,
  elrulesImage,
} from "./html-element.js";
import { sectionSwapper } from "./section-swapper-.js";
import { uiChanger } from "./ui-changer.js";
import { robotChooser } from "./robot-chooser.js";
import { refresh } from "./refresh-game.js";

elHands.forEach((element) => {
  element.addEventListener("click", function (e) {
    uiChanger(e.target.alt);
    sectionSwapper(true);
  });
});

// refresh Game
elrefreshGame.addEventListener("click", function () {
  refresh();
});

robotChooser();

elmodeChanger.addEventListener("click", function () {
  const mode = elgameZoneInner.dataset.mode;
  if(mode === "simple") {
    elgameZoneInner.dataset.mode = "advanced";
    elrulesImage.src = "./img/rule-advanced.svg";
    elmodeChanger.innerText = "simple";
  } else if(mode === "advanced") {
    elgameZoneInner.dataset.mode = "simple";
    elrulesImage.src = "./img/rule-basic.svg";
    elmodeChanger.innerText = "advanced";
  } else {
    elgameZoneInner.dataset.mode = "simple";
    elrulesImage.src = "./img/rule-basic.svg";
    elmodeChanger.innerText = "advanced";
  }
});


elRules.addEventListener("click", function () {
  console.log(elRulesModal.showModal());
});
