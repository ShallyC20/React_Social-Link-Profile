import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './Componentes/Card';

function App() {
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchCharacterData = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character/1');
        const data = await response.json();

        if (data.episode && data.episode.length > 0) {
          setCharacter(data);
          fetchEpisodes(data.episode.slice(0, 4));
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
    <div>
      {character && <Card key={character.id} character={character} episodes={episodes} />}
    </div>
  );
}

export default App;