import { configureCanvas } from "./setup";
import Player from "./Player";
import GameMap from "./GameMap";

class Game {

    private ctx: CanvasRenderingContext2D;

    public gameWidth: number;
    public gameHeight: number;

    private gameMap;
    private player;

    private keys: Keys = {
        "w": {pressed: false},
        "a": {pressed: false},
        "s": {pressed: false},
        "d": {pressed: false},
        "ArrowUp": {pressed: false},
        "ArrowLeft": {pressed: false},
        "ArrowDown": {pressed: false},
        "ArrowRight": {pressed: false},
    };

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

    private handleKeyDown(event: KeyboardEvent): void {
        if (this.keys && event.key in this.keys) {
            this.keys[event.key].pressed = true;
        }
    };

    private handleKeyUp(event: KeyboardEvent): void {
        if (this.keys && event.key in this.keys) {
            this.keys[event.key].pressed = false;
        }
    }

    private animate = () => {
        window.requestAnimationFrame(this.animate);

        const direction = {x: 0, y: 0}
        
        if (this.keys.w.pressed || this.keys.ArrowUp.pressed) {
            direction.y += 1;
        }

        if (this.keys.s.pressed || this.keys.ArrowDown.pressed) {
            direction.y -= 1;
        }

        if (this.keys.a.pressed || this.keys.ArrowLeft.pressed) {
            direction.x += 1;
        }

        if (this.keys.d.pressed || this.keys.ArrowRight.pressed) {
            direction.x -= 1;
        }

        const magnitude = Math.sqrt(direction.x * direction.x + direction.y * direction.y);
        if (magnitude > 0) {
            direction.x /= magnitude;
            direction.y /= magnitude;
        }

        this.gameMap.position.x += direction.x * this.player.speed;
        this.gameMap.position.y += direction.y * this.player.speed;

        this.gameMap.draw(this.ctx);
        this.player.draw(this.ctx);
    };

    public init(): void {
        this.ctx.fillStyle = "#67e6d2";  // same color as the ocean on our map
    };

    public run(): void {
        window.addEventListener("keydown", e => this.handleKeyDown(e));
        window.addEventListener("keyup", e => this.handleKeyUp(e));

        this.ctx?.fillRect(0, 0, this.gameWidth, this.gameHeight);
        
        this.animate();
    };
}

interface Keys {
    [key: string]: {pressed: boolean}
}

export default Game;
