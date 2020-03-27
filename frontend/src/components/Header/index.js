import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import './styles.css';

export default function Header() {
    const ngoName = localStorage.getItem('ngo_name');

    const history = useHistory();

    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }

    return (
        <header className="header">
            <div className="left_content">
                <img src={logo} alt="Be The Hero" className="logo"/>
                <span className="welcome_text">{`Welcome, ${ngoName}`}</span>
            </div>
            <div className="right_content">
                <Link to="/incidents/new" className="btn black_btn">Register new incident</Link>
                <button className="btn logout_btn" onClick={handleLogout} >
                    <FiPower size={18} color="#000" />
                </button>
            </div>
        </header>
    );
}