import React, {Component} from 'react';
import '../App/App.css';
import Swal from 'sweetalert2';
import {connect} from 'react-redux';



class WhackAMouse extends Component {

    timerId = null;
    moveMole = null;

    state={
        hitPosition: null,
        result: 0
    }

    componentDidMount=()=>{
        console.log("let's start wackin!");
        this.props.dispatch({type: 'GET_GAMES_PLAYED'});
    }

    componentWillUnmount=()=>{
        clearInterval(this.timerId);
        clearInterval(this.moveMole);
    }

    countDown=()=>{
        const timeLeft = document.querySelector('#whack-time');
        let currentTime = timeLeft.textContent;
        currentTime--
        timeLeft.textContent = currentTime
        
        if(currentTime === 0){
            this.props.dispatch({type: 'ANOTHER_GAME_PLAYED', payload: {game: 'whack', score: (this.props.reduxState.highScore.gamesPlayed.whack + 1)}});
            Swal.fire({
                title: 'GAME OVER! Your final score is: ' + this.state.result, 
                icon: "success", 
                allowOutsideClick: false,
                confirmButtonText: 'Awesomeness!',
            }).then(() => {
                    this.reset();
                });
        }
    }

    hit=(id)=>{
        let score = document.querySelector('#whack-score');
        if(id === this.state.hitPosition){
            this.setState({
                result: this.state.result +1
            });
            score.textContent = this.state.result;
        }
    }

    randomSquare=()=>{
        const square = document.querySelectorAll(".wackSquare");
        square.forEach(className =>{
            className.classList.remove('whack-mole');
            });
        let randomPosition = square[Math.floor(Math.random() * 9)];
        randomPosition.classList.add('whack-mole');
        this.setState({
            hitPosition: randomPosition.id
        });
    }

    reset=()=>{
        let score = document.querySelector('#whack-score');
        const timeLeft = document.querySelector('#whack-time');
        clearInterval(this.moveMole);
        clearInterval(this.timerId);
            this.setState({
                hitPosition: null,
                result: 0
            });
            score.textContent = 0;
            timeLeft.textContent = 60;
    }

    startGame=()=>{
        this.moveMole = setInterval(this.randomSquare, 1000);
        this.timerId = setInterval(this.countDown, 1000);
    }

    render() {
        return (
        <>
            <div className="whackWrapper">
                <div className="container">
                    <header className="header">
                        <h1 className="fw-300 t-ucase">Let's Play
                            <br/>
                            <span className="fw-400 t-wide f-big t-ucase">Wack-A-Mouse</span>
                        </h1>
                    </header>
                    <center>
                        <h2>Score: <span id="whack-score">0</span></h2>
                        <h2>Time Left: <span id="whack-time">60</span></h2>
                    </center>
                    
                    <button className="btn-lg" onClick={this.startGame}>Start Game</button>
                    <br/>
                    <br/>
                    <br/>
                    <div className="whackGrid">
                        <div className="wackSquare" id="1" onMouseUp={()=>this.hit("1")}></div>
                        <div className="wackSquare" id="2" onMouseUp={()=>this.hit("2")}></div>
                        <div className="wackSquare" id="3" onMouseUp={()=>this.hit("3")}></div>
                        <div className="wackSquare" id="4" onMouseUp={()=>this.hit("4")}></div>
                        <div className="wackSquare" id="5" onMouseUp={()=>this.hit("5")}></div>
                        <div className="wackSquare" id="6" onMouseUp={()=>this.hit("6")}></div>
                        <div className="wackSquare" id="7" onMouseUp={()=>this.hit("7")}></div>
                        <div className="wackSquare" id="8" onMouseUp={()=>this.hit("8")}></div>
                        <div className="wackSquare" id="9" onMouseUp={()=>this.hit("9")}></div>
                    </div>
                </div>
            </div>
        </>
        )
    }
}
  
const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });
  
  export default connect(putReduxStateOnProps)(WhackAMouse);
  