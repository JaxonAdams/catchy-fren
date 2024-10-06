import "./style.css";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <canvas></canvas>
`;

const canvas = document.querySelector<HTMLCanvasElement>('canvas')!;

console.log("Hello, World!");
console.log(canvas);