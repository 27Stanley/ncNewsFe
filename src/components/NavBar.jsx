import React from "react";
import { Link } from "react-router-dom";

import "../styles/NavBar.css"


export default function NavBar(){
    return(
        <div className="navContainer">
            <nav className="navItems">
                <Link to="/">Home</Link>
                <Link to="/articles">Article List</Link>

            </nav>
        </div>
    )
}
