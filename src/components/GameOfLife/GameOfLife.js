import React, {Component} from 'react';
import '../App/App.css';
import {connect} from 'react-redux';



class GameOfLife extends Component {



  render() {
        return (
        <>
            <div className="lifeWrapper">
                <div className="container">
                    <header className="header">
                    <h1 className="fw-300 t-ucase">Conway's
                            <br/>
                            <span className="fw-400 t-wide f-big t-ucase">Game of Life</span>
                        </h1>
                    </header>
                </div>
            </div>
        </>
        )
    }
}
  
const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });
  
export default connect(putReduxStateOnProps)(GameOfLife);
