import React from 'react';
import './ButtonSection.css';

function ButtonSection({ socialLinks }) {
    console.log(socialLinks)
    return (
        <div className="boton-container">
            {
                socialLinks.map(
                    socialLinks => <button key={socialLinks.name}> {socialLinks.name} </button>
                )
            }
        </div>
    );
}

export default ButtonSection;