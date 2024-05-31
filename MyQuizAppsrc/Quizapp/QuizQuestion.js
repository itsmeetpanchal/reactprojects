import React, { useState } from "react";
import "./Quiz.css";
import { QuizData } from "./Quizdata";
import Quizresult from "./Quizresult";

function QuizQuestion() {
  const [currantQue, setCurrantque] = useState(0);
  const [score,Setscore] = useState(0)
  const [opClick,SetOpclick] = useState(0)
  const [showResult,setshowResult] = useState(false)

  const handlechange = () => {
    updatescore()
    if (currantQue < QuizData.length - 1) {
      setCurrantque(currantQue + 1);
      SetOpclick(0)
    }
    else
    {
        setshowResult(true)
    }
  };
  const updatescore =()=>{
    if(opClick === QuizData[currantQue].answer)
        {
            Setscore(score+1)
        }
  }
  const resetAll=()=>{
    setCurrantque(0)
    Setscore(0)
    SetOpclick(0)
    setshowResult(false)
  }

  return (
    <div>
      <p className="heading-txt">Quiz App</p>
      <div className="container">
        {showResult ? (
            <Quizresult score={score} totalscore={QuizData.length} tryAgain={resetAll} />
        ):(
          <>
        <div className="question">
          <span id="question-number">{currantQue + 1} . </span>
          <span id="question-txt">{QuizData[currantQue].question}</span>
        </div>
        <div className="option-container">
          {QuizData[currantQue].options.map((v, i) => (
            <button key={i} className={`option-btn ${opClick == i+1 ?"checked":null}`} onClick={()=>SetOpclick(i+1)}>
              {v}
            </button>
          ))}
        </div>
        <input
          type="button"
          value="Next"
          id="next-button"
          onClick={handlechange}
        />
        </>
        )}
      </div>
    </div>
  );
}

export default QuizQuestion;
