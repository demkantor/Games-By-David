import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../App/App.css';



class Home extends Component {

    componentDidMount=()=>{
        this.props.dispatch({type: 'GET_ALL_HIGH_SCORES'})
    }


    render() {
        return (
            <div className="home-wrapper">
                <div className="container">
                    <header className="header">
                        <h1 className="fw-300 t-ucase">Welcome to
                            <br/>
                            <span className="fw-400 t-wide f-big t-ucase">Games by David</span>
                        </h1>
                    </header>
                    <div className="score-wrapper">
                        <a href="#memory" className="score-card">
                            <h1 className="fw-400 t-ucase">Memory 
                                <br/> 
                                <h2>High Score</h2>
                                <h1 className="t-ucase fw-300">{this.props.reduxState.highScore.allHighs.memory}</h1>
                            </h1>
                        </a>
                        <a href="#whack" className="score-card">
                            <h1 className="fw-400 t-ucase">Whack-A-Mouse 
                                <br/> 
                                <h2>High Score</h2>
                                <h1 className="t-ucase fw-300">{this.props.reduxState.highScore.allHighs.whack}</h1>
                            </h1>
                        </a>
                        <a href="#snake" className="score-card">
                            <h1 className="fw-400 t-ucase">snake 
                                <br/> 
                                <h2>High Score</h2>
                                <h1 className="t-ucase fw-300">{this.props.reduxState.highScore.allHighs.snake}</h1>
                            </h1>
                        </a>
                        <a href="#connect" className="score-card">
                            <h1 className="fw-400 t-ucase">connect four 
                                <br/> 
                                <h2>High Score</h2>
                                <h1 className="t-ucase fw-300">{this.props.reduxState.highScore.allHighs.connect}</h1>
                            </h1>
                        </a>
                        <a href="#tetris" className="score-card">
                            <h1 className="fw-400 t-ucase">tetris
                                <br/> 
                                <h2>High Score</h2>
                                <h1 className="t-ucase fw-300">{this.props.reduxState.highScore.allHighs.tetris}</h1>
                            </h1>
                        </a>
                        <a href="#space" className="score-card">
                            <h1 className="fw-400 t-ucase">space invaders 
                                <br/> 
                                <h2>High Score</h2>
                                <h1 className="t-ucase fw-300">{this.props.reduxState.highScore.allHighs.space}</h1>
                            </h1>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
  

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });
  
export default connect(putReduxStateOnProps)(Home);