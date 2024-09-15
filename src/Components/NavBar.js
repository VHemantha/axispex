import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: 'black' }} variant="dark">
      <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Navbar.Brand href="/" style={{
          marginLeft: '0',
          paddingTop: '0',
          paddingBottom: '0',
          paddingLeft: '0'
        }}>
          <img
            src={`${process.env.PUBLIC_URL}/ggg.jpg`}
            alt="Logo"
            width="220"
            height="60"
            className="d-inline-block align-top"
          />
          {' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" style={{ color: 'white', fontSize: '1.1rem',paddingRight:'20px' }}>Home</Nav.Link>
            <Nav.Link href="/aboutus" style={{ color: 'white', fontSize: '1.1rem',paddingRight:'20px' }}>About Us</Nav.Link>
            <NavDropdown
              title={<span style={{ color: 'white', fontSize: '1.1rem',paddingRight:'20px' }}>Resources</span>}  
              id="basic-nav-dropdown"
              className="custom-dropdown"
            >
              <NavDropdown.Item href="/" className="dropdown-item">Blogs</NavDropdown.Item>
              <NavDropdown.Item href="/" className="dropdown-item">Case Studies</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={<span style={{ color: 'white', fontSize: '1.1rem',paddingRight:'20px' }}>Our Services</span>}  
              id="basic-nav-dropdown"
              className="custom-dropdown"
            >
              <NavDropdown.Item href="/" className="dropdown-item">Digital Marketing</NavDropdown.Item>
              <NavDropdown.Item href="/" className="dropdown-item">Business Registration</NavDropdown.Item>
              <NavDropdown.Item href="/" className="dropdown-item">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/" className="dropdown-item">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contactus" style={{ color: 'white', paddingRight:'20px',fontSize: '1.1rem' }}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;


