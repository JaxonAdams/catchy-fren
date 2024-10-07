import Game from "./Game";

class Player {
    
    private movementMap: MovementMap = {
        "ArrowUp": { x: 0, y: -1 },
        "ArrowDown": { x: 0, y: 1 },
        "ArrowLeft": { x: -1, y: 0 },
        "ArrowRight": { x: 1, y: 0 },
        "w": { x: 0, y: -1 },
        "s": { x: 0, y: 1 },
        "a": { x: -1, y: 0 },
        "d": { x: 1, y: 0 },
    };

    private image: HTMLImageElement;

    private posX: number;
    private posY: number;
    
    constructor(posX: number, posY: number, image: HTMLImageElement) {
        this.image = image;

        this.posX = posX;
        this.posY = posY;
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
            this.image,                         // image
            0,                                  // crop x start
            0,                                  // crop y start
            this.image.width / 4,               // crop width
            this.image.height,                  // crop height
            this.posX - this.image.width / 8,   // x position
            this.posY - this.image.height / 8,  // y position
            this.image.width / 4,               // width
            this.image.height                   // height
        );
    };
};

interface MovementMap {
    [key: string]: { x: number, y: number };
};

export default Player;
