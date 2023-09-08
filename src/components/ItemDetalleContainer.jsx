import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { Container } from "react-bootstrap";
import data from "../data/productos.json";
import { ItemDetail } from "./ItemDetail";


export const ItemDetalleContainer = (props)=>{
const [producto,setProducto]=useState([null]);
const {id}=useParams();


useEffect(()=>{
    const promesa =new Promise ((resolve,reject)=>{
      setTimeout(()=>{
        const productoById=data.find(producto=>producto.id===id)
      
       resolve(productoById)},0 )  ; 
    });


    promesa.then((data)=>setProducto(data))
},[]);



  

    return     (
        <Container className="mt-5">
            <h1>Detalle:</h1>
            <ItemDetail producto={producto}/>
        </Container>
   
    )
};

//export default ItemListContainer