import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const   ItemDetailContainer = () => {
    const [productos, setProduct] = useState ({})
    const [loading, setLoading] = useState(true)
    const {pid} = useParams()


    useEffect(()=>{
            const db = getFirestore()
            const queryDoc = doc(db, 'productos', pid) 
            getDoc(queryDoc)
            .then(resp => setProduct( { id: resp.id, ...resp.data() } ))
            .catch((err)=> console.log(err))
            .finally(()=> setLoading(false))
        }, [])
    
    return (
        <>
            {
                loading ?
                <Loading/>
                :
                <div className="backg1">
                <ItemDetail producto={productos}/>
                </div>
            }
            </>
        );
}

export default ItemDetailContainer;