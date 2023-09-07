
import { ItemList }  from "./ItemList";
import { useState,useEffect } from "react";
import { Container } from "react-bootstrap";
import data from "../data/productos.json";


export const ItemListContainer = (props)=>{
const [productos,setProductos]=useState([]);

useEffect(()=>{
    const promesa =new Promise ((resolve,reject)=>{
      setTimeout(()=> resolve(data),2000 )  ;
    });
    promesa.then((data)=>setProductos(data))
},[])
    return     (
        <Container className="mt-5">
            <h1>{props.greeting}</h1>
            <div style ={{display:"flex", flexWrap:"wrap"}}>

            <ItemList productos={productos}/>
            
       
            </div>
        </Container>
   
    )
};

//export default ItemListContainer