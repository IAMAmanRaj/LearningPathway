import React, { useState } from 'react';


import QuestionCard from '../components/QuestionCard';
import ScoreReportCard from '../components/ScoreReportCard';
import ProgressCard from '../components/ProgressCard';

import {Button} from 'flowbite-react';
import { FaMoon, FaSun } from "react-icons/fa";
import { toggleTheme } from "../redux/theme/themeSlice";
import {useDispatch,useSelector} from 'react-redux';
import {motion as m} from "framer-motion";


export default function Interest() {
  const { theme } = useSelector((state) => state.theme);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswerID, setSelectedAnswerID] = useState(localStorage.getItem(`question_1`) || null);
    const [showScore, setShowScore] = useState(false);
    const [showProgress, setShowProgress] = useState(false);
    const [score, setScore] = useState(0);
const dispatch=useDispatch();
const currentBranch=useSelector((state) => state.branch.value);

const questions = [];

if (currentBranch === "Computer Science") {
    questions.push(
        {
            id: 1,
            domain: 'Software',
            questionText:  `Having fun with the subjects taught in ${currentBranch}?`,
            answerOptions: [
                { answerID: 'a', answerText: 'Yes'},
                { answerID: 'b', answerText: 'No'}
            ],
            correctResponse: 'a',
            questionRationale: `The language of 0's and 1's , this was asked to let us decide whether you are made for software or not !`,
        },
        {
            id: 2,
            domain: 'Software',
            questionText: 'Do you enjoy problem-solving and critical thinking?',
            answerOptions: [
                { answerID: 'a', answerText: 'Yes'},

                { answerID: 'b', answerText: 'No'}

            ],
            correctResponse: 'a',
            questionRationale: `If you're good at problem solving , you are already ahead of a majority in programming`,
        },
        {
            id: 3,
            domain: 'Software',
            questionText: 'Do You find programming Interesting ?',
            answerOptions: [
                { answerID: 'a', answerText: 'Yes'},
                { answerID: 'b', answerText: 'No'}

            ],
            correctResponse: 'a',
            questionRationale: `Programming helps in developing intuitions and logic and makes you a better Problem Solver !`,
        },
        {
            id: 4,
            domain: 'Software',
            questionText: 'Have you ever done Coding ?',
            answerOptions: [
                { answerID: 'a', answerText: 'Yes'},
                { answerID: 'b', answerText: 'No'}

            ],
            correctResponse: 'a',
            questionRationale: `With time it will get more clear whether you like it or not`,
        },
        {
            id: 5,
            domain: 'Software',
            questionText: 'Do You find programming difficult ?',
            answerOptions: [
                { answerID: 'a', answerText: 'Yes'},
                { answerID: 'b', answerText: 'No'}

            ],
            correctResponse: 'b',
            questionRationale: `If you are not feeling like doing it , maybe trying something else will work for now !`,
        },
        {
            id: 6,
            domain: 'Software',
            questionText: 'Do You want to give more time to it in future ?',
            answerOptions: [
                { answerID: 'a', answerText: 'Yes'},
                { answerID: 'b', answerText: 'No'}

            ],
            correctResponse: 'a',
            questionRationale: `With time it will get more clear whether you like it or not`,
        },
        {
            id: 7,
            domain: 'Consultancy',
            questionText: 'Have you ever thought about exploring the field of consultancy?',
            answerOptions: [
                { answerID: 'a', answerText: 'Yes'},
   
                { answerID: 'c', answerText: 'No'}
            ],
            correctResponse: 'a',
            questionRationale: `Consultancy is a domain which makes you understand market in a better way ! A good business man is a good Consultant as well`,
        },
        {
            id: 8,
            domain: 'Consultancy',
            questionText: 'Have you got interest in Sales and Marketing ?',
            answerOptions: [
                { answerID: 'a', answerText: 'Yes'},
          
                { answerID: 'b', answerText: 'No'}
            ],
            correctResponse: 'a',
            questionRationale: `Consultancy makes you understand market in a better way !`,
        },
       
        
        {
            id: 9,
            domain: 'Consultancy',
            questionText: ' Can you think of scenarios where consulting services could help solve problems or achieve goals?',
            answerOptions: [
                { answerID: 'a', answerText: 'Yeah'},
                
                { answerID: 'b', answerText: 'Nope'}
            ],
            correctResponse:'a',
            questionRationale: `Your Ideas can change the whole game in Consultancy !`,
        },
{
            id: 10,
            domain: 'Consultancy',
            questionText: 'Have you ever considered a career path that involves helping businesses improve and grow?',
            answerOptions: [
                { answerID: 'a', answerText: 'Yes'},
                
                { answerID: 'b', answerText: 'No'}
            ],
            correctResponse:'a',
            questionRationale: `This lets us know how passionate you are for this Consultancy domain !`,
        },
       
        {
            id: 11,
            domain: 'Consultancy',
            questionText: ' Would you like to develop your communication and teamwork skills further?',
            answerOptions: [
                { answerID: 'a', answerText: 'Yes'},
                
                { answerID: 'b', answerText: 'No'}
            ],
            correctResponse:'a',
            questionRationale: `Communication and Team Skills are a true Game Changer !`,
        },

        
    );
} else{
    questions.push(
        {
            id: 1,
            domain: 'Core',
            questionText: `Do you like the subjects of ${currentBranch}?`,
            answerOptions: [
                { answerID: 'a', answerText: 'Yes'},
                { answerID: 'b', answerText: 'No'},
               
            ],
            correctResponse: 'a',
            questionRationale: `Developing Interest for something takes time. Don't worry we are here to guide you`,
        },
        {
            id: 2,
            domain: 'Core',
            questionText: 'Do you enjoy solving practical problems and applying scientific principles to real-world challenges?',
            answerOptions: [
                { answerID: 'a', answerText: 'Yes'},

                { answerID: 'b', answerText: 'No'}

            ],
            correctResponse: 'a',
            questionRationale: `This is important , when you learn things , you should be able to apply them !`,
        },
        {
            id: 3,
            domain: 'Core',
            questionText: 'Would you like to delve deeper into the core principles of engineering to gain a better understanding of the world around you? ?',
            answerOptions: [
                { answerID: 'a', answerText: 'Yes'},
                { answerID: 'b', answerText: 'No'}

            ],
            correctResponse: 'a',
            questionRationale: `Core is all about how deeply you understand the scenarios involved in engineering`
        },
        {
            id: 4,
            domain: 'Core',
            questionText: 'Do you enjoy using logical reasoning and critical thinking to tackle engineering challenges and overcome obstacles?',
            answerOptions: [
                { answerID: 'a', answerText: 'Yes'},

                { answerID: 'c', answerText: 'No'}
            ],
            correctResponse: 'a',
            questionRationale: `If you're headed to solve engineering problems , Core Domain is for you !`,
        },
        
        {
            id: 5,
            domain: 'Software',
            questionText:  `Having fun with the subjects taught in ${currentBranch}?`,
            answerOptions: [
                { answerID: 'a', answerText: 'Yes'},
                { answerID: 'b', answerText: 'No'}
            ],
            correctResponse: 'a',
            questionRationale: `The language of 0's and 1's , this was asked to let us decide whether you are made for software or not !`,
        },
        {
            id: 6,
            domain: 'Software',
            questionText: 'Do you enjoy problem-solving and critical thinking?',
            answerOptions: [
                { answerID: 'a', answerText: 'Yes'},

                { answerID: 'b', answerText: 'No'}

            ],
            correctResponse: 'a',
            questionRationale: `If you're good at problem solving , you are already ahead of a majority in programming`,
        },
        {
            id: 7,
            domain: 'Software',
            questionText: 'Do You find programming Interesting ?',
            answerOptions: [
                { answerID: 'a', answerText: 'Yes'},
                { answerID: 'b', answerText: 'No'}

            ],
            correctResponse: 'a',
            questionRationale: `Programming helps in developing intuitions and logic and makes you a better Problem Solver !`,
        },
        {
            id: 8,
            domain: 'Software',
            questionText: 'Have you ever done Coding ?',
            answerOptions: [
                { answerID: 'a', answerText: 'Yes'},
                { answerID: 'b', answerText: 'No'}

            ],
            correctResponse: 'a',
            questionRationale: `With time it will get more clear whether you like it or not`,
        },
        {
            id: 9,
            domain: 'Software',
            questionText: 'Do You find programming difficult ?',
            answerOptions: [
                { answerID: 'a', answerText: 'Yes'},
                { answerID: 'b', answerText: 'No'}

            ],
            correctResponse: 'b',
            questionRationale: `If you are not feeling like doing it , maybe trying something else will work for now !`,
        },
        {
            id: 10,
            domain: 'Software',
            questionText: 'Do You want to give more time to it in future ?',
            answerOptions: [
                { answerID: 'a', answerText: 'Yes'},
                { answerID: 'b', answerText: 'No'}

            ],
            correctResponse: 'a',
            questionRationale: `With time it will get more clear whether you like it or not`,
        },
        {
            id: 11,
            domain: 'Consultancy',
            questionText: 'Have you ever thought about exploring the field of consultancy?',
            answerOptions: [
                { answerID: 'a', answerText: 'Yes'},
   
                { answerID: 'c', answerText: 'No'}
            ],
            correctResponse: 'a',
            questionRationale: `Consultancy is a domain which makes you understand market in a better way ! A good business man is a good Consultant as well`,
        },
        {
            id: 12,
            domain: 'Consultancy',
            questionText: 'Have you got interest in Sales and Marketing ?',
            answerOptions: [
                { answerID: 'a', answerText: 'Yes'},
          
                { answerID: 'b', answerText: 'No'}
            ],
            correctResponse: 'a',
            questionRationale: `Consultancy makes you understand market in a better way !`,
        },
       
        
        {
            id: 13,
            domain: 'Consultancy',
            questionText: ' Can you think of scenarios where consulting services could help solve problems or achieve goals?',
            answerOptions: [
                { answerID: 'a', answerText: 'Yeah'},
                
                { answerID: 'b', answerText: 'Nope'}
            ],
            correctResponse:'a',
            questionRationale: `Your Ideas can change the whole game in Consultancy !`,
        },
{
            id: 14,
            domain: 'Consultancy',
            questionText: 'Have you ever considered a career path that involves helping businesses improve and grow?',
            answerOptions: [
                { answerID: 'a', answerText: 'Yes'},
                
                { answerID: 'b', answerText: 'No'}
            ],
            correctResponse:'a',
            questionRationale: `This lets us know how passionate you are for this Consultancy domain !`,
        },
       
        {
            id: 15,
            domain: 'Consultancy',
            questionText: ' Would you like to develop your communication and teamwork skills further?',
            answerOptions: [
                { answerID: 'a', answerText: 'Yes'},
                
                { answerID: 'b', answerText: 'No'}
            ],
            correctResponse:'a',
            questionRationale: `Communication and Team Skills are a true Game Changer !`,
        },

    );
}












    const handleAnswerOptionClick = (selectedAnswerID) => {
        localStorage.setItem(`question_${questions[currentQuestion].id}`, selectedAnswerID);
        setSelectedAnswerID(selectedAnswerID);
    };

    const handleNextQuestion = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setSelectedAnswerID(localStorage.getItem(`question_${questions[nextQuestion].id}`) || null);
        }
    };

    const handlePrevQuestion = () => {
        const prevQuestion = currentQuestion - 1;
        if (prevQuestion >= 0) {
            setCurrentQuestion(prevQuestion);
            setSelectedAnswerID(localStorage.getItem(`question_${questions[prevQuestion].id}`) || null);
        }
    };

    const handleFirstQuestion = () => {
        setCurrentQuestion(0);
        setSelectedAnswerID(localStorage.getItem(`question_1`) || null);
    };

    const handleLastQuestion = () => {
        const lastOne = questions.length
        setCurrentQuestion(lastOne-1);
        setSelectedAnswerID(localStorage.getItem(`question_${lastOne}`) || null);
    };

    const handleProgressToggle = () => {
        setShowProgress(current => !current);
    };

    const handleLinkFromProgress = (questionIndex) => {
        setShowProgress(false);
        setCurrentQuestion(questionIndex);
        setSelectedAnswerID(localStorage.getItem(`question_${questions[questionIndex].id}`) || null);
    };

    const handleClearAnswers = () => {
        // Wipe all localStorage completely,
        localStorage.clear();
        // and then reset the current question to the first and selected-answer state to null.
        setSelectedAnswerID(null);
        setCurrentQuestion(0);
    };

    const handleRetakeQuiz = () => {
        localStorage.clear();
        setSelectedAnswerID(null);
        setShowScore(false);
        setCurrentQuestion(0);
    };

    const handleScoreQuiz = () => {
        let finalScore = 0;
        questions.forEach((question) => {
            const storedAnswer = localStorage.getItem(`question_${question.id}`);
            if (storedAnswer === question.correctResponse) {
                finalScore += 1;
            }
        });
        setScore(finalScore);
        setShowScore(true);
        setCurrentQuestion(0);
        setSelectedAnswerID(localStorage.getItem(`question_1`) || null);
    };

    const domainScore = (targetDomain) => {
        let domainScore=0
        const domainQuestions = questions.filter(question=>question.domain===targetDomain)
        domainQuestions.forEach((q) => {
            const storedAnswer = localStorage.getItem(`question_${q.id}`);
            if (storedAnswer === q.correctResponse) {
                domainScore += 1;
                }
        });
        return Math.round(domainScore/domainQuestions.length*100)
    }

	return (
        <m.div initial={{y:"100%"}} animate={{y:"0%"}}
        transition={{duration:0.75,ease:'easeOut'}}
         className="flex flex-col h-screen">
    
          <Button
className="absolute z-10 top-2 right-[10px] w-12 h-10 inline"
color="gray"
pill
onClick={() => dispatch(toggleTheme())}
>
{theme === "light" ? <FaMoon /> : <FaSun />}
</Button>
            
            <main className="p-4  mt-14 bg-slate-700 dark:bg-slate-700 rounded-t-2xl  flex-grow items-center justify-center">
                <div className="p-3">
                    {
                    showProgress? (
                    <ProgressCard
                    questions={questions}
                    handleProgressToggle={handleProgressToggle}
                    handleLinkFromProgress={handleLinkFromProgress}
                    />
                    )
                    :
                    showScore? (
                    <ScoreReportCard
                    	
                    quizLength={questions.length}
                    questions={questions}
                    domainScore={domainScore}
                    handleRetakeQuiz={handleRetakeQuiz}
                    question={questions[currentQuestion]}
                    selectedAnswerID={selectedAnswerID}
                    handleNextQuestion={handleNextQuestion}
                    handlePrevQuestion={handlePrevQuestion}
                    handleFirstQuestion={handleFirstQuestion}
                    handleLastQuestion={handleLastQuestion}
                    />
                    ) : (
                    <QuestionCard
                    quizLength={questions.length}
                    question={questions[currentQuestion]}
                    selectedAnswerID={selectedAnswerID}
                    handleAnswerOptionClick={handleAnswerOptionClick}
                    handleNextQuestion={handleNextQuestion}
                    handlePrevQuestion={handlePrevQuestion}
                    handleScoreQuiz={handleScoreQuiz}
                    handleClearAnswers={handleClearAnswers}
                    handleProgressToggle={handleProgressToggle}
                    />
                    )}
                </div>
            </main>
            <section className="bg-white dark:bg-gray-900">
    <div className=" px-4 py-6 lg:py-6 mx-auto max-w-screen-md text-center  lg:px-12">
        <svg className="mx-auto mb-4 w-10 h-10 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M331.8 224.1c28.29 0 54.88 10.99 74.86 30.97l19.59 19.59c40.01-17.74 71.25-53.3 81.62-96.65c5.725-23.92 5.34-47.08 .2148-68.4c-2.613-10.88-16.43-14.51-24.34-6.604l-68.9 68.9h-75.6V97.2l68.9-68.9c7.912-7.912 4.275-21.73-6.604-24.34c-21.32-5.125-44.48-5.51-68.4 .2148c-55.3 13.23-98.39 60.22-107.2 116.4C224.5 128.9 224.2 137 224.3 145l82.78 82.86C315.2 225.1 323.5 224.1 331.8 224.1zM384 278.6c-23.16-23.16-57.57-27.57-85.39-13.9L191.1 158L191.1 95.99l-127.1-95.99L0 63.1l96 127.1l62.04 .0077l106.7 106.6c-13.67 27.82-9.251 62.23 13.91 85.39l117 117.1c14.62 14.5 38.21 14.5 52.71-.0016l52.75-52.75c14.5-14.5 14.5-38.08-.0016-52.71L384 278.6zM227.9 307L168.7 247.9l-148.9 148.9c-26.37 26.37-26.37 69.08 0 95.45C32.96 505.4 50.21 512 67.5 512s34.54-6.592 47.72-19.78l119.1-119.1C225.5 352.3 222.6 329.4 227.9 307zM64 472c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24S88 434.7 88 448C88 461.3 77.25 472 64 472z"/></svg>
        <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 lg:mb-6 md:text-5xl xl:text-6xl dark:text-white">Under Maintenance</h1>
        <p className="font-light text-gray-500 md:text-lg xl:text-xl dark:text-gray-400">Our Enterprise administrators are performing scheduled maintenance.</p>
    </div>
</section>
        </m.div>
	);
}

