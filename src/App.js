import React, { useState } from "react";
import StartPage from "./StartPage";
import TestPage from "./TestPage";
import ResultPage from "./ResultPage";
import questions from "./questions.json";

import { Redirect, Route, Switch, withRouter } from "react-router-dom";

const App = (props) => {
  const total = questions.length;
  const { history } = props;

  const [result, setResult] = useState({
    prioritizer: 0,
    visualizer: 0,
    organizer: 0,
    planner: 0
  });

  const [currentIndex, setCurrentQuestion] = useState(0);

  const nextAnswer = (index) => {
    const point = index + 1;
    const { type } = questions[currentIndex];

    setResult({
      ...result,
      [type]: result[type] + point
    });
    history.push({
      pathname: `${currentIndex < total - 1 ? currentIndex + 1 : "/resultpage"}`
    });
    setCurrentQuestion(currentIndex + 1);
  };

  return (
    <Switch>
      <Route exact path="/">
        <StartPage />
      </Route>
      <Route path="/questions/:id">
        <TestPage total={total} data={questions} nextAnswer={nextAnswer} />
      </Route>
      <Route exact path="/resultpage" result={result} history={history}>
        <ResultPage />
      </Route>
      <Redirect from="/" to="/" />
    </Switch>
  );
};

export default withRouter(App);
