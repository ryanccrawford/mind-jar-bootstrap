import React, { Component } from "react";


class ScoreBar extends Component {
    state = {
        score: 0,
        highScore: 0,
        wins: 0,
        loses:0,
    };

    add = (type) => {
        let amount = this.state[type]
        amount++
      this.setState({ [type]: amount })
          
    };

    

    render() {
        return (
            <div>
                <span className="badge-pill badge badge-secondary ml-1">Current Score: {`${this.state.score}`}</span>
                <span className="badge-pill badge badge-secondary ml-1">Wins: {`${this.state.wins}`}</span>
                <span className="badge-pill badge badge-secondary ml-1">Losses: {`${this.state.loses}`}</span>
                <span className="badge-pill badge badge-secondary ml-1">High Score: {`${this.state.highScore}`}</span>

            </div>

        );
    }
}

export default ScoreBar;
