import React from "react";
import './MeditationRoom.css';
import Navbar from "./components/Navbar"; 


export default function MeditationRoom() {
  return (
    <main className="meditationpage">
      <Navbar />
       <div className = "meditationtext">
      <div className="meditation_anim_gradient"></div>
      <div className="meditation-room">
        
        <h1>Meditation Room</h1>
        <p>Go to a comfortable spot, Press Play, Close your eyes, and Feel</p>
        <iframe 
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/playlist/5FqWNywH6R9LqHI0rrUQh3?utm_source=generator&theme=0" 
          width="100%" 
          height="380" 
          frameBorder="0" 
          allowfullscreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"
          ></iframe>
        </div>
      </div>
    </main>
  );
}

