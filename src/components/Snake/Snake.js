import React, {Component} from 'react';
import '../App/App.css';
import Swal from 'sweetalert2';
import {connect} from 'react-redux';




class Snake extends Component {

    width = 20; // change this if board size changes
    interval = 0;
    intervalTime = 0;
    
    state={
        displayScore: 0,
        currentSnake: [2,1,0],
        appleIndex: 10,
        currentIndex: 0,
        direction: 1,
    };

    componentDidMount=()=>{
        console.log("sssssssssssssss......");
        this.props.dispatch({type: 'GET_GAMES_PLAYED'});
        document.addEventListener('keydown', this.control);
    };

    componentWillUnmount=()=>{
        clearInterval(this.interval);
    };

    // assign keyboard arrow keys for control
    control=(e)=>{
        const squares = document.querySelectorAll('.snakeGrid div');
        let currentIndex = this.state.currentIndex;
        squares[currentIndex].classList.remove('snake')
        
        if(e.keyCode === 39) {
            this.setState({direction: 1}); // press right arrow
        } else if (e.keyCode === 38) {
            this.setState({direction: -this.width}); //press up arrow
        } else if (e.keyCode === 37) {
            this.setState({direction: -1}); // press left arrow
        } else if (e.keyCode === 40) {
            this.setState({direction: +this.width}); // press down arrow
        }
    }

    // all possible snake outcomes
    moveOutcomes=()=>{
        let currentSnake = this.state.currentSnake;
        const squares = document.querySelectorAll('.snakeGrid div');
        let direction = this.state.direction;
        let speed = 0.9;
        // if snake hits a wall or itself
        if (
          (currentSnake[0] + this.width >= (this.width * this.width) && direction === this.width ) || // snake hits bottom wall
          (currentSnake[0] % this.width === this.width -1 && direction === 1) || // snake hits right wall
          (currentSnake[0] % this.width === 0 && direction === -1) || // snake hits left wall
          (currentSnake[0] - this.width < 0 && direction === -this.width) ||  // snake hits top wall
          squares[currentSnake[0] + direction].classList.contains('snake') // snake hits itself
        ) {
          this.props.dispatch({type: 'ANOTHER_GAME_PLAYED', payload: {game: 'snake', score: (this.props.reduxState.highScore.gamesPlayed.snake + 1)}})
          return( Swal.fire({
            toast: true,
            title: 'Ouch!',
            text: `final score: ${this.state.displayScore}`,
            showClass: {
              popup: 'animated fadeInDown'
            },
            hideClass: {
              popup: 'animated fadeOutUp'
            }
          }), clearInterval(this.interval)) // clear the interval if any of the above happen
        }
        const tail = currentSnake.pop()  // removes end of snake array
        squares[tail].classList.remove('snake')  // removes class of snake from the tail end
        currentSnake.unshift(currentSnake[0] + direction) // gives direction to the head of the array
    
        // when the snake eats the apple
        if(squares[currentSnake[0]].classList.contains('apple')) {
          squares[currentSnake[0]].classList.remove('apple')
          squares[0].classList.add('snakeHead')
          squares[tail].classList.add('snake')
          currentSnake.push(tail)
          this.randomApple()
          this.setState({displayScore: this.state.displayScore +1});
          clearInterval(this.interval)
          this.intervalTime = this.intervalTime * speed
          this.interval = setInterval(this.moveOutcomes, this.intervalTime)
        }
        squares[currentSnake[0]].classList.add('snake')
      }

    // control for dpad - only shows in smal screens
    phoneControl=(dpad)=>{
      const squares = document.querySelectorAll('.snakeGrid div');
      let currentIndex = this.state.currentIndex;
      squares[currentIndex].classList.remove('snake')
      
      if(dpad === 'right') {
          this.setState({direction: 1}); // press right arrow
      } else if (dpad === 'up') {
          this.setState({direction: -this.width}); //press up arrow
      } else if (dpad === 'left') {
          this.setState({direction: -1}); // press left arrow
      } else if (dpad === 'down') {
          this.setState({direction: +this.width}); // press down arrow
      }
    }

    //generates new apple after eaten
    randomApple=()=>{
        let appleIndex = this.state.appleIndex;
        const squares = document.querySelectorAll('.snakeGrid div');
        do{
            this.setState({appleIndex: Math.floor(Math.random() * squares.length)});
        }   while(squares[appleIndex].classList.contains('snake')) //making sure apples dont appear on the snake
                squares[appleIndex].classList.add('apple');
    }
    
    //both start and reset game
    startGame=()=>{
        const squares = document.querySelectorAll('.snakeGrid div');
        clearInterval(this.interval);
        this.interval = 0;
        this.intervalTime = 1000;
        this.setState({direction: 1});
        this.setState({displayScore: 0});
        
        squares.forEach(square =>{square.classList.remove('snake', 'apple')})
        this.setState({currentSnake: [2,1,0]});
        this.setState({snakeHead: 2});
        let makeSnake = [2,1,0];
        squares[2].classList.add('snake');
        makeSnake.forEach(snake => squares[snake].classList.add('snake'));
        this.setState({currentIndex: 0});
        this.setState({appleIndex: 10})
        this.randomApple();
        this.interval = setInterval(this.moveOutcomes, this.intervalTime);
    }

  render() {
    return (
      <div className="snakeWrapper">
        <div className="container">
          <header className="header">
              <h1 className="fw-300 t-ucase">Let's Play
                  <br/>
                  <span className="fw-400 t-wide f-big t-ucase">Snake</span>
              </h1>
          </header>
            <div className="snakeGrid">
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>

                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div>
            <button className="btn-sml" onClick={this.startGame}>Start / Reset</button>
            <div className="mini-score f-big fw-400">Score: {this.state.displayScore}</div>
        </div>
        <div className="dpad">
          <i></i>
          <i className="fas fa-arrow-alt-circle-up fa-4x" onClick={()=>this.phoneControl('up')}></i>
          <i></i>
          <i className="fas fa-arrow-alt-circle-left fa-4x" onClick={()=>this.phoneControl('left')}></i>
          <i></i>
          <i className="fas fa-arrow-alt-circle-right fa-4x" onClick={()=>this.phoneControl('right')}></i>
          <i></i>
          <i className="fas fa-arrow-alt-circle-down fa-4x" onClick={()=>this.phoneControl('down')}></i>
        </div>
    </div>
    )
  }
}
  
const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(Snake);

