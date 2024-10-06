import { configureCanvas } from "./setup";

class Game {

    private ctx: CanvasRenderingContext2D;

    private gameWidth: number;
    private gameHeight: number;

    constructor(canvas: HTMLCanvasElement) {
        const context = configureCanvas(canvas);

        this.ctx = context.ctx;
        this.gameWidth = context.width;
        this.gameHeight = context.height;
    }

    private initialDraw(ctx: CanvasRenderingContext2D, width: number, height: number): void {
        ctx.fillStyle = "#67e6d2";  // same color as the ocean on our map
        ctx?.fillRect(0, 0, width, height);
        
        const gameMap = new Image();
        gameMap.src = "src/assets/game_map.png";
        
        const playerImg = new Image();
        playerImg.src = "src/assets/playerDown.png";
    
        // game map will load before the player image
        gameMap.onload = () => {
          ctx?.drawImage(gameMap, -950, -400);
          playerImg.onload = () => {
            ctx?.drawImage(
                playerImg,                         // image
                0,                                 // crop x start
                0,                                 // crop y start
                playerImg.width / 4,               // crop width
                playerImg.height,                  // crop height
                width / 2 - playerImg.width / 8,   // x position
                height / 2 - playerImg.height / 8, // y position
                playerImg.width / 4,               // width
                playerImg.height                   // height
            );
          };
        };
    };

    public init(): void {
        this.initialDraw(this.ctx, this.gameWidth, this.gameHeight);
    }
}

export default Game;