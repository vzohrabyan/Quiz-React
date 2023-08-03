import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useParams } from 'react-router-dom';

const Timer = () => {
  const categories = useParams()
  const params = new URLSearchParams(categories.category);
  let duration = 0;
  const amount = params.get('amount');
  const difficulty = params.get('difficulty');

  if (difficulty === 'easy') {
    if (amount <= 10) duration = 60; 
    else if (amount <= 20 && amount > 10) duration = 120; 
    else if (amount <= 30 && amount > 20) duration = 180; 
    else if (amount <= 40 && amount > 30) duration = 240; 
    else if (amount <= 50 && amount > 40) duration = 300; 
  } else if (difficulty === 'medium') {
    if (amount <= 10) duration = 120; 
    else if (amount <= 20 && amount > 10) duration = 240; 
    else if (amount <= 30 && amount > 20) duration = 360; 
    else if (amount <= 40 && amount > 30) duration = 480; 
    else if (amount <= 50 && amount > 40) duration = 600; 
  } else if (difficulty === 'hard') {
    if (amount <= 10) duration = 180; 
    else if (amount <= 20 && amount > 10) duration = 360; 
    else if (amount <= 30 && amount > 20) duration = 540; 
    else if (amount <= 40 && amount > 30) duration = 720; 
    else if (amount <= 50 && amount > 40) duration = 900; 
  } else if (difficulty === '')  {
    if (amount <= 10) duration = 200; 
    else if (amount <= 20 && amount > 10) duration = 380; 
    else if (amount <= 30 && amount > 20) duration = 560; 
    else if (amount <= 40 && amount > 30) duration = 740; 
    else if (amount <= 50 && amount > 40) duration = 1200; 
  }
  
  const handleComplete = () => {
    window.location.href = "/:category/lose";
  };

  return (
    <CountdownCircleTimer
      isPlaying
      duration={duration * 2}
      colors={['#6066D0']}
      colorsTime={[duration * 2]}
      onComplete={handleComplete}
      className="timer"
    >
      {({ remainingTime }) => {
        const minutes = Math.floor((remainingTime % 3600) / 60);
        const seconds = remainingTime % 60;

        return <h3>{minutes}:{seconds}</h3>;
      }}
    </CountdownCircleTimer>
  );
};

export default Timer;
