import React, { useEffect }from 'react';
import Game from './Game';


const Breakout = () => {

    useEffect(() => {
        let canvas = document.getElementById("breakout-board");
        let ctx = canvas.getContext("2d");

        const GAME_WIDTH = 800;
        const GAME_HEIGHT = 600;

        let game= new Game(GAME_WIDTH, GAME_HEIGHT);

        let lastTime = 0;

        // run the game //
        function gameLoop(timestamp) {
            let deltaTime = timestamp - lastTime;
            lastTime = timestamp;

            ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
            
            game.update(deltaTime);
            game.draw(ctx);

            requestAnimationFrame(gameLoop);
        };

        requestAnimationFrame(gameLoop);
        
    }, [])

    return (
        <div className="breakoutWrapper">
            <div className="container">
                <header className="header">
                    <h1 className="fw-300 t-ucase">Let's Play
                        <br/>
                        <span className="fw-400 t-wide f-big t-ucase">Breakout</span>
                    </h1>
                </header>
                <p className="header">press esc key to pause game</p>
                <img id="img_ball" className="breakout_img" src="images/breakout/ball.png" alt="ball" />
                <img id="img_brick" className="breakout_img" src="images/breakout/brick.png" alt="brick" />
                <canvas id="breakout-board" className="breakout-board" width="800" height="600"></canvas>
            
            </div>
        </div>
    );
};

export default Breakout;
