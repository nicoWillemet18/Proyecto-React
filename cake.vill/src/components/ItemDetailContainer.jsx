import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mockFetch } from "../utils/mockFetch";
import ItemDetail from "./ItemDetail";

const   ItemDetailContainer = () => {
    const [productos, setProduct] = useState ({})
    const {id} = useParams()

    useEffect(()=> {
        mockFetch(id)
        .then(resp =>setProduct(resp))
        .catch((err)=> console.log(err))
    }, [])
    
    return (
        <ItemDetail producto={productos}/>
    );
}

export default ItemDetailContainer;