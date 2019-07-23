import React from 'react';
import { Link } from "react-router-dom";
import ScoreBar from "../ScoreBar"

function NavBar(props) {
    let type = ""
    let bg = ""
    if (props.dark) {
        type = "navbar-dark"
        bg = "bg-dark"
    } else {
        type = "navbar-light"
        bg = "bg-light"
    }

    return (
        <nav className={`navbar ${type} ${bg} shadow-sm`}>
                <Link className="navbar-brand" to="/">
                {props.name}
            </Link>
            <ScoreBar></ScoreBar>
            </ nav>
    )
}

export default NavBar;