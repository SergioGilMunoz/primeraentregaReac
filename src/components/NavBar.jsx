import { CartWidget } from './CartWidget';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => ( 
    <>
     
 <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Ecommerce</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/categoria/Ropa deportiva">
          <span className="green-text">Ropa deportiva</span>
           
          </Nav.Link>
          <Nav.Link href="/categoria/Calzado deportivo">
          <span className="green-text">Calzado deportivo</span>
          </Nav.Link>
          <Nav.Link href="/categoria/Ropa casual">
            <span className="green-text">Ropa casual</span>
          </Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
          </>
)