import React from 'react';
import './UserDetails.css';

function UserDetails({ character }) {
    return (
        <div className="Ficha">
            <h2 className="Nombre">{character.id}. {character.name}</h2>
            <img className="Imag" src={character.image} alt="" />
            <p className="Esp">{character.status}</p>
            <p className="Typ">{character.type}</p>
        </div>
    );
}

export default UserDetails;

// rcfe