import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';


const Home = () => {
    const quiz=useLoaderData();
    const topics=quiz["data"];
    console.log(topics);
    return (
        <div className="mx-5 mt-6">
            <h2>Home</h2>
            <p>
                This a specialized quiz center for aspiring developers. Here we offer quizes to test your abilities in 4 key technologies. First of all you can test your overall front end skills with the React quiz. You can also test your JavaScript and CSS knowledge with respective quizes for those technologies. Finally you can also sit for Git quiz to assess your source management knowledge.
            </p>
            <img src="" alt=""/>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-5">
                {
                    topics.map(topic=><Course key={topic.id} topic={topic}></Course>)
                }
            </div>

        </div>
    );
};

export default Home;




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