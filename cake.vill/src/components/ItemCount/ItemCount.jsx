import { useEffect, useRef, useState } from "react"
import { useCount } from "../../hooks/useCount"


export const ItemCount = ({intial=1, stock=5, min=1, onAdd}) => {

    const { contador, increment, decrement, reset } = useCount( 11, 10, 1 )   
    
    function handleOnAdd() {
        onAdd(contador)
    }
    
    return ( 
        <div className="">  
            <button className="btn btn-outline-dark" onClick={decrement}> - </button>      
            <label>{contador}</label>
            <button className="btn btn-outline-dark" onClick={increment}> + </button>
            <button className="btn btn-outline-dark" onClick={handleOnAdd}> Agregar al carrito </button>
        </div>  
)}
