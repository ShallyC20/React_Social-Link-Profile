import React from 'react';
import './Rick_y_Morty.css';
import { NavLink } from "react-router-dom";

function Rick_y_Morty(props) {
    const character = props.character;

    return (
        <NavLink to={`/character?id=${character.id}`} >
            <div key={character.id} className="card">
                <h2 className="Names">{character.id}. {character.name}</h2>
                <img className="Imagen" src={character.image} alt="" />
                <p className="SubT">Estado - Especie:</p>
                <p className="Espe">{character.status} - {character.species}</p>
                <p className="SubT">Última ubicación conocida:</p>
                <p className="Local">{character.location.name}</p>
            </div>
        </NavLink>

    );
}

export default Rick_y_Morty;


