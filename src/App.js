import React, { useState } from 'react'
import StartPage from './StartPage'
import TestPage from './TestPage'
import ResultPage from './ResultPage'
import questions from './questions.json'

import { Redirect, Route, Switch, withRouter } from 'react-router-dom'

// todo загрузить из LS предыдущие результаты (results) и записать в стейтменеджер

const App = (props) => {
  const total = questions.length
  const { history } = props

  const [result, setResult] = useState({
    prioritizer: 0,
    visualizer: 0,
    organizer: 0,
    planner: 0,
  })

  const [currentIndex, setCurrentQuestion] = useState(0)

  const nextAnswer = (index) => {
    const point = index + 1
    const { type } = questions[currentIndex]

    setResult({
      ...result,
      [type]: result[type] + point,
    })

    history.push({
      pathname: `questions/${ currentIndex }`,
    })

    setCurrentQuestion(currentIndex + 1)
  }

  const question = questions[currentIndex]

  return (
    <Switch>
      <Route exact history={ history } path='/' component={ StartPage } />
      <Route history={ history } path='/questions/:id'
             render={ () => <TestPage
               total={ total }
               data={ question }
               nextAnswer={ nextAnswer }
             /> }
      />
      <Route exact history={ history } path='/result' result={ result } component={ ResultPage } />
      <Redirect from='/' to='/' />
    </Switch>
  )
}

export default withRouter(App)
