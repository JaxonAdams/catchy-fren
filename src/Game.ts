import { configureCanvas } from "./setup";
import Player from "./Player";
import GameMap from "./GameMap";

class Game {

    private ctx: CanvasRenderingContext2D;

    public gameWidth: number;
    public gameHeight: number;

    private gameMap;
    private player;

    constructor(canvas: HTMLCanvasElement) {
        const context = configureCanvas(canvas);

        this.ctx = context.ctx;
        this.gameWidth = context.width;
        this.gameHeight = context.height;

        const gameMapImage = new Image();
        gameMapImage.src = "src/assets/game_map.png";
        this.gameMap = new GameMap(gameMapImage);

        const playerImage = new Image();
        playerImage.src = "src/assets/playerDown.png";
        this.player = new Player(this.gameWidth / 2, this.gameHeight / 2, playerImage);
    }

    private handleInput(event: KeyboardEvent): void {
        this.player.handleMovement(event);
    };

    private animate = () => {
        window.requestAnimationFrame(this.animate);
        this.gameMap.draw(this.ctx);
        this.player.draw(this.ctx);
    };

    public init(): void {
        this.ctx.fillStyle = "#67e6d2";  // same color as the ocean on our map
    };

    public run(): void {
        window.addEventListener("keydown", e => this.handleInput(e));

        this.ctx?.fillRect(0, 0, this.gameWidth, this.gameHeight);
        
        this.animate();
    };
}

export default Game;
