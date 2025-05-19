import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-12">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              About <span className="text-blue-600 dark:text-blue-400">Me</span>
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Hello! I'm Alberto, a passionate software developer with a love for creating elegant solutions to complex problems. With a background in both frontend and backend development, I enjoy building applications that are not only functional but also intuitive and user-friendly.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              My journey in tech began several years ago, and since then, I've had the opportunity to work with various technologies and frameworks. I'm constantly learning and exploring new tools to expand my skill set and stay updated with industry trends.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              When I'm not coding, you can find me exploring new hiking trails, reading about the latest tech innovations, or perfecting my coffee brewing techniques.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg">
                <h3 className="font-medium text-blue-600 dark:text-blue-400 mb-1">Education</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Computer Science, University of Technology</p>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg">
                <h3 className="font-medium text-blue-600 dark:text-blue-400 mb-1">Location</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">San Francisco, CA</p>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg">
                <h3 className="font-medium text-blue-600 dark:text-blue-400 mb-1">Experience</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">5+ Years</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              ...variants,
              visible: { 
                ...variants.visible,
                transition: { delay: 0.2, duration: 0.6, ease: "easeOut" } 
              }
            }}
          >
            <div className="relative">
              <div className="bg-blue-600 dark:bg-blue-500 rounded-lg absolute -top-4 -left-4 w-full h-full z-0"></div>
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Working on laptop" 
                className="rounded-lg shadow-xl relative z-10 w-full h-auto"
              />
              
              <div className="absolute -bottom-6 -right-6 z-20 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-blue-600 dark:text-blue-400">5+</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Years Experience</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-blue-600 dark:text-blue-400">50+</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;