import './App.css';
import './LandingPage.css';
import React from "react";
import { Link } from "react-router-dom";
import LpNavbar from '/src/components/LpNavbar.jsx';
import xinnn from '/src/assets/xinnn.png'; 

export default function LandingPage() {
  return (
    <main className="maincontainer">
       <div className="anim_gradient"></div>
      <LpNavbar/>
      <div className="float-container">
        <div className="float-child">
          <div className="introtext">
            <h1>It's Okay to Not be Okay</h1>
            <p>Mental health for Asians by Asians</p>
          </div>
          <div>
            <Link to="/App">
              <button type="TryButton">Try Xin</button>
            </Link>
          </div>
        </div>
        <div className="float-child">
          <div className="image-container">
            <img src={xinnn} alt="emotions" />
          </div>
        </div>
      </div>
    </main>
  );
}
