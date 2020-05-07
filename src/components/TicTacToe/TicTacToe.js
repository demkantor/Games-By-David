import React, {Component} from 'react';
import '../App/App.css';



class TicTacToe extends Component {

    squares = Array(9).fill(null)

    state={
        winnner: null,
        player: 'X'
    }
  
    componentDidMount=()=> {
      this.newGame();
    }
  
    newGame=()=>{
      this.setState({
        winnner: null,
        player: 'X'
      })
      this.squares = Array(9).fill(null)
    }
  
    makeMove(num) {
      if (!this.squares[num]) {
        this.squares.splice(num, 1, this.state.player);
        if(this.state.player === 'X'){
            this.setState({player: 'O'})
        } else {
            this.setState({player: 'X'})
        }
      }
      this.setState({winner: this.calculateWinner()});
    }
  
  
    calculateWinner=()=> {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
          this.squares[a] &&
          this.squares[a] === this.squares[b] &&
          this.squares[a] === this.squares[c]
        ) {
          return this.squares[a];
        }
      }
      return null;
    }

    render() {
        return (
            <div className="tic-wrapper">
                <div className="container">
                    <header className="header">
                        <h1 className="fw-300 t-ucase">Let's Play
                            <br/>
                            <span className="fw-400 t-wide f-big t-ucase">Tic-Tac-Toe</span>
                        </h1>
                    </header>
                    <h1>Current Player: {this.state.player}</h1>
                    <button className="btn-sml" onClick={this.newGame}>Start A New Game</button>
                    {this.state.winner &&
                        <h2>Player {this.state.winner} won this game!</h2>
                    }
                    <main>
                        <div className="tic-board">
                            {this.squares.map((square, i)=>(
                                <div className="tic-square" key={i}>
                                    <button className="tic-btn" 
                                        data-id={i} onClick={()=>this.makeMove(i)}>{square}</button>
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}
  

export default TicTacToe;