import Timer from './timer/Timer'
const QuizQuestion = ({data, qustionNumber}) => {
  return (
    <div className="quiz-question">
        {(qustionNumber !== data.length) ? (
          <>
            <div className="quiz-question-main">
              <h2>{data[qustionNumber].category} Question</h2>
              <div className="line">
                <div className="line-question">
                  <div className="line-question-checked" style={{width: `${((qustionNumber + 1) / data.length) * 100}%`}}></div>
                </div>
                {qustionNumber + 1}/{data.length}
              </div>
              <Timer />
            </div>
            <h1>Question - {qustionNumber + 1}</h1>
            <h2>{data[qustionNumber].question}</h2>
          </>
        ) : <h5>Your questions is finished</h5>}
    </div>
  )
}

export default QuizQuestion