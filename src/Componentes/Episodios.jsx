import React, { useEffect, useState } from 'react';
import './Episodios.css';

function Episodios({ user }) {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        if (user && user.episode) {
            const episodeIds = user.episode.map(url => url.split('/').pop());
            const episodesUrl = `https://rickandmortyapi.com/api/episode/${episodeIds.join(',')}`;

            fetch(episodesUrl)
                .then(response => response.json())
                .then(data => {
                    const firstFiveEpisodes = data.slice(0, 5);
                    setEpisodes(firstFiveEpisodes);
                })
                .catch(error => {
                    console.error('Error fetching episodes:', error);
                });
        }
    }, [user]);

    return (
        <div className="Casa">
            <h2 className="SubT">Episodios</h2>
            <div className="episodes-container">
                {episodes.map(episode => (
                    <div key={episode.id} className="episode-card">
                        <h3 className="episode-name">{episode.name}</h3>
                        {user && user.episode.length === 1 ? (
                            <p className="episode-info">URL: {user.episode[0]}</p>
                        ) : (
                            <div>
                                <p className="episode-info">Episodio: {episode.episode}</p>
                                <p className="episode-info">Air date: {episode.air_date}</p>
                            </div>
                        )}
                    </div>
                ))}
                
            </div>
            <button >Home</button>
        </div>
    );
}

export default Episodios;