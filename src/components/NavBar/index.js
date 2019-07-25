import React from 'react';
//import { Link } from "react-router-dom";
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
                <a className="navbar-brand" href="/">
                <img src="./assets/images/glass-jar.png" height="64"/>{props.name}
            </a>
           
            </ nav>
    )
}

export default NavBar;