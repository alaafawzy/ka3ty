import React, { useContext } from 'react';
import { Navbar, Nav, Container, NavLink } from 'react-bootstrap'; // Import components
import { Link } from 'react-router-dom';
import { AuthContext } from '../hooks/AuthContext';
function MyNavbar() {
  
  const { isLoggedIn,setIsLoggedIn } = useContext(AuthContext);
  return (
    <Navbar bg="light" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#">
          <Link to="/" className='remove-decoration'>
          <img src="/images/k2.png" alt="Logo" width="50" height="50" /></Link> {/* Replace with your logo */}
          <NavLink to="/" className='d-inline'><Link to='/'className='remove-decoration'>قاعتى</Link></NavLink>
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* Align items to the right */}
          <div className='nav-items-spaces'>
          <div className='nav1'>
          
          {/* <Nav.Item className="mx-3">
          <NavLink to="#test-section">
            <Link to="#test-section">
            <b>قاعات</b>
            </Link></NavLink>
          </Nav.Item>
          <Nav.Item className="mx-3">
            <NavLink to="/about-us"><b>من نحن</b></NavLink>
          </Nav.Item> */}
          </div>
          <div className='nav1'>
          {
            isLoggedIn?(<Nav.Item className="mx-3 ">
            <NavLink to="/logout">
              <Link to="/logout">تسجيل خروج</Link></NavLink>
          </Nav.Item>):<>
          <Nav.Item className="mx-3 ">
          <NavLink to="/login">
            <Link to="/login">تسجيل دخول</Link></NavLink>
        </Nav.Item>
        <Nav.Item className="mx-3">
          <NavLink to="/register"><Link to="/register">تسجيل حساب</Link></NavLink>
        </Nav.Item></>
          }
          
          
          </div>
          </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
