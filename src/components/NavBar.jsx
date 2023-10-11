import { NavDropdown } from 'react-bootstrap';
import { CartWidget } from './CartWidget';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export const NavBar = () => ( 
    <>
     
 <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Ecommerce</Navbar.Brand>
        <Nav className="me-auto" >

          <NavDropdown.Item as={Link} to="/categoria/Ropa deportiva" className=" me-4 text-success" >Ropa deportiva</NavDropdown.Item>
          <NavDropdown.Item  as={Link} to="/categoria/Calzado deportivo" className=" me-4 text-success">Calzado deportivo</NavDropdown.Item>
          <NavDropdown.Item  as={Link} to="/categoria/Ropa casual" className=" me-4 text-success">Ropa casual</NavDropdown.Item>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
          </>
)