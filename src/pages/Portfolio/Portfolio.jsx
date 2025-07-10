import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Search, Filter, ChevronDown, Tag, Calendar, Star, X } from 'lucide-react';
import styles from './Portfolio.module.scss';

// Import project images from Projects component
import JuraImage from '../../assets/Jura.png';
import CocaImage from '../../assets/Coca.png';
import WhoImage from '../../assets/Who.png';
import MoonpigImage from '../../assets/Moonpig.png';

const Portfolio = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSort, setSelectedSort] = useState('newest');
  const [expandedProject, setExpandedProject] = useState(null);
  const sectionRef = useRef(null);
  const filterRef = useRef(null);
  
  // Project data using the same images from the Projects component
  const projects = [
    {
      id: 'coca-cola',
      title: 'Coca-Cola',
      subtitle: 'Personalized Bottle Campaign',
      description: 'We delivered hundreds of thousands of personalised bottles to loyal Coca-Cola fans across the country, creating an unforgettable marketing campaign that boosted brand engagement and sales.',
      image: CocaImage,
      color: '#E61A27',
      categories: ['ecommerce', 'design', 'fulfillment'],
      services: ['Packaging Design', 'Direct to Consumer', 'Global Shipping'],
      client: 'Coca-Cola',
      date: 'May 2024',
      results: [
        '350,000+ personalized bottles delivered',
        '28% increase in social media engagement',
        '42% higher conversion rate than standard campaigns'
      ],
      featured: true
    },
    {
      id: 'jura',
      title: 'Jura',
      subtitle: 'Gifting Experience',
      description: 'A campaign centered around gifting occasions (such as Father\'s Day) with an innovative approach that combined premium packaging with a digital experience to elevate the Jura brand.',
      image: JuraImage,
      color: '#D4A55C',
      categories: ['design', 'marketing', 'fulfillment'],
      services: ['Packaging Design', 'Digital Marketing', 'Fulfillment'],
      client: 'Jura Whisky',
      date: 'June 2024',
      results: [
        '15,000 limited edition gift sets produced',
        '156% increase in Father\'s Day sales YoY',
        '94% customer satisfaction rating'
      ],
      featured: true
    },
    {
      id: 'wgac',
      title: 'Who Gives A Crap',
      subtitle: 'Eco-Friendly Personalization',
      description: 'The eco-friendly toilet roll brand partnered with us to create their personalization campaign, combining sustainability with customized gifting options that aligned with their brand values.',
      image: WhoImage,
      color: '#4BB4E6',
      categories: ['ecommerce', 'sustainability', 'design'],
      services: ['Sustainable Packaging', 'E-commerce Development', 'Fulfillment'],
      client: 'Who Gives A Crap',
      date: 'April 2024',
      results: [
        '12,000 custom gift boxes shipped',
        '100% plastic-free packaging solution',
        '£35,000 additional charity donations generated'
      ],
      featured: true
    },
    {
      id: 'moonpig',
      title: 'Moonpig',
      subtitle: 'Personalized Card Platform',
      description: 'Customizable greeting cards and gifts with vibrant designs that stand out in the market. We helped Moonpig expand their product offering with innovative new personalization features.',
      image: MoonpigImage,
      color: '#FF69B4',
      categories: ['design', 'ecommerce', 'marketing'],
      services: ['Digital Print', 'Platform Development', 'Fulfillment'],
      client: 'Moonpig',
      date: 'March 2024',
      results: [
        '25% increase in average order value',
        '47% repeat purchase rate',
        '500,000+ personalized cards produced'
      ],
      featured: true
    }
  ];
  
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'design', label: 'Design' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'fulfillment', label: 'Fulfillment' },
    { id: 'sustainability', label: 'Sustainability' }
  ];
  
  const sortOptions = [
    { id: 'newest', label: 'Newest First' },
    { id: 'oldest', label: 'Oldest First' },
    { id: 'a-z', label: 'A-Z' },
    { id: 'z-a', label: 'Z-A' }
  ];

  // Handle intersection observer to trigger animations
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
  
  // Handle clicks outside the filter dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowFilters(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Filter and sort projects based on user selections
  useEffect(() => {
    let filtered = [...projects];
    
    // Apply category filter
    if (activeFilter !== 'all') {
      filtered = filtered.filter(project => 
        project.categories.includes(activeFilter)
      );
    }
    
    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.client.toLowerCase().includes(query) ||
        project.categories.some(cat => cat.toLowerCase().includes(query))
      );
    }
    
    // Apply sorting
    switch (selectedSort) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'oldest':
        filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case 'a-z':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'z-a':
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }
    
    setFilteredProjects(filtered);
  }, [activeFilter, searchQuery, selectedSort, projects]);
  
  return (
    <section 
      className={`${styles.portfolioSection} ${isLoaded ? styles.loaded : ''}`} 
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
      <span>Our work</span>
    </div>
  </div>
  
  <h1 className={styles.sectionTitle}>
    <div className={styles.headlineRow}>
      <span className={styles.headlineText}>Discover our</span>
      <span className={styles.headlineTextPink}>portfolio</span>
    </div>
    <div className={styles.headlineRow}>
      <span className={styles.headlineText}>of successful</span>
      <span className={styles.headlineTextPink}>projects</span>
    </div>
  </h1>
  
  <div className={styles.subheadlineWrapper}>
    <p className={styles.subheadline}>
      Discover how we've helped <span className={styles.emphasisTextPink}>transform</span> brands with innovative 
      <span className={styles.emphasisTextPink}> end-to-end solutions</span> that drive real business results.
    </p>
  </div>
</div>

<div className={styles.filterSection}>
  <div className={styles.categoryTabs}>
    {categories.map(category => (
      <button
        key={category.id}
        className={`${styles.categoryTab} ${activeFilter === category.id ? styles.active : ''}`}
        onClick={() => setActiveFilter(category.id)}
      >
        {category.label}
      </button>
    ))}
  </div>
  
  <div className={styles.searchContainer}>
    <div className={styles.searchWrapper}>
      <input 
        type="text" 
        placeholder="Search projects..." 
        className={styles.searchInput}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className={styles.searchButton}>
        <Search size={18} />
      </button>
    </div>
  </div>
  
  <div className={styles.filterControls} ref={filterRef}>
    <button 
      className={styles.filterButton} 
      onClick={() => setShowFilters(!showFilters)}
    >
      <Filter size={16} />
      <span>Sort By</span>
      <ChevronDown size={16} className={showFilters ? styles.rotate : ''} />
    </button>
    
    {showFilters && (
      <div className={styles.filterDropdown}>
        {sortOptions.map(option => (
          <button
            key={option.id}
            className={`${styles.filterOption} ${selectedSort === option.id ? styles.selected : ''}`}
            onClick={() => {
              setSelectedSort(option.id);
              setShowFilters(false);
            }}
          >
            {option.label}
          </button>
        ))}
      </div>
    )}
  </div>
</div>
        
        {filteredProjects.length === 0 ? (
          <div className={styles.noResults}>
            <div className={styles.noResultsContent}>
              <h3>No projects found</h3>
              <p>Try adjusting your search or filter criteria</p>
              <button 
                className={styles.resetButton}
                onClick={() => {
                  setActiveFilter('all');
                  setSearchQuery('');
                  setSelectedSort('newest');
                }}
              >
                Reset Filters
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.projectsGrid}>
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`${styles.projectCard} ${expandedProject === project.id ? styles.expanded : ''}`}
                style={{ '--project-color': project.color }}
              >
                <div 
                  className={styles.projectCardInner}
                  onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                >
                  <div className={styles.projectImageWrapper}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className={styles.projectImage}
                      loading="lazy"
                    />
                    <div className={styles.projectOverlay} style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0.1), ${project.color}99)` }}>
                      <span className={styles.viewProject}>View Project</span>
                    </div>
                    <div className={styles.projectCategories}>
                      {project.categories.slice(0, 2).map((category, i) => (
                        <span key={i} className={styles.projectCategory}>
                          <Tag size={12} />
                          {categories.find(c => c.id === category)?.label}
                        </span>
                      ))}
                      {project.categories.length > 2 && (
                        <span className={styles.moreCategories}>+{project.categories.length - 2}</span>
                      )}
                    </div>
                  </div>
                  
                  <div className={styles.projectContent}>
                    <div className={styles.projectMeta}>
                      <div className={styles.projectClient}>
                        <span className={styles.clientLabel}>Client</span>
                        <h4 className={styles.projectTitle}>{project.title}</h4>
                      </div>
                      <div className={styles.projectDate}>
                        <Calendar size={14} />
                        <span>{project.date}</span>
                      </div>
                    </div>
                    
                    <h3 className={styles.projectSubtitle}>{project.subtitle}</h3>
                    
                    <p className={styles.projectDescription}>
                      {expandedProject === project.id 
                        ? project.description 
                        : `${project.description.substring(0, 120)}...`}
                    </p>
                    
                    <button className={styles.expandButton}>
                      {expandedProject === project.id ? 'Show Less' : 'Read More'}
                      <ChevronDown 
                        size={16} 
                        className={`${styles.expandIcon} ${expandedProject === project.id ? styles.rotate : ''}`}
                      />
                    </button>
                  </div>
                </div>
                
                {expandedProject === project.id && (
                  <div className={styles.projectDetails}>
                    <div className={styles.projectServices}>
                      <h5 className={styles.detailsTitle}>Services</h5>
                      <div className={styles.servicesList}>
                        {project.services.map((service, i) => (
                          <span key={i} className={styles.serviceTag}>
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className={styles.projectResults}>
                      <h5 className={styles.detailsTitle}>Results</h5>
                      <ul className={styles.resultsList}>
                        {project.results.map((result, i) => (
                          <li key={i} className={styles.resultItem}>
                            <div className={styles.resultBullet} style={{ background: project.color }}></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <a href={`/portfolio/${project.id}-case-study`} className={styles.viewCaseStudy}>
                      <span>View Full Case Study</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                )}
                
                <div className={styles.cardGlow}></div>
                <div className={styles.projectCardBorder}></div>
              </div>
            ))}
          </div>
        )}
        
        <div className={styles.contactCta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaHeading}>
              <span className={styles.headlineText}>Ready to</span>
              <span className={styles.headlineTextPink}> transform </span>
              <span className={styles.headlineText}>your brand?</span>
            </h2>
            
            <p className={styles.ctaDescription}>
              Let's discuss how we can help you create memorable experiences that 
              <span className={styles.emphasisTextPink}> drive results</span> and
              <span className={styles.emphasisTextPink}> exceed expectations</span>.
            </p>
            
            <div className={styles.ctaButtons}>
              <a href="/contact" className={styles.primaryCta}>
                <span>Get in touch</span>
                <ArrowRight size={18} />
              </a>
              <a href="/services" className={styles.secondaryCta}>
                <span>Explore our services</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
          
          <div className={styles.ctaDecoration}>
            <div className={styles.decorationElement1}></div>
            <div className={styles.decorationElement2}></div>
            <div className={styles.decorationElement3}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;