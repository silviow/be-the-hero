import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import leftPlant from '../../assets/left_plant.png';
import rightPlant from '../../assets/right_plant.png';
import api from '../../services/api';
import './styles.css';

export default function Register() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");    
    const [registered, setRegistered] = useState(false);

    async function handleRegister(e) {
        e.preventDefault();

        const data = { name, email, whatsapp, city, state };

        try {
            const response = await api.post('/ngos/new', data);

            setId(response.data.id);
            setRegistered(true);
        } catch (err) {
            console.error(`Something went wrong. Check out the details: ${err}`);
        }
    }

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
                <form className="right_content" onSubmit={handleRegister}>
                    <input placeholder="NGO Name" value={name} onChange={e => setName(e.target.value)} />
                    <input placeholder="NGO Phone/Whatsapp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} />
                    <input type="email" placeholder="NGO Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <div className="input_group">
                        <input placeholder="NGO City" value={city} onChange={e => setCity(e.target.value)} />
                        <input placeholder="State" style={{ width: 80 }} value={state} onChange={e => setState(e.target.value)} />
                    </div>
                    {
                        registered ?
                        <div className="access_info">
                            <p>Your access ID is: <strong>{id}</strong></p>
                            <p>Keep it safe :)</p>
                        </div>
                        : <button className="btn red_btn" type="submit">Register</button>
                    }
                </form>
            </div>
        </div>
    );
}
