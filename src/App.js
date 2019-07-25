import React, { Component } from 'react';
//import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import Main from "./pages/Main";
import ScoreBar from "./components/ScoreBar"


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

    render() {
        return (

            <div>
                <NavBar
                    dark={true}
                    name="Mind Jar">
                    <ScoreBar
                        score={this.state.score}
                        wins={this.state.wins}
                        loses={this.state.loses}
                        highScore={this.state.highScore}
                       
                     />
                </ NavBar>
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

                
            </ div>

        )
    }
}

export default App;
