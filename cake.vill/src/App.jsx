import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'



function App() {

  return (
    <div>
      <NavBar/>
      <ItemListContainer nombre='Cake Villa' />
    </div>
    
  )
}

export default App
