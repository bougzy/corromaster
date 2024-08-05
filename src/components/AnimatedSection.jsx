import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css/animate.min.css';

const AnimatedSection = ({ children, animationClass = 'animate__fadeInUp' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger animation once
    threshold: 0.2, // Trigger when 20% of the element is in view
  });

  return (
    <div
      ref={ref}
      className={`animate__animated ${inView ? animationClass : 'animate__fadeOut'}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
