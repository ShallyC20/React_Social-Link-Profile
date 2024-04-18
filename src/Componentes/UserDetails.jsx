import React from 'react'

function UserDetails({user}) {
    return (
        <div >
            {/* <img className="Imagen" src={user.avatar} alt={`avatar de ${user.name}`}></img> */}

            <img className="Imagen" src={user.image} alt="" />
            <p className="Espe">{user.status} </p>
            <p className="Typ">{user.type} </p>
        </div>

    )
}


// rcfe