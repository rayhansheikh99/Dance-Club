import React from 'react';
import logo from '../../dance-logo.png';
import './header.css';


const Header = () => {
    return (
        <div>
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-dark nav-bg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img className='img-logo' src={logo} alt=''/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active text-dark" aria-current="page" href="#">All Dancer</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-dark" href="#">Category</a>
                        </li>
                       
                    </ul>
                    <form className="d-flex flex-fill mx-5">
                        <input className="form-control me-2" type="search" placeholder="Search Dancer Here" aria-label="Search"/>
                        <button className="btn btn-outline-secondary btn-primary text-white" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
            
        </div>
        <div className='bg-color'>
            <h3>Welcome To Our World Best Dance Club</h3>
            <h4>Make Your Best Dance Team </h4>
            <h5>Our Total Budget: 10 Million</h5>
        </div>
        </div>
    );
};

export default Header;