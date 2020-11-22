import React from 'react'
import ProgressBar from './components/progressbar'
import { Question } from './components'

function TestPage(props) {

  // todo проверить в localStorage переменная inProgress. Если true, то показать вопрос.
  //  Достать и записать в стейтменджер предыдущие ответы из localStorage переменная currentAnswers [1, 1, 1]
  // if (!data) {
  //   console.log(history)
  //   history.push('/')
  //   return null
  // }
  console.log(props)

  const { currentIndex, total, data, handleNextQuestion, nextAnswer, history } = props
  return (
    <div className="container">
      <ProgressBar bgcolor="#ef6c00" completed={ currentIndex } total={ total } />

      <Question
        data={ data }
        history={ history }
        handleNextQuestion={ handleNextQuestion }
        nextAnswer={ nextAnswer }
      />
    </div>
  )
}

export default TestPage
