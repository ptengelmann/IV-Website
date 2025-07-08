import React, { useState, useEffect, useRef } from 'react';
import { 
  Users, Award, Globe, 
  ArrowRight, Clock,
  FileText, Star, Sparkles, Building,
  CheckCircle, Target, ChevronRight, Briefcase,
  MapPin, Calendar, 
  Truck, Package, Compass, Navigation,
  ArrowDown, Hash
} from 'lucide-react';
import styles from './WhoWeAre.module.scss';

// Import the banner image
import BannerImage from '../../assets/banner-image.jpg'; // Update this path to match your image location

const WhoWeAre = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('story');
  const [activeRegion, setActiveRegion] = useState('uk');
  const [animatedTitle, setAnimatedTitle] = useState(false);
  
  const sectionRef = useRef(null);
  const storyRef = useRef(null);
  const journeyRef = useRef(null);
  const teamRef = useRef(null);
  const globalRef = useRef(null);
  const titleRef = useRef(null);

  // Journey timeline with enhanced content
  const journeyTimeline = [
    {
      year: "2005",
      title: "The Beginning",
      description: "Founded as Intervino, focusing on storage and distribution for retail brands.",
      icon: Building,
      color: "#ec4899",
      achievements: ["Company founded", "First warehouse established", "Initial team of 5 employees"]
    },
    {
      year: "2010",
      title: "Digital Expansion",
      description: "Expanded into print and packaging solutions as DPS Digital, serving major UK brands.",
      icon: Briefcase,
      color: "#8b5cf6",
      achievements: ["Rebranded as DPS Digital", "Added print production", "Doubled workforce"]
    },
    {
      year: "2015",
      title: "Full-Service Transition",
      description: "Evolved into IV Creative, adding digital marketing and ecommerce development.",
      icon: Award,
      color: "#06b6d4",
      achievements: ["Rebranded as IV Creative", "Digital marketing", "Ecommerce development"]
    },
    {
      year: "2020",
      title: "Global Growth",
      description: "Became a fully integrated agency with global reach, supporting major international brands.",
      icon: Globe,
      color: "#10b981",
      achievements: ["Global expansion", "Enterprise clients", "Full-service agency"]
    }
  ];

  // Global fulfillment regions with enhanced details
  const regions = [
    {
      id: "uk",
      name: "United Kingdom",
      icon: MapPin,
      position: { x: 49, y: 42 },
      color: "#ec4899",
      isHQ: true,
      stats: {
        capacity: "50,000 sq ft",
        orders: "10,000+ daily",
        shipping: "Same day",
        clients: "200+"
      },
      description: "Our UK headquarters and primary fulfillment center provides comprehensive services including warehousing, pick & pack, printing, and UK-wide distribution with same-day and next-day delivery options."
    },
    {
      id: "europe",
      name: "Europe",
      icon: Globe,
      position: { x: 54, y: 45 },
      color: "#8b5cf6",
      stats: {
        capacity: "35,000 sq ft",
        orders: "5,000+ daily",
        shipping: "1-3 days",
        clients: "150+"
      },
      description: "Our European fulfillment network covers the entire EU region with strategic warehouse locations in Germany and Spain, offering cross-border fulfillment with complete customs compliance and multi-language customer service."
    },
    {
      id: "northamerica",
      name: "North America",
      icon: Compass,
      position: { x: 23, y: 45 },
      color: "#06b6d4",
      stats: {
        capacity: "42,000 sq ft",
        orders: "7,500+ daily",
        shipping: "2-day nationwide",
        clients: "175+"
      },
      description: "Our North American operations include East and West coast distribution centers, providing nationwide 2-day shipping, FDA compliance solutions, and specialized handling for retail-ready packaging across the US and Canada."
    },
    {
      id: "asia",
      name: "Asia Pacific",
      icon: Navigation,
      position: { x: 75, y: 53 },
      color: "#10b981",
      stats: {
        capacity: "28,000 sq ft",
        orders: "4,000+ daily",
        shipping: "Regional 2-5 days",
        clients: "125+"
      },
      description: "Our Asia Pacific hubs in Singapore and Hong Kong provide strategic fulfillment solutions across the APAC region, with specialized import/export facilitation, multi-currency transactions, and localized packaging requirements."
    }
  ];

  useEffect(() => {
    // Animation for the title
    setTimeout(() => {
      setAnimatedTitle(true);
    }, 500);

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    // Side navigation scroll tracking for active states
    const handleScroll = () => {
      const sections = [
        { ref: storyRef, id: 'story' },
        { ref: journeyRef, id: 'journey' },
        { ref: teamRef, id: 'team' },
        { ref: globalRef, id: 'global' }
      ];
      
      let newActiveSection = 'story';
      
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
          else if (sectionTop < 0 && i < sections.length - 1) {
            const nextSection = sections[i + 1];
            if (nextSection.ref.current) {
              const nextRect = nextSection.ref.current.getBoundingClientRect();
              if (nextRect.top > window.innerHeight / 2) {
                newActiveSection = section.id;
                break;
              }
            }
          }
          else if (i === sections.length - 1 && sectionTop <= window.innerHeight) {
            newActiveSection = section.id;
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
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  const scrollToSection = (sectionId) => {
    const sectionMap = {
      'story': storyRef,
      'journey': journeyRef,
      'team': teamRef,
      'global': globalRef
    };
    
    const ref = sectionMap[sectionId];
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      className={`${styles.whoWeAre} ${isVisible ? styles.visible : ''}`} 
      ref={sectionRef}
    >
      {/* Background elements */}
      <div className={styles.sectionBackground}>
        <div className={styles.gridPattern}></div>
        <div className={styles.gradientOverlay}></div>
      </div>
    
      
      {/* Hero Section with Banner Image */}
      <div className={styles.heroSection}>
        <div className={styles.heroBanner} style={{ backgroundImage: `url(${BannerImage})` }}>
          <div className={styles.bannerOverlay}></div>
        </div>
        
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.badgeWrapper}>
              <div className={styles.badge}>
                <Sparkles size={16} />
                <span>Our story since 2005</span>
              </div>
            </div>
            
            <h1 className={styles.heroTitle} ref={titleRef}>
              <div className={styles.titleRow}>
                <span className={`${styles.titleText} ${animatedTitle ? styles.animated : ''}`}>
                  Who <span className={styles.highlight}>We</span> Are
                </span>
              </div>
            </h1>
            
            <div className={styles.heroDescription}>
              <p>Formerly Intervino and DPS Digital, and established nearly two decades ago, we've delivered thousands of projects for retailers and brands. Our unique approach creates bespoke direct-to-consumer offerings regardless of brand shape, size, or sector.</p>
            </div>
            
            <div className={styles.scrollDownPrompt}>
              <p>Scroll to explore our story</p>
              <div className={styles.scrollIcon}>
                <ArrowDown size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Story Section */}
      <div className={styles.storySection} id="story" ref={storyRef}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.chapterIndicator}>
              <span className={styles.chapterNumber}>01</span>
              <Hash size={18} />
            </div>
            <h2>Our Story</h2>
            <div className={styles.headerLine}></div>
          </div>
          
          <div className={styles.storyContent}>
            <div className={styles.storyNarrative}>
              <p className={styles.narrativeIntro}>For over 15 years, IV Creative has supported global household brand names, transforming from a simple storage solution into a comprehensive creative powerhouse.</p>
              
              <div className={styles.narrativeBlock}>
                <p>Initially focused on storage and distribution, we've evolved into a full-service agency specialising in e-commerce, print, personalisation, packaging, and branded gifting. Our journey has been one of constant innovation and growth, always driven by our clients' evolving needs.</p>
                
                <p>With our specialist team of creatives and technical experts, we take your project from concept, to reality, to result. And with our trusted suppliers, we offer a comprehensive portfolio that supports clients in launching, managing, and expanding their online businesses across the world.</p>
              </div>
              
              <div className={styles.narrativeQuote}>
                <p>"At IV Creative, we believe in creating experiences that elevate brands and deliver exceptional results."</p>
              </div>
              
              <div className={styles.narrativeBlock}>
                <p>At IV Creative, we're proud to offer a truly global reach, supporting businesses across the UK and around the world. From our base in the UK, to every corner of the globe. Whether you're looking to store, fulfil or ship orders across Europe, North America, Asia, and beyond, we handle every aspect with precision to keep your business running, and growing, smoothly.</p>
              </div>
            </div>
            
            <div className={styles.storyVisual}>
              <div className={styles.statsGrid}>
                {[
                  { value: "15+", label: "Years of Experience" },
                  { value: "99.87%", label: "Order Accuracy Rate" },
                  { value: "1000+", label: "Projects Delivered" },
                  { value: "Global", label: "Distribution Network" }
                ].map((stat, index) => (
                  <div key={index} className={styles.statCard}>
                    <div className={styles.statValue}>{stat.value}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className={styles.brandsSection}>
                <div className={styles.brandsHeading}>
                  <Sparkles size={16} />
                  <span>Trusted by brands worldwide:</span>
                </div>
                
                <div className={styles.brandLogos}>
                  {[
                    { name: 'Coca-Cola', color: '#FF0000' },
                    { name: 'Renais', color: '#E5DDB2' },
                    { name: 'Moonpig', color: '#FF69B4' },
                    { name: 'Who Gives A Crap', color: '#FFFFFF' },
                    { name: 'Diageo', color: '#E91E63' },
                    { name: 'Glenfiddich', color: '#D4B764' },
                    { name: 'Fox & Vamp', color: '#E9A23D' }
                  ].map((brand, index) => (
                    <div 
                      key={index} 
                      className={styles.brandLogo}
                      style={{ '--brand-color': brand.color }}
                    >
                      {brand.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Journey Section - FIXED HEADER */}
      <div className={styles.journeySection} id="journey" ref={journeyRef}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.chapterIndicator}>
              <span className={styles.chapterNumber}>02</span>
              <Hash size={18} />
            </div>
            <h2>Our Journey</h2>
            <div className={styles.headerLine}></div>
          </div>
          
          <div className={styles.journeyIntro}>
            <p>Our evolution over the years reflects our commitment to innovation and excellence. Each chapter in our story has brought new capabilities and deeper expertise.</p>
          </div>
          
          <div className={styles.journeyTimeline}>
            <div className={styles.timelineLine}>
              <div className={styles.timelineProgress}></div>
            </div>
            
            {/* Timeline Points (Year Badges) */}
            <div className={styles.timelinePoint} style={{ top: '0%' }}>
              <div className={styles.yearBadge} style={{ backgroundColor: '#ec4899' }}>
                <Building size={18} />
                <span>2005</span>
              </div>
            </div>
            
            <div className={styles.timelinePoint} style={{ top: '33%' }}>
              <div className={styles.yearBadge} style={{ backgroundColor: '#8b5cf6' }}>
                <Briefcase size={18} />
                <span>2010</span>
              </div>
            </div>
            
            <div className={styles.timelinePoint} style={{ top: '66%' }}>
              <div className={styles.yearBadge} style={{ backgroundColor: '#06b6d4' }}>
                <Award size={18} />
                <span>2015</span>
              </div>
            </div>
            
            <div className={styles.timelinePoint} style={{ top: '90%' }}>
              <div className={styles.yearBadge} style={{ backgroundColor: '#10b981' }}>
                <Globe size={18} />
                <span>2020</span>
              </div>
            </div>
            
            {/* Timeline Cards - Adjusted positions to prevent overlap */}
            <div className={`${styles.timelineCard} ${styles.cardLeft}`} style={{ top: '0%' }}>
              <h3>The Beginning</h3>
              <p>Founded as Intervino, focusing on storage and distribution for retail brands.</p>
              <div className={styles.cardAchievements}>
                <div className={styles.achievementTag}>
                  <CheckCircle size={14} />
                  <span>Company founded</span>
                </div>
                <div className={styles.achievementTag}>
                  <CheckCircle size={14} />
                  <span>First warehouse established</span>
                </div>
                <div className={styles.achievementTag}>
                  <CheckCircle size={14} />
                  <span>Initial team of 5 employees</span>
                </div>
              </div>
            </div>
            
            <div className={`${styles.timelineCard} ${styles.cardRight}`} style={{ top: '33%' }}>
              <h3>Digital Expansion</h3>
              <p>Expanded into print and packaging solutions as DPS Digital, serving major UK brands.</p>
              <div className={styles.cardAchievements}>
                <div className={styles.achievementTag}>
                  <CheckCircle size={14} />
                  <span>Rebranded as DPS Digital</span>
                </div>
                <div className={styles.achievementTag}>
                  <CheckCircle size={14} />
                  <span>Added print production</span>
                </div>
                <div className={styles.achievementTag}>
                  <CheckCircle size={14} />
                  <span>Doubled workforce</span>
                </div>
              </div>
            </div>
            
            <div className={`${styles.timelineCard} ${styles.cardLeft}`} style={{ top: '66%' }}>
              <h3>Full-Service Transition</h3>
              <p>Evolved into IV Creative, adding digital marketing and ecommerce development.</p>
              <div className={styles.cardAchievements}>
                <div className={styles.achievementTag}>
                  <CheckCircle size={14} />
                  <span>Rebranded as IV Creative</span>
                </div>
                <div className={styles.achievementTag}>
                  <CheckCircle size={14} />
                  <span>Digital marketing</span>
                </div>
                <div className={styles.achievementTag}>
                  <CheckCircle size={14} />
                  <span>Ecommerce development</span>
                </div>
              </div>
            </div>
            
            <div className={`${styles.timelineCard} ${styles.cardRight}`} style={{ top: '90%' }}>
              <h3>Global Growth</h3>
              <p>Became a fully integrated agency with global reach, supporting major international brands.</p>
              <div className={styles.cardAchievements}>
                <div className={styles.achievementTag}>
                  <CheckCircle size={14} />
                  <span>Global expansion</span>
                </div>
                <div className={styles.achievementTag}>
                  <CheckCircle size={14} />
                  <span>Enterprise clients</span>
                </div>
                <div className={styles.achievementTag}>
                  <CheckCircle size={14} />
                  <span>Full-service agency</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Where We Are Today - Moved outside timeline to prevent overlap */}
        <div className={styles.container}>
          <div className={styles.journeyOutcome}>
            <h3>Where We Are Today</h3>
            <p>From humble beginnings to a global creative force, our journey continues with the same passion and commitment that has driven us from day one. Today, we're proud to be a trusted partner to brands of all sizes, helping them navigate the complex world of e-commerce and creative services.</p>
          </div>
        </div>
      </div>
      
      {/* Our Team Section - Overview Only */}
      <div className={styles.teamSection} id="team" ref={teamRef}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.chapterIndicator}>
              <span className={styles.chapterNumber}>03</span>
              <Hash size={18} />
            </div>
            <h2>Our Team</h2>
            <div className={styles.headerLine}></div>
          </div>
          
          <div className={styles.teamIntro}>
            <p>Our success is built on the talent, passion, and expertise of our diverse team of specialists.</p>
          </div>
          
          <div className={styles.teamContent}>
            <div className={styles.teamNarrative}>
              <p>At IV Creative, we bring together strategic thinkers, creative minds, technical experts, and operational specialists to form a powerhouse of talent dedicated to your success. Our leadership team has decades of combined experience across e-commerce, design, development, and global operations.</p>
              
              <p>What sets our team apart is how we work together and with our clients. We believe in true collaboration, bringing together diverse perspectives and expertise to deliver exceptional results. From strategy to execution, we're committed to excellence at every step of the journey.</p>
              
              <div className={styles.teamQuote}>
                <p>"Great things in business are never done by one person; they're done by a team of people."</p>
              </div>
              
              <p>We approach every project as an opportunity to push boundaries and exceed expectations. This collaborative spirit runs through everything we do, creating an environment where innovation thrives and bold ideas come to life.</p>
            </div>
            
            <div className={styles.teamExpertise}>
              <div className={styles.expertiseGrid}>
                {[
                  { title: "Strategic Direction", description: "Expert guidance to optimize your business goals" },
                  { title: "Creative Design", description: "Award-winning design that captures your brand essence" },
                  { title: "Technical Development", description: "Cutting-edge solutions that drive performance" },
                  { title: "Operational Excellence", description: "Seamless processes that deliver results" }
                ].map((expertise, index) => (
                  <div key={index} className={styles.expertiseCard}>
                    <h3>{expertise.title}</h3>
                    <p>{expertise.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className={styles.joinTeam}>
            <div className={styles.joinContent}>
              <h3>Join Our Team</h3>
              <p>IV Creative is continually on the lookout for fresh talent to join our vibrant team. As we expand and take on new challenges, we're eager to welcome individuals who bring creativity, innovation, and a passion for excellence.</p>
              <a href="/careers" className={styles.joinButton}>
                <span>View Open Positions</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Global Reach Section */}
      <div className={styles.globalSection} id="global" ref={globalRef}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.chapterIndicator}>
              <span className={styles.chapterNumber}>04</span>
              <Hash size={18} />
            </div>
            <h2>Global Reach, Local Expertise</h2>
            <div className={styles.headerLine}></div>
          </div>
          
          <div className={styles.globalIntro}>
            <p>From our base in the UK to every corner of the globe, we provide seamless fulfillment and creative services that transcend borders while maintaining local relevance.</p>
          </div>
          
          <div className={styles.globalMap}>
            <div className={styles.mapBackground}></div>
            
            {regions.map((region) => (
              <div 
                key={region.id}
                className={`${styles.regionMarker} ${activeRegion === region.id ? styles.active : ''}`}
                style={{ 
                  '--marker-color': region.color,
                  left: `${region.position.x}%`,
                  top: `${region.position.y}%`
                }}
                onClick={() => setActiveRegion(region.id)}
              >
                <div className={styles.markerIcon}>
                  <region.icon size={16} />
                </div>
                <div className={styles.markerPulse}></div>
                <div className={styles.markerLabel}>{region.name}</div>
              </div>
            ))}
            
            <div className={styles.connectionLines}></div>
          </div>
          
          <div className={styles.regionDetails}>
            {regions.map((region) => (
              <div 
                key={region.id}
                className={`${styles.regionCard} ${activeRegion === region.id ? styles.active : ''}`}
                style={{ '--region-color': region.color }}
              >
                <div className={styles.cardHeader}>
                  <region.icon size={20} />
                  <h3>{region.name}</h3>
                  {region.isHQ && <div className={styles.hqBadge}>HQ</div>}
                </div>
                
                <p className={styles.regionDescription}>{region.description}</p>
                
                <div className={styles.regionStats}>
                  {Object.entries(region.stats).map(([key, value]) => (
                    <div key={key} className={styles.statItem}>
                      <div className={styles.statValue}>{value}</div>
                      <div className={styles.statLabel}>{key.charAt(0).toUpperCase() + key.slice(1)}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Ready to turn your ideas into results?</h2>
            <p>Let's work together to bring your vision to life.</p>
            <div className={styles.ctaFeatures}>
              <div className={styles.ctaFeature}>
                <CheckCircle size={20} />
                <span>End-to-end solutions</span>
              </div>
              <div className={styles.ctaFeature}>
                <CheckCircle size={20} />
                <span>Global capability</span>
              </div>
              <div className={styles.ctaFeature}>
                <CheckCircle size={20} />
                <span>Expert team</span>
              </div>
            </div>
            <a href="/contact" className={styles.ctaButton}>
              <span>Get In Touch</span>
              <ChevronRight size={18} />
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

export default WhoWeAre;