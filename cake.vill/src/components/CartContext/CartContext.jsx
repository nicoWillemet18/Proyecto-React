import { createContext, useContext, useState } from "react";

const CartContext = createContext ([])
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const agregarAlCart = (newProduct) => {
        const indexProduct = cartList.findIndex(product => product.id === newProduct.id)  //  -1
        
        if (indexProduct === -1 ) {
            setCartList([
                ...cartList,
                newProduct
            ])              
        } else {
            cartList[indexProduct].quantity += newProduct.quantity
            setCartList( [ ...cartList ] )
        }

    }

    const cantidadTotal = () => cartList.reduce( (cantidadTotal, objProducto) => cantidadTotal += objProducto.quantity ,0 ) 
    const precioTotal = () => {
        return cartList.reduce((precioTotal, objProducto) => precioTotal = precioTotal + (objProducto.price * objProducto.quantity) , 0)

    }
    const eliminarProducto = (pid) =>{

        const indexProduct = cartList.findIndex(product => product.id === pid)

        if (cartList[indexProduct].quantity > 1) {
            cartList[indexProduct].quantity = cartList[indexProduct].quantity -  1            
            setCartList( [...cartList] )
        } else {
            setCartList(cartList.filter(product => product.id !== pid ))          
        }
    }


    const vaciarCarrito = () => {
        setCartList([])
    }
    return(
        <CartContext.Provider value={{
            cartList,
            agregarAlCart,
            vaciarCarrito,
            precioTotal,
            cantidadTotal,
            eliminarProducto
        }}>
        {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider