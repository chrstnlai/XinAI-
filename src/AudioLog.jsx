import React from "react";
import Navbar from "./components/Navbar"; 

export default function AudioLog() {
  return (
    <>
      <Navbar /> {}
      <div>
       <h1>AudioLog</h1>
        <p>
          Use the audio log as your own personal journal. Xin's AI model will
          analyze your recording and give you guidance on your emotions and
          mood. Just press record, talk, yell, rage, laugh, recount on happy
          moments, recount on sad moments, and most importantly - feel 😌.
        </p>
      </div>

      <div className="embedded-content">
        <iframe 
          src="/AudioLog.html" 
          title="Embedded HTML"
          width="100%" 
          height="500px" 
          style={{border: 'none'}} 
        />
      </div>
    </>
  );
}
