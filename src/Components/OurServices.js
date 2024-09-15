import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { Container, Typography, Box } from '@mui/material';
import { Row, Col } from 'react-bootstrap';
import { FaChartLine, FaSearchDollar, FaChartBar, FaLaptopCode } from 'react-icons/fa';

const ServicesSection = () => {
  const descriptionRef = useRef(null);
  const servicesRef = useRef(null);

  const { ref: descriptionInViewRef, inView: descriptionInView, entry: descriptionEntry } = useInView({
    triggerOnce: false,
    threshold: 1,
  });

  const { ref: servicesInViewRef, inView: servicesInView, entry: servicesEntry } = useInView({
    triggerOnce: false,
    threshold: 1,
  });

  useEffect(() => {
    if (descriptionEntry) {
      const direction = descriptionEntry.boundingClientRect.y > 0 ? -50 : 50;
      if (descriptionInView) {
        gsap.fromTo(
          descriptionRef.current,
          { y: direction, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 }
        );
      } else {
        gsap.to(descriptionRef.current, { y: -direction, opacity: 0, duration: 2 });
      }
    }
  }, [descriptionInView, descriptionEntry]);

  useEffect(() => {
    if (servicesEntry) {
      const direction = servicesEntry.boundingClientRect.y > 0 ? -50 : 50;
      if (servicesInView) {
        gsap.fromTo(
          servicesRef.current.children,
          { y: direction, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.2 }
        );
      } else {
        gsap.to(servicesRef.current.children, { y: -direction, opacity: 0, duration: 2, stagger: 0.2 });
      }
    }
  }, [servicesInView, servicesEntry]);

  return (
<Container
  maxWidth={false}
  style={{
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: 'black',
    color: 'white',
    margin: 0,
    padding: 0,
    paddingRight: '15px',
    paddingBottom: '100px',
    width: '100vw',
    paddingLeft: '25px',
    backgroundSize: 'cover',  
    backgroundPosition: 'center',
  }}
  className='imgcont'
>
      <Box
        sx={{
          width: { xs: '100%', md: '50%' }, // Adjust the width for different screen sizes
          paddingRight: { xs: '0', md: '15px' }, // Adjust padding on mobile view
        }}
      >
        <Typography
          variant="h4"
          ref={(node) => {
            descriptionRef.current = node;
            descriptionInViewRef(node);
          }}
          style={{ marginBottom: '5px', opacity: descriptionInView ? 1 : 0, marginTop: '100px' }}
        >
          Empower Your Tomorrow, Start Today
        </Typography>
        <Typography
          variant="h6"
          ref={(node) => {
            descriptionRef.current = node;
            descriptionInViewRef(node);
          }}
          style={{ marginBottom: '100px', opacity: descriptionInView ? 1 : 0, marginTop: '20px' }}
        >
          Whether you're looking to develop essential data center solutions, safeguard your systems from potential threats, or smoothly migrate to the cloud, we’ve got you covered!
        </Typography>
        <Box
          ref={(node) => {
            servicesRef.current = node;
            servicesInViewRef(node);
          }}
          style={{ opacity: servicesInView ? 1 : 0 }}
        >
          <Row>
            <Col>
              <Box style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <FaChartLine className="text-light mx-2" size={50} />
              </Box>
              <Typography variant="body1">Business Consultation</Typography>
            </Col>
            <Col>
              <Box style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <FaSearchDollar className="text-light mx-2" size={50} />
              </Box>
              <Typography variant="body1">Digital marketing</Typography>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row>
            <Col>
              <Box style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <FaChartBar className="text-light mx-2" size={50} />
              </Box>
              <Typography variant="body1">Big Data Analytics</Typography>
            </Col>
            <Col>
              <Box style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <FaLaptopCode className="text-light mx-2" size={50} />
              </Box>
              <Typography variant="body1">Website design and maintenance</Typography>
            </Col>
          </Row>
        </Box>
      </Box>
    </Container>
  );
};

export default ServicesSection;
