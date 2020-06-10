import React, {Component} from 'react';
import '../App/App.css';





let width = 15
let currentShooterIndex = 202
let currentInvaderIndex = 0
let alienInvadersTakenDown = []
let direction = 1

// define the alien invaders
const alienInvaders = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    15,16,17,18,19,20,21,22,23,24,
    30,31,32,33,34,35,36,37,38,39
  ]


class SpaceInvaders extends Component {
  // used for setinterval
  invaderId;

  state = {
    result: 0,
  }

  componentDidMount = () => {
    const squares = document.querySelectorAll('.spaceGrid div');
    //draw the alien invaders
    alienInvaders.forEach( invader => squares[currentInvaderIndex + invader].classList.add('invader'));
    //draw the shooter
    squares[currentShooterIndex].classList.add('shooter');
    // add event listeners
    document.addEventListener('keyup', this.shoot);
    document.addEventListener('keydown', this.moveShooter);
  };

  componentWillUnmount=()=>{
    clearInterval(this.invaderId);
  };
  
  //move the shooter along a line
  moveShooter = (e) => {
    const squares = document.querySelectorAll('.spaceGrid div');
    squares[currentShooterIndex].classList.remove('shooter');
    switch(e.keyCode) {
      case 37: // left arrow key hit
        if(currentShooterIndex % width !== 0) currentShooterIndex -= 1 // if all the way left cant go more
        break
      case 39: // right arrow key hit
        if(currentShooterIndex % width < width - 1) currentShooterIndex += 1 // if all the way right cant go more
        break
    default:    
    }
    squares[currentShooterIndex].classList.add('shooter');
  };
    
  
  //move the alien invaders
  moveInvaders = () => {
    const squares = document.querySelectorAll('.spaceGrid div');
    const leftEdge = alienInvaders[0] % width === 0;
    const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width - 1;

    if((leftEdge && direction === -1) || (rightEdge && direction === 1)){
      direction = width
    } else if (direction === width) {
      if (leftEdge) direction = 1;
      else direction = -1;
    }
    for (let i = 0; i <= alienInvaders.length - 1; i++) {
      squares[alienInvaders[i]].classList.remove('invader');
    }
    for (let i = 0; i <= alienInvaders.length - 1; i++) {
      alienInvaders[i] += direction;
    }
    for (let i = 0; i <= alienInvaders.length - 1; i++) {
      if (!alienInvadersTakenDown.includes(i)) {
        squares[alienInvaders[i]].classList.add('invader');
      };
    };

    // mark game over if any invader touches the shooter
    if(squares[currentShooterIndex].classList.contains('invader', 'shooter')) {
      this.setState({result: 'Game Over'});
      squares[currentShooterIndex].classList.add('boom');
      clearInterval(this.invaderId);
    };

    // mark game over if any invader reaches the shooter line
    for (let i = 0; i <= alienInvaders.length - 1; i++){
      if(alienInvaders[i] > (squares.length - (width -1))){
        this.setState({result: 'Game Over'});
        clearInterval(this.invaderId);
      };
    };

    // you win if all are gone!
    if(alienInvadersTakenDown.length === alienInvaders.length) {
      console.log(alienInvadersTakenDown.length);
      console.log(alienInvaders.length);
      this.setState({result: 'You Win!!!'});
      clearInterval(this.invaderId);
      document.removeEventListener('keyup', this.shoot);
      document.removeEventListener('keydown', this.moveShooter);
    };
  };

  //shoot at aliens
  shoot = (e) => {
    const squares = document.querySelectorAll('.spaceGrid div');
    let laserId;
    let currentLaserIndex = currentShooterIndex;

    //move the laser from the shooter to the alien invader
    const moveLaser = () => {
      squares[currentLaserIndex].classList.remove('laser');
      currentLaserIndex -= width;
      squares[currentLaserIndex].classList.add('laser');
      if(squares[currentLaserIndex].classList.contains('invader')) {
        squares[currentLaserIndex].classList.remove('laser');
        squares[currentLaserIndex].classList.remove('invader');
        squares[currentLaserIndex].classList.add('boom');
        clearInterval(laserId);
        setTimeout(() => squares[currentLaserIndex].classList.remove('boom'), 250);
        
        // add another point to score
        const alienTakenDown = alienInvaders.indexOf(currentLaserIndex);
        alienInvadersTakenDown.push(alienTakenDown);
        this.setState({result: this.state.result + 1});
      }

      if(currentLaserIndex < width) {
        clearInterval(laserId);
        setTimeout(() => squares[currentLaserIndex].classList.remove('laser'), 100);
      }
    };

    // spacebar to fire
    switch(e.keyCode) {
      case 32:
        laserId = setInterval(moveLaser, 100);
        break
      default:    
    }
    console.log(laserId, this.invaderId, currentLaserIndex);
  };

  startGame = () => {
    this.invaderId = setInterval(this.moveInvaders, 500);
  }
  
  render() {
    return (
      <>
        <div className="spaceWrapper">
          <div className="container">
            <header className="header">
              <h1 className="fw-300 t-ucase">Let's Play
                <br/>
                <span className="fw-400 t-wide f-big t-ucase">Space Invaders</span>
              </h1>
            </header>
            <center>
              <h1>Score: <span id="result">{this.state.result}</span></h1>
            </center>
            <button className="btn-sml" onClick={this.startGame}>Start</button>
            <div className="spaceGrid">
            {/* 15 x15 grid so 225 divs  simple way to create = div*100 */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            {/* 100 above 100 below  */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                {/* 100 above 25 below  */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                </div>
            </div>
        </div>
      </>
    )
  }
};
  
export default SpaceInvaders;
