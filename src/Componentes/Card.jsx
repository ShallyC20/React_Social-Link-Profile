import React from 'react';
import UserDetails from './UserDetails';
import ButtonSection from './ButtonSection';
import './Card.css';

function Card({ user }) {
    const socialLinks = user["Social-links"] || []; // Asegurarse de que socialLinks sea un arreglo
    return (
        <div className="container">
            <UserDetails user={user} />
            <ButtonSection socialLinks={socialLinks} />
        </div>
    );
}

export default Card;


// function Card(props) {
//     const user = props.user;
//     const socialLinks = user["Social-links"]
//     return (
//         <div className="container">
//             <UserDetails user={user} />
//             <ButtonSection socialLinks={socialLinks} />
//         </div>
//     );
// }

// export default Card;