import React from 'react';
import Rick_y_Morty from './Rick_y_Morty';

function Card(props) {
    const users = props.user
    return (
        <div className='Tarjetaa'>
            <Rick_y_Morty user={users} />
        </div>
    );
}

export default Card;