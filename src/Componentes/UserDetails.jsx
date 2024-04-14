import React from 'react'
import './UserDetails.css';

function UserDetails({user}) {
    //const user = props.user  //No lo usa como un eatdp sino coomo variable  el props va en el parentesis (desegtructurar)

    return (
        <div >
            <img className="Imagen" src={user.avatar} alt={`avatar de ${user.name}`}></img>
            <h2 className="Names" >{user.name}</h2>
            <p className="Lugar">{user.location}</p>
            <p className="Xd">{user.discription}</p>
        </div>

    )
}

export default UserDetails
// Lo asigcrono va ir y despues va a pedir los datos