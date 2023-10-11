import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { Container } from "react-bootstrap";
//import data from "../data/productos.json";
import { ItemDetail } from "./ItemDetail";
import { getFirestore,getDoc,doc } from "firebase/firestore";


export const ItemDetalleContainer = props => {
const [producto,setProducto] = useState(null)
const [loading,setLoading]= useState(true)

const {id} = useParams();

useEffect(() => {
    const db = getFirestore()
    const refDoc=doc(db,"Productos",id)
   getDoc(refDoc)
    .then(snapshot => {
        setProducto({id:snapshot.id, ...snapshot.data()})
    })
    .finally(()=> setLoading(false))
}, [])

    if (loading) return <div>Loading...</div>

    return     (
        <Container className="mt-5">
            <h1>Detalle:</h1>
            <ItemDetail producto={producto}/>
        </Container>
    )
};
export default ItemDetalleContainer   