import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import './styles.css';

export default function Header() {
    return (
        <header className="header">
            <div className="left_content">
                <img src={logo} alt="Be The Hero" className="logo"/>
                <span className="welcome_text">Welcome, Association of Something (AoS)</span>
            </div>
            <div className="right_content">
                <Link to="/incidents/new" className="btn black_btn">Register new incident</Link>
                <Link to="/" className="btn logout_btn">
                    <FiPower size={18} color="#000" />
                </Link>
            </div>
        </header>
    );
}