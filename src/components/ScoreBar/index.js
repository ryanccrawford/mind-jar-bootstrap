import React, { Component } from "react";
import "./style.css";

class ScoreBar extends Component {
  
    render() {
        return (
            <div>
                <span className="badge-pill badge badge-secondary ml-1 large">Current Score: {`${this.props.score}`}</span>
                <span className="badge-pill badge badge-secondary ml-1 large">Wins: {`${this.props.wins}`}</span>
                <span className="badge-pill badge badge-secondary ml-1 large">Losses: {`${this.props.loses}`}</span>
                <span className="badge-pill badge badge-secondary ml-1 large">High Score: {`${this.props.highScore}`}</span>

            </div>

        );
    }
}

export default ScoreBar;
