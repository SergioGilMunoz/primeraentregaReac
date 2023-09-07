import { useState,useEffect } from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
            <h1>{props.greeting}</h1>
            <div>
                {productos.map(producto =>{
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          este producto esta en venta
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
                })}
            </div>

            
        </Container>
   
    )
};

//export default ItemListContainer