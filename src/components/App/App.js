import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Nav from '../Nav/Nav';
import Memory from '../Memory/Memory';
import WhackaAMouse from '../WhackAMouse/WhackAMouse';
import ConnectFour from '../ConnectFour/ConnectFour';
import Snake from '../Snake/Snake';
import SpaceInvaders from '../SpaceInvaders/SpaceInvaders';
import Tetris from '../Tetris/Tetris';

function App() {

  return (
    <>
     <Router>
        <Nav />
          <Route exact path="/memory" component={Memory}/>
          <Route exact path="/whack" component={WhackaAMouse}/>
          <Route exact path="/snake" component={Snake}/>
          <Route exact path="/connect" component={ConnectFour}/>
          <Route exact path="/tetris" component={Tetris}/>
          <Route exact path="/space" component={SpaceInvaders}/>
     </Router>
    </>
  );
}

export default App;
