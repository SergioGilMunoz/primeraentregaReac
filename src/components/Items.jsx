import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Items = ({producto}) => (   


    <Card key={producto.id} style={{ width: '18rem' }}>
    <Card.Img variant="top" src={producto.foto} style={{height:"10rem"}}/>
    <Card.Body>  
      <Card.Title>{producto.name}</Card.Title>
      <Card.Text>{producto.categoria}</Card.Text>
      <Button variant="primary">Comprar</Button>
    </Card.Body>
  </Card>
   

    )
