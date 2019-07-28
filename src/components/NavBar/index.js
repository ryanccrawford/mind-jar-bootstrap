import React from 'react';
//import { Link } from "react-router-dom";
import ScoreBar from "../ScoreBar"
import "./style.css";

class NavBar extends React.Component {
    render() {
        let type = ""
        let bg = ""
        if (this.props.dark) {
            type = "navbar-light"
            bg = "bg-light"
        } else {
            type = "navbar-light"
            bg = "bg-light"
        }
        return (
           <nav className={`navbar ${type} ${bg} shadow-sm`}>
            <a className="navbar-brand" href="/">
                    <img src="./assets/images/glass-jar.png" height="64" alt="..." />
                    <span className="flicker brain">{this.props.name}</span>
                </a>
                <span className="small-text">Makes your mind hurt</span>
            <ScoreBar
                score={this.props.score}
                wins={this.props.wins}
                loses={this.props.loses}
                highScore={this.props.highScore}

            ></ScoreBar>
        </ nav>
    )
    }
}

export default NavBar;