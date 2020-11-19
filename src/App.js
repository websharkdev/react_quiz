import React, {useState, useEffect} from 'react';
import {Questionare} from './components/index';
import ProgressBar from "./components/progressbar";

const API_URL = "https://opentdb.com/api.php?amount=28&category=11&difficulty=easy";


function App() {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0);
    const [ShowAnswers, setShowAnswers] = useState(false);

    useEffect(() => {
        fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            const questions = data.results.map((question) => 
            ({
                ...question,
                answers: [
                    question.correct_answer,
                    ...question.incorrect_answers
                ].sort(() => Math.random() - 0.5),
            }))
            
            setQuestions(questions)
        })
    }, []);
    
       
    const toggleAnswer = (answer) => {
        
        if(!ShowAnswers) {
            if(answer === questions[currentIndex].correct_answer) {
                setScore(score + 1);
            }
        }

        setShowAnswers(true);

    };

    const handleNextQuestion = () => {
        setShowAnswers(false);

        setCurrentQuestion(currentIndex + 1);
    }

    // const ProgressBar = (props) => {
    //     return (
    //       <div className="">
    //         <progress
    //           className=""
    //           max={props.total}
    //           value={props.position}
    //         ></progress>
    //       </div>
    //     );
    //   };
    const testData = [{ 
        bgcolor: "#ef6c00", 
        total: currentIndex, 
        completed: questions.length, 
    }];
    return(
        currentIndex >= questions.length ? ( 
            <h2 className="text-white font-semibold text-lg">Your score was {score}</h2>
        ) : (questions.length > 0 ? (
        <div className="container">
            {testData.map((item, idx) => (
                <ProgressBar key={idx} bgcolor={item.bgcolor} completed={currentIndex} total={questions.length} />
            ))}
            {/* <ProgressBar position={currentIndex} total={questions.length} /> */}
            <Questionare data={questions[currentIndex]} handleNextQuestion={handleNextQuestion} ShowAnswers={ShowAnswers} toggleAnswer={toggleAnswer} />
        </div>
        ) : (
            <h3 className="text-white font-semibold">Loading...</h3>
        ))
    )
};
export default App;