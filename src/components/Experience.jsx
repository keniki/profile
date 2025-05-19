import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      title: 'Senior Software Developer / Tech Lead',
      company: 'Current Position',
      duration: 'Dec 2021 - Present',
      description: 'Working on APIs offering ML price recommendations, competitors price behavior, and city engagement. Implementing Spring Batch for static data management. Tech Stack: Java, Spring, Kotlin, AWS (Fargate, DynamoDB, RDS, ECS/ECR), Micronaut, Kubernetes.',
      technologies: ['Java', 'Spring', 'Kotlin', 'AWS', 'Kubernetes']
    },
    {
      id: 2,
      title: 'Project Manager/Scrum Master',
      company: 'Astrata',
      duration: 'Mar 2021 - Jan 2022',
      description: 'Led scrum ceremonies and improved performance for Big Data analytics and .NET teams. Managed internal projects and core application development.',
      technologies: ['Scrum', 'Project Management', 'Big Data', '.NET', 'Team Leadership']
    },
    {
      id: 3,
      title: 'Project Manager/Scrum Master',
      company: 'OpenJaw Technologies',
      duration: 'Dec 2018 - April 2021',
      description: 'Managed e-Commerce platforms for travel companies and loyalty programmes. Led multicultural teams of 2-15 members using Agile framework. Worked with international clients including British Airways and Air Miles.',
      technologies: ['Agile', 'e-Commerce', 'Project Management', 'Team Leadership']
    },
    {
      id: 4,
      title: 'Senior Developer / Tech Lead',
      company: 'OpenJaw Technologies',
      duration: 'Sep 2009 - Dec 2018',
      description: 'Led engineering teams through software life cycles, making technical decisions, estimations, and designs. Served as technical contact and mentor while ensuring delivery met quality metrics.',
      technologies: ['Java', 'GitLab', 'Oracle DB', 'Team Leadership']
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
            Over 15 years of professional experience in software development and project management, working with cutting-edge technologies and leading teams to success.
          </p>
        </motion.div>

        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={ref}
        >
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-blue-600 dark:bg-blue-500 transform md:-translate-x-1/2"></div>

          {experienceData.map((item, index) => (
            <motion.div 
              key={item.id}
              className={`relative flex flex-col md:flex-row mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
              variants={itemVariants}
            >
              <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full border-4 border-white dark:border-gray-800 transform -translate-x-1/2 z-10"></div>
              
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