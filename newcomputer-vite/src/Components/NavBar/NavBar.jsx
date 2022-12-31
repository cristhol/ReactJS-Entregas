

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import {Link, NavLink} from 'react-router-dom';
import Logo from '../../images/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'



const NavBar = ({ componente }) => {
    return (
        
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="primary">
            <Container>
                
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link className='btn btn-outline-dark' to='/'  href="#home" > <img className='logo'src={Logo} alt="logo" ></img></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ">
        <NavLink className='btn btn-outline-secondary navItem'aria-current="page" href="#" to='/'>Home</NavLink>
        <NavLink className='btn btn-outline-secondary navItem'  to='/category/notebook'>Notebooks</NavLink>
        <NavLink className='btn btn-outline-secondary navItem'  to='/category/audio'>Audio</NavLink>
      </div>
    </div>
  </div>
</nav>
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

