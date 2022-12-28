import React from 'react';

const Question = ({ques}) => {
    const {correctAnswer, options, question}=ques;
    return (
        <div>
            <h4>{question}</h4>
            {
                options.map(option=><div><button>o</button><span>{option}</span></div>)
            }
        </div>
    );
};

export default Question;