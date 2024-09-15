import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import newsImage from './team.jpg'; // Update the path to your actual image

const LatestNews = () => {
  return (
    <Container style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '10px' }}>
      <Row>
        <Col>
          <h2 style={{ fontWeight: 'bold' }}>Latest News</h2>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <Card style={{ border: 'none' }}>
            <Image src={newsImage} fluid style={{ borderRadius: '10px' }} />
            <Card.Body>
              <Card.Text style={{ color: '#6c757d', fontSize: '0.9rem', marginBottom: '10px' }}>
              19 August, 2024
              </Card.Text>
              <Card.Title style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                Blog title 1
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card style={{ border: 'none', borderBottom: '1px solid #dee2e6' }}>
            <Card.Body>
              <Card.Text style={{ color: '#6c757d', fontSize: '0.9rem', marginBottom: '10px' }}>
                19 August, 2024
              </Card.Text>
              <Card.Title style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                Axispex
              </Card.Title>
              <Card.Text style={{ color: '#6c757d' }}>
                Axispex news
              </Card.Text>
              <a href="/home" style={{ color: '#d9534f', fontWeight: 'bold' }}>
                Continue Reading →
              </a>
            </Card.Body>
          </Card>

          <Card style={{ border: 'none', marginTop: '20px' }}>
            <Card.Body>
              <Card.Text style={{ color: '#6c757d', fontSize: '0.9rem', marginBottom: '10px' }}>
                19 August, 2023
              </Card.Text>
              <Card.Title style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                Axispex
              </Card.Title>
              <Card.Text style={{ color: '#6c757d' }}>
                Axispex news
              </Card.Text>
              <a href="/home" style={{ color: '#d9534f', fontWeight: 'bold' }}>
                Continue Reading →
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LatestNews;
