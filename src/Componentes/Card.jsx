import React from 'react';
import './UserDetails';
// import ButtonSection from './ButtonSection';
import './Card.css';
import Episodios from './Episodios';

function Card({ user }) {
    const socialLinks = user["Social-links"] || []; 
    return (
        <div className="container">
            <UserDetails user={user} />
            <Episodios user={user} />
            {/* <ButtonSection socialLinks={socialLinks} /> */}
        </div>
    );
}

export default Card;