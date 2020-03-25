import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import heroes from '../../assets/heroes.png';
import './styles.css';

export default function Login() {
    return (
        <div className="login_container">
            <div className="left_container">
                <img className="logo" src={logo} alt="Be The Hero" />
                <div className="action_container">
                    <h1>Join the heroes</h1>
                    <p>By choosing an incident to help</p>
                    <button className="btn black_btn">Save the day</button>
                </div>
                <section className="form_container">
                    <form>                        
                        <h3>Do you represent an NGO?</h3>
                        <input placeholder="Enter your NGO ID"></input>
                        <button type="submit" className="btn red_btn">Login</button>
                        <a href="/register">
                            <FiLogIn size={16} color="#E02041" />
                            Register
                        </a>
                    </form>
                </section>
            </div>
            <div className="right_container">
                <img className="heroes" src={heroes} alt="Heroes" />
            </div>
        </div>
    );
}