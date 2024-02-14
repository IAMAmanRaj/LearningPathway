import React, { useState } from 'react';
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Button } from 'flowbite-react';
export default function ScoreReportCard (props){

    const domainList = () => {
        const domainNumbers = new Set();
        props.questions.forEach((question) => domainNumbers.add(question.domain));
        return Array.from(domainNumbers);
    };

    

    const [currentTab, setCurrentTab] = useState('tab1');
    const tabList = [
        {
        name: 'tab1',
        label: 'Your Overall Results',
        content: (
            <div className="tab-content p-3 flex flex-col sm:flex-row ">
                <div className='w-12/12 sm:w-6/12 items-center justify-between mb-4 text-center space-y-4'>
                    <h2 className='text-xl sm:pb-3 font-bold leading-none text-gray-900 dark:text-white'>
                        Stats
                    </h2>
                    
                    <div className='px-16'>
                        <CircularProgressbar
                           
                            styles={buildStyles({
                                textColor: "white",
                                pathColor: "#0f766e",
                                trailColor: "#374151",
                            })}
                        />
                        
                    </div>
                    
                </div>
                <div className='w-12/12 sm:w-6/12 items-center justify-between mb-4 text-center space-y-4'>
                    <h2 className='text-xl font-bold leading-none text-gray-900 dark:text-white'>
                        Score by Domain
                    </h2>
                    <div className='px-5'>
                        {domainList().map((domain) => {
                            const domainScore = props.domainScore(domain);
                            const progressWidth = `${domainScore}%`;

                            return (
                                <div key={domain}>
                                    <h3 className='text-lg pt-4 pb-3 font-thin leading-none text-gray-900 dark:text-white text-left pl-1'>{domain}</h3>
                                    <div className="w-full bg-gray-200 rounded-md dark:bg-gray-700" role="progressbar" aria-label="progress bar" aria-valuenow="{domainScore}" aria-valuemin="0" aria-valuemax="100">
                                        <div className="bg-teal-700 text-sm font-semibold text-teal-100 text-center p-0.5 leading-none rounded-md" style={{ width: progressWidth }}>{progressWidth}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
        },
        {
        name: 'tab2',
        label: 'Review Your Answers',
        content: (
            <div className="tab-content pt-3">
                <h2 className='text-xl font-bold leading-none text-gray-900 dark:text-white pl-3'>
                    Question {props.question.id} of {props.quizLength}
                </h2>
                <div className='px-5' action=''>
                    <p className="my-6 font-semibold text-gray-800 text-lg dark:text-gray-100">{props.question.questionText}</p>
                    {props.question.answerOptions.map((answerOption) => (
                        <button 
                            disabled={true} 
                            key={answerOption.answerID}
                            
                            className={
                                //answer was selected
                                props.selectedAnswerID === answerOption.answerID ? 
                                'w-full text-left font-semibold text-gray-900 bg-green-400 border-[2px] border-black dark:border-slate-200 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-md text-base px-5 py-2.5 mr-2 mb-2'
                                : 
                               
                                //everything else
                                'w-full text-left font-thin text-gray-900 border bg-slate-300 border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-md text-base px-5 py-2.5 mr-2 mb-2 dark:border-gray-600 dark:text-gray-900 dark:focus:ring-gray-800'
                            }
                            >
                            {answerOption.answerText}
                        </button>
                    ))}


                    {props.selectedAnswerID === null ? 
                     <p className="my-3 text-gray-800 text-base dark:text-red-600"> <FontAwesomeIcon icon={faXmark} style={{color: "#DC3545",}} /> You did not answer this question.</p>
                   
                    : <p className="my-3 text-gray-800 text-base dark:text-teal-500"> <FontAwesomeIcon icon={faCheck} style={{color: "#009688",}} /> Your response was recorded successfully.</p>
                   
                    }
                    
                    <p className='font-bold text-gray-800 text-base dark:text-gray-300 leading-tight'>Explanation<br/>
                    <span className='font-thin'>{props.question.questionRationale}</span></p>

                    <hr className="mb-2 mt-5 border-gray-200 sm:mx-auto dark:border-gray-700 lg:mb-2" />

                    <div className='flex justify-center gap-4  p-4'>
                        <Button
                        onClick={props.handleFirstQuestion}
                        type='button'
                        outline
                        className='font-medium rounded-md text-sm  mb-2'

                        >
                        First
                        </Button>
                        <Button
                        onClick={props.handlePrevQuestion}
                        type='button'
                         outline
                            className='font-medium rounded-md text-sm  mb-2'
                        gradientDuoTone="pinkToOrange"
                        >
                        Prev
                        </Button>
                        <Button
                        onClick={props.handleNextQuestion}
                        type='button'
                        outline
                        className='font-medium rounded-md text-sm  mb-2'
                    gradientDuoTone="pinkToOrange"
                    disabled={props.question.id===props.quizLength?true:false}
                    
                        >
                        Next
                        </Button>
                        <Button
                        onClick={props.handleLastQuestion}
                        type='button'
                        outline
                        className='font-medium rounded-md text-sm  mb-2'

                        >
                        Last
                        </Button>
                    </div>
                </div>
            </div>
        )
        },
    ];
    
    return (
        <div className="flex justify-center">
            <div className='w-full max-w-3xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                <div className="flow-root">   
                    <div className="simple-tabs">
                        <div className="tabs">
                            <ul className="flex flex-wrap text-sm sm:text-lg px-2 tracking-tight font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                            {
                                tabList.map((tab, i) => (
                                <li 
                                    key={i}
                                    onClick={() => setCurrentTab(tab.name)} 
                                    className={(tab.name === currentTab) ? 
                                        'mr-2 cursor-pointer inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-sky-500 dark:border-sky-500' 
                                        : 
                                        'mr-2 cursor-pointer inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                                    }>
                                    {tab.label}
                                </li>
                                ))
                            }
                            </ul>
                        </div>

                        <div className='p-4'>
                            {
                            tabList.map((tab, i) => {
                                if(tab.name === currentTab) {
                                    return <div key={i}>{tab.content}</div>;
                                    } else {
                                    return null;
                                    }
                                })
                            }

                            <hr className="mb-2 mt-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:mb-2" />
                            <div className='flex justify-center p-4'>
                                <Button onClick={props.handleRetakeQuiz} type='button' outline
                            className='font-medium rounded-md text-sm  mb-2'
                        gradientDuoTone="pinkToOrange">
                                    Retake This Quiz
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
