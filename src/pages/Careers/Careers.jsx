import React, { useState, useEffect, useRef } from 'react';
import { 
  Briefcase, Users, Building, Medal, 
  ArrowRight, MapPin, Calendar, Clock,
  ChevronDown, CheckCircle, Search, Filter,
  Star, Sparkles, Heart, Hash, FileText,
  Laptop, Zap, Coffee, HeartHandshake
} from 'lucide-react';
import styles from './Careers.module.scss';

const Careers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSort, setSelectedSort] = useState('newest');
  const [expandedJob, setExpandedJob] = useState(null);
  const [activeSection, setActiveSection] = useState('overview');
  const [animatedTitle, setAnimatedTitle] = useState(false);
  
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const overviewRef = useRef(null);
  const benefitsRef = useRef(null);
  const valuesRef = useRef(null);
  const jobsRef = useRef(null);
  const filterRef = useRef(null);
  
  // Core jobs data
  const jobs = [
    {
      id: 'senior-developer',
      title: 'Senior Frontend Developer',
      department: 'Technology',
      location: 'London, UK',
      type: 'Full-time',
      posted: 'June 15, 2025',
      featured: true,
      color: '#ec4899',
      description: 'We\'re looking for a talented frontend developer with experience in React and modern JavaScript to join our technology team. You\'ll be working on cutting-edge e-commerce platforms and interactive experiences for our clients.',
      responsibilities: [
        'Develop responsive and accessible web applications using React',
        'Collaborate with designers to implement pixel-perfect UI components',
        'Write clean, efficient, and maintainable code',
        'Participate in code reviews and technical discussions',
        'Stay up-to-date with emerging technologies and industry trends'
      ],
      requirements: [
        '4+ years of experience in frontend development',
        'Strong proficiency in React, JavaScript, HTML, and CSS',
        'Experience with modern build tools and workflows',
        'Understanding of UI/UX principles and accessibility standards',
        'Excellent problem-solving and communication skills'
      ]
    },
    {
      id: 'marketing-manager',
      title: 'Digital Marketing Manager',
      department: 'Marketing',
      location: 'London, UK',
      type: 'Full-time',
      posted: 'June 10, 2025',
      featured: true,
      color: '#8b5cf6',
      description: 'Join our marketing team to develop and implement digital marketing strategies that drive engagement and growth for our clients. You\'ll work across multiple channels to create compelling campaigns.',
      responsibilities: [
        'Develop and execute comprehensive digital marketing strategies',
        'Manage and optimize paid media campaigns across multiple platforms',
        'Analyze campaign performance and provide actionable insights',
        'Collaborate with creative teams to develop engaging content',
        'Stay ahead of industry trends and best practices'
      ],
      requirements: [
        '3+ years of experience in digital marketing',
        'Proficiency in marketing analytics tools and platforms',
        'Experience with SEO, SEM, and social media marketing',
        'Strong analytical and strategic thinking skills',
        'Excellent project management and communication abilities'
      ]
    },
    {
      id: 'graphic-designer',
      title: 'Senior Graphic Designer',
      department: 'Creative',
      location: 'Remote',
      type: 'Full-time',
      posted: 'June 8, 2025',
      featured: false,
      color: '#06b6d4',
      description: 'We\'re seeking a talented Senior Graphic Designer to join our creative team. You\'ll work on a variety of projects from branding to packaging design, digital assets, and print materials for our diverse client base.',
      responsibilities: [
        'Create visually compelling designs for digital and print media',
        'Develop brand identities and visual systems for clients',
        'Collaborate with the wider creative team on integrated campaigns',
        'Present design concepts and rationales to clients',
        'Ensure brand consistency across all deliverables'
      ],
      requirements: [
        '4+ years of experience in graphic design',
        'Expert knowledge of Adobe Creative Suite',
        'Strong portfolio demonstrating versatility and creativity',
        'Understanding of print production and digital design principles',
        'Excellent communication and presentation skills'
      ]
    },
    {
      id: 'fulfillment-manager',
      title: 'Fulfillment Operations Manager',
      department: 'Operations',
      location: 'London, UK',
      type: 'Full-time',
      posted: 'June 5, 2025',
      featured: false,
      color: '#10b981',
      description: 'Join our operations team to oversee the fulfillment process from warehousing to shipping. You\'ll ensure our clients\' products are handled efficiently and reach customers in perfect condition.',
      responsibilities: [
        'Manage day-to-day fulfillment operations and team members',
        'Optimize warehouse layout and inventory management',
        'Ensure order accuracy and timely shipping',
        'Implement and improve quality control procedures',
        'Collaborate with client services on custom fulfillment requirements'
      ],
      requirements: [
        '3+ years of experience in logistics or fulfillment operations',
        'Knowledge of inventory management systems and processes',
        'Strong leadership and team management skills',
        'Problem-solving abilities and attention to detail',
        'Experience with e-commerce fulfillment preferred'
      ]
    },
    {
      id: 'project-manager',
      title: 'Project Manager',
      department: 'Client Services',
      location: 'London, UK',
      type: 'Full-time',
      posted: 'June 1, 2025',
      featured: false,
      color: '#ec4899',
      description: 'We\'re looking for an experienced Project Manager to join our Client Services team. You\'ll oversee multiple client projects, ensuring they\'re delivered on time, within scope, and to the highest quality standards.',
      responsibilities: [
        'Manage project lifecycle from initiation to successful delivery',
        'Create and maintain project schedules, budgets, and resource plans',
        'Facilitate communication between clients and internal teams',
        'Identify and mitigate project risks and issues',
        'Provide regular status updates and reporting to stakeholders'
      ],
      requirements: [
        '3+ years of experience in project management',
        'Strong knowledge of project management methodologies',
        'Excellent organizational and time management skills',
        'Proven ability to manage multiple projects simultaneously',
        'Outstanding communication and client relationship skills'
      ]
    }
  ];
  
  // Job categories for filtering
  const categories = [
    { id: 'all', label: 'All Departments' },
    { id: 'technology', label: 'Technology' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'creative', label: 'Creative' },
    { id: 'operations', label: 'Operations' },
    { id: 'client-services', label: 'Client Services' }
  ];
  
  // Sort options
  const sortOptions = [
    { id: 'newest', label: 'Newest First' },
    { id: 'oldest', label: 'Oldest First' },
    { id: 'a-z', label: 'A-Z' },
    { id: 'z-a', label: 'Z-A' }
  ];

  // Company benefits
  const benefits = [
    {
      icon: Coffee,
      title: 'Flexible Working',
      description: 'Hybrid work model with flexible hours to maintain work-life balance'
    },
    {
      icon: Zap,
      title: 'Health & Wellness',
      description: 'Comprehensive healthcare package and wellness program'
    },
    {
      icon: Laptop,
      title: 'Learning Budget',
      description: 'Personal development fund for courses, conferences, and resources'
    },
    {
      icon: HeartHandshake,
      title: 'Paid Volunteering',
      description: 'Paid time off for volunteering and community initiatives'
    },
    {
      icon: Building,
      title: 'Modern Workspaces',
      description: 'State-of-the-art facilities designed for collaboration and creativity'
    },
    {
      icon: Heart,
      title: 'Mental Health Support',
      description: 'Access to counseling services and mental health resources'
    }
  ];

  // Company values
  const values = [
    {
      title: 'Innovation',
      description: 'We embrace change and continuously explore new ideas and approaches.',
      color: '#ec4899'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives.',
      color: '#8b5cf6'
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do.',
      color: '#06b6d4'
    },
    {
      title: 'Integrity',
      description: 'We build trust through honest and ethical business practices.',
      color: '#10b981'
    }
  ];

  // Handle intersection observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  // Animation for the title
  useEffect(() => {
    setTimeout(() => {
      setAnimatedTitle(true);
    }, 500);
  }, []);
  
  // Side navigation scroll tracking for active states
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: overviewRef, id: 'overview' },
        { ref: benefitsRef, id: 'benefits' },
        { ref: valuesRef, id: 'values' },
        { ref: jobsRef, id: 'jobs' }
      ];
      
      let newActiveSection = 'overview';
      
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          const sectionTop = rect.top;
          const sectionHeight = rect.height;
          
          if (sectionTop <= window.innerHeight / 2 && sectionTop + sectionHeight > window.innerHeight / 2) {
            newActiveSection = section.id;
            break;
          }
        }
      }
      
      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);
  
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
  
  // Filter and sort jobs based on user selections
  useEffect(() => {
    let filtered = [...jobs];
    
    // Apply department filter
    if (activeFilter !== 'all') {
      filtered = filtered.filter(job => 
        job.department.toLowerCase().includes(activeFilter)
      );
    }
    
    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(job => 
        job.title.toLowerCase().includes(query) ||
        job.description.toLowerCase().includes(query) ||
        job.department.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query)
      );
    }
    
    // Apply sorting
    switch (selectedSort) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.posted) - new Date(a.posted));
        break;
      case 'oldest':
        filtered.sort((a, b) => new Date(a.posted) - new Date(b.posted));
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
    
    setFilteredJobs(filtered);
  }, [activeFilter, searchQuery, selectedSort, jobs]);
  
  // Fixed scrollToSection function to prevent default behavior
  const scrollToSection = (sectionId) => {
    const sectionMap = {
      'overview': overviewRef,
      'benefits': benefitsRef,
      'values': valuesRef,
      'jobs': jobsRef
    };
    
    const ref = sectionMap[sectionId];
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Fixed job expansion handler
  const handleJobExpansion = (jobId, event) => {
    event.preventDefault();
    event.stopPropagation();
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  // Fixed filter handler
  const handleFilterChange = (filterId, event) => {
    event.preventDefault();
    event.stopPropagation();
    setActiveFilter(filterId);
  };

  // Fixed sort handler
  const handleSortChange = (sortId, event) => {
    event.preventDefault();
    event.stopPropagation();
    setSelectedSort(sortId);
    setShowFilters(false);
  };

  return (
    <section 
      className={`${styles.careersSection} ${isVisible ? styles.visible : ''}`} 
      ref={sectionRef}
    >
      {/* Background elements */}
      <div className={styles.sectionBackground}>
        <div className={styles.gridPattern}></div>
        <div className={styles.gradientOverlay}></div>
      </div>
      
      {/* Side Navigation */}
      <div className={styles.sideNavigation}>
        <div className={styles.navLinks}>
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'benefits', label: 'Benefits' },
            { id: 'values', label: 'Values' },
            { id: 'jobs', label: 'Open Positions' }
          ].map(link => (
            <button
              key={link.id}
              className={`${styles.navLink} ${activeSection === link.id ? styles.active : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
            >
              <div className={styles.navDot}></div>
              <span className={styles.navLabel}>{link.label}</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Hero Section */}
      <div className={styles.heroSection} id="overview" ref={overviewRef}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.badgeWrapper}>
              <div className={styles.badge}>
                <Briefcase size={16} />
                <span>Join our team</span>
              </div>
            </div>
            
            <h1 className={styles.heroTitle} ref={titleRef}>
              <div className={styles.titleRow}>
                <span className={`${styles.titleText} ${animatedTitle ? styles.animated : ''}`}>
                  Careers at <span className={styles.highlight}>IV Creative</span>
                </span>
              </div>
            </h1>
            
            <div className={styles.heroDescription}>
              <p>Join our diverse team of strategists, designers, developers, and innovators. We're looking for talented individuals who share our passion for excellence and creativity.</p>
            </div>
            
            <div className={styles.heroStats}>
              {[
                { count: '15+', label: 'Years of Excellence' },
                { count: '4', label: 'Global Locations' },
                { count: '80+', label: 'Team Members' },
                { count: '∞', label: 'Growth Opportunities' }
              ].map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <div className={styles.statCount}>{stat.count}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className={styles.scrollDownPrompt}>
              <p>Discover opportunities below</p>
              <div className={styles.scrollIcon}>
                <ChevronDown size={24} />
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.heroVisual}>
          <div className={styles.heroPattern}></div>
          <div className={styles.heroGlow}></div>
        </div>
      </div>
      
      {/* Benefits Section */}
      <div className={styles.benefitsSection} id="benefits" ref={benefitsRef}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.chapterIndicator}>
              <span className={styles.chapterNumber}>01</span>
              <Hash size={18} />
            </div>
            <h2>Benefits & Perks</h2>
            <div className={styles.headerLine}></div>
          </div>
          
          <div className={styles.benefitsIntro}>
            <p>We believe in supporting our team with benefits that enhance wellbeing, foster growth, and create an exceptional work experience.</p>
          </div>
          
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={styles.benefitCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.benefitIcon}>
                  <benefit.icon size={24} />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Values Section */}
      <div className={styles.valuesSection} id="values" ref={valuesRef}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.chapterIndicator}>
              <span className={styles.chapterNumber}>02</span>
              <Hash size={18} />
            </div>
            <h2>Our Values</h2>
            <div className={styles.headerLine}></div>
          </div>
          
          <div className={styles.valuesIntro}>
            <p>Our values define our culture and guide how we work together and with our clients.</p>
          </div>
          
          <div className={styles.valuesWrapper}>
            <div className={styles.valuesGrid}>
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className={styles.valueCard}
                  style={{ '--value-color': value.color }}
                >
                  <div className={styles.valueContent}>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                  <div className={styles.valueVisual}>
                    <div className={styles.valueBg}></div>
                    <div className={styles.valueShape}></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={styles.valuesQuote}>
              <div className={styles.quoteInner}>
                <p>"At IV Creative, we're not just building a company; we're creating a community where innovation thrives and every team member can make an impact."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Open Positions Section */}
      <div className={styles.jobsSection} id="jobs" ref={jobsRef}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.chapterIndicator}>
              <span className={styles.chapterNumber}>03</span>
              <Hash size={18} />
            </div>
            <h2>Open Positions</h2>
            <div className={styles.headerLine}></div>
          </div>
          
          <div className={styles.jobsIntro}>
            <p>Explore current opportunities to join our team and make an impact.</p>
          </div>
          
          <div className={styles.jobsHeader}>
            <div className={styles.searchContainer}>
              <div className={styles.searchWrapper}>
                <input 
                  type="text" 
                  placeholder="Search positions..." 
                  className={styles.searchInput}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className={styles.searchButton}>
                  <Search size={18} />
                </button>
              </div>
            </div>
          </div>
          
          <div className={styles.filterSection}>
            <div className={styles.categoryTabs}>
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`${styles.categoryTab} ${activeFilter === category.id ? styles.active : ''}`}
                  onClick={(e) => handleFilterChange(category.id, e)}
                >
                  {category.label}
                </button>
              ))}
            </div>
            
            <div className={styles.filterControls} ref={filterRef}>
              <button 
                className={styles.filterButton} 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowFilters(!showFilters);
                }}
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
                      onClick={(e) => handleSortChange(option.id, e)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {filteredJobs.length === 0 ? (
            <div className={styles.noResults}>
              <div className={styles.noResultsContent}>
                <h3>No positions found</h3>
                <p>Try adjusting your search or filter criteria</p>
                <button 
                  className={styles.resetButton}
                  onClick={(e) => {
                    e.preventDefault();
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
            <div className={styles.jobsGrid}>
              {filteredJobs.map((job) => (
                <div 
                  key={job.id}
                  className={`${styles.jobCard} ${expandedJob === job.id ? styles.expanded : ''}`}
                  style={{ '--job-color': job.color }}
                >
                  <div className={styles.jobCardInner}>
                    <div className={styles.jobHeader}>
                      <div className={styles.jobTitle}>
                        <h3>{job.title}</h3>
                        {job.featured && (
                          <div className={styles.featuredBadge}>
                            <Star size={12} />
                            <span>Featured</span>
                          </div>
                        )}
                      </div>
                      
                      <div className={styles.jobDepartment}>
                        <Briefcase size={16} />
                        <span>{job.department}</span>
                      </div>
                    </div>
                    
                    <div className={styles.jobMeta}>
                      <div className={styles.jobMetaItem}>
                        <MapPin size={14} />
                        <span>{job.location}</span>
                      </div>
                      <div className={styles.jobMetaItem}>
                        <Clock size={14} />
                        <span>{job.type}</span>
                      </div>
                      <div className={styles.jobMetaItem}>
                        <Calendar size={14} />
                        <span>Posted: {job.posted}</span>
                      </div>
                    </div>
                    
                    <div className={styles.jobDescription}>
                      <p>{job.description}</p>
                    </div>
                    
                    <button 
                      className={styles.expandButton}
                      onClick={(e) => handleJobExpansion(job.id, e)}
                    >
                      {expandedJob === job.id ? 'Show Less' : 'View Details'}
                      <ChevronDown 
                        size={16} 
                        className={`${styles.expandIcon} ${expandedJob === job.id ? styles.rotate : ''}`}
                      />
                    </button>
                  </div>
                  
                  {expandedJob === job.id && (
                    <div className={styles.jobDetails}>
                      <div className={styles.jobSection}>
                        <h4>
                          <span>Responsibilities</span>
                          <FileText size={16} />
                        </h4>
                        <ul>
                          {job.responsibilities.map((item, i) => (
                            <li key={i}>
                              <CheckCircle size={16} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className={styles.jobSection}>
                        <h4>
                          <span>Requirements</span>
                          <Medal size={16} />
                        </h4>
                        <ul>
                          {job.requirements.map((item, i) => (
                            <li key={i}>
                              <CheckCircle size={16} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className={styles.jobActions}>
                        <a href={`/careers/apply/${job.id}`} className={styles.applyButton}>
                          <span>Apply Now</span>
                          <ArrowRight size={16} />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
//on page meta titles - 




      {/* CTA Section */}
      <div className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Don't see the perfect fit?</h2>
            <p>We're always looking for talented individuals to join our team. Send us your resume and let us know how you can contribute to IV Creative.</p>
            <div className={styles.ctaFeatures}>
              <div className={styles.ctaFeature}>
                <CheckCircle size={20} />
                <span>Innovative culture</span>
              </div>
              <div className={styles.ctaFeature}>
                <CheckCircle size={20} />
                <span>Growth opportunities</span>
              </div>
              <div className={styles.ctaFeature}>
                <CheckCircle size={20} />
                <span>Collaborative team</span>
              </div>
            </div>
            <a href="/careers/general-application" className={styles.ctaButton}>
              <span>Submit General Application</span>
              <ArrowRight size={18} />
            </a>
          </div>
          
          <div className={styles.ctaDecoration}>
            <div className={styles.ctaShape1}></div>
            <div className={styles.ctaShape2}></div>
            <div className={styles.ctaShape3}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;