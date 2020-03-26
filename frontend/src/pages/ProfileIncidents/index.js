import React from 'react';
import { FiTrash2 } from 'react-icons/fi'; 
import './styles.css';
import Header from '../../components/Header';

export default function ProfileIncidents() {
    return (
        <>
            <Header />
            <div className="profile_incidents_container">
                <h1>Your registered incidents</h1>
                <ul>
                    <li>
                        <strong>Incident: </strong>
                        <p>Sick dog</p>
                        <strong>Description: </strong>
                        <p>Dog was hit by a motorcycle and needs surgery</p>
                        <strong>Total cost: </strong>
                        <p>R$1000</p>
                        <button type="button" className="delete_btn">
                            <FiTrash2 size={20} color="#000" />
                        </button>
                    </li>

                    <li>
                        <strong>Incident: </strong>
                        <p>Sick dog</p>
                        <strong>Description: </strong>
                        <p>Dog was hit by a motorcycle and needs surgery</p>
                        <strong>Total cost: </strong>
                        <p>R$1000</p>
                        <button type="button" className="delete_btn">
                            <FiTrash2 size={20} color="#000" />
                        </button>
                    </li>

                    <li>
                        <strong>Incident: </strong>
                        <p>Sick dog</p>
                        <strong>Description: </strong>
                        <p>Dog was hit by a motorcycle and needs surgery</p>
                        <strong>Total cost: </strong>
                        <p>R$1000</p>
                        <button type="button" className="delete_btn">
                            <FiTrash2 size={20} color="#000" />
                        </button>
                    </li>

                    <li>
                        <strong>Incident: </strong>
                        <p>Sick dog</p>
                        <strong>Description: </strong>
                        <p>Dog was hit by a motorcycle and needs surgery</p>
                        <strong>Total cost: </strong>
                        <p>R$1000</p>
                        <button type="button" className="delete_btn">
                            <FiTrash2 size={20} color="#000" />
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
}
