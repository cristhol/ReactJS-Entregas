
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom'
import './NavBar.css'


const NavBar = ({ componente }) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link className='btn btn-outline-primary' to='/'  href="#home"> NewComputer</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link className='btn btn-outline-primary'  href="#deets">Notebooks</Nav.Link>
                    <Nav.Link className='btn btn-outline-primary'  href="#deets">Audio</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Contacto</Nav.Link>
                        <Link className='btn btn-outline-primary'  to="/ cart">
                            Carrito 
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <div className="cartWidget">
                <CartWidget/>
            </div> 
        </Navbar>
    );
};

export default NavBar;
