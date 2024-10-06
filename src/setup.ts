const configureCanvas = (canvas: HTMLCanvasElement): CanvasConfig => {
    const ctx = canvas.getContext("2d");

    if (!ctx) {
        throw new Error("Canvas context not found");
    }

    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;
    
    return {
        ctx,
        width,
        height
    };
};

interface CanvasConfig {
    ctx: CanvasRenderingContext2D;
    width: number;
    height: number;
};

export { configureCanvas };