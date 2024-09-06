import './App.css'
import heart from './assets/heart.gif';
import React from "react";
import {Link } from "react-router-dom";

export default function App() {
  return (
    <main>
      <div className = "center">
          <h1> Welcome to Xin</h1>
          <p> Your mental health journey starts today</p>
         <img src={heart} alt="heart" className="animation" />
        <div className = "begin">
          <Link to="/BreatherPage"><button type="button">
            Begin 
          </button> 
          </Link>
        </div>
      </div>
    
    </main>
  )
}
