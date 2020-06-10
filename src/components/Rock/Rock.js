import React, {Component} from 'react';
import '../App/App.css';


class Rock extends Component {

    state = {
        pScore: 0,
        cScore: 0,
        ties: 0
    };

    playGame = () => {
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.rps-match');
        introScreen.classList.add('fadeOut');
        match.classList.add("fadeIn");
    };

    chooseWisely = (type) => {
        const playerHand = document.querySelector(".player-hand");
        const compHand = document.querySelector(".comp-hand");
        // options the computer can play
        const compOptions = ['rock', 'paper', 'scissors'];
        const compNumber = Math.floor(Math.random() *3);
        const compChoice = compOptions[compNumber];

        // wait to show choice until after animation
        setTimeout(() => {
            this.compareHands(type, compChoice);
            // update images...
            playerHand.src =`images/rock/hand-${type}-solid.svg`;
            compHand.src =`images/rock/hand-${compChoice}-solid.svg`;
            // console.log(type, compChoice);

            // remove shake animation
            const hands = document.querySelectorAll(".hands img");
            hands.forEach((hand) => {
                hand.addEventListener('animationend', function() {
                    this.style.animation = '';
                });
            });
        }, 200);

        // add shaking animation on button click
        playerHand.style.animation = "shakePlayer 200ms ease";
        compHand.style.animation = "shakeComp 200ms ease";
    };

    compareHands = (playerChoice, compChoice) => {
        const winner = document.querySelector('.rps-winner');
        if(playerChoice === compChoice) {
            winner.textContent = 'No winner, Tie!'
            this.setState({ties: this.state.ties +1});
            return;
        };

        // check for rock first
        if(playerChoice === 'rock') {
            if(compChoice === 'scissors') {
                winner.textContent = 'You Win!';
                this.setState({pScore: this.state.pScore +1});
                return;
            } else {
                winner.textContent = 'You Loose!';
                this.setState({cScore: this.state.cScore +1});
                return;
            };
        };

        // now check for paper
        if(playerChoice === 'paper') {
            if(compChoice === 'scissors') {
                winner.textContent = 'You Loose!';
                this.setState({cScore: this.state.cScore +1});
                return;
            } else {
                winner.textContent = 'You Win!';
                this.setState({pScore: this.state.pScore +1});
                return;
            };
        };

        // last check for scissors
        if(playerChoice === 'scissors') {
            if(compChoice === 'rock') {
                winner.textContent = 'You Loose!';
                this.setState({cScore: this.state.cScore +1});
                return;
            } else {
                winner.textContent = 'You Win!';
                this.setState({pScore: this.state.pScore +1});
                return;
            };
        };
    };


    render() {
        return (
            <div className="home-wrapper">
                <div className="container">
                    <header className="header">
                        <h1 className="fw-300 t-ucase">Let's Play
                            <br/>
                            <span className="fw-400 t-wide f-big t-ucase">Rock Paper Scissors</span>
                        </h1>
                    </header>
                    <section className="rockWrapper">
                        <div className="rps-score">
                            <div className="rps-player-score">
                                <h2>Your Score</h2>
                                <p>{this.state.pScore}</p>
                            </div>
                            <div className="rps-comp-score">
                                <h2>Computer Score</h2>
                                <p>{this.state.cScore}</p>
                            </div>
                        </div>
                        <div className="rps-score rps-tie">
                            <p>Tie Games: <span className="rps-ties">{this.state.ties}</span></p>
                        </div>
                        <div className="intro">
                            <h1>Rock Paper Scissors</h1>
                            <button onClick={this.playGame} className="intro-btn">Let's Play!</button>
                        </div>
                        <div className ="rps-match fadeOut">
                            <h2 className="rps-winner">Choose an option</h2>
                            <div className="hands">
                                <img className="player-hand" src="images/rock/hand-rock-solid.svg" width="150" height="150" alt="player"/>
                                <img className="comp-hand" src="images/rock/hand-rock-solid.svg" width="150" height="150" alt="computer"/>
                            </div>
                            <div className="rps-options">
                                <button onClick={()=>this.chooseWisely('rock')} className="rock">rock</button>
                                <button onClick={()=>this.chooseWisely('paper')} className="paper">paper</button>
                                <button onClick={()=>this.chooseWisely('scissors')} className="scissors">scissors</button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
};
  

export default Rock;
