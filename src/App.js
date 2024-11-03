import React, { useState } from "react";
import "./App.css";
// import LoadingBar from "react-top-loading-bar";
import Progressbar from './Progressbar';

function App() {
  // Properties
  const [showFinalResult, setFinalResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = [
    {
      text: "Karachi is a ______ city?",
      options: [
        { id: 0, text: "Smaller", isCorrect: false },
        { id: 1, text: "Larger", isCorrect: false },
        { id: 2, text: "Biggest", isCorrect: true },
        { id: 3, text: "loader", isCorrect: false },
      ],
    },
    {
      text: "Karachi is a city of ______ ?",
      options: [
        { id: 0, text: "Light", isCorrect: true },
        { id: 1, text: "Bright", isCorrect: false },
        { id: 2, text: "Knight", isCorrect: false },
        { id: 3, text: "Bite", isCorrect: false },
      ],
    },
    {
      text: "Karachi famous Dish ______  ?",
      options: [
        { id: 0, text: "Korma", isCorrect: false },
        { id: 1, text: "Nihari", isCorrect: false },
        { id: 2, text: "Karahi", isCorrect: false },
        { id: 3, text: "Biryani", isCorrect: true },
      ],
    },
    {
      text: "Karachi famous national Dish ______  ?",
      options: [
        { id: 0, text: "Korma", isCorrect: false },
        { id: 1, text: "Nihari", isCorrect: true },
        { id: 2, text: "Karahi", isCorrect: false },
        { id: 3, text: "Biryani", isCorrect: false },
      ],
    },
    {
      text: "Quaid Mazar in ______  ?",
      options: [
        { id: 0, text: "Karachi", isCorrect: true },
        { id: 1, text: "Lahore", isCorrect: false },
        { id: 2, text: "Islamabad", isCorrect: false },
        { id: 3, text: "Multan", isCorrect: false },
      ],
    },
  ];

  // Helper Function

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResult(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResult(false);
  };

  // const [progress, setProgress] = useState(0);

  return (
    <div
      className="bg-slate-400 p-10 m-auto 
                    w-full h-screen"
    >
      {/* 1. Header */}
      <h1
        className="text-5xl text-center p-8 m-auto rounded-2xl 
                     text-white bg-slate-700 "
      >
        QUIZ APP
      </h1>

      {/* 2. Current Score */}
      <h2
        className="text-base text-center p-4 m-auto rounded-2xl 
                        text-slate-200 bg-slate-700 border-2 border-solid border-slate-300
                        text-center block"
      >
        Current Score: {score}
      </h2>

      {showFinalResult ? (
        /* 4. Final Result */
        <div
          className="w-full p-10 mt-5 rounded-2xl 
                        text-white bg-slate-700	 
                        text-center"
        >
          <h1 className="text-4xl p-2">Final Result</h1>
          <h2 className="text-2xl py-5 text-slate-300">
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button
            onClick={() => restartGame()}
            className="bg-red-700 p-3 text-xl rounded-full 
                      no-underline border-none	inline-block	
                      text-center font-medium	px-16 py-18 "
          >
            Again Quiz
          </button>
        </div>
      ) : (
        /* 3. Question Card */

        <div className="bg-slate-600 w-68 h-auto p-10 m-0-auto rounded-2xl	text-white">
          {/* <LoadingBar
            color={"blue"}
            progress={questions.length}
            onLoaderFinished={(optionClicked) => setProgress()}
          /> */}
         {/* <Progressbar/> */}
          <h2 className="text-slate-200 text-xl pb-5">
            Question {currentQuestion + 1} out of {questions.length}
          </h2>

          <h3 className="text-white text-2xl">
            {questions[currentQuestion].text}
          </h3>

          <ul className="list-none	">
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  onClick={() => optionClicked(option.isCorrect)}
                  key={option.id}
                  className="	p-5 mt-5 text-base border border-solid border-white"
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
