import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import Loading from "../Loading/Loading"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

const ItemListContainer = () => {   
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {cid} = useParams ()

    useEffect(()=>{
        if (cid){
        const db = getFirestore()        
        const queryCollection = collection(db, 'productos')
        const queryFilter = cid ? query(queryCollection,where('categoria', '==', cid))   : queryCollection
    
        getDocs(queryFilter)
        .then(resp => setProductos( resp.docs.map(producto => ({ id: producto.id, ...producto.data() }) ) ))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))        
           
        } else {
            const db = getFirestore()
            const queryCollection = collection(db, 'productos')
            
            getDocs(queryCollection)
                .then(resp => setProductos( resp.docs.map(producto => ({ id: producto.id, ...producto.data() }) ) ))
                .catch(err => console.log(err))
                .finally(()=> setLoading(false)) 
        }
    }, [cid]) 

    return (
        <>
            <div className="backg">
            { 
                loading ? 
                    <Loading/>
                :
                    <ItemList productos={productos} />
            }
        </div>
        </>
    )
}
export default ItemListContainer
