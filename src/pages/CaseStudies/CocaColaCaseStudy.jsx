import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, Calendar, RefreshCw, Package, Award, Truck, 
  CheckCircle2, Share2, Users, Star, Globe, ChevronRight, Heart,TrendingUp
} from 'lucide-react';
import styles from './CocaColaCaseStudy.module.scss';

// Import images (placeholders - replace with actual images)
import CocaColaHero from '../../assets/case-studies/coca-cola-hero.jpg';
import CocaColaDetail1 from '../../assets/case-studies/coca-cola-detail1.jpg';
import CocaColaDetail2 from '../../assets/case-studies/coca-cola-detail2.jpg';
import CocaColaDetail3 from '../../assets/case-studies/coca-cola-detail3.jpg';
import CocaColaProcess from '../../assets/case-studies/coca-cola-process.jpg';
import CocaColaResults from '../../assets/case-studies/coca-cola-results.jpg';
import IVCreativeLogo from '../../assets/logos/logo.png';

// Logo import
import CocaColaLogo from '../../assets/logos/coca-cola-logo.png';

const CocaColaCaseStudy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [videoPlaying, setVideoPlaying] = useState(false);
  const sectionRef = useRef(null);
  const overviewRef = useRef(null);
  const challengeRef = useRef(null);
  const solutionRef = useRef(null);
  const processRef = useRef(null);
  const resultsRef = useRef(null);
  const videoRef = useRef(null);
  
  // Project data
  const projectData = {
    title: "Coca-Cola",
    subtitle: "Share a Coke Campaign",
    logo: CocaColaLogo,
    client: "The Coca-Cola Company",
    date: "2014",
    duration: "12 weeks",
    color: "#E61A27",
    impactStats: [
      { value: "350k+", label: "Personalized Bottles" },
      { value: "99.8%", label: "Quality Rate" },
      { value: "32%", label: "Social Media Engagement" },
      { value: "Multiple", label: "Cannes Lions Awards" }
    ],
    categories: ["Fulfillment", "Packaging", "Direct to Consumer"],
    overview: "As Coca-Cola prepared to launch their pioneering personalization campaign across multiple global markets, they needed a trusted partner for the UK launch. We were tasked with delivering hundreds of thousands of personalized bottles to Coca-Cola fans nationwide with flawless execution and finish.",
    challenge: "Coordinating the storage, personalization, quality control, and distribution of hundreds of thousands of customized Coca-Cola bottles within an extremely tight timeframe. The campaign needed to maintain Coca-Cola's legendary brand standards while processing an unprecedented volume of personalized products.",
    solution: "We implemented a comprehensive end-to-end fulfillment solution that included dedicated storage facilities, customized production lines, meticulous quality control processes, and optimized distribution networks. Our approach ensured every personalized bottle met Coca-Cola's exacting standards.",
    process: [
      {
        title: "Storage & Inventory Management",
        description: "We established dedicated climate-controlled storage facilities for the blank Coca-Cola bottles, with real-time inventory tracking systems to monitor stock levels."
      },
      {
        title: "Personalization Production",
        description: "Custom production lines were set up for the high-volume personalization process, with automated quality checks to ensure perfect label application."
      },
      {
        title: "Quality Control",
        description: "Every bottle underwent multi-point inspection to verify personalization accuracy, print quality, and product integrity before packaging."
      },
      {
        title: "Packaging & Distribution",
        description: "We designed protective packaging solutions and coordinated with logistics partners to ensure efficient nationwide delivery."
      }
    ],
    results: [
      "Successfully delivered hundreds of thousands of personalized bottles within the campaign timeframe",
      "Maintained a 99.8% quality control success rate across all personalized products",
      "Campaign earned multiple prestigious awards at the Cannes Lions festival",
      "Generated significant social media virality, substantially increasing Coca-Cola's follower count",
      "Established a new benchmark for personalized product campaigns in the beverage industry"
    ],
    testimonial: {
      quote: "IV Creative's meticulous attention to detail and operational excellence ensured the flawless execution of our personalization campaign. Their contribution was instrumental to the campaign's success in the UK market.",
      author: "Marketing Director",
      company: "Coca-Cola UK"
    },
    caseStudyQuote: "The 'Share a Coke' campaign revolutionized personalized marketing, turning an iconic product into a vessel for human connection. IV Creative's operational excellence brought this vision to life.",
    nextProjects: [
      {
        title: "Jura",
        link: "/portfolio/jura"
      },
      {
        title: "Who Gives A Crap",
        link: "/portfolio/who-gives-a-crap"
      }
    ]
  };

  // Campaign impact data
  const campaignImpact = [
    { 
      title: "Global Phenomenon", 
      icon: Globe,
      stats: "80+ Countries",
      description: "Originally launched in Australia in 2011, the 'Share a Coke' campaign expanded to over 80 countries worldwide, becoming one of Coca-Cola's most successful global marketing initiatives."
    },
    { 
      title: "Sales Growth", 
      icon: TrendingUp,
      stats: "+2% Growth",
      description: "After more than a decade of declining Coke consumption, the personalized bottles campaign reversed the trend, increasing sales by more than 2% in key markets."
    },
    { 
      title: "Social Media Engagement", 
      icon: Share2,
      stats: "500k+ Shares",
      description: "The campaign generated extraordinary social media engagement with hundreds of thousands of customers sharing photos of their personalized bottles online."
    },
    { 
      title: "Award-Winning", 
      icon: Award,
      stats: "Multiple Awards",
      description: "The innovative campaign received numerous marketing industry accolades, including prestigious Cannes Lions awards for creativity and effectiveness."
    }
  ];

  // Handle intersection observer to trigger animations
  useEffect(() => {
    // Set a timeout to ensure DOM is fully loaded
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
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
  
  // Handle scroll spy for navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      const refs = [
        { ref: overviewRef, id: 'overview' },
        { ref: challengeRef, id: 'challenge' },
        { ref: solutionRef, id: 'solution' },
        { ref: processRef, id: 'process' },
        { ref: resultsRef, id: 'results' }
      ];
      
      for (let i = refs.length - 1; i >= 0; i--) {
        const { ref, id } = refs[i];
        if (ref.current && ref.current.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Handle video playback
  const handleVideoPlay = () => {
    if (videoRef.current) {
      if (videoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setVideoPlaying(!videoPlaying);
    }
  };

  // Scroll to section
  const scrollToSection = (sectionId) => {
    const sectionRef = {
      overview: overviewRef,
      challenge: challengeRef,
      solution: solutionRef,
      process: processRef,
      results: resultsRef
    }[sectionId];
    
    if (sectionRef && sectionRef.current) {
      const yOffset = -80;
      const y = sectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <section 
      className={`${styles.caseStudySection} ${isVisible ? styles.visible : ''}`} 
      ref={sectionRef}
      style={{ '--project-color': projectData.color }}
    >
      <div className={styles.caseStudyBackground}>
        <div className={styles.gridPattern}></div>
        <div className={styles.gradientOverlay}></div>
      </div>
      
      {/* Branded Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroPattern}>
          <div className={styles.patternOverlay}></div>
        </div>
        
        <div className={styles.container}>
          <div className={styles.brandingBar}>
            <div className={styles.ivCreative}>
              <img src={IVCreativeLogo} alt="IV Creative" />
              <span>Case Study</span>
            </div>
            <div className={styles.partnershipLine}>
              <span>In partnership with</span>
              <div className={styles.clientLogo}>
                <img src={projectData.logo} alt={projectData.client} />
              </div>
            </div>
          </div>
          
          <div className={styles.heroContent}>
            <div className={styles.heroHeading}>
              <h1 className={styles.heroTitle}>
                <span className={styles.titlePrefix}>Share a Coke</span>
                <span className={styles.titleHighlight}>Personalization Campaign</span>
              </h1>
              <div className={styles.heroTagline}>
                <p>How IV Creative delivered flawless end-to-end fulfillment for one of the most successful marketing campaigns in Coca-Cola's history</p>
              </div>
            </div>
            
            <div className={styles.heroVideo}>
              <div className={styles.videoPoster} onClick={handleVideoPlay}>
                <img src={CocaColaHero} alt="Coca-Cola Campaign" />
                <div className={styles.playButton}>
                  {videoPlaying ? (
                    <span className={styles.pauseIcon}></span>
                  ) : (
                    <span className={styles.playIcon}></span>
                  )}
                </div>
              </div>
              <video 
                ref={videoRef}
                className={styles.videoElement}
                src="/videos/coca-cola-campaign.mp4"
                poster={CocaColaHero}
                preload="metadata"
                onClick={handleVideoPlay}
              />
            </div>
            
            <div className={styles.projectMeta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Client</span>
                <span className={styles.metaValue}>{projectData.client}</span>
              </div>
              
              <div className={styles.metaItem}>
                <Calendar size={16} className={styles.metaIcon} />
                <span className={styles.metaValue}>{projectData.date}</span>
              </div>
              
              <div className={styles.metaItem}>
                <RefreshCw size={16} className={styles.metaIcon} />
                <span className={styles.metaValue}>{projectData.duration}</span>
              </div>
            </div>
            
            <div className={styles.projectCategories}>
              {projectData.categories.map((category, index) => (
                <span key={index} className={styles.categoryTag}>
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Campaign Impact Highlight Section */}
      <div className={styles.impactSection}>
        <div className={styles.container}>
          <div className={styles.impactHighlight}>
            <div className={styles.impactHeading}>
              <h2>Campaign Impact</h2>
              <p>How the 'Share a Coke' personalization campaign transformed the market</p>
            </div>
            
            <div className={styles.impactGrid}>
              {campaignImpact.map((item, index) => (
                <div key={index} className={styles.impactCard}>
                  <div className={styles.impactIcon}>
                    <item.icon size={24} />
                  </div>
                  <h3 className={styles.impactTitle}>{item.title}</h3>
                  <div className={styles.impactStats}>{item.stats}</div>
                  <p className={styles.impactDescription}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <div className={styles.caseStudyNav}>
        <div className={styles.container}>
          <div className={styles.navLinks}>
            <button 
              className={`${styles.navLink} ${activeSection === 'overview' ? styles.active : ''}`}
              onClick={() => scrollToSection('overview')}
            >
              Overview
            </button>
            <button 
              className={`${styles.navLink} ${activeSection === 'challenge' ? styles.active : ''}`}
              onClick={() => scrollToSection('challenge')}
            >
              Challenge
            </button>
            <button 
              className={`${styles.navLink} ${activeSection === 'solution' ? styles.active : ''}`}
              onClick={() => scrollToSection('solution')}
            >
              Solution
            </button>
            <button 
              className={`${styles.navLink} ${activeSection === 'process' ? styles.active : ''}`}
              onClick={() => scrollToSection('process')}
            >
              Process
            </button>
            <button 
              className={`${styles.navLink} ${activeSection === 'results' ? styles.active : ''}`}
              onClick={() => scrollToSection('results')}
            >
              Results
            </button>
          </div>
        </div>
      </div>
      
      {/* Quote Highlight */}
      <div className={styles.quoteHighlight}>
        <div className={styles.container}>
          <div className={styles.quoteCard}>
            <div className={styles.quoteMarks}>"</div>
            <p className={styles.quoteText}>{projectData.caseStudyQuote}</p>
            <div className={styles.quoteDivider}></div>
            <div className={styles.quoteAttribution}>
              <span className={styles.quoteName}>IV Creative</span>
              <span className={styles.quoteRole}>+ Coca-Cola Partnership</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className={styles.mainContent}>
        <div className={styles.container}>
          {/* Overview Section */}
          <section className={styles.contentSection} ref={overviewRef} id="overview">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Overview</h3>
              <div className={styles.sectionLine}></div>
            </div>
            
            <div className={styles.sectionContent}>
              <div className={styles.overviewGrid}>
                <div className={styles.overviewText}>
                  <p className={styles.overviewLead}>{projectData.overview}</p>
                  <p>Back in 2014, this landmark historical push was one of the first global campaigns to showcase personalization on such a massive scale. The campaign's innovative approach redefined how brands could create personal connections with consumers through customized products. IV Creative was selected as Coca-Cola's trusted operational partner to bring this ambitious vision to life in the UK market.</p>
                  <p>Our role was to ensure the seamless delivery of this groundbreaking campaign, managing everything from storage and personalization to quality control and distribution nationwide.</p>
                </div>
                
                <div className={styles.overviewImage}>
                  <img src={CocaColaDetail1} alt="Coca-Cola personalized bottles" />
                  <div className={styles.imageBadge}>
                    <span>Share a Coke</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Challenge Section */}
          <section className={styles.contentSection} ref={challengeRef} id="challenge">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Challenge</h3>
              <div className={styles.sectionLine}></div>
            </div>
            
            <div className={styles.sectionContent}>
              <div className={styles.challengeGrid}>
                <div className={styles.challengeImage}>
                  <img src={CocaColaDetail2} alt="Coca-Cola campaign challenge" />
                  <div className={styles.imageOverlay}></div>
                </div>
                
                <div className={styles.challengeText}>
                  <div className={styles.challengeBox}>
                    <h4 className={styles.challengeTitle}>The Challenge</h4>
                    <p>{projectData.challenge}</p>
                    
                    <div className={styles.challengePoints}>
                      <div className={styles.challengePoint}>
                        <div className={styles.pointIcon}>
                          <Package size={20} />
                        </div>
                        <div className={styles.pointText}>
                          <h5>Volume & Scale</h5>
                          <p>Processing hundreds of thousands of personalized bottles within strict timelines</p>
                        </div>
                      </div>
                      
                      <div className={styles.challengePoint}>
                        <div className={styles.pointIcon}>
                          <Award size={20} />
                        </div>
                        <div className={styles.pointText}>
                          <h5>Quality Standards</h5>
                          <p>Maintaining Coca-Cola's exacting brand standards across every personalized product</p>
                        </div>
                      </div>
                      
                      <div className={styles.challengePoint}>
                        <div className={styles.pointIcon}>
                          <Truck size={20} />
                        </div>
                        <div className={styles.pointText}>
                          <h5>Logistics Complexity</h5>
                          <p>Coordinating nationwide distribution with careful handling of customized products</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Solution Section */}
          <section className={styles.contentSection} ref={solutionRef} id="solution">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Solution</h3>
              <div className={styles.sectionLine}></div>
            </div>
            
            <div className={styles.sectionContent}>
              <div className={styles.solutionGrid}>
                <div className={styles.solutionText}>
                  <p className={styles.solutionLead}>{projectData.solution}</p>
                  <p>By implementing comprehensive quality control protocols and leveraging our expertise in large-scale fulfillment operations, we ensured the campaign's flawless execution. Our dedicated project management team worked closely with Coca-Cola to maintain constant communication and address any challenges in real-time.</p>
                  <div className={styles.ivCreativeHighlight}>
                    <div className={styles.highlightIcon}>
                      <CheckCircle2 size={20} />
                    </div>
                    <p>IV Creative's end-to-end approach allowed Coca-Cola to focus on the marketing and creative aspects of the campaign, while we handled the complex operational logistics that brought their vision to life.</p>
                  </div>
                </div>
                
                <div className={styles.solutionImage}>
                  <img src={CocaColaDetail3} alt="Coca-Cola campaign solution" />
                  <div className={styles.imageBadge}>
                    <Heart size={14} />
                    <span>IV Creative</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Process Section */}
          <section className={styles.contentSection} ref={processRef} id="process">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Process</h3>
              <div className={styles.sectionLine}></div>
            </div>
            
            <div className={styles.sectionContent}>
              <div className={styles.processContainer}>
                <div className={styles.processFlex}>
                  <div className={styles.processImageWrapper}>
                    <img src={CocaColaProcess} alt="Coca-Cola campaign process" className={styles.processImage} />
                    <div className={styles.processImageBadge}>
                      <span>IV Creative Workflow</span>
                    </div>
                  </div>
                  
                  <div className={styles.processStepsWrapper}>
                    <div className={styles.processSteps}>
                      {projectData.process.map((step, index) => (
                        <div key={index} className={styles.processStep}>
                          <div className={styles.stepNumber}>{index + 1}</div>
                          <div className={styles.stepContent}>
                            <h4 className={styles.stepTitle}>{step.title}</h4>
                            <p className={styles.stepDescription}>{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Results Section */}
          <section className={styles.contentSection} ref={resultsRef} id="results">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Results</h3>
              <div className={styles.sectionLine}></div>
            </div>
            
            <div className={styles.sectionContent}>
              <div className={styles.resultsGrid}>
                <div className={styles.resultsText}>
                  <div className={styles.resultsStats}>
                    {projectData.impactStats.map((stat, index) => (
                      <div key={index} className={styles.statItem}>
                        <div className={styles.statValue}>{stat.value}</div>
                        <div className={styles.statLabel}>{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className={styles.resultsList}>
                    <h4 className={styles.resultsTitle}>Campaign Impact</h4>
                    <ul>
                      {projectData.results.map((result, index) => (
                        <li key={index} className={styles.resultItem}>
                          <div className={styles.resultBullet}></div>
                          <p>{result}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className={styles.resultsImageContainer}>
                  <img src={CocaColaResults} alt="Coca-Cola campaign results" className={styles.resultsImage} />
                  
                  <div className={styles.testimonialBox}>
                    <div className={styles.testimonialQuote}>
                      <p>"{projectData.testimonial.quote}"</p>
                    </div>
                    <div className={styles.testimonialAuthor}>
                      <p className={styles.authorName}>{projectData.testimonial.author}</p>
                      <p className={styles.authorCompany}>{projectData.testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      {/* IV Creative Partnership Value */}
      <div className={styles.partnershipValue}>
        <div className={styles.container}>
          <div className={styles.valueHeading}>
            <h2>Why Coca-Cola Chose IV Creative</h2>
            <p>Our unique capabilities that made us the perfect operational partner</p>
          </div>
          
          <div className={styles.valueGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <Star size={24} />
              </div>
              <h3>Operational Excellence</h3>
              <p>Our proven track record in managing complex logistical operations at scale gave Coca-Cola confidence in our ability to deliver.</p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <CheckCircle2 size={24} />
              </div>
              <h3>Quality Control</h3>
              <p>Our meticulous attention to detail and rigorous quality standards ensured consistent excellence across hundreds of thousands of products.</p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <Users size={24} />
              </div>
              <h3>Dedicated Team</h3>
              <p>We assembled a specialized team of experts specifically for this campaign, ensuring focused attention and seamless execution.</p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <Truck size={24} />
              </div>
              <h3>Distribution Network</h3>
              <p>Our established nationwide distribution capabilities allowed for efficient delivery to consumers across the UK.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Next Projects */}
      <div className={styles.nextProjects}>
        <div className={styles.container}>
          <h3 className={styles.nextTitle}>Explore More Projects</h3>
          
          <div className={styles.projectLinks}>
            {projectData.nextProjects.map((project, index) => (
              <a key={index} href={project.link} className={styles.nextProjectLink}>
                <span>{project.title}</span>
                <ArrowRight size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to create your own success story?</h2>
            <p className={styles.ctaText}>
              Let's discuss how IV Creative can help transform your brand with innovative end-to-end solutions.
            </p>
            <a href="/contact" className={styles.ctaButton}>
              <span>Get in Touch</span>
              <ChevronRight size={18} />
            </a>
          </div>
          
          <div className={styles.ctaDecoration}>
            <div className={styles.decorationElement1}></div>
            <div className={styles.decorationElement2}></div>
            <div className={styles.decorationElement3}></div>
          </div>
        </div>
      </div>
      
      {/* IV Creative Footer */}
      <div className={styles.brandFooter}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <img src={IVCreativeLogo} alt="IV Creative" className={styles.footerLogo} />
            <div className={styles.footerTagline}>
              <p>Transforming ideas into results</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CocaColaCaseStudy;