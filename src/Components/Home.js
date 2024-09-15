import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import ServicesSection from './OurServices';
import Photo from './Image';
import Industries from './Industries';
import LatestNews from './News';
import TestimonialSlider from './CustomerTestomonial';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after a short delay to trigger the animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
    <div className={`background-section`}>
      <div className={`overlay ${isVisible ? 'visible' : ''}`}>
        <p className='main-heading'>Your Comprehensive Partner for Enterprise Success</p>
        <Button variant="contained" color="primary">
          Contact Us
        </Button>
      </div>  
    </div>
    <ServicesSection />
    <Photo />
    <Industries />
    <LatestNews />
    <TestimonialSlider />
    </div>
    
  );
};  

export default Home;