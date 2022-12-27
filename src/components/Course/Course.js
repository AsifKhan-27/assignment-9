import React from 'react';

const Course = ({topic}) => {
    const {name, logo, total}=topic;
    return (
        <div className="col">
          <div className="card bg-light">
            <img src={logo} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">Total: {total}</p>
              <a href="#" className="btn btn-primary">Take Quiz</a>
            </div>
          </div>
        </div>  
    );
};

export default Course;