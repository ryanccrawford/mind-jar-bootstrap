import React from 'react';
import { Link } from "react-router-dom";
import ScoreBar from "../ScoreBar"
import "./style.css";

function NavBar(props) {
    let type = ""
    let bg = ""
    if (props.dark) {
        type = "navbar-light"
        bg = "bg-light"
    } else {
        type = "navbar-light"
        bg = "bg-light"
    }

    return (
        <nav className={`navbar ${type} ${bg} shadow-sm`}>
                <Link className="navbar-brand" to="/">
                <img src="./assets/images/glass-jar.png" height="64"/>{props.name}
            </Link>
            <ScoreBar></ScoreBar>
            </ nav>
    )
}

export default NavBar;