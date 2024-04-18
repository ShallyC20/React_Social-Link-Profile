import React, { useEffect, useState } from 'react';
import './App.css'
import Card from './Componentes/Card';

function App() {
  const [users, setusers] = useState([])  
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/[2]')
      .then(Respuesta => {  
        return Respuesta.json();
      })
      .then(Data => {
        setusers(Data)
        console.log(Data)  
      }) 
  }, []) 

  return (
      <div>
        {
          users.map((user) => (
          <div key={user.id} className="card">
            <h2 className="Names">{user.id}. {user.name}</h2>
          <img className="Imagen" src={user.image} alt="" />
          <p className="Espe">{user.status}</p>
          <p className="Typ">{user.type}</p>
        </div>
          ) )
        }
      </div>
  )
}

export default App