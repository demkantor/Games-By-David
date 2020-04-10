import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Nav from '../Nav/Nav';
import Memory from '../Memory/Memory';

function App() {

  return (
    <>
     <Router>
        <Nav />
        <Route exact path="/memory" component={Memory}/>
     </Router>
    </>
  );
}

export default App;
