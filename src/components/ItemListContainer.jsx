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


    return     (
        <Container className="mt-5">
            <h1>{props.greeting}</h1>
            <div style ={{display:"flex", flexWrap:"wrap"}}>
            {productos.map(producto =>(
    <Card key={producto.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.foto} style={{height:'10rem'}}/>
      <Card.Body>
        <Card.Title>{producto.name}</Card.Title>
        <Card.Text>
          {producto.categoria}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                ))};
            </div>
        </Container>
   
    )
};

//export default ItemListContainer