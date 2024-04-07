import React from 'react'
import './UserDetails.css';

function UserDetails() {
    return (
        <div className='container'>
            <div className="Perfil">

                <img
                    className="Imagen"
                    src="https://www.champohaircare.com/cdn/shop/articles/Curly_hair_Journal_July22_1920x2016.jpg?v=1658822549"
                    alt="image not found"
                ></img>

                <h2 className="Names">Carla Arancibia</h2>

                <p className="Lugar">London, United Kingdom</p>

                <p className="Xd">"Front-end developer and avid reader."</p>

            </div>

        </div>

    )
}

export default UserDetails
