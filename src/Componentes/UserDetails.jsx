import React from 'react'
import './UserDetails.css';
import Foto from '../assets/avatar-jessica.jpeg'

function UserDetails() {
    return (
        <div >

            <img className="Imagen" src={Foto}></img>

            <h2 className="Names">Jessica Randall</h2>

            <p className="Lugar">London, United Kingdom</p>

            <p className="Xd">"Front-end developer and avid reader."</p>

        </div>

    )
}

export default UserDetails
