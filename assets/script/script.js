import { openModal, closeModal } from "./modules/menuModalController.js";
import { stickMenu } from "./modules/stickMenu.js";
import { scrollToTop } from "./modules/scrollToTop.js";
import { filterProducts } from "./modules/filterProducts.js";

document.addEventListener("DOMContentLoaded", () => {
  const functionsToCall = [
    { name: "openModal", func: openModal },
    { name: "closeModal", func: closeModal },
    { name: "stickMenu", func: stickMenu },
    { name: "scrollToTop", func: scrollToTop },
    { name: "filterProducts", func: filterProducts },
  ];

  functionsToCall.forEach(({ name, func }) => {
    if (typeof func === "function") {
      try {
        func();
      } catch (error) {
        console.log(`Erro ao executar ${name}: `, error);
      }
    } else {
      console.error(`${name} não é uma função válida.`);
    }
  });
});
