import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'TechNova Solutions',
      duration: '2021 - Present',
      description: 'Led development of cloud-based SaaS platform. Implemented microservices architecture using Node.js and React. Managed team of 5 developers and mentored junior engineers.',
      technologies: ['React', 'Node.js', 'Docker', 'AWS', 'MongoDB']
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Digital Dynamics',
      duration: '2018 - 2021',
      description: 'Developed responsive web applications for clients in finance and healthcare sectors. Built RESTful APIs and integrated third-party services. Improved application performance by 40%.',
      technologies: ['JavaScript', 'Python', 'Django', 'PostgreSQL', 'Redux']
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'WebSphere Inc.',
      duration: '2016 - 2018',
      description: 'Created dynamic user interfaces with modern JavaScript frameworks. Collaborated with UX/UI designers to implement responsive designs. Optimized web performance and accessibility.',
      technologies: ['HTML/CSS', 'JavaScript', 'Vue.js', 'Sass', 'Webpack']
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Work <span className="text-blue-600 dark:text-blue-400">Experience</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey in the tech industry, where I've had the opportunity to work on diverse projects and grow my skill set.
          </p>
        </motion.div>

        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={ref}
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-blue-600 dark:bg-blue-500 transform md:-translate-x-1/2"></div>

          {/* Experience items */}
          {experienceData.map((item, index) => (
            <motion.div 
              key={item.id}
              className={`relative flex flex-col md:flex-row mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full border-4 border-white dark:border-gray-800 transform -translate-x-1/2 z-10"></div>
              
              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? 'md:mr-auto md:pl-12' : 'md:ml-auto md:pr-12'
              }`}>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full mb-2">
                      {item.duration}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400">{item.company}</p>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;