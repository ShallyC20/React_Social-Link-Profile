import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './Componentes/Card';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/22')
      .then(response => response.json())
      .then(data => {
        if (data.episode && data.episode.length > 0) {
          // Si hay episodios disponibles, usamos la respuesta tal como está
          setUsers([data]);
        } else {
          console.log("No se encontraron episodios en la respuesta.");
        }
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





// import React, { useEffect, useState } from 'react';
// import './App.css';
// import Card from './Componentes/Card';

// function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch('https://rickandmortyapi.com/api/character/12')
//       .then(response => response.json())
//       .then(data => {
//         setUsers([data]);
//         console.log(data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div>
//       {users.map(user => (
//         <Card key={user.id} user={user} />
//       ))}
//     </div>
//   );
// }

// export default App;