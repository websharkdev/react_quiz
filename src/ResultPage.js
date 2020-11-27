import React from "react";
const data = require("./questions.json");
const questions = data.slice(0, 5);

function ResultPage() {
  const dictionary = {
    prioritizer: "Приоритетчик",
    visualizer: "Визуализатор",
    organizer: "Организатор",
    planner: "Плановик"
  };

  const result = {
    prioritizer: 0,
    visualizer: 0,
    organizer: 0,
    planner: 0
  };

  const answers = [0, 2, 4, 1, 3];

  answers.forEach((answer, index) => {
    const point = answer + 1;
    const { type } = questions[index];

    result[type] = result[type] + point;
  });

  Object.keys(result).forEach((type) => {
    const title = dictionary[type];
    const points = result[type];
    console.log(`${title}: ${points}`);
  });

  return Object.keys(result).map((type, index) => {
    const title = dictionary[type];
    const points = result[type];
    return (
      <div>
        <h3 key={index}>{`${title}:${points}`}</h3>
      </div>
    );
  });
}

export default ResultPage;
