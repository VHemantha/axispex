import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactPage = () => {
  return (
    <div
      style={{
        backgroundImage: 'url(https://example.com/your-background-image.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'black',
        width: '100vw',
        minHeight: '100vh',
        paddingTop: '100px',
        paddingLeft: '50px',
        paddingRight: 0,
        color: 'white',
      }}
    >
      <Container fluid>
        <Row>
          <Col md={6}>
            <Form>
              <Row>
                <Col>
                  <Form.Group controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId="company">
                    <Form.Label>Company</Form.Label>
                    <Form.Control type="text" placeholder="Company" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="jobTitle">
                    <Form.Label>Job Title</Form.Label>
                    <Form.Control type="text" placeholder="Job Title" />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Email Address" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="phoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Phone Number" />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId="industry">
                    <Form.Label>Industry</Form.Label>
                    <Form.Control type="text" placeholder="Industry" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="country">
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" placeholder="Country" />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="expertise">
                <Form.Label>Expertise</Form.Label>
                <Form.Control type="text" placeholder="Expertise" />
              </Form.Group>

              <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Message" />
              </Form.Group>
                <br></br>
              <Button variant="danger" type="submit">
                Submit
              </Button>
            </Form>
          </Col>

          <Col md={6} style={{paddingLeft:'150px'}}>
            <h3>United Kingdom</h3>
            <h4>Head office:</h4>
            <p>
             ,<br />
              , <br />
            
            </p>

            <h3>Sri lanka</h3>
            <p>
              ,<br />
              ,<br />
              
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactPage;
