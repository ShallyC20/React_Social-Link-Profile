import React from 'react';
import UserDetails from './UserDetails';
import './Card.css';
import Episodios from './Episodios';

function Card({ user }) {
    return (
        <div className='Tarjetaa'>
            <UserDetails user={user} />
            <Episodios user={user} />
        </div>
    );
}

export default Card;