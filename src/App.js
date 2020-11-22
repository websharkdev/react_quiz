import React, { useState } from 'react'
import StartPage from './StartPage'
import TestPage from './TestPage'
import questions from './data.json'

function App() {
  const [currentIndex, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [ShowAnswers, setShowAnswers] = useState(false)

  const toggleAnswer = (answer) => {

    if (!ShowAnswers) {
      if (answer === questions[currentIndex].correct_answer) {
        setScore(score + 1)
      }
    }

    setShowAnswers(true)

  }

  const handleNextQuestion = () => {
    setShowAnswers(false)

    setCurrentQuestion(currentIndex + 1)
  }

  const question = questions[currentIndex]
  return (
    currentIndex >= questions.length ? (
      <StartPage />
    ) : (questions.length > 0 ? (
      <TestPage
        currentIndex={currentIndex}
        total={questions.length}
        data={question}
        handleNextQuestion={handleNextQuestion}
        ShowAnswers={ShowAnswers}
        toggleAnswer={toggleAnswer}
      />
    ) : (
      <h3 className="text-white font-semibold">Loading...</h3>
    ))
  )
}
export default App
