import { Link } from "react-router-dom"
import { useCartContext } from "../CartContext/CartContext"

const CartCountainer = () => {
    const {
        cartList,
        vaciarCarrito,
        precioTotal,
        eliminarProducto 
    } = useCartContext()

    return (
        cartList.length == 0 ?
        <center style={{display:"flex", height:"150px", justifyContent:"center", position:"relative", margin:"auto", borderRadius:"5px", boxShadow:"5px 2px 10px black", top:"30vh", backgroundColor: "aliceblue", maxWidth:"1000px", fontSize:"larger", flexDirection:"column"}}>
            <h2>Aún no hay productos en el Carrito</h2>
            <Link to='/'> Volver a la tienda </Link>
        </center>
            :
        <center style={{display:"flex", height:"350px", justifyContent:"center", position:"relative", margin:"auto", borderRadius:"5px", boxShadow:"5px 2px 10px black", top:"10vh", backgroundColor: "aliceblue", width:"80%", fontSize:"larger", flexDirection:"column"}}>
            {cartList.map(product =>(
                <li key={product.id}>
                <img src={product.foto} alt="imagen" className="w-25"/>
                Nombre: {product.name} - Cantidad: {product.quantity}
                <button onClick={()=> eliminarProducto(product.id)} className="btn btn-danger">Eliminar producto</button>
            </li>
            ))}
            <h3>Precio Total: {precioTotal()} </h3>
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        </center>
    )
}

export default CartCountainer

