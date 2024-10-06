const configureCanvas = (canvas: HTMLCanvasElement): CanvasConfig => {
    const ctx = canvas.getContext("2d");

    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;
    
    return {
        ctx,
        width,
        height
    };
};

const initialDraw = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
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

interface CanvasConfig {
    ctx: CanvasRenderingContext2D | null;
    width: number;
    height: number;
};

export { configureCanvas, initialDraw };