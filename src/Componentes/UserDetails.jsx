import React from 'react'
import './UserDetails.css';

function UserDetails({ user }) {
    return (
        <div className="Ficha">
            <h2 className="Nombre">{user.id}. {user.name}</h2>
            <img className="Imag" src={user.image} alt="" />
            <p className="Esp">{user.status}</p>
            <p className="Typ">{user.type}</p>
        </div>

    )
}

export default UserDetails;

// rcfe