import { ItemList }  from "./ItemList";
import { useState,useEffect } from "react";
import  {Container}  from "react-bootstrap";
import { useParams } from "react-router-dom";
import {getFirestore,getDocs,collection, query,where} from "firebase/firestore";

export const ItemListContainer = props => {
const [productos,setProductos] = useState([]);
const [loading,setLoading] = useState(true)

const {id} = useParams();
console.log(id)
useEffect(()=> {
    const db = getFirestore()
  //  const  refCollection = collection(db,"Productos")

  const refCollection = id 
  ? query(collection(db,"Productos"),where("categoryId","==",id))
   : collection(db,"Productos")

    getDocs(refCollection)
    .then(snapshot=> {
        if (snapshot.size===0) console.log("No hay Resultados")
        else
            setProductos(
        snapshot.docs.map(doc => {
            return {id: doc.id, ...doc.data()}
            })
            )
        })
    .finally(() => {
         setLoading(false)
        })
    },[id])
    
    if (loading) return <div> Loading...</div>

    return(
        <Container className ="mt-4">
            <h1>{props.greeting}</h1>
            <div style={{display: "flex" , flexWrap:"wrap"}}>
            <ItemList productos={productos}/> 
            </div>
        </Container>
    )
};

