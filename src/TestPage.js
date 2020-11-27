import React from "react";
import { useParams } from "react-router-dom";
import { Question, ProgressBar } from "./components";
import questions from "./questions.json";

function TestPage(props) {
  const { id } = useParams();
  const currentIndex = id - 1;
  const { question } = questions[currentIndex];
  const { total, handleNextQuestion, nextAnswer, history } = props;

  return (
    <div className="container">
      <ProgressBar bgcolor="#ef6c00" completed={currentIndex} total={total} />

      <Question
        question={question}
        history={history}
        handleNextQuestion={handleNextQuestion}
        nextAnswer={nextAnswer}
      />
    </div>
  );
}

export default TestPage;
