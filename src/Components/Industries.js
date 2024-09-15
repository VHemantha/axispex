import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { Container, Typography, Box } from '@mui/material';
import { FaUniversity, FaIndustry , FaHeartbeat, FaShoppingBag } from 'react-icons/fa';
import { Row, Col } from 'react-bootstrap';

const Industries = () => {
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
        justifyContent: 'flex-start', 
        width: '98.8vw', 
        backgroundColor: 'grey', 
        color: 'black',
        margin: 0,
        padding: 0,
        paddingRight: '15px',
        paddingBottom:'100px',
        paddingLeft: '25px',
      }}
    >
      <Box sx={{
          width: { xs: '100%', md: '50%' }, // Adjust the width for different screen sizes
          paddingRight: { xs: '0', md: '15px' }, // Adjust padding on mobile view
        }}>
        <Typography
          variant="h4"
          ref={(node) => {
            descriptionRef.current = node;
            descriptionInViewRef(node);
          }}
          style={{ marginBottom: '5px', opacity: descriptionInView ? 1 : 0 ,marginTop : "100px"}}
        >
          Transformative solutions that drive peak performance across every industry
        </Typography>
        <Typography
          variant="h6"
          ref={(node) => {
            descriptionRef.current = node;
            descriptionInViewRef(node);
          }}
          style={{ marginBottom: '100px', opacity: descriptionInView ? 1 : 0 ,marginTop : "20px"}}
        >
          Enabling digital-first customer journeys, boosting productivity, and optimizing operations across diverse industries
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
              <FaShoppingBag  className="text-light mx-2" size={50} fill='brown'/>
                
              </Box>
              <Typography variant="body1">E-Commerce</Typography>

            </Col>
            <Col>
              <Box style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <FaHeartbeat  className="text-light mx-2" size={50} fill='brown'/>
                
              </Box>
              <Typography variant="body1">Health & Medical</Typography>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br>
          
          <Row>
            <Col>
              <Box style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <FaIndustry  className="text-light mx-2" size={50} fill='brown'/>
                
              </Box>
              <Typography variant="body1">Manufacturing & Retail</Typography>
            </Col>
            <Col>
              <Box style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <FaUniversity className="text-light mx-2" size={50} fill='brown'/>

              </Box>
              <Typography variant="body1">Banks & Finance</Typography>
            </Col>
          </Row>
        </Box>
      </Box>
    </Container>
  );
};

export default Industries;
