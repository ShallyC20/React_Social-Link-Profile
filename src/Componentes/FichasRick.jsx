import React, { useState, useEffect } from 'react';
import Card from './Card';

function FichasRick() {
    const [character, setCharacter] = useState(null);
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        const fetchCharacterData = async () => {
            try {
                const response = await fetch('https://rickandmortyapi.com/api/character/22');
                const data = await response.json();

                if (data.episode && data.episode.length > 0) {
                    setCharacter(data);
                    fetchEpisodes(data.episode.slice(0, 5)); // Cambiado a los primeros 5 episodios
                } else {
                    console.log("No se encontraron episodios en la respuesta.");
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchCharacterData();
    }, []);

    const fetchEpisodes = async (episodesUrls) => {
        try {
            const promises = episodesUrls.map((url) =>
                fetch(url).then((res) => res.json())
            );

            const fetchedEpisodes = await Promise.all(promises);
            setEpisodes(fetchedEpisodes);
        } catch (error) {
            console.error('Error fetching episodes:', error);
        }
    };
    return (
        <div>{character && <Card key={character.id} character={character} episodes={episodes} />}</div>
    )
}

export default FichasRick