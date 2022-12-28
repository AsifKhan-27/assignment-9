import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({topic}) => {
    const {id, name, logo, total}=topic;
    // console.log(topic);
    // console.log(id);
    return (
        <div className="col">
          <div className="card bg-body-tertiary">
            <img src={logo} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">Total questions: {total}</p>
              {/* <a onClick={()=> openQuiz()} href="#" className="btn btn-primary">Take Quiz</a> */}
              <Link to={`/quiz/${id}`} className="btn btn-primary">Take Quiz</Link>
            </div>
          </div>
        </div>  
    );
};

export default Course;