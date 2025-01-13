import React, { useState, useEffect } from 'react';

const CountdownTimer = ({time}) => {
  const [seconds, setSeconds] = useState(time);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 1) {
          clearInterval(intervalId); // Clear the interval when seconds reach 1
        }
        return prevSeconds - 1;
      });
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      // Do something when the countdown reaches 0 (e.g., perform an action)
     // console.log('Countdown reached 0!');
    }
  }, [seconds]);

  return  <span>{seconds}</span>   ;
};

export default CountdownTimer;
