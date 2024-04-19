import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './Componentes/Card';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/4')
      .then(response => response.json())
      .then(data => {
        setUsers([data]);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {users.map(user => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App;