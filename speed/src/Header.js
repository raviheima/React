import React from "react";
import reactLogo from "./images/react.png";
export default function Header(){
    return(
        <header>
            <nav className="nav">
            <img src={reactLogo} alt="react logo" className="nav-img" />

                <ul className="nav-items">
                    <li>Blog</li>
                    <li>About </li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}