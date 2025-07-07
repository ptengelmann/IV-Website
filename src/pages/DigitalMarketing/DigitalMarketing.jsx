import React, { useState, useEffect, useRef } from 'react';
import {
  Zap, ArrowRight, BarChart3, Target, 
  Share2, Search, MessageSquare, TrendingUp,
  Globe, Users, LineChart, Smartphone,
  Award, CheckCircle2, Lightbulb, MousePointer,
  Eye, CreditCard, Megaphone, Layers,
  Book, Home, Music, ShoppingBag, Briefcase,
  Utensils, HeartPulse, Plane, Factory
} from 'lucide-react';
import styles from './DigitalMarketing.module.scss';

const DigitalMarketing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const sectionRef = useRef(null);
  const servicesRef = useRef(null);
  
  // Services data
  const services = [
    {
      id: 'content',
      title: 'Content Creation',
      icon: MessageSquare,
      color: '#ec4899',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #d946ef 100%)',
      description: 'We curate excellent content for websites, blog posts and social media that drives awareness, traffic and conversions.',
      features: [
        'Strategic content planning',
        'SEO-optimized writing',
        'Engaging brand storytelling',
        'Multimedia content production'
      ],
      stats: [
        { value: '70%', label: 'higher conversion rate with quality content' },
        { value: '3x', label: 'more leads than traditional marketing' }
      ]
    },
    {
      id: 'social',
      title: 'Social Media Marketing',
      icon: Share2,
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
      description: 'Tapping into huge networks of potential customers, and enabling two-way communication.',
      features: [
        'Platform-specific strategies',
        'Community management',
        'Influencer partnerships',
        'Paid social campaigns'
      ],
      stats: [
        { value: '91%', label: 'of consumers visit brand website after social interaction' },
        { value: '78%', label: 'of consumers buy from brands they follow on social' }
      ]
    },
    {
      id: 'seo',
      title: 'Search Engine Optimization',
      icon: Search,
      color: '#06b6d4',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%)',
      description: 'We make sure your products and pages are easy to find in search engines. Improve your rankings, refine your content, and drive consistent, high-quality traffic to your site.',
      features: [
        'Technical SEO audits',
        'Keyword research & strategy',
        'On-page optimization',
        'Link building & authority growth'
      ],
      stats: [
        { value: '1st', label: 'page results get 95% of search traffic' },
        { value: '53%', label: 'of all website traffic comes from organic search' }
      ]
    },
    {
      id: 'ppc',
      title: 'PPC & Paid Advertising',
      icon: Target,
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
      description: 'We plan and manage paid ads that put your products in front of the right people – driving targeted traffic, boosting sales, and making every click count.',
      features: [
        'Campaign strategy & structure',
        'Ad creative development',
        'Bid management & optimization',
        'Performance tracking & reporting'
      ],
      stats: [
        { value: '200%', label: 'average ROI for Google Ads campaigns' },
        { value: '65%', label: 'of high-intent searches lead to ad clicks' }
      ]
    }
  ];
  
  // Benefits data
  const benefits = [
    {
      icon: MousePointer,
      title: 'Optimized Conversion',
      description: 'Digital platforms feature optimised CTAs, making it easy for users to purchase, sign up or move down the purchase funnel.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Digital marketing effectively allows businesses to reach a global audience, breaking down geographical barriers.'
    },
    {
      icon: BarChart3,
      title: 'Measurable Results',
      description: 'Allows businesses to track every aspect of a campaign – such as clicks, impressions, conversions and more.'
    },
    {
      icon: Users,
      title: 'Personalized Targeting',
      description: 'Ads and content can be customised to users based on their past interactions with your website, products or services.'
    },
    {
      icon: Share2,
      title: 'Community Building',
      description: 'Tapping into huge networks of potential customers, and enabling two-way communication.'
    },
    {
      icon: CreditCard,
      title: 'Cost-Effective',
      description: 'Reach huge numbers of people for efficient spend, and test approaches on a small scale before rolling them out wider.'
    }
  ];

  // Industries data
  const industries = [
    {
      id: 'education',
      title: 'eLearning',
      icon: Book,
      color: '#ec4899',
      description: 'Engaging digital marketing strategies for online courses, educational platforms, and learning management systems.',
      features: [
        'Student acquisition campaigns',
        'Course promotion strategies',
        'Educational content marketing',
        'Learning platform optimization'
      ]
    },
    {
      id: 'realestate',
      title: 'Real Estate',
      icon: Home,
      color: '#8b5cf6',
      description: 'Targeted digital marketing for property listings, real estate agencies, and property development companies.',
      features: [
        'Property listing optimization',
        'Virtual tour promotion',
        'Location-based targeting',
        'Buyer/seller lead generation'
      ]
    },
    {
      id: 'entertainment',
      title: 'Media & Entertainment',
      icon: Music,
      color: '#06b6d4',
      description: 'Creative digital strategies for media companies, streaming services, and entertainment brands.',
      features: [
        'Content promotion campaigns',
        'Audience growth strategies',
        'Streaming platform optimization',
        'Entertainment industry positioning'
      ]
    },
    {
      id: 'retail',
      title: 'Retail & eCommerce',
      icon: ShoppingBag,
      color: '#10b981',
      description: 'Conversion-focused digital marketing for online stores, retail brands, and marketplaces.',
      features: [
        'Product campaign optimization',
        'Shopping feed management',
        'Retail-specific content strategies',
        'eCommerce platform enhancement'
      ]
    },
    {
      id: 'finance',
      title: 'Financial Services',
      icon: Briefcase,
      color: '#f59e0b',
      description: 'Compliance-aware digital marketing for banks, insurance companies, and financial institutions.',
      features: [
        'Financial product campaigns',
        'Trust-building content strategies',
        'Regulatory-compliant marketing',
        'Financial education content'
      ]
    },
    {
      id: 'hospitality',
      title: 'Hospitality & Tourism',
      icon: Utensils,
      color: '#ef4444',
      description: 'Experience-focused digital marketing for hotels, restaurants, and tourism businesses.',
      features: [
        'Booking conversion optimization',
        'Destination marketing',
        'Hospitality experience showcasing',
        'Travel industry partnerships'
      ]
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      icon: HeartPulse,
      color: '#3b82f6',
      description: 'Sensitive and compliant digital marketing for medical practices, healthcare providers, and wellness companies.',
      features: [
        'Patient acquisition campaigns',
        'Healthcare service promotion',
        'Medical content creation',
        'Wellness program marketing'
      ]
    },
    {
      id: 'travel',
      title: 'Travel',
      icon: Plane,
      color: '#6366f1',
      description: 'Engaging digital strategies for travel agencies, airlines, and vacation rental businesses.',
      features: [
        'Destination campaign management',
        'Travel booking optimization',
        'Seasonal travel promotion',
        'Adventure experience marketing'
      ]
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      icon: Factory,
      color: '#9333ea',
      description: 'B2B digital marketing for manufacturing companies, industrial suppliers, and production businesses.',
      features: [
        'Industrial lead generation',
        'Manufacturing expertise content',
        'Supply chain marketing',
        'Product specification promotion'
      ]
    }
  ];

  // Handle intersection observer to trigger animations when section is visible
  useEffect(() => {
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
  
  // Handle scroll progress for the services section
  useEffect(() => {
    const handleScroll = () => {
      if (servicesRef.current) {
        const rect = servicesRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate how much of the section is visible
        const visibleHeight = Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top);
        const sectionHeight = rect.height;
        
        // Calculate progress (0 to 1)
        const progress = Math.max(0, Math.min(1, visibleHeight / sectionHeight));
        setScrollProgress(progress);
        
        // Calculate which service cards are in view
        const serviceCards = servicesRef.current.querySelectorAll(`.${styles.serviceCard}`);
        if (serviceCards.length > 0) {
          let activeIndex = 0;
          
          // Find the card that's most visible in the viewport
          serviceCards.forEach((card, index) => {
            const cardRect = card.getBoundingClientRect();
            const cardVisibility = Math.min(windowHeight, cardRect.bottom) - Math.max(0, cardRect.top);
            
            if (cardVisibility > 0 && cardVisibility / cardRect.height > 0.5) {
              activeIndex = index;
            }
          });
          
          setActiveService(activeIndex);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Handle industry card hover
  const handleIndustryHover = (id) => {
    setActiveIndustry(id);
  };
  
  const handleIndustryLeave = () => {
    setActiveIndustry(null);
  };
  
  return (
    <div 
      className={`${styles.digitalMarketing} ${isVisible ? styles.visible : ''}`}
      ref={sectionRef}
    >
      <div className={styles.sectionBackground}>
        <div className={styles.gridPattern}></div>
        <div className={styles.gradientOverlay}></div>
      </div>
      
      {/* Hero section */}
      <div className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.badgeWrapper}>
              <div className={styles.badge}>
                <Zap size={14} />
                <span>Digital Marketing</span>
              </div>
            </div>
            
            <h1 className={styles.heroTitle}>
              <div className={styles.titleRow}>
                <span className={styles.titleText}>Specialising in</span>
                <span className={styles.gradientText}>content creation,</span>
              </div>
              <div className={styles.titleRow}>
                <span className={styles.titleText}>SEO, PPC and</span>
                <span className={styles.titleTextAccent}>social media</span>
              </div>
              <div className={styles.titleRow}>
                <span className={styles.titleText}>marketing</span>
              </div>
            </h1>
            
            <div className={styles.heroCopy}>
              <p>
                Your brand, and our ecommerce offering, needs to be seen to be heard. That's where we can help. We'll establish whether you need to build more reach, engagement, increased web traffic or conversion; and we'll deliver.
              </p>
            </div>
            
            <div className={styles.heroHighlight}>
              <div className={styles.highlightIcon}>
                <Lightbulb size={24} />
              </div>
              <p>
                Digital marketing is a crucial stage in your end-to-end ecommerce journey. It's how you drive the right traffic to your store, reach new customers, and turn interest into sales.
              </p>
            </div>
            
            <div className={styles.statsSection}>
              <div className={styles.statsGroup}>
                <div className={styles.stat}>
                  <div className={styles.statValue}>67%</div>
                  <div className={styles.statLabel}>higher conversion rates</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statValue}>3x</div>
                  <div className={styles.statLabel}>more leads than traditional marketing</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statValue}>10x</div>
                  <div className={styles.statLabel}>ROI on effective campaigns</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.heroVisual}>
            <div className={styles.visualWrapper}>
              <div className={styles.visualDashboard}>
                <div className={styles.dashboardHeader}>
                  <div className={styles.dashboardTitle}>Marketing Performance</div>
                  <div className={styles.dashboardControls}>
                    <div className={styles.controlDot}></div>
                    <div className={styles.controlDot}></div>
                    <div className={styles.controlDot}></div>
                  </div>
                </div>
                
                <div className={styles.dashboardContent}>
                  <div className={styles.metricsGrid}>
                    <div className={styles.metricCard}>
                      <div className={styles.metricIcon}>
                        <Eye size={16} />
                      </div>
                      <div className={styles.metricContent}>
                        <div className={styles.metricValue}>127.4K</div>
                        <div className={styles.metricLabel}>Monthly Visitors</div>
                      </div>
                      <div className={styles.metricTrend}>
                        <TrendingUp size={14} />
                        <span>+24.8%</span>
                      </div>
                    </div>
                    
                    <div className={styles.metricCard}>
                      <div className={styles.metricIcon}>
                        <LineChart size={16} />
                      </div>
                      <div className={styles.metricContent}>
                        <div className={styles.metricValue}>4.3%</div>
                        <div className={styles.metricLabel}>Conversion Rate</div>
                      </div>
                      <div className={styles.metricTrend}>
                        <TrendingUp size={14} />
                        <span>+1.2%</span>
                      </div>
                    </div>
                    
                    <div className={styles.metricCard}>
                      <div className={styles.metricIcon}>
                        <Megaphone size={16} />
                      </div>
                      <div className={styles.metricContent}>
                        <div className={styles.metricValue}>£0.87</div>
                        <div className={styles.metricLabel}>Cost Per Click</div>
                      </div>
                      <div className={styles.metricTrend}>
                        <TrendingUp size={14} />
                        <span>-8.3%</span>
                      </div>
                    </div>
                    
                    <div className={styles.metricCard}>
                      <div className={styles.metricIcon}>
                        <Smartphone size={16} />
                      </div>
                      <div className={styles.metricContent}>
                        <div className={styles.metricValue}>68.5%</div>
                        <div className={styles.metricLabel}>Mobile Traffic</div>
                      </div>
                      <div className={styles.metricTrend}>
                        <TrendingUp size={14} />
                        <span>+5.7%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.chartSection}>
                    <div className={styles.chartHeader}>
                      <div className={styles.chartTitle}>Channel Performance</div>
                      <div className={styles.chartLegend}>
                        <div className={styles.legendItem}>
                          <div className={styles.legendColor} style={{ background: '#ec4899' }}></div>
                          <span>Organic</span>
                        </div>
                        <div className={styles.legendItem}>
                          <div className={styles.legendColor} style={{ background: '#8b5cf6' }}></div>
                          <span>Social</span>
                        </div>
                        <div className={styles.legendItem}>
                          <div className={styles.legendColor} style={{ background: '#06b6d4' }}></div>
                          <span>PPC</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className={styles.chartGraph}>
                      <div className={styles.chartBars}>
                        {[40, 65, 50, 80, 60, 90, 75].map((height, index) => (
                          <div key={index} className={styles.chartBarGroup}>
                            <div 
                              className={styles.chartBar} 
                              style={{ 
                                height: `${height * 0.5}%`, 
                                background: '#ec4899',
                                animationDelay: `${index * 0.1}s`
                              }}
                            ></div>
                            <div 
                              className={styles.chartBar} 
                              style={{ 
                                height: `${height * 0.7}%`, 
                                background: '#8b5cf6',
                                animationDelay: `${index * 0.1 + 0.05}s`
                              }}
                            ></div>
                            <div 
                              className={styles.chartBar} 
                              style={{ 
                                height: `${height}%`, 
                                background: '#06b6d4',
                                animationDelay: `${index * 0.1 + 0.1}s`
                              }}
                            ></div>
                          </div>
                        ))}
                      </div>
                      <div className={styles.chartLabels}>
                        <div className={styles.chartLabel}>Mon</div>
                        <div className={styles.chartLabel}>Tue</div>
                        <div className={styles.chartLabel}>Wed</div>
                        <div className={styles.chartLabel}>Thu</div>
                        <div className={styles.chartLabel}>Fri</div>
                        <div className={styles.chartLabel}>Sat</div>
                        <div className={styles.chartLabel}>Sun</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.visualElements}>
                <div className={styles.visualElement1}></div>
                <div className={styles.visualElement2}></div>
                <div className={styles.visualElement3}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Services section */}
      <div className={styles.servicesSection} ref={servicesRef}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTagline}>Our Digital Marketing Services</span>
            <h2 className={styles.sectionTitle}>
              Strategic <span className={styles.highlight}>marketing solutions</span><br />
              for your business growth
            </h2>
          </div>
          
          <div className={styles.servicesWrapper}>
            <div className={styles.servicesProgress}>
              <div 
                className={styles.progressBar} 
                style={{ 
                  width: `${scrollProgress * 100}%`,
                  background: services[activeService].gradient
                }}
              ></div>
            </div>
            
            <div className={styles.servicesContainer}>
              {services.map((service, index) => (
                <div 
                  key={service.id}
                  id={`service-${service.id}`}
                  className={`${styles.serviceCard} ${index === activeService ? styles.serviceCardActive : ''}`}
                  style={{ 
                    '--service-color': service.color,
                    '--service-gradient': service.gradient
                  }}
                >
                  <div className={styles.serviceIconWrapper}>
                    <service.icon size={32} className={styles.serviceIcon} />
                    <div className={styles.serviceIconGlow}></div>
                  </div>
                  
                  <div className={styles.serviceContent}>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <p className={styles.serviceDescription}>{service.description}</p>
                    
                    <div className={styles.serviceFeatures}>
                      {service.features.map((feature, idx) => (
                        <div key={idx} className={styles.serviceFeature}>
                          <CheckCircle2 size={16} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className={styles.serviceStats}>
                      {service.stats.map((stat, idx) => (
                        <div key={idx} className={styles.serviceStat}>
                          <div className={styles.serviceStatValue}>{stat.value}</div>
                          <div className={styles.serviceStatLabel}>{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className={styles.serviceAction}>
                      <a href={`/services/digital-marketing/${service.id}`} className={styles.serviceLink}>
                        <span>Learn more about {service.title}</span>
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Industries section */}
<div className={styles.industriesSection}>
  <div className={styles.container}>
    <div className={styles.industriesHeader}>
      <div className={styles.industriesBadge}>
        <Globe size={16} />
        <span>Industries We Support</span>
      </div>
      <h2 className={styles.industriesTitle}>
        Tailored digital strategies for <span className={styles.highlightAlt}>every industry</span>
      </h2>
      <p className={styles.industriesDescription}>
        Our digital marketing expertise spans across various sectors, with specialized strategies 
        designed to meet the unique challenges and opportunities of each industry.
      </p>
    </div>
    
    {/* Industries Carousel */}
    <div className={styles.industriesShowcase}>
      <div className={styles.industriesNav}>
        {industries.map((industry, index) => (
          <button
            key={industry.id}
            className={`${styles.industryTab} ${activeIndustry === index ? styles.industryTabActive : ''}`}
            onClick={() => setActiveIndustry(index)}
            style={{ '--industry-color': industry.color }}
          >
            <industry.icon size={18} />
            <span>{industry.title}</span>
          </button>
        ))}
      </div>
      
      <div className={styles.industriesDisplay}>
        {industries.map((industry, index) => (
          <div 
            key={industry.id}
            className={`${styles.industryPanel} ${activeIndustry === index ? styles.industryPanelActive : ''}`}
            style={{ '--industry-color': industry.color }}
          >
            <div className={styles.industryVisual}>
              <div className={styles.industryIconLarge}>
                <industry.icon size={48} />
                <div className={styles.industryIconGlow}></div>
              </div>
              <div className={styles.industryPattern}></div>
            </div>
            
            <div className={styles.industryInfo}>
              <h3 className={styles.industryPanelTitle}>{industry.title}</h3>
              <p className={styles.industryPanelDescription}>{industry.description}</p>
              
              <div className={styles.industryPanelFeatures}>
                {industry.features.map((feature, idx) => (
                  <div key={idx} className={styles.industryPanelFeature}>
                    <CheckCircle2 size={14} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className={styles.industryStats}>
                <div className={styles.industryStat}>
                  <div className={styles.industryStatValue}>
                    {index === 0 ? '75%' : index === 1 ? '2.3x' : index === 2 ? '40%' : '87%'}
                  </div>
                  <div className={styles.industryStatLabel}>
                    {index === 0 ? 'increased conversion rates' : 
                     index === 1 ? 'higher ROI than average' : 
                     index === 2 ? 'growth in audience reach' : 
                     'client satisfaction rate'}
                  </div>
                </div>
                <div className={styles.industryStat}>
                  <div className={styles.industryStatValue}>
                    {index === 0 ? '50+' : index === 1 ? '125+' : index === 2 ? '60+' : '30+'}
                  </div>
                  <div className={styles.industryStatLabel}>
                    successful projects completed
                  </div>
                </div>
              </div>
              
              <div className={styles.industryPanelAction}>
                <a href={`/industries/${industry.id}`} className={styles.industryPanelLink}>
                  <span>View {industry.title} case studies</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
      
      {/* Benefits section */}
      <div className={styles.benefitsSection}>
        <div className={styles.container}>
          <div className={styles.benefitsHeader}>
            <div className={styles.benefitsBadge}>
              <Award size={16} />
              <span>Why Choose Our Digital Marketing</span>
            </div>
            <h2 className={styles.benefitsTitle}>
              Some of the ways we <span className={styles.highlightAlt}>support your brand</span>
            </h2>
          </div>
          
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={styles.benefitCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.benefitIconWrapper}>
                  <benefit.icon size={24} className={styles.benefitIcon} />
                </div>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA section */}
      <div className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready to elevate your digital presence?</h2>
              <p className={styles.ctaDescription}>
                Let's discuss how our digital marketing expertise can help drive traffic, boost engagement, and increase conversions for your business.
              </p>
              <div className={styles.ctaActions}>
                <a href="/contact" className={styles.ctaPrimary}>
                  <span>Get in touch</span>
                  <ArrowRight size={18} />
                </a>
                <a href="/case-studies" className={styles.ctaSecondary}>
                  <span>View our case studies</span>
                  <Layers size={18} />
                </a>
              </div>
            </div>
            
            <div className={styles.ctaDecoration}>
              <div className={styles.ctaShape1}></div>
              <div className={styles.ctaShape2}></div>
              <div className={styles.ctaShape3}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;