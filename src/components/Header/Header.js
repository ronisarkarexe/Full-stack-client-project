import React, { useContext } from 'react';
import {Navbar, Nav, Button, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import img from '../../icons/Group 33072.png';
import './Header.css'

const Header = () => {

   const [loggedInUser, setLoggedInUser] = useContext(UserContext)

   return (
      <div>
         <div className="container icon-color">
            <Navbar collapseOnSelect expand="lg" variant="dark">
            <Navbar.Brand as={Link} to="/"> <img className="image-icon" src={img} alt=""/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ml-auto">
                     <Nav.Link as={Link} className="color-nav" to="/">Home</Nav.Link>
                     <Nav.Link as={Link} to="/orders" className="color-nav">Orders</Nav.Link>
                     <Nav.Link className="color-nav" as={Link} to="/addProduct">Admin</Nav.Link>
                     <Nav.Link as={Link} className="color-nav" to="#">Deals</Nav.Link>
                     { !loggedInUser.email &&
                        <Button as={Link} to="/login" variant="success">Login</Button>
                     }
                     { loggedInUser.email &&
                        <Button as={Link} to="/login" variant="success">LogOut</Button>
                     }
                  </Nav>
               </Navbar.Collapse>
            </Navbar>
         </div>
      </div>
   );
};

export default Header;