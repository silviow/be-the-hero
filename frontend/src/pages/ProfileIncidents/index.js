import React, { useState, useEffect } from 'react';
import { FiTrash2 } from 'react-icons/fi'; 
import Header from '../../components/Header';
import api from '../../services/api';
import './styles.css';

export default function ProfileIncidents() {
    const [incidents, setIncidents] = useState([]);

    const encodedId = localStorage.getItem('ngo_id');
    const ngoId = atob(atob(encodedId + "=="));

    useEffect(() => {
        api.get('/profile/incidents', {
            headers: {
                Authorization: ngoId,
            }
        }).then(response => {
            setIncidents(response.data);
        });
    }, [ngoId]);

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ngoId,
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id));
        } catch (err) {
            console.error(`Something went wrong. ${err}`);
        }
    }

    return (
        <>
            <Header />
            <div className="profile_incidents_container">
                <h1>Your registered incidents</h1>
                <ul>
                    {
                        incidents.map(incident => (
                            <li key={incident.id}>
                                <strong>Incident: </strong>
                                <p>{incident.title}</p>
                                <strong>Description: </strong>
                                <p>{incident.description}</p>
                                <strong>Total cost: </strong>
                                <p>
                                    {
                                        Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'})
                                            .format(incident.value)
                                    }
                                </p>
                                <button type="button" className="delete_btn" onClick={() => handleDeleteIncident(incident.id)}>
                                    <FiTrash2 size={20} color="#000" />
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
}
