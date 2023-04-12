import { useEffect, useState } from "react"
import { mockFetch } from "../utils/mockFetch"
import { Link, useParams } from "react-router-dom"
import ItemList from "./ItemList"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {pid}=useParams

    useEffect(()=>{
        mockFetch(pid)        
            .then(resp => setProductos(resp))        
    }, []) 

    return (
        <>
            <div>
            { 
                productos.length !== 0 ? 
                    <ItemList productos={productos} />
                :
                    <h2>Cargando...</h2>
            }
        </div>
        </>
    )
}
export default ItemListContainer
