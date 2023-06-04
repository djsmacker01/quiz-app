import React,{useState,useEffect} from 'react'

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
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  return (
      <div> 
          <h1>Quiz Game</h1>
    </div>
  )
}
