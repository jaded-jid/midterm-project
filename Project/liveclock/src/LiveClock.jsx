import React, { useState, useEffect } from "react";

const LiveClock = () => {
  const [time, setTime] = useState(new Date());
  const [isRunning, setIsRunning] = useState(false);
  const [is24Hour, setIs24Hour] = useState(true);
  let intervalId;

  useEffect(() => {
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(new Date());
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const toggleClock = () => {
    setIsRunning(!isRunning);
  };

  const toggleFormat = () => {
    setIs24Hour(!is24Hour);
  };

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      height: "100vh", 
      backgroundColor: "black", 
      color: "white", 
      fontFamily: "Arial, sans-serif" 
    }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>Live Digital Clock</h1>
      <h2 style={{ fontSize: "2rem", padding: "10px 20px", borderRadius: "8px", border: "2px solid white" }}>
        {time.toLocaleTimeString([], { hour12: !is24Hour })}
      </h2>
      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <button 
          onClick={toggleClock} 
          disabled={isRunning} 
          style={{ padding: "10px 15px", fontSize: "1rem", borderRadius: "5px", cursor: "pointer", backgroundColor: "white", color: "black", border: "2px solid white", opacity: isRunning ? "0.5" : "1" }}
        >
          Start
        </button>
        <button 
          onClick={toggleClock} 
          disabled={!isRunning} 
          style={{ padding: "10px 15px", fontSize: "1rem", borderRadius: "5px", cursor: "pointer", backgroundColor: "white", color: "black", border: "2px solid white", opacity: !isRunning ? "0.5" : "1" }}
        >
          Stop
        </button>
        <button 
          onClick={toggleFormat} 
          style={{ padding: "10px 15px", fontSize: "1rem", borderRadius: "5px", cursor: "pointer", backgroundColor: "white", color: "black", border: "2px solid white" }}
        >
          {is24Hour ? "12-hour" : "24-hour"}
        </button>
      </div>
    </div>
  );
};

export default LiveClock;