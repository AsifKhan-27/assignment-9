import React from 'react';

const Question = ({ques}) => {
    const {correctAnswer, options, question}=ques;
    const showAnswer=()=>{
        alert(correctAnswer)
    }
    const checkAnswer=(option)=>{
        if(option===correctAnswer){
            alert('Correct Answer')
        }
        else{
            alert('Wrong Answer')
        }
    }
    return (
        <div className='my-5 mx-auto p-4 border rounded w-50'>
            <div className='mb-4 d-flex justify-content-center align-items'>
                <h4 className='me-4'>{question}</h4>
                <button onClick={()=> showAnswer()} className='btn btn-light'>Show</button>
            </div>
            {
                options.map(option=>
                    <div className='my-3 d-flex align-items ps-5'>
                        <button onClick={()=> checkAnswer(option)} className='btn btn-outline-info'>o</button>
                        <span className='ms-3'>{option}</span>
                    </div>
                )
            }
        </div>
    );
};

export default Question;