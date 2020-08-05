import Ball from './Ball';
import Brick from './Brick';
import { buildLevel, level1 } from './Levels';
import InputHandler from './Input';
import Paddle from './Paddle';
//main game class

export default class Game {
    constructor(gameWidth, gameHeight) {

        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    };

    start() {
        this.ball = new Ball(this);
        this.paddle = new Paddle(this);

        let bricks = buildLevel(this, level1);
        
        this.gameObjects = [
            this.ball, this.paddle, ...bricks
        ];
    
        new InputHandler(this.paddle);
    };

    update(deltaTime) {
        this.gameObjects.forEach((object) => object.update(deltaTime));
    };

    draw(ctx) {
        this.gameObjects.forEach((object) => object.draw(ctx));
    };

};
