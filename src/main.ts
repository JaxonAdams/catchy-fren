import { configureCanvas, initialDraw } from "./setup";

import "./assets/style.css";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <canvas></canvas>
`;

const canvas = document.querySelector<HTMLCanvasElement>('canvas')!;
const {ctx, width, height} = configureCanvas(canvas);

if (!ctx) {
  throw new Error("Canvas context not found");
}

initialDraw(ctx, width, height);