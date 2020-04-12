import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Nav from '../Nav/Nav';
import Memory from '../Memory/Memory';
import WhackaAMouse from '../WhackAMouse/WhackAMouse';
import ConnectFour from '../ConnectFour/ConnectFour';

function App() {

  return (
    <>
     <Router>
        <Nav />
        <Route exact path="/memory" component={Memory}/>
        <Route exact path="/whack" component={WhackaAMouse}/>

        <Route exact path="/connect" component={ConnectFour}/>
     </Router>
    </>
  );
}

export default App;
