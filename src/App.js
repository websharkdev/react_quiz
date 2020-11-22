import React, {useState, useEffect} from 'react';
import {Questionare} from './components/index';
import ProgressBar from "./components/progressbar";


function App() {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0);
    const [ShowAnswers, setShowAnswers] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/data.json')
        .then(res => res.json())
        .then(data => {
            const questions = data.results.map((question) => 
            ({
                ...question,
                answers: [
                    ...question.MyAnswers
                ],
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
            <Questionare data={questions[currentIndex]} handleNextQuestion={handleNextQuestion} ShowAnswers={ShowAnswers} toggleAnswer={toggleAnswer} />
        </div>
        ) : (
            <h3 className="text-white font-semibold">Loading...</h3>
        ))
    )
};
export default App;