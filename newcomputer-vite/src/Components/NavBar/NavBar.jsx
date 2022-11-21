import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import './NavBar.css'


const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home"> NewComputer</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                            <NavDropdown title="CATEGORIAS" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">NOTEBOOKS</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                PC GAMER
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">AUDIO</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Contacto</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Carrito de compras
                        </Nav.Link>
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
