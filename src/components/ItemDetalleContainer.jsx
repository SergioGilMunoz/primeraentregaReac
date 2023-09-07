
import { useState,useEffect } from "react";
import { Container } from "react-bootstrap";
import data from "../data/productos.json";
import { ItemDetail } from "./ItemDetail";


export const ItemDetalleContainer = (props)=>{
const [producto,setProducto]=useState([null]);

useEffect(()=>{
    const promesa =new Promise ((resolve,reject)=>{
      setTimeout(()=> resolve(data[0]),2000 )  ;
    });
    promesa.then((data)=>setProducto(data))
},[])
    return     (
        <Container className="mt-5">
            <h1>{props.greeting}</h1>
            <ItemDetail producto={producto}/>
        </Container>
   
    )
};

//export default ItemListContainer