// move the paddle //
export default class InputHandler {

    constructor(paddle, game) {

        document.addEventListener('keydown', event => {
            // console.log(event.keyCode);
            switch(event.keyCode) {
                case 37:
                    // console.log('move left');
                    paddle.moveLeft();
                    break;
                case 39:
                    // console.log('move right');
                    paddle.moveRight();
                    break;
                default: 
                    // console.log('default');
                    break;
            };
        });

        document.addEventListener('keyup', event => {
            // console.log(event.keyCode);
            switch(event.keyCode) {
                case 37:                // left arrow key
                    if(paddle.speed < 0) {
                        paddle.stop();
                    }
                    break;
                case 39:                // right arrow key
                    if(paddle.speed > 0) {
                        paddle.stop();
                    }
                    break;
                case 27:                // esc key
                    game.togglePause();
                    break;
                case 32:                // spacebar
                    game.start();
                    break;
                default: 
                    break;
            };
        });
    };
};
