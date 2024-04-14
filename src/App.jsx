import React, { useEffect, useState } from 'react';
import './App.css'
import Card from './Componentes/Card';

function App() {
  const [users, setusers] = useState([])  //Arive con [],   user es un arrglo se itera
  useEffect(() => {
    //first Cuando entre los datos pedir datos
    fetch('https://6617cc6fed6b8fa43483cfab.mockapi.io/Api/Version1/users')//esto es un get (Es una promesa-es asigcronica)
      .then(Respuesta => {  //variable 
        return Respuesta.json();
      })
      .then(Data => {
        setusers(Data)
        console.log(Data)  //Sin comilla ya que es una variable
      }) 
  }, []) //Una vez q aparecio

  return (
      <div>
        {
          users.map((user) =>
            (<Card key={user.id} user={user} />)
          ) 
        }
      </div>
  )
}

export default App