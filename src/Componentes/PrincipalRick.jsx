import React, { useState, useEffect } from 'react';
import Rick_y_Morty from './Rick_y_Morty';
import './PrincipalRick.css';

function PrincipalRick() {
    const [characters, setCharacters] = useState([]);

    function generarNumerosAleatorios() {
        const numeros = new Set();
        while (numeros.size < 10) {
            numeros.add(Math.floor(Math.random() * 830));
        }
        return Array.from(numeros);
    }

    useEffect(() => {
        fetch(
            "https://rickandmortyapi.com/api/character/" + generarNumerosAleatorios().join(',')
        )
            .then((res) => res.json())
            .then((data) => {
                setCharacters(data);
            });
    }, []);

    return (
        <div className='container'>
            {characters.map(character => (
                <Rick_y_Morty key={character.id} character={character} />
            ))}
        </div>
    );
}

export default PrincipalRick;