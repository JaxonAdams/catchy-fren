class Sprite {

    private image;

    public position: {x: number, y: number};

    constructor(image: HTMLImageElement, position: {x: number, y: number}) {
        this.position = position;
        this.image = image;
        console.log(this.position);
    };

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(this.image, this.position.x, this.position.y);
    };
}

export default Sprite;
