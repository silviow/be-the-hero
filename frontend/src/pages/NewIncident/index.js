import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import leftPlant from '../../assets/left_plant.png';
import rightPlant from '../../assets/right_plant.png';

export default function NewIncident() {
    return (
        <div className="new_incident_container">
            <div className="decorations">
                <img className="left_plant" src={leftPlant} alt="" />
                <img className="right_plant" src={rightPlant} alt="" />
            </div>
            <div className="content">
                <section className="left_content">
                    <img className="logo" src={logo} alt="Be The Hero" />
                    <div>
                        <h1>Register a new incident</h1>
                        <p>Make it visible to more people willing to help.</p>
                    </div>
                    <Link to="/profile/incidents" className="link_btn">
                        <FiArrowLeft size={16} color="#E02041" />
                        Return
                    </Link>
                </section>
                <form className="right_content">
                    <input placeholder="Title" />
                    <textarea placeholder="Description" />
                    <input className="total_cost" placeholder="Total cost" />
                    <button className="btn red_btn" type="submit">Register new incident</button>
                </form>
            </div>
        </div>
    );
}