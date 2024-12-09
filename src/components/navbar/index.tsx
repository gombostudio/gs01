import React from 'react';
import { motion } from "framer-motion";
import logoname from '../../assets/PAULOGOMBO.png';
import logoicon from '../../assets/PG.png';
import './styles.css';

const Navbar = () => {
  return (
    <div className='section'>
      <motion.div 
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: -20 }}
        transition={{
        duration: 3,
        delay: 0.9,
        ease: [0, 0.71, 0.2, 1.01]
        }} 
        className='section__navbar'
      >
        <img src={logoname} alt='LOGONAME' id='img_01' />
        <img src={logoicon} alt='LOGOICON' id='img_02' />
      </motion.div>
    </div>
  );
}

export default Navbar;
