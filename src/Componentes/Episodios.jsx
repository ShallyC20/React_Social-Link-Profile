import React, { useEffect, useState } from 'react';
import './Episodios.css';

function Episodios({ user }) {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        // Verificamos si el usuario tiene episodios asociados
        if (user && user.episode) {
            // Extraemos los IDs de los episodios del usuario
            const episodeIds = user.episode.map(url => url.split('/').pop());

            // Creamos la URL para obtener los detalles de los episodios
            const episodesUrl = `https://rickandmortyapi.com/api/episode/${episodeIds.join(',')}`;

            // Hacemos la solicitud para obtener los detalles de los episodios
            fetch(episodesUrl)
                .then(response => response.json())
                .then(data => {
                    // Obtenemos solo los primeros 5 episodios si hay más de 5
                    const firstFiveEpisodes = data.slice(0, 5);
                    setEpisodes(firstFiveEpisodes);
                })
                .catch(error => {
                    console.error('Error fetching episodes:', error);
                });
        }
    }, [user]);

    return (
        <div>
            <h2 className="SubT">Episodios [0,4]</h2>
            <div className="episodes-container">
                {episodes.map(episode => (
                    <div key={episode.id} className="episode-card">
                        <h3 className="episode-name">{episode.name}</h3>
                        <p className="episode-info">Episodio: {episode.episode}</p>
                        <p className="episode-info">Air date: {episode.air_date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Episodios;



// import React, { useEffect, useState } from 'react';
// import './Episodios.css';

// function Episodios({ user }) {
//     const [episodes, setEpisodes] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         // Verificamos si el usuario tiene episodios asociados
//         if (user && user.episode) {
//             // Extraemos los IDs de los episodios del usuario
//             const episodeIds = user.episode.map(url => url.split('/').pop());

//             // Creamos la URL para obtener los detalles de los episodios
//             const episodesUrl = `https://rickandmortyapi.com/api/episode/${episodeIds.join(',')}`;

//             // Hacemos la solicitud para obtener los detalles de los episodios
//             fetch(episodesUrl)
//                 .then(response => {
//                     if (!response.ok) {
//                         throw new Error('Error fetching episodes, HTTP status ' + response.status);
//                     }
//                     return response.json();
//                 })
//                 .then(data => {
//                     // Verificamos si la respuesta tiene la propiedad "results"
//                     const episodesData = data.results ? data.results : data;

//                     // Verificamos si episodesData es un array antes de usar slice
//                     if (Array.isArray(episodesData)) {
//                         // Mostramos los primeros 5 episodios o todos si hay menos de 5
//                         const firstFiveEpisodes = episodesData.slice(0, 5);
//                         setEpisodes(firstFiveEpisodes);
//                     } else {
//                         // Manejamos el caso cuando episodesData no es un array
//                         throw new Error('Episodes data is not an array');
//                     }
//                 })
//                 .catch(error => {
//                     console.error('Error fetching episodes:', error);
//                     setError('Error fetching episodes: ' + error.message);
//                 });
//         }
//     }, [user]);

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     return (
//         <div>
//             <h2 className="SubT">Episodios</h2>
//             <div className="episodes-container">
//                 {episodes.map(episode => (
//                     <div key={episode.id} className="episode-card">
//                         <h3 className="episode-name">{episode.name}</h3>
//                         <p className="episode-info">Episodio: {episode.episode}</p>
//                         <p className="episode-info">Air date: {episode.air_date}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Episodios;





// import React, { useEffect, useState } from 'react';
// import './Episodios.css';

// function Episodios({ user }) {
//     const [episodes, setEpisodes] = useState([]);

//     useEffect(() => {
//         // Verificamos si el usuario tiene episodios asociados
//         if (user && user.episode) {
//             // Extraemos los IDs de los episodios del usuario
//             const episodeIds = user.episode.map(url => url.split('/').pop());

//             // Creamos la URL para obtener los detalles de los episodios
//             const episodesUrl = `https://rickandmortyapi.com/api/episode/${episodeIds.join(',')}`;

//             // Hacemos la solicitud para obtener los detalles de los episodios
//             fetch(episodesUrl)
//                 .then(response => response.json())
//                 .then(data => {
//                     // Mostramos los primeros 5 episodios o todos si hay menos de 5
//                     const firstFiveEpisodes = data.slice(0, 5);
//                     setEpisodes(firstFiveEpisodes);
//                 })
//                 .catch(error => {
//                     console.error('Error fetching episodes:', error);
//                 });
//         }
//     }, [user]);

//     return (
//         <div>
//             <h2 className="SubT">Episodios</h2>
//             <div className="episodes-container">
//                 {episodes.map(episode => (
//                     <div key={episode.id} className="episode-card">
//                         <h3 className="episode-name">{episode.name}</h3>
//                         <p className="episode-info">Episodio: {episode.episode}</p>
//                         <p className="episode-info">Air date: {episode.air_date}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Episodios;