import Ball from './Ball';
import { buildLevel, level1, level2, level3, level4 } from './Levels';
import InputHandler from './Input';
import Paddle from './Paddle';


const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3,
    NEWLEVEL: 4
};

//main game class
export default class Game {
    constructor(gameWidth, gameHeight) {

        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.gamestate = GAMESTATE.MENU;

        this.ball = new Ball(this);
        this.paddle = new Paddle(this);
        this.gameObjects = [];
        this.bricks = [];
        this.lives = 3;
        this.levels = [level1, level2, level3, level4];
        this.currentLevel = 0;

        new InputHandler(this.paddle, this);
    };

    start() {
        // only can trigger game start in game menu state
        if (this.gamestate !== GAMESTATE.MENU && this.gamestate !== GAMESTATE.NEWLEVEL) return;

        this.bricks = buildLevel(this, this.levels[this.currentLevel]);
        this.ball.reset();
        this.gameObjects = [ this.ball, this.paddle ];
        this.gamestate = GAMESTATE.RUNNING;
    };

    update(deltaTime) {
        if (this.lives === 0) this.gamestate = GAMESTATE.GAMEOVER;

        if (
            this.gamestate === GAMESTATE.PAUSED || 
            this.gamestate === GAMESTATE.MENU || 
            this.gamestate === GAMESTATE.GAMEOVER
            ) 
        return;

        // go to next level
        if (this.bricks.length === 0) {
            this.currentLevel ++;
            this.gamestate = GAMESTATE.NEWLEVEL;
            this.start();
        };

        [...this.gameObjects, ...this.bricks].forEach((object) => object.update(deltaTime));

        // remove bricks after hit
        this.bricks = this.bricks.filter(object => !object.markedForDeletion);
    };

    draw(ctx) {
        [...this.gameObjects, ...this.bricks].forEach((brick) => brick.draw(ctx));

        // on game pause
        if (this.gamestate === GAMESTATE.PAUSED) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
            ctx.fill();

            ctx.font = "36px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2);
        };

        // on Menu
        if (this.gamestate === GAMESTATE.MENU) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0, 0, 0, 1)";
            ctx.fill();

            ctx.font = "36px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Press SPACEBAR to start game", this.gameWidth / 2, this.gameHeight / 2);
        };

        // on GAME OVER
        if (this.gamestate === GAMESTATE.GAMEOVER) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0, 0, 0, 1)";
            ctx.fill();

            ctx.font = "36px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("GAME OVER", this.gameWidth / 2, this.gameHeight / 2);
        };
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
