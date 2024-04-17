import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);

  function generarNumerosAleatorios() {
    const numeros = [];
    for (let i = 0; i < 10; i++) {
      numeros.push(Math.floor(Math.random() * 857));
    }
    numeros.toString();
    return numeros;
  }
  useEffect(() => {
    fetch(
      "https://rickandmortyapi.com/api/character/" + generarNumerosAleatorios()
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCharacters(data);
      });
  }, []);
  // const getApi = async () => {
  //   try {
  //     const res = await fetch('https://rickandmortyapi.com/api/character');
  //     const data = await res.json();
  //     setCharacters(data.results);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getApi();
  // }, []);

  return (
    <div className="container">
      {characters.map((character) => (
        <div key={character.id} className="card">
          <h2 className="Names">{character.id}. {character.name}</h2>
          <img className="Imagen" src={character.image} alt="" />
          <p className="SubT">Estado - Especie:</p>
          <p className="Espe">{character.status} - {character.species}</p>
          <p className="SubT">Ultima ubicacion conocida:</p>
          <p className="Local">{character.location.name}</p>
        </div>
      ))}
    </div>
  );
}
export default App;