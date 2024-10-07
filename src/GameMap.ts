import Sprite from "./Sprite";

class GameMap extends Sprite {
    constructor(image: HTMLImageElement) {
        super(image, {x: -950, y: -400})
    }
};

export default GameMap;
