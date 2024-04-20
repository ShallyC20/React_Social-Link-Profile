import React from 'react';
import UserDetails from './UserDetails';
import './Card.css';
import Episodios from './Episodios';

function Card({ character, episodes }) {
    return (
        <div className='Tarjetaa'>
            <UserDetails character={character} />
            <Episodios episodes={episodes} />
        </div>
    );
}

export default Card;