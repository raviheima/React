import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Maincontent from "./Maincontent";
import Footer from "./Footer";
import "./css/index.css";
import "./css/c/bootstrap.css";
import "./js/bootstrap.js";


// const loveDiv = document.createElement('div');
// loveDiv.id ="love"

// document.body.appendChild(loveDiv);

// const root = ReactDOM.createRoot(loveDiv);

function App(){
  return(
    <div className="container-fluid">

        <Header />
        <Maincontent />
        <Footer />
    </div>
  )
}

ReactDOM.render(

<App />
, document.getElementById("root"));
