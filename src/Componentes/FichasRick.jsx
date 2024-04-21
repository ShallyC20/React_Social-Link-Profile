import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Importamos el hook useLocation
import Card from './Card';

function FichasRick() {
    const [character, setCharacter] = useState(null);
    const [episodes, setEpisodes] = useState([]);
    const location = useLocation(); // Obtenemos la ubicación actual utilizando useLocation

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const characterId = searchParams.get('id');

        console.log("Location search:", location.search);
        console.log("Character ID:", characterId);

        const fetchCharacterData = async () => {
            try {
                const characterResponse = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`);
                const characterData = await characterResponse.json();
                
                setCharacter(characterData);
                
                // Fetch episodes
                const episodesResponse = await Promise.all(characterData.episode.map(url => fetch(url)));
                const episodesData = await Promise.all(episodesResponse.map(response => response.json()));
                setEpisodes(episodesData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (characterId) {
            fetchCharacterData();
        }
    }, [location]);

    return (
        <div>
            {character && <Card character={character} episodes={episodes} />}
        </div>
    );
}

export default FichasRick;




// import React, { useState, useEffect } from 'react';
// import Card from './Card';


// function FichasRick() {
//     const [character, setCharacter] = useState(null);
//     const [episodes, setEpisodes] = useState([]);

//     useEffect(() => {
//         const fetchCharacterData = async () => {
//             try {
//                 const response = await fetch('https://rickandmortyapi.com/api/episode');
//                 const data = await response.json();

//                 if (data.episode && data.episode.length > 0) {
//                     setCharacter(data);
//                     fetchEpisodes(data.episode.slice(0, 5)); // Cambiado a los primeros 5 episodios
//                 } else {
//                     console.log("No se encontraron episodios en la respuesta.");
//                 }
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchCharacterData();
//     }, []);

//     const fetchEpisodes = async (episodesUrls) => {
//         try {
//             const promises = episodesUrls.map((url) =>
//                 fetch(url).then((res) => res.json())
//             );

//             const fetchedEpisodes = await Promise.all(promises);
//             setEpisodes(fetchedEpisodes);
//         } catch (error) {
//             console.error('Error fetching episodes:', error);
//         }
//     };
//     return (
//         <div>{character && <Card key={character.id} character={character} episodes={episodes} />}</div>
//     )
// }

// export default FichasRick