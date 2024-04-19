import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './Componentes/Card';

function App() {
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
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCharacters(data);
      });
  }, []);


  return (
    <div className='container'>
      {characters.map(characters => (
        <Card key={characters.id} user={characters} />
      ))}
    </div>

  );
}
export default App;