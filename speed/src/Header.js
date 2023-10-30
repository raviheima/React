import React from "react";
import reactLogo from "./images/react.png";

export default function Header() {
  return (
    <header>
      <nav className="nav navbar navbar-dark bg-dark">
        <img src={reactLogo} alt="react logo" className="nav-img" />
        <h3 className="reactfacts">ReactFacts</h3>

        <ul className="nav-items">
          <li className="nav-item">Blog</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
}