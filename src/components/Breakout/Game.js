import Ball from './Ball';
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
    
        new InputHandler(this.paddle);
    };

    update(deltaTime) {
        this.paddle.update(deltaTime);
        this.ball.update(deltaTime);
    };

    draw(ctx) {
        this.paddle.draw(ctx);
        this.ball.draw(ctx);
    };

};