import React, { useState } from 'react';
import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';
import logo from '../../assets/logo.svg';
import leftPlant from '../../assets/left_plant.png';
import rightPlant from '../../assets/right_plant.png';

export default function NewIncident() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");

    const encodedId = localStorage.getItem('ngo_id');
    const ngoId = atob(atob(encodedId + "=="));

    const history = useHistory();

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = { title, description, value };

        try {
            await api.post('/incidents/new', data, {
                headers: {
                    Authorization: ngoId,
                }
            })

            history.push('/profile/incidents');
        } catch (err) {
            console.error(`Something went wrong. ${err}`);
        }
    }

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
                <form className="right_content" onSubmit={handleNewIncident} >
                    <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
                    <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
                    <input className="total_cost" placeholder="Total cost" value={value} onChange={e => setValue(e.target.value)} />
                    <button className="btn red_btn" type="submit">Register new incident</button>
                </form>
            </div>
        </div>
    );
}