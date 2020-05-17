import React, {Component} from 'react';
import '../App/App.css';
import {connect} from 'react-redux';



// for larger board try cell = 20, width = 400, height = 600
let CELL_SIZE = 10;
let WIDTH = 400;
let HEIGHT = 300;



// small component for cells to be used on board
class Cell extends Component {

    // componentDidMount=()=>{
    //     this.getWindow();
    // }

    // getWindow=()=>{
    //     let mq = window.matchMedia('(max-width: 600px)');
    //     if(mq.matches === true ) {
    //         return (CELL_SIZE = 10, WIDTH = 400, HEIGHT = 300);
    //     } else {
    //         return (CELL_SIZE = 20, WIDTH = 800, HEIGHT = 600);
    //     }
    // }

    render() {
        const { x, y } = this.props;
        return (
            <div className="life-cell" style={{
                left: `${CELL_SIZE * x + 1}px`,
                top: `${CELL_SIZE * y + 1}px`,
                width: `${CELL_SIZE - 1}px`,
                height: `${CELL_SIZE - 1}px`,
            }} />
        );
    }
}


// actual board and game component
class GameOfLife extends Component {
    
    rows = HEIGHT / CELL_SIZE;    
    cols = WIDTH / CELL_SIZE;    
    board = this.makeEmptyBoard();

    state = {    
        cells: [],
        isRunning: false,
        interval: 100
    }

    componentDidMount=()=>{
        console.log('life is no game... to be played alone!');
        this.props.dispatch({type: 'GET_GAMES_PLAYED'});
    }

    // the magic! how the game decides what cells are neigbors and allive vs dead
    calculateNeighbors(board, x, y) {
        let neighbors = 0;
        const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
        for (let i = 0; i < dirs.length; i++) {
            const dir = dirs[i];
            let y1 = y + dir[0];
            let x1 = x + dir[1];
            if (x1 >= 0 && x1 < this.cols && y1 >= 0 && y1 < this.rows && board[y1][x1]) {
                neighbors++;
            }
        }
        return neighbors;
    }

    // get board size to allow for cell creation
    getElementOffset() {    
        const rect = this.boardRef.getBoundingClientRect();
        const doc = document.documentElement;
        return {
            x: (rect.left + window.pageXOffset) - doc.clientLeft,
            y: (rect.top + window.pageYOffset) - doc.clientTop,    
        };  
    }

    // clears board to all dead cells
    handleClear = () => {
        this.board = this.makeEmptyBoard();
        this.setState({ cells: this.makeCells() });
    }

    // turns each cell alive or dead by user click
    handleClick = (event) => {    
        const elemOffset = this.getElementOffset();    
        const offsetX = event.clientX - elemOffset.x;    
        const offsetY = event.clientY - elemOffset.y;        
        const x = Math.floor(offsetX / CELL_SIZE);
        const y = Math.floor(offsetY / CELL_SIZE);
        if (x >= 0 && x <= this.cols && y >= 0 && y <= this.rows) {      
            this.board[y][x] = !this.board[y][x];    
        }
        this.setState({ cells: this.makeCells() });  
    }

    // sets user input for time update value
    handleIntervalChange = (event) => {
        this.setState({ interval: event.target.value });
    }

    // create random square on board
    handleRandom = () => {
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                this.board[y][x] = (Math.random() >= 0.5);
            }
        }
        this.setState({ cells: this.makeCells() });
    }

    // Create cells from this.board  
    makeCells() {    
        let cells = [];    
        for (let y = 0; y < this.rows; y++) { 
            for (let x = 0; x < this.cols; x++) { 
                if (this.board[y][x]) { 
                    cells.push({ x, y });        
                }      
            }    
        }    
        return cells;  
    }

    // Create an empty board  
    makeEmptyBoard() {    
        let board = [];    
        for (let y = 0; y < this.rows; y++) {
            board[y] = [];      
            for (let x = 0; x < this.cols; x++) {
                board[y][x] = false;      
            }    
        }    
        return board;  
    }

    // send another game count to db and set running state
    runGame = () => {
        this.setState({ isRunning: true });
        this.runIteration();
        this.props.dispatch({type: 'ANOTHER_GAME_PLAYED', payload: {game: 'life', 
            score: (this.props.reduxState.highScore.gamesPlayed.life + 1)}})
    }

    // start timer and run game based on current live cells
    runIteration() {
        let newBoard = this.makeEmptyBoard();
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                let neighbors = this.calculateNeighbors(this.board, x, y);
                if (this.board[y][x]) {
                    if (neighbors === 2 || neighbors === 3) {
                        newBoard[y][x] = true;
                    } else {
                        newBoard[y][x] = false;
                    }
                } else {
                    if (!this.board[y][x] && neighbors === 3) {
                        newBoard[y][x] = true;
                    }
                }
            }
        }
        this.board = newBoard;
        this.setState({ cells: this.makeCells() });
        this.timeoutHandler = window.setTimeout(() => {
            this.runIteration();
        }, this.state.interval);
    }

    // pause game
    stopGame = () => {
        this.setState({ isRunning: false });
        if (this.timeoutHandler) {
            window.clearTimeout(this.timeoutHandler);
            this.timeoutHandler = null;
        }
    }


  render() {
    const { cells, isRunning } = this.state;
        return (
        <>
            <div className="lifeWrapper">
                <div className="container">
                    <header className="header">
                    <h1 className="fw-300 t-ucase">Conway's
                            <br/>
                            <span className="fw-400 t-wide f-big t-ucase">Game of Life</span>
                        </h1>
                    </header>
                </div>
                <div className="life-board" 
                    style={{ width: WIDTH, height: HEIGHT, 
                    backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`}}
                    onClick={this.handleClick} 
                    ref={(n) => { this.boardRef = n; }}>  

                    {cells.map(cell => (
                        <Cell x={cell.x} y={cell.y} key={`${cell.x},${cell.y}`}/>
                    ))} 
                </div>
                <div className="life-controls">
                    <h2>Update Every</h2> <input type="number" size="5" placeholder="input time in milliseconds"
                    value={this.state.interval} onChange={this.handleIntervalChange} /> <h2>Milliseconds</h2>
                    {isRunning 
                        ?
                        <button className="btn-sml" onClick={this.stopGame}>Stop</button> 
                        :
                        <button className="btn-sml" onClick={this.runGame}>Run</button>
                    }
                    <button className="btn-sml" onClick={this.handleRandom}>Random</button>
                    <button className="btn-sml" onClick={this.handleClear}>Clear</button>
                </div>     
            </div>
        </>
        )
    }
}
  
const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });
  
export default connect(putReduxStateOnProps)(GameOfLife);
