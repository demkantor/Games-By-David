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
import Home from '../Home/Home';
import PacMan from '../PacMan/PacMan';
import DiceGame from '../DiceGame/DiceGame';
import Chess from '../Chess/Chess';
import Rock from '../Rock/Rock';
import TicTacToe from '../TicTacToe/TicTacToe';

function App() {

  return (
    <>
     <Router>
        <Nav />
          <Route exact path="/" component={Home}/>
          <Route exact path="/memory" component={Memory}/>
          <Route exact path="/tic-tac-toe" component={TicTacToe}/>
          <Route exact path="/whack" component={WhackaAMouse}/>
          <Route exact path="/snake" component={Snake}/>
          <Route exact path="/connect" component={ConnectFour}/>
          <Route exact path="/tetris" component={Tetris}/>
          <Route exact path="/space" component={SpaceInvaders}/>
          <Route exact path="/pac" component={PacMan}/>
          <Route exact path="/dice" component={DiceGame}/>
          <Route exact path="/chess" component={Chess}/>
          <Route exact path="/r-p-s" component={Rock}/>
     </Router>
    </>
  );
}

export default App;
