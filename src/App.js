import React, { Component } from 'react';
import Script from "react-inline-script";
import Modal from "./components/Modal";
import NavBar from "./components/NavBar"
import Main from "./pages/Main";


class App extends Component {

    state = {
        score: 0,
        highScore: 0,
        wins: 0,
        loses: 0
    };

    incrementScore = () => {
        this.setState({ score: this.state.score + 1 })
    }

    incrementWins = () => {
        this.setState({ wins: this.state.wins + 1 })
    }

    incrementLoses = () => {
        this.setState({ loses: this.state.loses + 1 })
    }

    setScoreZero = () => {
        this.setState({ score: 0 })
    }
    showM = (message) => {
        
        return (

            <Modal title="Great Job!" message={message}></Modal>
            
            )
    }
    hideM = (message) => {
       
        return (
            <Script>hidem()</Script>
            )
    }


    render() {
        return (

            <div>
                <NavBar
                    dark={true}
                    name="Mind Jar"
                    score={this.state.score}
                    wins={this.state.wins}
                    loses={this.state.loses}
                    highScore={this.state.highScore}
                />
              
               <Main
                    score={this.state.score}
                    wins={this.state.wins}
                    loses={this.state.loses}
                    highScore={this.state.highScore}
                    incrementScore={this.incrementScore}
                    incrementWins={this.incrementWins}
                    incrementLoses={this.incrementLoses}
                    setScoreZero={this.setScoreZero}
                />

                <nav class="navbar fixed-bottom navbar-light bg-light">
                    <a class="text" href="/">Mind Jar</a>
                </nav>
                {this.state.score >= 2 ? this.showM("You Win This Round") : null}
            </ div>

        )
    }
}

export default App;
