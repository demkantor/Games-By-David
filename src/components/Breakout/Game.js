import Ball from './Ball';
import { buildLevel, level1 } from './Levels';
import InputHandler from './Input';
import Paddle from './Paddle';


const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 4
};

//main game class
export default class Game {
    constructor(gameWidth, gameHeight) {

        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    };

    start() {
        this.gamestate = GAMESTATE.RUNNING;

        this.ball = new Ball(this);
        this.paddle = new Paddle(this);

        let bricks = buildLevel(this, level1);
        
        this.gameObjects = [
            this.ball, this.paddle, ...bricks
        ];
    
        new InputHandler(this.paddle, this);
    };

    update(deltaTime) {
        if (this.gamestate === GAMESTATE.PAUSED) return;

        this.gameObjects.forEach((object) => object.update(deltaTime));

        // remove bricks after hit
        this.gameObjects = this.gameObjects.filter(object => !object.markedForDeletion);
    };

    draw(ctx) {
        this.gameObjects.forEach((object) => object.draw(ctx));
    };

    togglePause() {
        // game states
        if (this.gamestate === GAMESTATE.PAUSED) {
            this.gamestate = GAMESTATE.RUNNING;
        } else {
            this.gamestate = GAMESTATE.PAUSED;
        };
    };

};
