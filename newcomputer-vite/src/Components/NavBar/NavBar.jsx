

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import {Link, NavLink} from 'react-router-dom';
import Logo from '../../images/logo.png'
import './NavBar.css'


const NavBar = ({ componente }) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="primary">
            <Container>
                <Link className='btn btn-outline-dark' to='/'  href="#home" > <img className='logo'src={Logo} alt="logo" ></img></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <NavLink className='btn btn-outline-secondary'  to='/category/notebook'>Notebooks</NavLink>
                    <NavLink className='btn btn-outline-secondary'  to='/category/audio'>Audio</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <div className="cartWidget">
                        <Link to="/cart">
                            <CartWidget />
                        </Link>
            </div>
        </Navbar>
    );
};

export default NavBar;