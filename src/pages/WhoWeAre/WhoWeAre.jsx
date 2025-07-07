import React, { useState, useEffect, useRef } from 'react';
import { 
  Users, Award, Globe, Heart, 
  Zap, Shield, ArrowRight, Clock,
  FileText, Star, Sparkles, Building,
  CheckCircle, Target, ChevronRight, Briefcase,
  MapPin, Calendar, Box, ExternalLink,
  Truck, Package, Compass, Navigation
} from 'lucide-react';
import styles from './WhoWeAre.module.scss';
import AmyImage from '../../assets/team/amy-lennox.png';
import JimmyImage from '../../assets/team/jimmy-rossington.png';
import ConnorImage from '../../assets/team/connor-thompson.png';
import DannielleImage from '../../assets/team/dannielle-evat.png';


const WhoWeAre = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('story');
  const [activeRegion, setActiveRegion] = useState('uk');
  const [animatedTitle, setAnimatedTitle] = useState(false);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  // Team members
const teamMembers = [
  {
    id: 'ceo',
    name: "Amy Lennox",
    position: "CEO",
    image: AmyImage
  },
  {
    id: 'creative-director',
    name: "Jimmy Rossington",
    position: "Creative Director",
    image: JimmyImage
  },
  {
    id: 'sales-director',
    name: "Connor Thompson",
    position: "Sales Director",
    image: ConnorImage
  },
  {
    id: 'accounts-director',
    name: "Dannielle Evat",
    position: "Accounts Director",
    image: DannielleImage
  }
];


  // Company values with enhanced content
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We're driven by a genuine love for what we do, infusing creativity and enthusiasm into every project.",
      color: "#ec4899"
    },
    {
      icon: Target,
      title: "Results-Focused",
      description: "We empower brands to turn ideas into measurable results that drive business growth.",
      color: "#8b5cf6"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work as an extension of your team, building strong partnerships through open communication.",
      color: "#06b6d4"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We promise our colleagues and customers integrity, quality and accountability from a highly trusted brand.",
      color: "#10b981"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We constantly push boundaries to develop pioneering solutions for our clients' unique challenges.",
      color: "#f59e0b"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "From our UK base to every corner of the globe, we support businesses worldwide with local expertise.",
      color: "#ef4444"
    }
  ];

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
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
      
      {/* Hero Section - Dramatically improved */}
      <div className={styles.heroSection}>
        <div className={styles.heroBackdrop}>
          <div className={styles.backdropGradient}></div>
          <div className={styles.backdropGrid}></div>
          <div className={styles.backdropLight}></div>
        </div>
        
        <div className={styles.container}>
          <div className={styles.badgeWrapper}>
            <div className={styles.badge}>
              <Sparkles size={16} />
              <span>Our story since 2005</span>
            </div>
          </div>
          
          <div className={styles.heroContent}>
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
          </div>
        </div>
      </div>
      
      {/* Tabs Section */}
      <div className={styles.tabsSection}>
        <div className={styles.container}>
          <div className={styles.tabs}>
            <button 
              className={`${styles.tab} ${activeTab === 'story' ? styles.active : ''}`}
              onClick={() => setActiveTab('story')}
            >
              <FileText size={18} />
              <span>Our Story</span>
            </button>
            <button 
              className={`${styles.tab} ${activeTab === 'team' ? styles.active : ''}`}
              onClick={() => setActiveTab('team')}
            >
              <Users size={18} />
              <span>Our Team</span>
            </button>
            <button 
              className={`${styles.tab} ${activeTab === 'values' ? styles.active : ''}`}
              onClick={() => setActiveTab('values')}
            >
              <Heart size={18} />
              <span>Our Values</span>
            </button>
            <button 
              className={`${styles.tab} ${activeTab === 'journey' ? styles.active : ''}`}
              onClick={() => setActiveTab('journey')}
            >
              <Clock size={18} />
              <span>Our Journey</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className={styles.mainContent}>
        <div className={styles.container}>
          {/* Our Story */}
          {activeTab === 'story' && (
            <div className={styles.storySection}>
              <div className={styles.sectionHeader}>
                <h2>Our Story</h2>
                <div className={styles.headerLine}></div>
              </div>
              
              <div className={styles.storyContent}>
                <div className={styles.storyText}>
                  <p>For over 15 years, IV Creative has supported global household brand names. Initially focused on storage and distribution, we've evolved into a full-service agency specialising in e-commerce, print, personalisation, packaging, and branded gifting.</p>
                  
                  <p>With our specialist team of creatives and technical experts, we take your project from concept, to reality, to result. And with our trusted suppliers, we offer a comprehensive portfolio that supports clients in launching, managing, and expanding their online businesses across the world.</p>
                  
                  <p>At IV Creative, we're proud to offer a truly global reach, supporting businesses across the UK and around the world. From our base in the UK, to every corner of the globe. Whether you're looking to store, fulfil or ship orders across Europe, North America, Asia, and beyond, we handle every aspect with precision to keep your business running, and growing, smoothly.</p>
                </div>
                
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
              </div>
              
              <div className={styles.brandsSection}>
                <div className={styles.brandsHeading}>
                  <Sparkles size={16} />
                  <span>Trusted by brands of all shapes and sizes:</span>
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
          )}
          
          {/* Our Team - Improved with 3D card effect */}
          {activeTab === 'team' && (
            <div className={styles.teamSection}>
              <div className={styles.sectionHeader}>
                <h2>Our Leadership Team</h2>
                <div className={styles.headerLine}></div>
              </div>
              
              <div className={styles.teamIntro}>
                <p>At IV Creative, our leadership team brings decades of combined experience across e-commerce, design, development, and global operations. Together, we're dedicated to driving innovation and delivering exceptional results for our clients.</p>
              </div>
              
              <div className={styles.teamGrid}>
                {teamMembers.map((member) => (
                  <div key={member.id} className={styles.teamCard}>
                    <div className={styles.memberPhotoWrapper}>
                      <div 
                        className={styles.memberPhoto} 
                        style={{ backgroundImage: `url(${member.image})` }}
                      ></div>
                      {!member.image.includes('.jpg') && (
                        <div className={styles.photoPlaceholder}>
                          {member.name.charAt(0)}
                        </div>
                      )}
                      <div className={styles.photoOverlay}></div>
                      <div className={styles.memberSocial}>
                        <div className={styles.socialIcon}>
                          <ExternalLink size={18} />
                        </div>
                      </div>
                    </div>
                    <div className={styles.memberInfo}>
                      <h3 className={styles.memberName}>{member.name}</h3>
                      <p className={styles.memberPosition}>{member.position}</p>
                    </div>
                  </div>
                ))}
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
          )}
          
          {/* Our Values - Enhanced with 3D effect */}
          {activeTab === 'values' && (
            <div className={styles.valuesSection}>
              <div className={styles.sectionHeader}>
                <h2>Our Values</h2>
                <div className={styles.headerLine}></div>
              </div>
              
              <div className={styles.valuesIntro}>
                <p>At IV Creative, we're committed to running our business in a way that is environmentally responsible, socially conscious, and governed by strong ethical practices. We believe that integrating these principles into our operations is crucial for long-term sustainability, creating lasting value for our company, employees, clients and the communities we serve.</p>
              </div>
              
              <div className={styles.valuesGrid}>
                {values.map((value, index) => (
                  <div 
                    key={index} 
                    className={styles.valueCard}
                    style={{ '--card-delay': `${index * 0.1}s`, '--card-color': value.color }}
                  >
                    <div className={styles.valueIconWrapper}>
                      <value.icon size={24} className={styles.valueIcon} />
                      <div className={styles.valueIconGlow}></div>
                    </div>
                    <h3 className={styles.valueTitle}>{value.title}</h3>
                    <p className={styles.valueDescription}>{value.description}</p>
                  </div>
                ))}
              </div>
              
              <div className={styles.community}>
                <div className={styles.communityContent}>
                  <h3>Community Impact</h3>
                  <p>Charities are vital to our community and we're very proud to support two incredible organisations throughout 2025: The James Anthony Foundation and Sophie's Journey. These causes, selected and supported by our team, inspire us as a business. We're committed to making a positive impact, both within our communities and beyond.</p>
                </div>
              </div>
            </div>
          )}
          
          {/* Our Journey - Simple Vertical Timeline */}
          {activeTab === 'journey' && (
            <div className={styles.journeySection}>
              <div className={styles.sectionHeader}>
                <h2>Our Journey</h2>
                <div className={styles.headerLine}></div>
              </div>
              
              <div className={styles.journeyIntro}>
                <p>Our path from our beginnings to where we are today reflects our dedication to growth, innovation, and client success.</p>
              </div>
              
              <div className={styles.verticalTimeline}>
                <div className={styles.timelineLine}></div>
                
                {journeyTimeline.map((milestone, index) => (
                  <div 
                    key={index}
                    className={styles.timelineItem}
                    style={{ '--milestone-color': milestone.color }}
                  >
                    <div className={styles.timelinePoint}>
                      <milestone.icon size={20} />
                    </div>
                    
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineYear}>{milestone.year}</div>
                      <h3 className={styles.timelineTitle}>{milestone.title}</h3>
                      <div className={styles.timelineTags}>
                        {milestone.achievements.map((achievement, idx) => (
                          <div key={idx} className={styles.timelineTag}>
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className={styles.testimonialSection}>
                <div className={styles.testimonialCard}>
                  <div className={styles.testimonialQuote}>
                    <p>"No matter the task the team are always ready to support, which we massively thank them for. We've been hugely impressed with their business fulfilment capabilities and team."</p>
                  </div>
                  <div className={styles.testimonialAuthor}>
                    <p className={styles.authorName}>Branston</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
{/* Global Reach Section - Simple line with continent icons */}
<div className={styles.globalSection}>
  <div className={styles.container}>
    <div className={styles.globalHeader}>
      <h2>Global Reach, Local Expertise</h2>
      <p>From our base in the UK, to every corner of the globe. Whether you're looking to store, fulfil or ship orders across Europe, North America, Asia, and beyond, we handle every aspect with precision to keep your business running, and growing, smoothly.</p>
    </div>
    
    <div className={styles.globalLine}>
      <div className={styles.lineTrack}>
        <div className={styles.lineGlow}></div>
        <div className={styles.lineBase}></div>
        
        {regions.map((region, index) => (
          <div 
            key={region.id}
            className={`${styles.regionNode} ${activeRegion === region.id ? styles.active : ''}`}
            style={{ 
              '--region-color': region.color,
              '--node-position': `${index * 25 + 10}%`
            }}
            onClick={() => setActiveRegion(region.id)}
          >
            <div className={styles.nodePoint}>
              <region.icon size={18} />
            </div>
            <div className={styles.nodeLabel}>{region.name}</div>
          </div>
        ))}
      </div>
    </div>
    
    <div className={styles.regionCards}>
      {regions.map((region) => (
        <div 
          key={region.id}
          className={`${styles.regionCard} ${activeRegion === region.id ? styles.active : ''}`}
          style={{ '--region-color': region.color }}
          onClick={() => setActiveRegion(region.id)}
        >
          <div className={styles.cardHeader}>
            <region.icon size={20} />
            <h3>{region.name}</h3>
            {region.isHQ && <div className={styles.hqBadge}>HQ</div>}
          </div>
          
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