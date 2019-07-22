import React from 'react';
import { Link } from "react-router-dom";


function NavBar(props) {

    return (
            <nav className="navbar navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">
                   Mind Jar
                </Link>
            </ nav>
    )
}

export default NavBar;