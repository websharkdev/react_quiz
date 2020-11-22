import React from 'react';

const Questionare = ({ShowAnswers, handleNextQuestion, toggleAnswer, data: {question, MyAnswers, answers}}) => {
    
    

    return(
        <div className="flex flex-col">
            <div className="bg-white text-purple-800 p-4 text-center rounded-lg shadow-md">
                <h3 className="text-2xl" dangerouslySetInnerHTML={{__html:question}}></h3>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-6">
                {answers.map(MyAnswers => {
                    return(
                        <button className={`bg-white text-center font-semibold shadow rauded p-4 text-purple-800`} onClick={() => toggleAnswer(MyAnswers)} dangerouslySetInnerHTML={{__html:MyAnswers}}/>
                    )}
                )}
            </div>
            {ShowAnswers && (
            <button onClick={handleNextQuestion} className="bg-purple-700 text-center font-semibold shadow rauded p-4 text-white ml-auto mt-6">Next Question</button>
            )}
        </div>
    )
} 

export default Questionare;
 