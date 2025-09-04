import { useState } from 'react'
import imagen1 from '../public/imagen1.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div class="navegacion">
  <div class="logo-container">
    <h1>MALCO</h1>
  </div>
  <div class="nav-links">
    <ul>
      <li>Inicio</li>
      <li>Inventario</li>
      <li>Clientes</li>
      <li>Proveedores</li>
      <li>Finanzas</li>
    </ul>
  </div>
</div>

<div class="imagen-principal">
    <img src={imagen1} alt="imagen-principal" />
</div>


    </>
  )
}

export default App
