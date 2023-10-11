import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Items = ({producto}) => (   


    <Card key={producto.categoryId} style={{ width: '18rem' }}>
    <Card.Img variant="top" src={producto.imagen} style={{height:"10rem"}}/>
    <Card.Body>  
      <Card.Title>{producto.nombre}</Card.Title>
      <Card.Text>{"Precio : $"+ producto.precio}</Card.Text>
      <Card.Text>{"Stock : "+ producto.stock}</Card.Text>
      <Link to={`/item/${producto.id}`} > 
      <Button variant="primary">Comprar</Button>
      </Link> *
      
    </Card.Body>
  </Card>
   

    )

    