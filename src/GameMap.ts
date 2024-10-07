class GameMap {

    private posX;
    private posY;
    private image;

    constructor(image: HTMLImageElement) {
        this.posX = -950;
        this.posY = -400;
        this.image = image;
    }

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(this.image, this.posX, this.posY);
    }
};

export default GameMap;
