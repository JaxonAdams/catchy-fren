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

interface CanvasConfig {
    ctx: CanvasRenderingContext2D | null;
    width: number;
    height: number;
};

export { configureCanvas };