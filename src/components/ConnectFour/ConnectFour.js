import React, {Component} from 'react';
import '../App/App.css';
import Swal from 'sweetalert2'


class ConnectFour extends Component {

    state={
        currentPlayer: 'Red',
        results: null,
        winningArrays: [
            [0, 1, 2, 3], [41, 40, 39, 38], [7, 8, 9, 10], [34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24], [21, 22, 23, 24],
            [20, 19, 18, 17], [28, 29, 30, 31], [13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3], [0, 7, 14, 21], [41, 34, 27, 20],
            [1, 8, 15, 22], [40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18], [3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25],
            [37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15], [6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], [41, 33, 25, 17],
            [7, 15, 23, 31], [34, 26, 18, 10], [14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17], [6, 12, 18, 24], [28, 22, 16, 10],
            [13, 19, 25, 31], [21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], [5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22],
            [2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25], [40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32], [11, 7, 23, 29],
            [12, 18, 24, 30], [1, 2, 3, 4], [5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9], [15, 16, 17, 18], [19, 18, 17, 16],
            [22, 23, 24, 25], [26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30], [36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28],
            [8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34]
            ]
    }
    
    addChip=(event)=>{
        let currentPlayer = this.state.currentPlayer
            if(event.target.classList.contains('taken')){
                Swal.fire(`can't go there!`);
            }else {
                if(currentPlayer === "Red"){
                    event.target.classList.add('taken');
                    event.target.classList.add('connectPlayer-one');
                    this.setState({currentPlayer: "Blue"});
                }else if(currentPlayer === "Blue"){
                    event.target.classList.add('taken');
                    event.target.classList.add('connectPlayer-two');
                    this.setState({currentPlayer: "Red"});
                }
            }
        this.checkBoard();
    }

    checkBoard=()=>{
        const squares = document.querySelectorAll(".connectGrid div");
        const winningArrays = this.state.winningArrays;
        for(let i = 0; i < winningArrays.length; i++) {
            const square1 = squares[winningArrays[i][0]];
            const square2 = squares[winningArrays[i][1]];
            const square3 = squares[winningArrays[i][2]];
            const square4 = squares[winningArrays[i][3]];
        console.log('checking....', squares[i])
            if(square1.classList.contains('connectPlayer-one') &&
                square2.classList.contains('connectPlayer-one') &&
                square3.classList.contains('connectPlayer-one') &&
                square4.classList.contains('connectPlayer-one')) {
                this.setState({results: 'Red Player Wins!'});
            } 
            //now check to see if they all have the classname player two
            else if (square1.classList.contains('connectPlayer-two') &&
                square2.classList.contains('connectPlayer-two') &&
                square3.classList.contains('connectPlayer-two') &&
                square4.classList.contains('connectPlayer-two')) {
                this.setState({results: 'Blue Player Wins!'});
            }
        }
    }

    componentDidMount=()=>{
        console.log('making connections');
    }

    reset=()=>{
        const squares = document.querySelectorAll(".connectGrid div");
        squares.forEach(square =>{
            square.classList.remove('taken', 'connectPlayer-one', 'connectPlayer-two')
            });
        this.setState({currentPlayer: 'Red'});
        this.setState({results: null});
    }

  render() {
    return (
      <>
        <div className="connectWrapper">
         <h2>Player: {this.state.currentPlayer}</h2>
            <button className="memoryReset" onClick={this.reset}>Reset</button>
            <div className="connectGrid">
                <div onClick={(event)=>this.addChip(event, 42)}></div>
                <div onClick={(event)=>this.addChip(event, 41)}></div>
                <div onClick={(event)=>this.addChip(event, 40)}></div>
                <div onClick={(event)=>this.addChip(event, 39)}></div>
                <div onClick={(event)=>this.addChip(event, 38)}></div>
                <div onClick={(event)=>this.addChip(event, 37)}></div>
                <div onClick={(event)=>this.addChip(event, 36)}></div>
                <div onClick={(event)=>this.addChip(event, 35)}></div>
                <div onClick={(event)=>this.addChip(event, 34)}></div>
                <div onClick={(event)=>this.addChip(event, 33)}></div>
                <div onClick={(event)=>this.addChip(event, 32)}></div>
                <div onClick={(event)=>this.addChip(event, 31)}></div>
                <div onClick={(event)=>this.addChip(event, 30)}></div>
                <div onClick={(event)=>this.addChip(event, 29)}></div>
                <div onClick={(event)=>this.addChip(event, 28)}></div>
                <div onClick={(event)=>this.addChip(event, 27)}></div>
                <div onClick={(event)=>this.addChip(event, 26)}></div>
                <div onClick={(event)=>this.addChip(event, 25)}></div>
                <div onClick={(event)=>this.addChip(event, 24)}></div>
                <div onClick={(event)=>this.addChip(event, 23)}></div>
                <div onClick={(event)=>this.addChip(event, 22)}></div>
                <div onClick={(event)=>this.addChip(event, 21)}></div>
                <div onClick={(event)=>this.addChip(event, 20)}></div>
                <div onClick={(event)=>this.addChip(event, 19)}></div>
                <div onClick={(event)=>this.addChip(event, 18)}></div>
                <div onClick={(event)=>this.addChip(event, 17)}></div>
                <div onClick={(event)=>this.addChip(event, 16)}></div>
                <div onClick={(event)=>this.addChip(event, 15)}></div>
                <div onClick={(event)=>this.addChip(event, 14)}></div>
                <div onClick={(event)=>this.addChip(event, 13)}></div>
                <div onClick={(event)=>this.addChip(event, 12)}></div>
                <div onClick={(event)=>this.addChip(event, 11)}></div>
                <div onClick={(event)=>this.addChip(event, 10)}></div>
                <div onClick={(event)=>this.addChip(event, 9)}></div>
                <div onClick={(event)=>this.addChip(event, 8)}></div>
                <div onClick={(event)=>this.addChip(event, 7)}></div>
                <div onClick={(event)=>this.addChip(event, 6)}></div>
                <div onClick={(event)=>this.addChip(event, 5)}></div>
                <div onClick={(event)=>this.addChip(event, 4)}></div>
                <div onClick={(event)=>this.addChip(event, 3)}></div>
                <div onClick={(event)=>this.addChip(event, 2)}></div>
                <div onClick={(event)=>this.addChip(event, 1)}></div>
                <div className="taken"></div>
                <div className="taken"></div>
                <div className="taken"></div>
                <div className="taken"></div>
                <div className="taken"></div>
                <div className="taken"></div>
                <div className="taken"></div>
            </div>
            <h1>{this.state.results}</h1>
        </div>
      </>
    )
  }
}
  
export default ConnectFour;
