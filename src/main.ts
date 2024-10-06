import Game from "./Game";

import "./assets/style.css";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <canvas></canvas>
`;

const canvas = document.querySelector<HTMLCanvasElement>('canvas')!;
const game = new Game(canvas);

game.init();