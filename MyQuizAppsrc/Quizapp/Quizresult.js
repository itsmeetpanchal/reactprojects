import React from 'react'
import "./Quiz.css"

function Quizresult(props) {
  return (
    <>
    <div className='show-score'>
     Your score: {props.score} <br></br>
     Total Score:{props.totalscore}
    </div>
    <button id="next-button" onClick={props.tryAgain}>Try Again</button>
    </>
  )
}

export default Quizresult
