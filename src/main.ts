import "./style.css";

import { configureCanvas } from "./setup";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <canvas></canvas>
`;

const canvas = document.querySelector<HTMLCanvasElement>('canvas')!;

const {ctx, width, height} = configureCanvas(canvas);

console.log(ctx, width, height);