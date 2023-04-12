import React from 'react';


const ItemDetail = ({producto}) => {
    return (
        <div className='row'>
            <div className='col-6'>
                <img src={producto.foto} className="w-25"/>
                <h3>Nombre: {producto.name}</h3>
                <h4>Precio: {producto.price}</h4>
                <h4>Categoria: {producto.categoria}</h4>
            </div>
        </div>
    );
};
export default ItemDetail;