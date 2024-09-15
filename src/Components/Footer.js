import React from 'react';
import { Container, Row, Col, Nav, NavLink } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 pb-2">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <h5>About Us</h5>
            <p>
              We are an innovative IT company providing cutting-edge solutions
              to meet your business needs.
            </p>
          </Col>
          <Col md={4} className="text-center mb-3 mb-md-0">
            <h5>Follow Us</h5>
            <Nav className="justify-content-center">
              <Nav.Link href="https://www.facebook.com" target="_blank">
                <FaFacebook className="text-light mx-2" size={30} />
              </Nav.Link>
              <Nav.Link href="https://www.twitter.com" target="_blank">
                <FaTwitter className="text-light mx-2" size={30} />
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com" target="_blank">
                <FaLinkedin className="text-light mx-2" size={30} />
              </Nav.Link>
              <Nav.Link href="https://www.instagram.com" target="_blank">
                <FaInstagram className="text-light mx-2" size={30} />
              </Nav.Link>
            </Nav>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <h5>Quick Links</h5>
            <Nav className="justify-content-center justify-content-md-end">
              <NavLink href="/home" className="text-light">Home</NavLink>
              <NavLink href="/services" className="text-light">Services</NavLink>
              <NavLink href="/projects" className="text-light">Projects</NavLink>
              <NavLink href="/contact" className="text-light">Contact</NavLink>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p className="mb-0">© {new Date().getFullYear()} Axispex. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
