import React, { useState, useEffect } from 'react'

import styles from "./QuizGame.module.scss";

// Array of object containing each quiz questions
const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    id: 2,
    question: "What is the highest mountain in the world?",
    options: [
      "Mount Everest",
      "Mount Kilimanjaro",
      "Mount McKinley",
      "Mount Everest Base Camp",
    ],
    answer: "Mount Everest",
  },
  {
    id: 3,
    question: 'Who is the author of "The Great Gatsby"?',
    options: [
      "Ernest Hemingway",
      "F. Scott Fitzgerald",
      "William Faulkner",
      "J.D. Salinger",
    ],
    answer: "F. Scott Fitzgerald",
  },
];

export default function QuizGame() {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // effect hook to check if quiz is completed (i.e. current question index is equal to the length of the questions array)
  useEffect(() => {
    if (currentQuestionIndex === questions.length) {
      setQuizCompleted(true);
    }
  }, [currentQuestionIndex]);

  //Function to handle user selection of an answer option
  const handleAnswerSelection = (option) => {
    setSelectedAnswer(option);
  }

  // function that handle moving to next question
  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestionIndex].answer) {
      setScore(score + 1); // increment score if selected answer is correct
    }
  

    if (currentQuestionIndex === questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex);
      setQuizCompleted(true);
    }
    else {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer('');
    }
  };

  // get the current question object based on the current question index
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className={styles.quiz}>
      {!quizCompleted ? (
        <>
          <h2>Question {currentQuestion.id}</h2>
          <p>{currentQuestion.question}</p>
          
          <ul>
            {currentQuestion.options.map((option) => (
              <li key={option}>
                <label>
                  <input
                    type="radio"
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={()=> handleAnswerChange(option)}
                  />
                  {option}
               </label>
              </li>
            ))}
          </ul>
          <button onClick={handleNextQuestion}>{currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'  }</button>
        </>
      ) : (
          <QuizResults score={ score} totalQuestions={questions.length} />
      )
        
     }
    </div>
  );
}
