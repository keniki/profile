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
              Senior Software Developer and Project Manager with extensive experience in leading development teams and delivering high-quality solutions. Certified AWS Cloud Practitioner and Scrum Master with a strong background in Java, Spring Boot, and cloud technologies.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Throughout my career, I've focused on creating efficient solutions while leading teams in fast-paced environments. I believe in the importance of effective communication and agile decision-making to solve complex problems.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Fluent in both Spanish (native) and English, I have extensive experience working in English-speaking environments and managing multicultural teams across different locations and time zones.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg">
                <h3 className="font-medium text-blue-600 dark:text-blue-400 mb-1">Education</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">BSc in Computer Science, Cardiff University</p>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg">
                <h3 className="font-medium text-blue-600 dark:text-blue-400 mb-1">Location</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Spain</p>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg">
                <h3 className="font-medium text-blue-600 dark:text-blue-400 mb-1">Experience</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">15+ Years</p>
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
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Professional working environment" 
                className="rounded-lg shadow-xl relative z-10 w-full h-auto"
              />
              
              <div className="absolute -bottom-6 -right-6 z-20 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-blue-600 dark:text-blue-400">15+</span>
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