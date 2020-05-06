import React, {Component} from 'react';
import '../App/App.css';


class Tetris extends Component {

    state={
        score: 0,
        lines: 0,
    }

        GRID_WIDTH = 10;
        GRID_HEIGHT = 20;
        GRID_SIZE = this.GRID_WIDTH * this.GRID_HEIGHT;
        squares = null;
        currentIndex = 0;
        currentRotation = 0;
        width = this.GRID_WIDTH;
        timerId = null;
        nextRandom = 0;
        currentPosition = 4;
        displayWidth = 4;
                
        //The Tetrominoes
        lTetromino = [
            [1, this.GRID_WIDTH + 1, this.GRID_WIDTH * 2 + 1, 2],
            [this.GRID_WIDTH, this.GRID_WIDTH + 1, this.GRID_WIDTH + 2, this.GRID_WIDTH * 2 + 2],
            [1, this.GRID_WIDTH + 1, this.GRID_WIDTH * 2 + 1, this.GRID_WIDTH * 2],
            [this.GRID_WIDTH, this.GRID_WIDTH * 2, this.GRID_WIDTH * 2 + 1, this.GRID_WIDTH * 2 + 2]
        ];
      
        zTetromino = [
            [0, this.GRID_WIDTH, this.GRID_WIDTH + 1, this.GRID_WIDTH * 2 + 1],
            [this.GRID_WIDTH + 1, this.GRID_WIDTH + 2, this.GRID_WIDTH * 2, this.GRID_WIDTH * 2 + 1],
            [0, this.GRID_WIDTH, this.GRID_WIDTH + 1, this.GRID_WIDTH * 2 + 1],
            [this.GRID_WIDTH + 1, this.GRID_WIDTH + 2, this.GRID_WIDTH * 2, this.GRID_WIDTH * 2 + 1]
        ];
      
        tTetromino = [
            [1, this.GRID_WIDTH, this.GRID_WIDTH + 1, this.GRID_WIDTH + 2],
            [1, this.GRID_WIDTH + 1, this.GRID_WIDTH + 2, this.GRID_WIDTH * 2 + 1],
            [this.GRID_WIDTH, this.GRID_WIDTH + 1, this.GRID_WIDTH + 2, this.GRID_WIDTH * 2 + 1],
            [1, this.GRID_WIDTH, this.GRID_WIDTH + 1, this.GRID_WIDTH * 2 + 1]
        ];
      
        oTetromino = [
            [0, 1, this.GRID_WIDTH, this.GRID_WIDTH + 1],
            [0, 1, this.GRID_WIDTH, this.GRID_WIDTH + 1],
            [0, 1, this.GRID_WIDTH, this.GRID_WIDTH + 1],
            [0, 1, this.GRID_WIDTH, this.GRID_WIDTH + 1]
        ];
      
        iTetromino = [
            [1, this.GRID_WIDTH + 1, this.GRID_WIDTH * 2 + 1, this.GRID_WIDTH * 3 + 1],
            [this.GRID_WIDTH, this.GRID_WIDTH + 1, this.GRID_WIDTH + 2, this.GRID_WIDTH + 3],
            [1, this.RID_WIDTH + 1, this.GRID_WIDTH * 2 + 1, this.GRID_WIDTH * 3 + 1],
            [this.GRID_WIDTH, this.GRID_WIDTH + 1, this.GRID_WIDTH + 2, this.GRID_WIDTH + 3]
        ];
      
        theTetrominoes = [this.lTetromino, this.zTetromino, this.tTetromino, this.oTetromino, this.iTetromino];
      
        //Randomly Select Tetromino
        random = Math.floor(Math.random() * this.theTetrominoes.length);
        current = this.theTetrominoes[this.random][this.currentRotation];
      
        smallTetrominoes = [
            [1, this.displayWidth + 1, this.displayWidth * 2 + 1, 2], /* lTetromino */
            [0, this.displayWidth, this.displayWidth + 1, this.displayWidth * 2 + 1], /* zTetromino */
            [1, this.displayWidth, this.displayWidth + 1, this.displayWidth + 2], /* tTetromino */
            [0, 1, this.displayWidth, this.displayWidth + 1], /* oTetromino */
            [1, this.displayWidth + 1, this.displayWidth * 2 + 1, this.displayWidth * 3 + 1] /* iTetromino */
        ];

        addScore=()=> {
            for (this.currentIndex = 0; this.currentIndex < this.GRID_SIZE; this.currentIndex += this.GRID_WIDTH) {
                const row = [this.currentIndex, this.currentIndex + 1, this.currentIndex + 2, this.currentIndex + 3, 
                    this.currentIndex + 4, this.currentIndex + 5, this.currentIndex + 6, this.currentIndex + 7, this.currentIndex + 8, this.currentIndex + 9]
                    let squares = this.state.squares
                    if (row.every(index => squares[index].classList.contains('block2'))) {
                    this.setState({score: this.state.score + 10});
                    this.setState({lines: this.state.lines + 1});
                    row.forEach(index => {
                        squares[index].classList.remove('block2') || squares[index].classList.remove('block')
                    });
                const squaresRemoved = squares.splice(this.currentIndex,this.width);
                const grid = this.state.grid;
                squares = squaresRemoved.concat(squares);
                squares.forEach(cell => grid.appendChild(cell));
                }
            }
        }
              
        componentDidMount =()=> {
            console.log("tetris!!!");
            // document.registerElement("t-div")
            this.createGrid();
            document.addEventListener('keydown', this.control);
        }

        componentWillUnmount=()=>{
            clearInterval(this.timerId);
        }
    
        //assign functions to keycodes
        control=(e)=>{
            if(e.keyCode === 39) {
                this.moveright();
            } else if (e.keyCode === 38) {
                this.rotate();
            } else if (e.keyCode === 37) {
                this.moveleft();
            } else if (e.keyCode === 40) {
                this.moveDown();
            }
        }

        createGrid=()=>{
            // the main grid
            let grid = document.querySelector(".tetris-grid");
            for (let i = 0; i < this.GRID_SIZE; i++) {
                let gridElement = document.createElement("t-div");
                grid.appendChild(gridElement);
            }
            // set base of grid
            for (let i = 0; i < this.GRID_WIDTH; i++) {
                let gridElement = document.createElement("t-div");
                gridElement.setAttribute("class", "block3");
                grid.appendChild(gridElement);
            }
            let previousGrid = document.querySelector(".previous-grid");
            for (let i = 0; i < 16; i++) {
                let gridElement = document.createElement("t-div");
                previousGrid.appendChild(gridElement);
            }
            this.setState({grid: grid})
            this.setState({squares: Array.from(grid.querySelectorAll('t-div'))})
        }

        displayShape=()=> {
            let displaySquares = document.querySelectorAll('.previous-grid t-div');
            let displayIndex = 0;
            displaySquares.forEach(square => {
                square.classList.remove('block');
            })
            this.smallTetrominoes[this.nextRandom].forEach( index => {
                displaySquares[displayIndex + index].classList.add('block');
            });
        }
      
        //draw the shape
        draw=()=>{
            const squares = this.state.squares;
            this.current.forEach(index => {
                squares[this.currentPosition + index].classList.add('block')
            });
        }

        //freeze the shape
        freeze=()=> {
            const squares = this.state.squares;
            if(this.current.some(index => squares[this.currentPosition + index + this.width].classList.contains('block3') 
            || squares[this.currentPosition + index + this.width].classList.contains('block2'))) {
                this.current.forEach(index => squares[index + this.currentPosition].classList.add('block2'));
                // start a new tetromino falling
                this.random = this.nextRandom;
                this.nextRandom = Math.floor(Math.random() * this.theTetrominoes.length);
                this.current = this.theTetrominoes[this.random][this.currentRotation];
                this.currentPosition = 4;
                this.draw();
                this.displayShape();
                this.addScore();
                this.gameOver();
            }
        }

        gameOver=()=> {
            const squares = this.state.squares;
            if(this.current.some(index => squares[this.currentPosition + index].classList.contains('block2'))) {
                this.setState({lines: 'end'});
                clearInterval(this.timerId);
            }
        }
      
        //move down on loop
        moveDown=()=> {
            this.undraw();
            this.currentPosition = this.currentPosition += this.width;
            this.draw();
            this.freeze();
        }
      
        //move right and prevent collisions with shapes moving right
        moveleft=()=> {
            const squares = this.state.squares;
            this.undraw();
            const isAtLeftEdge = this.current.some(index => (this.currentPosition + index) % this.width === 0);
            if(!isAtLeftEdge) this.currentPosition -= 1;
            if(this.current.some(index => squares[this.currentPosition + index].classList.contains('block2'))) {
                this.currentPosition += 1;
            }
            this.draw();
        }

        //move left and prevent collisions with shapes moving left
        moveright=()=> {
            const squares = this.state.squares;
            this.undraw();
            const isAtRightEdge = this.current.some(index => (this.currentPosition + index) % this.width === this.width - 1);
            if(!isAtRightEdge) this.currentPosition += 1;
            if(this.current.some(index => squares[this.currentPosition + index].classList.contains('block2'))) {
                this.currentPosition -= 1;
            }
            this.draw();
        }
      
        // control for dpad - only shows in smal screens
        phoneControl=(dpad)=>{
            if(dpad === 'right') {
                this.moveright();
            } else if (dpad === 'up') {
                this.rotate();
            } else if (dpad === 'left') {
                this.moveleft();
            } else if (dpad === 'down') {
                this.moveDown();
            }
        }

        //Rotate the Tetromino
        rotate=()=> {
            this.undraw();
            this.currentRotation ++
            if(this.currentRotation === this.current.length) {
                this.currentRotation = 0;
            }
            this.current = this.theTetrominoes[this.random][this.currentRotation];
            this.draw();
        }
      
        startGame=() => {
            if(this.timerId) {
              clearInterval(this.timerId);
              this.timerId = null;
            } else {
              this.draw();
              this.timerId = setInterval(this.moveDown, 1000);
              this.nextRandom = Math.floor(Math.random() * this.theTetrominoes.length);
              this.displayShape();
            }
        }
      
        //undraw the shape
        undraw=()=> {
            const squares = this.state.squares;
            this.current.forEach(index => {
                squares[this.currentPosition + index].classList.remove('block')
            });
        }
      
  
    render() {
        return (
            <div className="tetris-wrapper">
                <div className="tetris-container">
                    <header className="header">
                        <h1 className="fw-300 t-ucase">Let's Play
                            <br/>
                            <span className="fw-400 t-wide f-big t-ucase">tetris</span>
                        </h1>
                    </header>
                    <main className="tetris-game-area">
                        <div className="tetris-game">
                            <div className="tetris-grid"></div>
                        </div>
                        <section>
                            <div className="tetris-display">
                                <h1 className="t-score fw-400 t-ucase">Your Score 
                                    <br/> 
                                    <span className="t-score-display t-ucase fw-300">{this.state.score}</span>
                                </h1>
                                <div className="previous-shape">
                                    <div className="previous-grid"></div>
                                </div>
                                <h2 className="t-lines-display fw-400 t-ucase">Lines:
                                    <span>{this.state.lines}</span>
                                </h2>
                            </div>
                            <button className="btn-lg" onClick={this.startGame}>Start / Pause</button>
                        </section>
                    </main>
                </div>
            </div>
        )
    }
}

  
export default Tetris;
