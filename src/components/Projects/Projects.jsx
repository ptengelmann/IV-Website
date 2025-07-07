import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './Projects.module.scss';
import JuraImage from '../../assets/Jura.png';
import CocaImage from '../../assets/Coca.png';
import WhoImage from '../../assets/Who.png';
import MoonpigImage from '../../assets/Moonpig.png';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);

  // Project data
  const projects = [
    {
      id: 'coca-cola',
      title: 'Coca-Cola',
      image: CocaImage,
      color: '#E61A27',
      description: 'We delivered hundreds of thousands of personalised bottles to loyal Coca-Cola fans across the country.',
      link: '/portfolio/coca-cola-case-study'
    },
    {
     id: 'jura',
     title: 'Jura',
     image: JuraImage,
     color: '#D4A55C',
     description: 'A campaign centred around gifting occasions (such as Father\'s Day) with an innovative approach.',
     link: '/portfolio/jura'
    },
    {
      id: 'wgac',
      title: 'Who Gives A Crap',
      image: WhoImage,
      color: '#4BB4E6',
      description: 'The eco-friendly toilet roll brand partnered with us to create their personalisation campaign.',
      link: '/portfolio/who-gives-a-crap'
    },
    {
      id: 'moonpig',
      title: 'Moonpig',
      image: MoonpigImage,
      color: '#FF69B4',
      description: 'Customizable greeting cards and gifts with vibrant designs that stand out in the market.',
      link: '/portfolio/moonpig'
    }
  ];

  // Staggered reveal animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      className={`${styles.projectsSection} ${isVisible ? styles.visible : ''}`} 
      ref={sectionRef}
    >
      <div className={styles.container}>
        <div className={styles.sectionIntro}>
          <div className={styles.sectionHeading}>
            <h2 className={styles.sectionTitle}>Projects</h2>
            <h3 className={styles.sectionSubtitle}>
              We <span className={styles.highlight}>empower brands</span> to turn ideas into <span className={styles.highlight}>results</span>
            </h3>
          </div>
          
          <a href="/portfolio" className={styles.viewAllLink}>
            <span>View all projects</span>
            <ArrowRight size={18} className={styles.arrowIcon} />
          </a>
        </div>
        
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <a 
              key={project.id}
              href={project.link}
              className={`${styles.projectCard} ${styles[`project${index + 1}`]}`}
              style={{ '--project-color': project.color }}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
              ref={el => projectRefs.current[index] = el}
            >
              <div className={styles.projectImageWrapper}>
                <div className={styles.projectImageContainer}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className={styles.projectImage}
                    loading="lazy"
                  />
                  <div className={styles.projectOverlay}>
                    <span className={styles.viewProject}>View Project</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.projectContent}>
                <h4 className={styles.projectTitle}>{project.title}</h4>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectCta}>
                  <span>View Project</span>
                  <ArrowRight size={16} />
                </div>
              </div>
              
              <div className={styles.projectBorder}></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;