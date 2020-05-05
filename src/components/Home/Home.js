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
                            <span className="fw-400 t-wide t-big t-ucase">Games by David</span>
                        </h1>
                    </header>
                    {JSON.stringify(this.props.reduxState.highScore.allHighs)}
                </div>
            </div>
        )
    }
}
  

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });
  
export default connect(putReduxStateOnProps)(Home);