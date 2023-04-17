import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { mockFetch } from "../utils/mockFetch"
import ItemList from "./ItemList"


const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {cid} = useParams ()

    useEffect(()=>{

        if(cid){
            mockFetch()        
                .then(resp => setProductos(resp.filter(prod => prod.categoria === cid)))
                .catch(err => console.log (err))
        } else{
            mockFetch()        
            .then(resp => setProductos(resp))
            .catch(err => console.log (err)) 
        }

    }, [cid]) 

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
