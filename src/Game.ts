import { configureCanvas, initialDraw } from "./setup";

class Game {

    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    private gameWidth: number;
    private gameHeight: number;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;

        const context = configureCanvas(canvas);

        this.ctx = context.ctx;
        this.gameWidth = context.width;
        this.gameHeight = context.height;


    }

    public init(): void {
        initialDraw(this.ctx, this.gameWidth, this.gameHeight);
    }
}

export default Game;