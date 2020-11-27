import React, { useState, useEffect } from "react";

const answers = [
  "1 (Никогда)",
  "2 (Редко)",
  "3 (Иногда)",
  "4 (Часто)",
  "5 (Всегда)"
];

const Question = ({ nextAnswer, question }) => {
  const [LSBox, setLSBox] = useState({});

  useEffect(() => {
    console.log(LSBox);
  }, [LSBox]);
  return (
    <div className="flex flex-col">
      <div className="bg-white text-purple-800 p-4 text-center rounded-lg shadow-md">
        <h3 className="text-2xl">{question}</h3>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-6">
        {answers.map((answer, index) => {
          return (
            <button
              className={`bg-white text-center font-semibold shadow rauded p-4 text-purple-800`}
              key={index}
              onClick={() => {
                setLSBox({
                  id: Date.now(),
                  question: question,
                  answer: answer
                });
                nextAnswer(index);
              }}
            >
              {answer}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
