import React from 'react';
import './App.css';
import PrincipalRick from './Componentes/PrincipalRick';


function App(props) {
  const users = props.user
  return (
    <div >
      <PrincipalRick user={users} />
    </div>
  );
}

export default App;