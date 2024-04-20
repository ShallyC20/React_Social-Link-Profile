import React from 'react';
import './Episodios.css';
import { NavLink } from "react-router-dom";

function Episodios({ episodes }) {
    return (
        <div className="Casa">
            <h2 className="SubT">Primeros 5 Episodios</h2>
            <div className="episodes-container">
                {episodes.map((episode) => (
                    <div key={episode.id} className="episode-card">
                        <h3 className='episode-name'>{episode.name}</h3>
                        <p className='episode-info'>Episode: {episode.episode}</p>
                        <p className='episode-info'>Air Date: {episode.air_date}</p>
                    </div>
                ))}
            </div>
            <NavLink to="/">
                <button>Home</button>
            </NavLink>
        </div>
    );
}

export default Episodios;