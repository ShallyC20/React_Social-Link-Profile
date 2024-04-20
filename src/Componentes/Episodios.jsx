import React, { useEffect, useState } from 'react';
import './Episodios.css';

function Episodios({ character }) {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        const fetchEpisodesData = async () => {
            try {
                const episodeIds = character.episode.slice(0, 5).map(url => url.split('/').pop());
                const episodesUrls = `https://rickandmortyapi.com/api/episode/${episodeIds.join(',')}`;

                const response = await fetch(episodesUrls);
                const data = await response.json();

                setEpisodes(data);
            } catch (error) {
                console.error('Error fetching episodes:', error);
            }
        };

        if (character && character.episode) {
            fetchEpisodesData();
        }
    }, [character]);

    return (
        <div className="Casa">
            <h2 className="SubT">Episodios</h2>
            <div className="episodes-container">
                {episodes.map(episode => (
                    <div key={episode.id} className="episode-card">
                        <h3 className="episode-name">{episode.name}</h3>
                        <p className="episode-info">Episodio: {episode.episode}</p>
                        <p className="episode-info">Air date: {episode.air_date}</p>
                    </div>
                ))}
            </div>
            <button >Home</button>
        </div>
    );
}

export default Episodios;