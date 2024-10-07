import Sprite from "./Sprite";

class Player extends Sprite {

    public speed = 4;
    
    private movementMap: MovementMap = {
        "w": { x: 0, y: -1 },
        "s": { x: 0, y: 1 },
        "a": { x: -1, y: 0 },
        "d": { x: 1, y: 0 },
        "ArrowUp": { x: 0, y: -1 },
        "ArrowLeft": { x: -1, y: 0 },
        "ArrowDown": { x: 0, y: 1 },
        "ArrowRight": { x: 1, y: 0 },
    };

    private pImage: HTMLImageElement;

    constructor(posX: number, posY: number, image: HTMLImageElement) {
        super(image, {x: posX, y: posY})

        this.pImage = image;
    };

    public getMovementMap(): MovementMap {
        return this.movementMap;
    };

    public handleMovement(event: KeyboardEvent): void {
        if (this.movementMap && event.key in this.movementMap) {
            const { x, y } = this.movementMap[event.key];
            console.log(`Moving player ${x}, ${y}`);
        }
    };

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(
            this.pImage,                               // image
            0,                                         // crop x start
            0,                                         // crop y start
            this.pImage.width / 4,                     // crop width
            this.pImage.height,                        // crop height
            this.position.x - this.pImage.width / 8,   // x position
            this.position.y - this.pImage.height / 8,  // y position
            this.pImage.width / 4,                     // width
            this.pImage.height                         // height
        );
    };
};

interface MovementMap {
    [key: string]: { x: number, y: number };
};

export default Player;
