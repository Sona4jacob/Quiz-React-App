import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    // Fetch questions from db.json
    fetch('/db.json')
      .then((response) => response.json())
      .then((data) => setQuestions(data.questions))
      .catch((error) => console.error('Error fetching questions:', error));
  }, []);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null); // Reset selected option for the new question
    } else {
      setShowScore(true);
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='m-3 p-3'>
      {showScore ? (
        <div>
          <h2>Your Score: {score} out of {questions.length}</h2>
        </div>
      ) : (
        <div className='ms-5'>
          <h2 className='text-center'>Question {currentQuestion + 1}</h2>
          <h6>{questions[currentQuestion]?.question}</h6>
          {questions[currentQuestion]?.options.map((option, index) => (
            <div key={index}>
              <label>
                <input
                  type='radio'
                  name='options'
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                  style={{ color: ' rgb(14, 162, 162)' }}
                />
                {option}
              </label>
            </div>
          ))}
<div className='text-center'>
              <button
                className='btn btn-primary mt-3'
                onClick={() => handleAnswerClick(selectedOption)}
              >
                Next
              </button>
    
</div>        </div>
      )}
 </div>
  );
};

export default Quiz;
