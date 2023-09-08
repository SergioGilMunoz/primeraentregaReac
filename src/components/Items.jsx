import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Items = ({producto}) => (   


    <Card key={producto.id} style={{ width: '18rem' }}>
    <Card.Img variant="top" src={producto.foto} style={{height:"10rem"}}/>
    <Card.Body>  
      <Card.Title>{producto.name}</Card.Title>
      <Card.Text>{producto.categoria}</Card.Text>
      <Link to={`/item/${producto.id}`} >
      <Button variant="primary">Comprar</Button>
      </Link>
      
    </Card.Body>
  </Card>
   

    )
