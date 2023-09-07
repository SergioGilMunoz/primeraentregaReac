import { useState,useEffect } from "react";
import { Container } from "react-bootstrap";
import { ItemCount } from "./ItemCount";
import data from "../data/productos.json";

console.log(data)
export const ItemListContainer = (props)=>{
const [productos,setProductos]=useState([]);

useEffect(()=>{
    const promesa =new Promise ((resolve,reject)=>{
      setTimeout(()=> resolve(data),2000)  ;
    });
    promesa.then((data)=>setProductos(data))
},[])

console.log(productos)
    return     (
        <Container className="mt-5">
            <div>{props.greeting}</div>
            <ItemCount/>
        </Container>
   
    )
};

//export default ItemListContainer