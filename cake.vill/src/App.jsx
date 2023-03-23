import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Cart from './components/CartWidget'
import Ilc from './components/ItemListContainer'


function App() {

  return (
    <div>
      <NavBar/>
      <Cart/>
      <Ilc nombre='Cake Villa' />
    </div>
    
  )
}

export default App
