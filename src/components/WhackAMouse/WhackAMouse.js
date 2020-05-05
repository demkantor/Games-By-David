import React, {Component} from 'react';
import '../App/App.css';
import Swal from 'sweetalert2'



class WhackAMouse extends Component {

    timerId = null;
    moveMole = null;

    state={
        hitPosition: null,
        result: 0
    }

    componentDidMount=()=>{
        console.log("let's start wackin!")
    }

    componentWillUnmount=()=>{
        clearInterval(this.timerId);
        clearInterval(this.moveMole);
    }

    countDown=()=>{
        const timeLeft = document.querySelector('#wackTime');
        let currentTime = timeLeft.textContent;
        currentTime--
        timeLeft.textContent = currentTime
        
        if(currentTime === 0){
            Swal.fire({
                title: 'GAME OVER! Your final score is: ' + this.state.result, 
                icon: "success", 
                allowOutsideClick: false,
                confirmButtonText: 'Awesomeness!',
            }).then(() => {
                    this.reset()
                });
            
        }
    }

    hit=(id)=>{
        let score = document.querySelector('#wackScore');
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
            className.classList.remove('wackMole')
            });
        let randomPosition = square[Math.floor(Math.random() * 9)];
        randomPosition.classList.add('wackMole');
        this.setState({
            hitPosition: randomPosition.id
        });
    }

    reset=()=>{
        let score = document.querySelector('#wackScore');
        const timeLeft = document.querySelector('#wackTime');
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
            <div className="wackWrapper">
                <div className="container">
                    <header className="header">
                        <h1 className="fw-300 t-ucase">Welcome to
                            <br/>
                            <span className="fw-400 t-wide t-big t-ucase">Wack-A-Mouse</span>
                        </h1>
                    </header>
                    <center>
                        <h2>Score: <span id="wackScore">0</span></h2>
                        <h2>Time Left: <span id="wackTime">60</span></h2>
                    </center>
                    
                    <button className="btn-lg" onClick={this.startGame}>Start Game</button>
                    <br/>
                    <br/>
                    <br/>
                    <div className="wackGrid">
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
  
export default WhackAMouse;