
import { ItemList }  from "./ItemList";
import { useState,useEffect } from "react";
import { Container } from "react-bootstrap";
import data from "../data/productos.json";
import { useParams } from "react-router-dom";


export const ItemListContainer = (props)=>{
const [productos,setProductos]=useState([]);

const {id} =useParams();


useEffect(()=>{
    const promesa =new Promise ((resolve,reject)=>{
      setTimeout(()=> resolve(data),2000 )  ;
    });
    promesa.then((data)=>{
        if(!id){
            setProductos(data)
        }else {
            const productosFiltrado=data.filter(producto=>producto.categoria ===id);
            setProductos(productosFiltrado);
        }

    });
},[]);
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