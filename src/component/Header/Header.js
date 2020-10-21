import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import header from '../../resource/images/header.jpg';
import logo from '../../resource/logos/logo.png';

const Header = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
            <nav className="nav">
                <ul>
                    <li>
                        <img className="logo" src={logo} alt="" />
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link className="btn-book" to="/book">Book</Link>
                    </li>
                </ul>
            </nav>
            <div className="title-container">
                <p>Volunteer Network</p>
                <h2>I GROW BY HELPING PEOPLE IN NEED</h2>
            </div>
        </div>
    );
};

export default Header;