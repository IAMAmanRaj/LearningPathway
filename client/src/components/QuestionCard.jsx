import React from 'react';
import { Button } from 'flowbite-react';
const QuestionCard = ({
    quizLength,
    question,
    selectedAnswerID,
    handleAnswerOptionClick,
    handleNextQuestion,
    handlePrevQuestion,
    handleScoreQuiz,
    handleClearAnswers,
    handleProgressToggle,
}) => {
    return (
        <div className="flex justify-center  rounded-md dark:border-slate-200 ">
            <div className='w-full max-w-3xl p-4 bg-slate-200 border-gray-200 rounded-md shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
                <div className='flex items-center justify-between mb-2'>
                    <h2 className='text-xl font-bold leading-none text-gray-900 dark:text-white'>
                    Question {question.id} of {quizLength}
                    </h2>
                    <Button 
                        type="button" 
                        
                        onClick={handleProgressToggle}
                        outline
                        gradientDuoTone="cyanToBlue"
                        >
                        Progress
                    </Button>
                </div>
                <div className="flow-root">
                    <hr className=" border-gray-200 sm:mx-auto dark:border-gray-300" />
                    <div className='px-4' action=''>
                        <p className="my-6 text-2xl text-gray-800 font-semibold dark:text-gray-100">{question.questionText}</p>
                        {question.answerOptions.map((answerOption) => (
                            <button
                            key={answerOption.answerID}
                            onClick={() => handleAnswerOptionClick(answerOption.answerID)}
                            className={
                                selectedAnswerID === answerOption.answerID
                                ? 'w-full text-left font-semibold text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-md text-base px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-500'
                                : 'w-full text-left text-gray-900  border-[2.5px]  hover:bg-gray-300 hover:text-zinc-900  focus:ring-4 focus:outline-none focus:ring-gray-300  rounded-md text-base px-5 py-2.5 mr-2 mb-2 dark:border-gray-600 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'
                            }
                            >
                            {answerOption.answerText}
                            </button>
                        ))}

                        <div className='flex gap-4s justify-center p-4'>
                            <Button
                            onClick={handlePrevQuestion}
                            type='button'
                            outline
                            className='font-medium rounded-md text-sm  mr-2 mb-2'
                        gradientDuoTone="cyanToBlue"
                            >
                            Prev
                            </Button>
                            <Button
                            onClick={handleNextQuestion}
                            type='button'
                            outline
                            className='font-medium rounded-md text-sm  mb-2'
                        gradientDuoTone="cyanToBlue"
                        disabled={question.id===quizLength?true:false}
                            >
                            Next
                            </Button>
                        </div>
                        <hr className="mb-2 border-gray-200 sm:mx-auto dark:border-gray-300 lg:mb-2" />
                    </div>
                </div>

                <div className='flex justify-center gap-4 pt-4'>
                    
                <Button onClick={handleClearAnswers} type='button' outline
                            className='font-medium rounded-md text-sm  mb-2'
                        gradientDuoTone="pinkToOrange"
                        disabled={localStorage.length === 0}>
                    Clear My Answers
                    </Button>
                    
                    <Button onClick={handleScoreQuiz} type='button' outline
                            className='font-medium rounded-md text-sm  mb-2'
                        gradientDuoTone="purpleToPink">
                    Score My Quiz
                    </Button>
                    
                </div>
            </div>
            
        </div>
    );
};

export default QuestionCard;