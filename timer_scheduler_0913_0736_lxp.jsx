// 代码生成时间: 2025-09-13 07:36:30
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TimerScheduler = ({ initialDelay }) => {
  // State to hold the current time and whether the task is running
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Function to simulate a task
  const task = () => {
    console.log('Task executed at:', new Date().toISOString());
  };

  // Effect to start the timer when the component mounts and the task should be running
  useEffect(() => {
    let timerId;
    if (isRunning) {
      timerId = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }

    // Clear the interval when the component unmounts or changes the running state
    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [isRunning]);

  // Handle the start and stop of the task
  const handleToggle = () => {
    setIsRunning(!isRunning);
  };

  // Handle resetting the timer
  const handleReset = () => {
    setTime(0);
  };

  return (
    <div>
      <h2>Timer Scheduler</h2>
      <p>Time Elapsed: {time} seconds</p>
      <button onClick={handleToggle}>
        {isRunning ? 'Stop Task' : 'Start Task'}
      </button>
      <button onClick={handleReset}>Reset Timer</button>
    </div>
  );
};

// Prop types
TimerScheduler.propTypes = {
  initialDelay: PropTypes.number,
};

// Default props
TimerScheduler.defaultProps = {
  initialDelay: 0,
};

export default TimerScheduler;