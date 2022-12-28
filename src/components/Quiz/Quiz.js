import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    // const quiz =useLoaderData();
    const {id}= useParams();
    const [quizes, setQuiz]=useState([]);
    
    useEffect( ()=>{
        fetch(`https://openapi.programming-hero.com/api/quiz/${id}`)
        .then(res=>res.json())
        .then(data=>setQuiz(data))
        .catch(error => console.log(error))
    }, []);
    
    // console.log(quizes)
    const name=quizes.data?.name;
    const questions=quizes.data?.questions;
    // console.log(questions)
    return (
        <div>
            <h2 className='mt-3 mb-4'>Quiz of {name}</h2>
            {
                questions?.map(ques=><Question key={ques.id} ques={ques}></Question>)
            }
        </div>
    );
};

export default Quiz;






{/*
const loadQuiz=async(id)=>{
    try{
        const res=await fetch(`https://openapi.programming-hero.com/api/quiz/${id}`);
        const data=await res.json();
    }
    catch(err){
        console.error(err);
    }    
    setQuiz(data);
}
loadQuiz();
*/}


{/*
const loadQuiz=async(id)=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/quiz/${id}`);
    const data=await res.json();
    setQuiz(data);
}
loadQuiz()
.catch(console.error);;
*/}