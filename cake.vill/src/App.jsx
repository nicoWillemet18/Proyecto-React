import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../src/components/CartWidget/CartWidget.css'
import '../src/components/NavBar/NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/components/ItemDetail/ItemDetail.css'
import '../src/components/Item/Item.css'
import '../src/components/ItemListContainer/ItemListContainer.css'
import '../src/components/ItemDetailContainer/ItemDetailContainer.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartContextProvider from './components/CartContext/CartContext'
import CartCountainer from './components/CartCountainer/CartCountainer'

function App() {
  return (
    <BrowserRouter>
    <CartContextProvider>
        <div>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/categoria/:cid' element={<ItemListContainer/>}/>
            <Route path='/item/:pid' element={<ItemDetailContainer/>}/>
            <Route path='/carrito' element={<CartCountainer/>}></Route>
          </Routes>
        </div>
    </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
