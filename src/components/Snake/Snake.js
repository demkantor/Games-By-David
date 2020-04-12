import React, {Component} from 'react';
import '../App/App.css';
import Swal from 'sweetalert2'




class Snake extends Component {

    interval=0;
    intervalTime = 0;
    
    state={
        displayScore: 0,
        currentSnake: [2,1,0],
        appleIndex: 10,
        currentIndex: 0,
        direction: 1,
    }

    componentDidMount=()=>{
        console.log("sssssssssssssss......");
        document.addEventListener('keydown', this.control);
    }

    componentWillUnmount=()=>{
        clearInterval(this.interval);
    }

    //assign keyboard arrow keys for control
    control=(e)=>{
        const squares = document.querySelectorAll('.snakeGrid div');
        let currentIndex = this.state.currentIndex;
        console.log(currentIndex)
        const width = 20 // this is the number of squares our board is wide
        squares[currentIndex].classList.remove('snake') // removes the class 'snake' from ALL the squares.
        
        if(e.keyCode === 39) {
            this.setState({direction: 1}); //press right arrow
        } else if (e.keyCode === 38) {
            this.setState({direction: -width}); //pree up arrow
        } else if (e.keyCode === 37) {
            this.setState({direction: -1}); //press left arrow
        } else if (e.keyCode === 40) {
            this.setState({direction: +width}); //press down arrow
        }
    }

    //function that deals with ALL the ove outcomes of the Snake
    moveOutcomes=()=>{
        let currentSnake = this.state.currentSnake;
        const squares = document.querySelectorAll('.snakeGrid div');
        const width = 20;
        let direction = this.state.direction;
        let speed = 0.9;
        //deals with snake hitting border and snake hitting self
        if (
          (currentSnake[0] + width >= (width * width) && direction === width ) || // snake hits bottom wall
          (currentSnake[0] % width === width -1 && direction === 1) || // snake hits right wall
          (currentSnake[0] % width === 0 && direction === -1) || // snake hits left wall
          (currentSnake[0] - width < 0 && direction === -width) ||  // snake hits top wall
          squares[currentSnake[0] + direction].classList.contains('snake') // snake hits itself
        ) {
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
    
        //deals with snake getting apple
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
        <div className="snakeContainer">
            <button className="memoryReset" onClick={this.startGame}>Start / Reset</button>
            <div>Score: {this.state.displayScore}</div>
            <br/>
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
        </div>
    </div>
    )
  }
}
  
export default Snake;
