import { useEffect, useRef, useState } from "react";
import QuizResult from "./quizResult/QuizResult";

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const QuizAnswers = ({ data, qustionNumber, setQustionNumber, setCorrectAnswers, correctAnswers }) => {
  const [answers, setAnswers] = useState([]);
  const selectedAnswer = useRef({});
  const truthyAnswer = useRef(null);
  const [isChecked, setIsChecked] = useState(false)

  const checkAnswer = async () => {
    if (selectedAnswer.current.answer === data[qustionNumber].correct_answer) {
      setCorrectAnswers((prev) => prev + 1);
      setTimeout(() => {
        selectedAnswer.current.e.target.style.backgroundColor = "";
        selectedAnswer.current.e.target.style.color = "black";
        setQustionNumber((prev) => prev + 1);
      }, 500);
      selectedAnswer.current.e.target.style.backgroundColor = "green";
      selectedAnswer.current.e.target.style.color = "white";
    } else {
      setCorrectAnswers((prev) => prev);
      setTimeout(() => {
        selectedAnswer.current.e.target.style.backgroundColor = "";
        selectedAnswer.current.e.target.style.color = "black";
        truthyAnswer.current.style.backgroundColor = "";
        truthyAnswer.current.style.color = "black";
        setQustionNumber((prev) => prev + 1);
      }, 500);
      selectedAnswer.current.e.target.style.backgroundColor = "red";
      selectedAnswer.current.e.target.style.color = "white";
      truthyAnswer.current.style.backgroundColor = "green";
      truthyAnswer.current.style.color = "white";
    }
    setIsChecked(false)
  };

  useEffect(() => {
    if (qustionNumber < data.length) {
      const currentAnswers = [
        { title: data[qustionNumber].correct_answer, isCorrect: true },
        ...data[qustionNumber].incorrect_answers.map((answer) => ({
          title: answer,
          isCorrect: false,
        })),
      ];
      setAnswers(shuffleArray(currentAnswers));
    }
  }, [qustionNumber, data]);

  return (
    <div className="quiz-answers">
      {(qustionNumber !== data.length) ? (
        <>
          {answers.map((answer, id) => (
          <div
            onClick={(e) => {
              setIsChecked(true)
              Array.from(e.target.parentNode.childNodes).forEach((node) => {
                node.style.backgroundColor = "";
              });
              selectedAnswer.current = {
                answer: answer.title,
                e: e,
              };
              e.target.style.backgroundColor = "#ccc"
            }}
            ref={answer.isCorrect ? truthyAnswer : null}
            className="quiz-answers-item"
            key={id}
          >
            {answer.title}
          </div>
        ))}
          <button onClick={() => {if(isChecked) {checkAnswer()}}}>Next</button>
        </>
        
      ) : (
        <>
          <QuizResult correctAnswers={correctAnswers} count={data.length}/>        
        </>
      )}
    </div>
  );
};

export default QuizAnswers;
