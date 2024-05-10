import { useState } from "react";

const data = [
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Michelangelo",
    ],
    correctOption: 1,
  },

  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    correctOption: 0,
  },

  {
    question: 'Who wrote the famous play "Romeo and Juliet"?',
    options: [
      "William Shakespeare",
      "Jane Austen",
      "Charles Dickens",
      "Leo Tolstoy",
    ],
    correctOption: 0,
  },

  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "India", "Japan", "South Korea"],
    correctOption: 2,
  },

  {
    question: "Which of these animals is not a mammal?",
    options: ["Dolphin", " Bat", "Crocodile", "Kangaroo"],
    correctOption: 2,
  },
];

export default function Quiz() {
  const [totalScore, setTotalScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);

  const [selectedOption, setSelectedOption] = useState(null);

  const currentQuestion = data[questionIndex];

  function handleOptionChange(e) {
    // convert target value to `Number` before setting
    // the selected option
    setSelectedOption(Number(e.target.value));
  }

  function goPrevious() {
    if (questionIndex !== 0) {
      setQuestionIndex(questionIndex - 1);
    }
  }

  function onSubmit(event) {
    event.preventDefault();
    if (selectedOption === currentQuestion.correctOption) {
      // update score, user got it correct!
      setTotalScore((prevScore) => prevScore + 1);
    }

    setQuestionIndex((prevIndex) => prevIndex + 1);
    setSelectedOption(null);
  }

  if (questionIndex > data.length - 1) {
    // we are out of questions, show the result card!
    return (
      <div className="quiz-container">
        <h1> Quiz result</h1>
        <h2>Total Score: {totalScore}</h2>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h1>Total score: {totalScore}</h1>
      <h2>Question {questionIndex + 1}</h2>
      <form onSubmit={onSubmit}>
        <div className="question-wrapper">
          <h1>{currentQuestion.question}</h1>

          <div className="options-container">
            {currentQuestion.options.map((option, index) => (
              <div key={index} className="option-wrapper">
                <input
                  type="radio"
                  id={`option-${index}`}
                  name="options"
                  value={index}
                  onChange={handleOptionChange}
                  checked={selectedOption === index}
                />
                <label htmlFor={`option-${index}`}>{option}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="quiz-controls">
          <button onClick={goPrevious}>previous</button>
          <button type="submit" disabled={selectedOption === null}>
            next question
          </button>
        </div>
      </form>
    </div>
  );
}
