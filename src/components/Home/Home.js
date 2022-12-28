import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';


const Home = () => {
    const quizTopics=useLoaderData();
    const topics=quizTopics["data"];    
    
    return (
        <div className="m-5 px-5 mt-6">
            <div className='d-flex flex-column flex-sm-column flex-md-row align-items-center'>
                <img className="img-fluid rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXJfYokFN6RfV0jLd2kpbmcTZHhdtvhE8A_Q&usqp=CAU" alt=""/>
                <p className='p-4'>
                    This a specialized quiz center for aspiring developers. Here we offer quizes to test your abilities in 4 key technologies. First of all you can test your overall front end skills with the React quiz. You can also test your JavaScript and CSS knowledge with respective quizes for those technologies. Finally you can also sit for Git quiz to assess your source management knowledge.
                </p> 
            </div> 
            <div className="mt-4 row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                {
                    topics.map(topic=><Course key={topic.id} topic={topic}></Course>)
                }
            </div>

        </div>
    );
};

export default Home;


// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXJfYokFN6RfV0jLd2kpbmcTZHhdtvhE8A_Q&usqp=CAU

{/*
<div className="card" style={{width: 18+'rem'}}>
<img src="..." className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title">Card title</h5>
  <p className="card-text">Some quick example text to build on the card title and make up the bulk of 
the card's content.</p>
  <a href="#" className="btn btn-primary">Go somewhere</a>
</div>
</div>
*/}