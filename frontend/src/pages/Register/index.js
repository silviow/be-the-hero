import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import leftPlant from '../../assets/left_plant.png';
import rightPlant from '../../assets/right_plant.png';
import './styles.css';

export default function Register() {
    return (
        <div className="register_container">
            <div className="decorations">
                <img className="left_plant" src={leftPlant} alt="" />
                <img className="right_plant" src={rightPlant} alt="" />
            </div>
            <div className="content">
                <section className="left_content">
                    <img className="logo" src={logo} alt="Be The Hero" />
                    <div>
                        <h1>Join us</h1>
                        <p>Registering your NGO on our platform makes it more visible to people willing to help.</p>
                    </div>
                    <Link to="/" className="link_btn">
                        <FiArrowLeft size={16} color="#E02041" />
                        Return
                    </Link>
                </section>
                <form className="right_content">
                    <input placeholder="NGO Name" />
                    <input placeholder="NGO Phone/Whatsapp" />
                    <input type="email" placeholder="NGO Email" />
                    <div className="input_group">
                        <input placeholder="NGO City" />
                        <input placeholder="State" style={{ width: 80 }} />
                    </div>
                    <button className="btn red_btn" type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}
