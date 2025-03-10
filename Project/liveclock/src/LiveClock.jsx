import React, { useState, useEffect } from 'react';
import './App.css';

const LiveClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isRunning, setIsRunning] = useState(false);
  const [format, setFormat] = useState('24-hour');
  let intervalId = null;

  useEffect(() => {
    if (isRunning) {
      intervalId = setInterval(() => {
        const now = new Date();
        setTime(format === '12-hour' ? now.toLocaleTimeString('en-US') : now.toLocaleTimeString('en-GB'));
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, format]);

  const startClock = () => setIsRunning(true);
  const stopClock = () => {
    setIsRunning(false);
    clearInterval(intervalId);
  };
  
  return (
    <div className="live-clock-container">
      <h1 className="live-clock-time">{time}</h1>
      <div className="live-clock-buttons">
        <button 
          onClick={startClock} 
          disabled={isRunning} 
          className={`start-btn ${isRunning ? 'disabled' : ''}`}
        >Start</button>
        <button 
          onClick={stopClock} 
          disabled={!isRunning} 
          className={`stop-btn ${!isRunning ? 'disabled' : ''}`}
        >Stop</button>
        <button 
          onClick={() => setFormat('12-hour')} 
          className={`format-btn ${format === '12-hour' ? 'active-format' : ''}`}
        >12-Hour</button>
        <button 
          onClick={() => setFormat('24-hour')} 
          className={`format-btn ${format === '24-hour' ? 'active-format' : ''}`}
        >24-Hour</button>
      </div>
    </div>
  );
};

export default LiveClock;
