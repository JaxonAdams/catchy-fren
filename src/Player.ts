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
    
    constructor() { };

    public getMovementMap(): MovementMap {
        return this.movementMap;
    }

    public handleMovement(event: KeyboardEvent): void {
        if (this.movementMap && event.key in this.movementMap) {
            const { x, y } = this.movementMap[event.key];
            console.log(`Moving player ${x}, ${y}`);
        }
    }
};

interface MovementMap {
    [key: string]: { x: number, y: number };
};

export default Player;