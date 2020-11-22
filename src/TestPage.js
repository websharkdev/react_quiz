import React from 'react'
import ProgressBar from './components/progressbar'
import { Question } from './components'

function TestPage({currentIndex, total, data, handleNextQuestion, ShowAnswers, toggleAnswer}) {
  return (
    <div className="container">
      <ProgressBar bgcolor="#ef6c00" completed={ currentIndex } total={ total } />

      <Question
        data={ data }
        handleNextQuestion={ handleNextQuestion }
        ShowAnswers={ ShowAnswers }
        toggleAnswer={ toggleAnswer } />
    </div>
  )
}

export default TestPage
