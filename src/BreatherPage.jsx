import React from "react";
import { Link } from "react-router-dom";
import './BreatherPage.css';

export default function BreatherPage() {
  return (
    <main>
      <div className="center">
        <div className="font-link">
          <h1>Before We Continue...</h1>
          <p>Breathe in to the opening of the circle. Breathe out to the closing of the circle. Take as many breathes you need :)</p>
          <p className="anim-circle">diaphragmatic animation</p>
        </div>
        <div className="continue">
          <Link to="/AudioLog">
            <button type="TryButton">Try Xin</button>
          </Link>
        </div>
      </div>
      {/* Embed the HTML file using an iframe */}
      <div className="embedded-content">
        <iframe 
          src="/AudioLog.html" 
          title="Embedded HTML"
          width="100%" 
          height="500px" 
          style={{border: 'none'}} 
        />
      </div>
    </main>
  );
}
