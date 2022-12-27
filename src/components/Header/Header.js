import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        
        <nav className="navbar bg-primary-subtle">
          <div className="container-fluid d-flex justify-content-between px-5">
                <a className="navbar-brand fw-bolder">Quiz Masters</a>
                <div className="fw-bold">
                    <Link className="navbar-brand" to='/'>Home</Link>
                    <Link className="navbar-brand" to='/statistics'>Statistics</Link>
                    <Link className="navbar-brand" to='/blog'>Blog</Link>
                </div>
          </div>
        </nav>
    );
};

export default Header;