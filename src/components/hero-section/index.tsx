import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import imgFront from '../../assets/front.png';
import imgBack from '../../assets/back.png';

const HeroSection = () => {

  const { scrollY } = useScroll();

  const yBack = useTransform(scrollY, [0, 500], [0, -200]);
  const yFront = useTransform(scrollY, [0, 500], [0, -90]);

  return (
    <>
    <div 
      className="section"
      style={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden'
      }}
    >

      <motion.img
        src={imgBack}
        alt="Background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          y: yBack,
          transition: 'ease-in-out 0.5s', 
          opacity: 0.4
        }}
      />

      <motion.img
        src={imgFront}
        alt="Foreground"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '90vh',
          objectFit: 'fill',
          y: yFront,
          transition: 'ease-in-out 0.5s'
        }}
      />

        <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '90vh',
          background: 'linear-gradient(to top, rgba(0, 0, 0, 1) 10%, transparent 50%)'
        }}/> 
  
    </div>
    <div style={{backgroundColor:'black',
    color:'white',
    padding: '20px', 
    textAlign: 'center'}}>
        We are the best, at what we do
    </div>
    </>
  );
};

export default HeroSection;
