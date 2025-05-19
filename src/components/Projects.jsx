import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Very soon, I am collecting all the neceseray information and making sure I do not betray the confidence of my customers sharing some info here',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'web',
      technologies: ['React', 'Kotlin', 'MongoDB', 'Cloud'],
      link: '#'
    }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            A selection of my recent work, showcasing my skills in developing various applications and platforms.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['all', 'web', 'mobile', 'data'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                  filter === category 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={ref}
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <span className="inline-block px-3 py-1 text-xs bg-blue-600 text-white rounded-full mb-2">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  className="inline-block text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;