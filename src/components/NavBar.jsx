import { CartWidget } from './CartWidget';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => ( 
    <>
     
 <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">
            <span className="green-text">Camisas</span>
          </Nav.Link>
          <Nav.Link href="#features">
          <span className="green-text">Pantalones</span>
          </Nav.Link>
          <Nav.Link href="#pricing">
            <span className="green-text">Zapatillas</span>
          </Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>

          </>
)