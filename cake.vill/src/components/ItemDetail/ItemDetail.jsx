import React, { useContext, useState } from 'react';
import {useCartContext} from "../CartContext/CartContext"
import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


const ItemDetail = ({producto}) => {
    const [tieneCantidad, actualizarTieneCantidad] = useState(false)
    const {agregarAlCart} = useCartContext ()

    const onAdd = (cantidad) => {
        agregarAlCart({ ...producto, quantity: cantidad})
        actualizarTieneCantidad (true)
        }
    return (
        <div className='card w-50'>
            <div className='card-body'>
                <img src={producto.foto} className="w-100"/>
                <h3>Nombre: {producto.name}</h3>
                <h4>Precio: ${producto.price}</h4>
                <h4>Categoria: {producto.categoria}</h4>
            </div>
            <div className="card-fo">
                {tieneCantidad ? 
                <>
                        <Link to='/carrito' className='btn btn-outline-dark'>Terminar Compra</Link>
                        <Link to='/' className='btn btn-outline-dark'>Seguir Comprando</Link>
                </>
                    :
                <ItemCount initial={1} stock={producto.stock} onAdd= {onAdd}/>
                }
            </div>
        </div>
    );
};
export default ItemDetail;