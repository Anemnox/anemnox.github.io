import { initScrolling } from "./scrollHandler";
import { initAndDraw } from "./planets";
import { initPieChart } from "./pie";


function main() {
  initScrolling();
  initAndDraw();
  initPieChart();
}


window.addEventListener("load", main);
