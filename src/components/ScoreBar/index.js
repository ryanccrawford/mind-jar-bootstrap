import React, { Component } from "react";


class ScoreBar extends Component {
  
    render() {
        return (
            <div>
                <span className="badge-pill badge badge-secondary ml-1">Current Score: {`${this.props.score}`}</span>
                <span className="badge-pill badge badge-secondary ml-1">Wins: {`${this.props.wins}`}</span>
                <span className="badge-pill badge badge-secondary ml-1">Losses: {`${this.props.loses}`}</span>
                <span className="badge-pill badge badge-secondary ml-1">High Score: {`${this.props.highScore}`}</span>

            </div>

        );
    }
}

export default ScoreBar;
