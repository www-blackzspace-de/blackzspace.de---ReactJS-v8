import React, { useEffect } from "react";
import logo from "../Images/Main/logo.png";
import "../Styles/Root.css";

function Root() {
 
  useEffect(() => {
    document.title = "bS | Index";
    console.log("Console > Index!")
  }, []);

  return (
    <div className="Root">
      <header className="Root-header">
        <img src={logo} className="Root-logo" alt="logo" />

        <p>Join the Space!</p>
        <a
          className="Root-link"
          href="https://board.blackzspace.de"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit!
        </a>
        
      </header>
    </div>
  );
}

export default Root;
