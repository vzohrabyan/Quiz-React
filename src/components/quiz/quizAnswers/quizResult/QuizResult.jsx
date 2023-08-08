import React, { useEffect, useState } from 'react'
import "./QuizResult.scss"
const QuizResult = ({correctAnswers,count}) => {
    const [message, setMessage] = useState("");
    const degree = correctAnswers / count * 180 ;
    
    useEffect(() => {
        if (degree <= 18) {
          setMessage("Bad");
        } else if (degree <= 50) {
          setMessage("Not Bad");
        } else if (degree <= 80) {
          setMessage("Cool");
        } else if (degree <= 120) {
          setMessage("Good Job");
        } else if (degree <= 150) {
          setMessage("Wowww");  
        } else if (degree <= 180) {
          setMessage("Awesome keep it up!");
        }
      }, [degree]);
    
  return (
    <div className='result'>
        <div className="circle-wrap" >
            <div className="circle" >
            <div className="mask full" style={{transform: `rotate(${degree}deg)`}}>
                <div className="fill" style={{transform: `rotate(${degree}deg)`}}></div>
            </div>
            <div className="mask half" >
                <div className="fill" style={{transform: `rotate(${degree}deg)`}}></div>
            </div>
            <div className="inside-circle">
            {correctAnswers}/{count}
            </div>
        </div>
        </div>
        <span>{message}</span>
    </div> 
    );
}

export default QuizResult