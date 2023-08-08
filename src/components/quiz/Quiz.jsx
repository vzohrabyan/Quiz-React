import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import QuizQuestion from "./quizQuestion/QuizQuestion"
import QuizAnswers from "./quizAnswers/QuizAnswers"
import "./Quiz.scss"
import Loading from "./loading/Loading"

const Quiz = () => {

  const [data, setData] = useState([]);
  const [qustionNumber, setQustionNumber] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [loading, setLoading] = useState(true)

  const {category} = useParams();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          `https://opentdb.com/api.php?${category}`
        );
        setData(response.data.results);
      } catch (error) {
        console.error('Error fetching trivia data:', error);
      } finally {
        setLoading(false)
      }
    };
    fetchdata();
  }, [category]);
  

  return (
    <div className="quiz">
      {(data[0] && !loading) ?  <>
          <QuizQuestion data={data} qustionNumber={qustionNumber}/>
          <QuizAnswers data={data} qustionNumber={qustionNumber} setQustionNumber={setQustionNumber} setCorrectAnswers={setCorrectAnswers} correctAnswers={correctAnswers} />
        </> : <>{!loading && <h1>Whoops something wrong else try again</h1>}</>
        }
        {loading && <Loading />}
    </div>
  )
}

export default Quiz