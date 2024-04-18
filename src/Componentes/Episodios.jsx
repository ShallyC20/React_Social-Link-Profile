import React from 'react'

function Episodios({user}) {
    return (
        <div>
            <h2 className="SubT">Episodios[0,4]</h2>
            <h2 className="Names"> {user.name}</h2>
            <p className="Espe">{user.episode}</p>
            <p className="Local">{user.air_date}</p>
        </div>
    )
}

export default Episodios