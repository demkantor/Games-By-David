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
                case 37:
                    if(paddle.speed < 0) {
                        paddle.stop();
                    }
                    break;
                case 39:
                    if(paddle.speed > 0) {
                        paddle.stop();
                    }
                    break;
                case 27:
                    game.togglePause();
                    break;
                default: 
                    break;
            };
        });
    };
};
