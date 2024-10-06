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
    ctx.fillStyle = "#67e6d2";
    ctx?.fillRect(0, 0, width, height);
    
    const gameMap = new Image();
    gameMap.src = "src/assets/game_map.png";
    
    gameMap.onload = () => {
      ctx?.drawImage(gameMap, -900, -500);
    };
};

interface CanvasConfig {
    ctx: CanvasRenderingContext2D | null;
    width: number;
    height: number;
};

export { configureCanvas, initialDraw };