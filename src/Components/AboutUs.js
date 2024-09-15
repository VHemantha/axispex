import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center mb-5">
        <Col md={6} className="text-md-start order-md-1">
          <h2>About Axispex</h2>
          <p>
            Founded on August 24, 2023, Axispex IT and Business Consultancy was established with a singular mission: to be the catalyst for startup success. In today's fast-paced, technology-driven world, startups face a myriad of challenges, from establishing a solid foundation to scaling operations and staying competitive in an ever-evolving market. At Axispex, we understand these unique challenges and are dedicated to providing end-to-end solutions that empower startups to grow, scale, and thrive.
          </p>
          <p>
            Our approach is comprehensive, encompassing both business and IT consultation. We work closely with our clients to understand their vision, goals, and the specific obstacles they face. Whether it's developing a robust business strategy, optimizing operational efficiency, or leveraging the latest technologies to drive innovation, we tailor our services to meet the unique needs of each startup. From initial concept to full-scale implementation, our team of experts guides startups through every stage of their journey, ensuring that they have the tools, resources, and insights needed to achieve sustainable growth.
          </p>
        </Col>
        <Col md={6} className="order-lg-2">
          <img
            src="https://via.placeholder.com/600x500"
            alt="About Axispex"
            className="img-fluid"
          />
        </Col>
      </Row>

      <Row className="align-items-center mb-5">
        <Col md={6} className="order-md-2">
          <Card className="text-end border-0 shadow-lg p-3">
            <Card.Body>
              <h3 className="card-title">Our Vision</h3>
              <Card.Text>
                Empowering startups to grow and scale by providing top-tier business and IT consultation services.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="order-md-1">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Vision"
            className="img-fluid"
          />
        </Col>
      </Row>

      <Row className="align-items-center">
        <Col md={6} className="order-md-2">
          <Card className="text-end border-0 shadow-lg p-3">
            <Card.Body>
              <h3 className="card-title">Our Mission</h3>
              <Card.Text>
                To provide innovative and effective business and IT consulting services that drive startups toward success and sustainability.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="order-md-1">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Mission"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;

