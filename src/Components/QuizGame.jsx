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
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // effect hook to check if quiz is completed (i.e. current question index is equal to the length of the questions array)
  useEffect(() => {
    if (currentQuestionIndex === questions.length) {
      setQuizCompleted(true);
   }
 },[currentQuestionIndex])

  //Function to handle user selection of an answer option
  const handleAnswerSelection = (option) => {
    setSelectedAnswer(option);
  }

  // function that handle moving to next question
  
  return (
    <div>
      <h1>Quiz Game</h1>
    </div>
  );
}
