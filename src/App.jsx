import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="container">
      
      <div class="Perfil">

        <div class="Imagen">
        <img
          className="redonda"
          src="https://www.champohaircare.com/cdn/shop/articles/Curly_hair_Journal_July22_1920x2016.jpg?v=1658822549"
          alt="image not found"
        ></img>

        </div>

        <div class="Names">
          <h2>Carla Arancibia</h2>
        </div>

        <div class="Lugar">
          <p>London, United Kingdom</p>
        </div>

        <div class="Xd">
          <p>"Front-end developer and avid reader."</p>
        </div>

        <div class="button-container">
          <button >GitHub</button>
          <button>Frontend Mentor</button>
          <button>LinkedIn</button>
          <button>Twitter</button>
          <button>Instagram</button>
          <button id="Crear">Crear nuevo perfil</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
