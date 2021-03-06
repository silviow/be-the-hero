import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { FaApple } from 'react-icons/fa';
import { MdAndroid } from 'react-icons/md';
import { LoginContainer } from './styles';
import logo from '../../assets/logo.svg';
import heroes from '../../assets/heroes.png';
import api from '../../services/api';

export default function Login() {
    const [id, setId] = useState("");
    const [failedLogin, setFailedLogin] = useState(false);
    const [showLinksToMobileApp, setShowLinksToMobileApp] = useState(false);

    const LinkToMobileApp = "https://github.com/silviow/be-the-hero/tree/master/mobile";

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            if (id) {
                const response = await api.post('/sessions', { id });
                
                const encodedId = btoa(btoa(id)).replace('==', '');
                
                localStorage.setItem('ngo_id', encodedId);
                localStorage.setItem('ngo_name', response.data.name);

                history.push('/profile/incidents');
            }
        } catch (err) {
            setFailedLogin(true);
        }
    }

    return (
        <LoginContainer>
            <div className="left_container">
                <img className="logo" src={logo} alt="Be The Hero" />
                <div className="action_container">
                    <h1>Join the heroes</h1>
                    {
                        showLinksToMobileApp ?
                        <div className="link_to_mobile_app">
                            <p>Save the day through our <a href={`${LinkToMobileApp}`}>mobile app</a>.</p>
                            <div className="icons_container">
                                <a href={`${LinkToMobileApp}/android`}><MdAndroid size={35} color="#E02041" /></a>
                                <a href={`${LinkToMobileApp}/ios`}><FaApple size={40} color="#E02041" /></a>
                            </div>
                        </div>
                        : 
                        <>
                            <p>By choosing an incident to help</p>
                            <button className="btn black_btn" onClick={() => { setShowLinksToMobileApp(true); }}>Save the day</button>
                        </>
                    }
                </div>
                <section className="form_container">
                    <form onSubmit={handleLogin}>                        
                        <h3>Do you represent an NGO?</h3>
                        <input type="password" placeholder="Enter your NGO ID" value={id} onChange={e => setId(e.target.value)} />
                        <button type="submit" className="btn red_btn">Login</button>
                        {
                            failedLogin && (
                                <div className="access_info">
                                    <p>NGO not found.</p>
                                </div>
                            )
                        }
                    </form>
                    <Link to="/register" className="link_btn">
                        <FiLogIn size={16} color="#E02041" />
                        Register
                    </Link>
                </section>
            </div>
            <div className="right_container">
                <img className="heroes" src={heroes} alt="Heroes" />
            </div>
        </LoginContainer>
    );
}
