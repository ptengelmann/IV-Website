import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import styles from './Projects.module.scss';
import JuraImage from '../../assets/Jura.png';
import CocaImage from '../../assets/Coca.png';
import WhoImage from '../../assets/Who.png';
import MoonpigImage from '../../assets/Moonpig.png';

const Projects = () => {
  const [isLoaded, setIsLoaded] = useState(false);
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

  // Handle intersection observer to trigger animations when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsLoaded(true);
      }
    }, { threshold: 0.1 });
    
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
      className={`${styles.projectsSection} ${isLoaded ? styles.loaded : ''}`} 
      ref={sectionRef}
    >
      <div className={styles.sectionBackground}>
        <div className={styles.patternOverlay}></div>
        <div className={styles.grid}></div>
        <div className={styles.gradientOverlay}></div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.badgeWrapper}>
            <div className={styles.badge}>
              <Star size={14} />
              <span>Featured work</span>
            </div>
          </div>
          
          <h2 className={styles.sectionTitle}>
            <div className={styles.headlineRow}>
              <span className={styles.headlineText}>We</span>
              <span className={styles.headlineTextPink}>empower brands</span>
            </div>
            <div className={styles.headlineRow}>
              <span className={styles.headlineText}>to turn ideas into</span>
              <span className={styles.headlineTextPink}>results</span>
            </div>
          </h2>
          
          <div className={styles.subheadlineWrapper}>
            <p className={styles.subheadline}>
              Our work speaks for itself. We've helped brands of all sizes 
              <span className={styles.emphasisTextPink}> achieve their goals</span> and 
              <span className={styles.emphasisTextPink}> exceed expectations</span>.
            </p>
          </div>
          
          <div className={styles.viewAllWrapper}>
            <a href="/portfolio" className={styles.viewAllLink}>
              <span>View all projects</span>
              <ArrowRight size={18} className={styles.arrowIcon} />
            </a>
          </div>
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
                  <div className={styles.projectOverlay} style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0.1), ${project.color}99)` }}>
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
              
              <div className={styles.projectGlow}></div>
              <div className={styles.projectBorder}></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;