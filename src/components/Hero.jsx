import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-0 px-4 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute w-full h-full opacity-10 dark:opacity-20">
        <div className="absolute w-60 h-60 rounded-full bg-blue-500 top-1/4 right-1/4 blur-3xl"></div>
        <div className="absolute w-60 h-60 rounded-full bg-teal-500 bottom-1/4 left-1/4 blur-3xl"></div>
        <div className="absolute w-40 h-40 rounded-full bg-orange-500 bottom-1/3 right-1/3 blur-3xl"></div>
      </div>
      
      <motion.div 
        className="container mx-auto text-center z-10 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Alberto Ayu Palacios"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 object-cover border-4 border-white dark:border-gray-800 shadow-xl"
          variants={itemVariants}
        />
        
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
          variants={itemVariants}
        >
          Alberto Ayu Palacios
        </motion.h1>
        
        <motion.div 
          className="mb-8"
          variants={itemVariants}
        >
          <h2 className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium">
            Senior Software Developer & Project Manager
          </h2>
        </motion.div>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Experienced software developer and project manager specializing in Java, Spring Boot, and AWS technologies.
          Leading teams to deliver high-quality solutions with a focus on efficiency and scalability.
        </motion.p>
        
        <motion.div 
          className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6"
          variants={itemVariants}
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="btn btn-primary"
          >
            Learn More
          </Link>
          
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="btn btn-outline"
          >
            Contact Me
          </Link>
        </motion.div>
      </motion.div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDownIcon className="h-6 w-6" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;