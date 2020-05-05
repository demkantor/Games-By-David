import React, {Component} from 'react';
import '../App/App.css';



class Home extends Component {

    
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
                </div>
            </div>
        )
    }
}
  
export default Home;