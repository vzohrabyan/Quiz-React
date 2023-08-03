import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.scss'; // Assuming you have a separate SCSS file for styles

const Home = () => {
  const [selectedValues, setSelectedValues] = useState({
    amount: '',
    category: '',
    difficulty: '',
    type: '',
  });
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const amountRef = useRef(null);
  const [validation, setValidation] = useState(false)

  useEffect(() => {
    fetch('https://opentdb.com/api_category.php')
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.trivia_categories);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const startQuiz = () => {
    if(selectedValues.amount > 0 && selectedValues.amount <= 50) {
      navigate(
        `amount=${selectedValues.amount}&category=${selectedValues.category}&difficulty=${selectedValues.difficulty}&type=${selectedValues.type}`
      )
      setValidation(false)
    } else {
      amountRef.current.style.border = "1px solid red";
      setValidation(true);
    }
  };
  const inputsValues = (event) => {
    setSelectedValues({
      ...selectedValues,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={startQuiz}>
        <label htmlFor="amount">Select Amount:</label>
      <input
        type="number"
        name="amount"
        id='amount'
        value={selectedValues.amount}
        onChange={inputsValues}
        ref={amountRef}
        title="Write a number from 1 to 50"
      />
      {validation && <p>Sorry, but our number of questions is from 1 to 50 please write a number in the given range</p>}
      <label htmlFor="category">Select Category:</label>
      <select id="category" name="category" onChange={inputsValues}>
        <option value="">Any Category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <label htmlFor="difficulty">Select Difficulty:</label>
      <select id="difficulty" name="difficulty" onChange={inputsValues}>
        <option value="">Any Difficulty</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <label htmlFor="type">Select Type:</label>
      <select id="type" name="type" onChange={inputsValues}>
        <option value="">Any Type</option>
        <option value="multiple">Multiple Choice</option>
        <option value="boolean">True/False</option>
      </select>
        <button type="button" onClick={startQuiz} className="quiz-button">
          Start
        </button>
    </form>
  );
};

export default Home;
