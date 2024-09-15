import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO, TechCorp',
    image: 'https://example.com/john-doe.jpg',
    text: 'This product has revolutionized our workflow. Highly recommended!',
    bgColor: 'Grey',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Designer, CreativeCo',
    image: 'https://example.com/jane-smith.jpg',
    text: 'The user interface is intuitive and the features are top-notch.',
    bgColor: 'Grey',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'CTO, InnovateInc',
    image: 'https://example.com/mike-johnson.jpg',
    text: 'We have seen a 50% increase in productivity since implementing this solution.',
    bgColor: 'Grey',
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState((currentIndex + 1) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setNextIndex((currentIndex + 1) % testimonials.length);
  }, [currentIndex]);

  const currentTestimonial = testimonials[currentIndex];
  const nextTestimonial = testimonials[nextIndex];

  return (
    <div className="testimonial-slider" style={{ backgroundColor: currentTestimonial.bgColor }}>
      <div className="testimonial-content">
        <div className="testimonial-image-container">
          <img
            src={currentTestimonial.image}
            alt={currentTestimonial.name}
            className="testimonial-image current"
          />
          <img
            src={nextTestimonial.image}
            alt={nextTestimonial.name}
            className="testimonial-image next"
          />
        </div>
        <div className="testimonial-text-container">
          <p className="testimonial-text">"{currentTestimonial.text}"</p>
          <h3 className="testimonial-name">{currentTestimonial.name}</h3>
          <p className="testimonial-role">{currentTestimonial.role}</p>
        </div>
      </div>
      <div className="progress-bar">
        <div className="progress"></div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
