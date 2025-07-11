import React, { useState, useEffect, useRef } from 'react';
import {
  Zap, ArrowRight, BarChart3, Target, 
  Share2, Search, MessageSquare, TrendingUp,
  Globe, Users, LineChart, Smartphone,
  Award, CheckCircle2, Lightbulb, MousePointer,
  Eye, CreditCard, Megaphone, Layers,
  Book, Home, Music, ShoppingBag, Briefcase,
  Utensils, HeartPulse, Plane, Factory,
  ArrowUpRight, Sparkles
} from 'lucide-react';
import styles from './DigitalMarketing.module.scss';

const DigitalMarketing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRef = useRef(null);
  const servicesRef = useRef(null);
  
  // Services data
  const services = [
    {
      id: 'content',
      title: 'Content Creation',
      icon: MessageSquare,
      color: '#E72D88',
      gradient:'#E72D88',
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
      ],
      caseStudy: {
        title: "How content marketing grew leads by 230%",
        text: "For a luxury home goods brand, we implemented a comprehensive content strategy with weekly blog posts, interactive buying guides, and social media content. Within six months, organic traffic increased by 186%, conversion rates improved by 4.2%, and qualified leads grew by 230%.",
        metric: "230%",
        metricLabel: "Increase in qualified leads"
      }
    },
    {
      id: 'social',
      title: 'Social Media Marketing',
      icon: Share2,
      color: '#E72D88',
      gradient: '#E72D88', 
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
      ],
      caseStudy: {
        title: "Building brand awareness through social",
        text: "We helped a boutique fashion brand develop a cohesive social media presence across Instagram, TikTok, and Pinterest. Through targeted content, influencer collaborations, and strategic paid campaigns, we increased their following by 345% in just four months, driving a 67% increase in website traffic and a 42% boost in direct sales from social channels.",
        metric: "67%",
        metricLabel: "Increase in website traffic"
      }
    },
    {
      id: 'seo',
      title: 'Search Engine Optimization',
      icon: Search,
      color: '#E72D88', 
      gradient: '#E72D88', 
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
      ],
      caseStudy: {
        title: "From page 5 to position 1",
        text: "An established homeware retailer was struggling with visibility for their key product categories. Through comprehensive technical SEO, content optimization, and strategic backlinking, we helped them climb from page 5 to position 1 for their most valuable keywords. This resulted in a 215% increase in organic traffic and a 43% improvement in conversion rates from organic search.",
        metric: "215%",
        metricLabel: "Increase in organic traffic"
      }
    },
    {
      id: 'ppc',
      title: 'PPC & Paid Advertising',
      icon: Target,
      color: '#E72D88', 
      gradient: '#E72D88', 
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
      ],
      caseStudy: {
        title: "Transforming PPC performance",
        text: "A premium skincare brand was experiencing high ad spend with minimal returns. We restructured their account, refined their targeting parameters, and optimized their ad creatives. Within three months, we decreased their cost-per-acquisition by 58% while increasing conversion volume by 127%, resulting in a 310% improvement in overall campaign ROI.",
        metric: "310%",
        metricLabel: "Improvement in ROI"
      }
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
      color: '#E72D88',
      description: 'Engaging digital marketing strategies for online courses, educational platforms, and learning management systems.',
      features: [
        'Student acquisition campaigns',
        'Course promotion strategies',
        'Educational content marketing',
        'Learning platform optimization'
      ],
      success: 'Increased enrollment by 65% for an online education platform through targeted SEO and content marketing.'
    },
    {
      id: 'realestate',
      title: 'Real Estate',
      icon: Home,
      color: '#E72D88',
      description: 'Targeted digital marketing for property listings, real estate agencies, and property development companies.',
      features: [
        'Property listing optimization',
        'Virtual tour promotion',
        'Location-based targeting',
        'Buyer/seller lead generation'
      ],
      success: 'Generated 3x more qualified leads for a luxury property developer through strategic PPC and social media campaigns.'
    },
    {
      id: 'entertainment',
      title: 'Media & Entertainment',
      icon: Music,
      color: '#1B7DC2',
      description: 'Creative digital strategies for media companies, streaming services, and entertainment brands.',
      features: [
        'Content promotion campaigns',
        'Audience growth strategies',
        'Streaming platform optimization',
        'Entertainment industry positioning'
      ],
      success: 'Helped a streaming platform achieve 40% subscriber growth through targeted content marketing and paid social campaigns.'
    },
    {
      id: 'retail',
      title: 'Retail & eCommerce',
      icon: ShoppingBag,
      color: '#1B7DC2',
      description: 'Conversion-focused digital marketing for online stores, retail brands, and marketplaces.',
      features: [
        'Product campaign optimization',
        'Shopping feed management',
        'Retail-specific content strategies',
        'eCommerce platform enhancement'
      ],
      success: 'Boosted online sales by 87% for a fashion retailer through integrated SEO, PPC, and social media marketing.'
    }
  ];

  // Process steps
  const processSteps = [
    {
      title: "Discover",
      description: "We start by understanding your brand, audience, goals, and competitive landscape to develop a targeted strategy.",
      icon: Eye,
      color: "#E72D88"
    },
    {
      title: "Plan",
      description: "Based on insights gathered, we create a comprehensive digital marketing plan with clear KPIs and timeline.",
      icon: Layers,
      color: "#E72D88"
    },
    {
      title: "Execute",
      description: "We implement campaigns across chosen channels, creating engaging content and optimizing for maximum performance.",
      icon: Target,
      color: "#1B7DC2"
    },
    {
      title: "Analyze",
      description: "Our team continuously monitors performance metrics and provides transparent reporting on campaign results.",
      icon: BarChart3,
      color: "#1B7DC2"
    },
    {
      title: "Refine",
      description: "We use data-driven insights to optimize campaigns, improving performance and maximizing your ROI.",
      icon: Sparkles,
      color: "#E72D88"
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
  
  // Handle section visibility for animations
  useEffect(() => {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, { threshold: 0.2 });
    
    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => {
      sectionObserver.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        sectionObserver.unobserve(section);
      });
    };
  }, []);
  
  return (
    <div 
      className={`${styles.digitalMarketing} ${isVisible ? styles.visible : ''}`}
      ref={sectionRef}
    >
      <div className={styles.sectionBackground}>
        <div className={styles.gridPattern}></div>
        <div className={styles.chevronPattern}></div>
      </div>
      
      {/* Hero section */}
      <div className={styles.heroSection} data-section id="hero-section">
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
              </div>
              <div className={styles.titleRow}>
                <span className={styles.titleTextPink}>content creation,</span>
              </div>
              <div className={styles.titleRow}>
                <span className={styles.titleText}>SEO, PPC and</span>
              </div>
              <div className={styles.titleRow}>
                <span className={styles.titleTextPink}>social media</span>
              </div>
              <div className={styles.titleRow}>
                <span className={styles.titleText}>marketing</span>
              </div>
            </h1>
            
            <div className={styles.heroCopy}>
              <p>
                Your brand needs to be seen to be heard. That's where we can help. We'll establish whether you need to build more reach, engagement, increased web traffic or conversion; and we'll deliver with our end-to-end digital marketing solutions.
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

            <div className={styles.ctaGroup}>
              <button className={styles.primaryCta}>
                <span>Get in touch</span>
                <ArrowUpRight size={18} />
              </button>
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
                          <div className={styles.legendColor} style={{ background: '#E72D88' }}></div>
                          <span>Organic</span>
                        </div>
                        <div className={styles.legendItem}>
                          <div className={styles.legendColor} style={{ background: '#1B7DC2' }}></div>
                          <span>Social</span>
                        </div>
                        <div className={styles.legendItem}>
                          <div className={styles.legendColor} style={{ background: '#37BACD' }}></div>
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
                                background: '#E72D88',
                                animationDelay: `${index * 0.1}s`
                              }}
                            ></div>
                            <div 
                              className={styles.chartBar} 
                              style={{ 
                                height: `${height * 0.7}%`, 
                                background: '#1B7DC2',
                                animationDelay: `${index * 0.1 + 0.05}s`
                              }}
                            ></div>
                            <div 
                              className={styles.chartBar} 
                              style={{ 
                                height: `${height}%`, 
                                background: '#37BACD',
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
            </div>
          </div>
        </div>
      </div>

           {/* Services section */}
<div className={styles.servicesSection} data-section id="services-section" ref={servicesRef}>
  <div className={styles.container}>
    <div className={styles.sectionHeader}>
      {/* Add badge wrapper and badge here */}
      <div className={styles.sectionBadge}>
        <Zap size={16} />
        <span>Our Digital Marketing Services</span>
      </div>
      <h2 className={styles.sectionTitle}>
        Strategic <span className={styles.highlight}>marketing solutions</span><br />
        that deliver real results
      </h2>
    </div>
          
          <div className={styles.servicesWrapper}>
            {services.map((service, index) => (
            <div 
  key={service.id}
  className={styles.serviceContainer}
  style={{
    '--service-color': service.color,
    '--service-delay': `${index * 0.2}s`
  }}
>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIconWrapper}>
                    <service.icon size={32} className={styles.serviceIcon} />
                    <div className={styles.serviceIconGlow}></div>
                  </div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                </div>
                
                <div className={styles.serviceContent}>
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
                </div>
                
                <div className={styles.serviceCaseStudy}>
                  <h4 className={styles.caseStudyTitle}>{service.caseStudy.title}</h4>
                  <p className={styles.caseStudyText}>{service.caseStudy.text}</p>
                  <div className={styles.caseStudyMetric}>
                    <div className={styles.caseStudyMetricValue}>{service.caseStudy.metric}</div>
                    <div className={styles.caseStudyMetricLabel}>{service.caseStudy.metricLabel}</div>
                  </div>
                </div>
                
                <div className={styles.serviceAction}>
                  <button className={styles.serviceCta}>
                    <span>Get started with {service.title}</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
{/* Our Approach Section - HORIZONTAL STEPS WITHOUT ARROWS */}
<div className={styles.approachSection} data-section id="approach-section">
  <div className={styles.container}>
    <div className={styles.sectionHeader}>
      <div className={styles.sectionBadge}>
        <Award size={16} />
        <span>Our Approach</span>
      </div>
      <h2 className={styles.sectionTitle}>
        How we <span className={styles.highlight}>drive results</span> for your business
      </h2>
    </div>
    
    <div className={styles.horizontalSteps}>
      {processSteps.map((step, index) => (
        <div 
          key={index} 
          className={styles.stepBlock}
          style={{
            '--step-delay': `${index * 0.1}s`
          }}
        >
          <div className={styles.stepNumber}>
            <span>{index + 1}</span>
          </div>
          <div className={styles.stepContent}>
            <div className={styles.stepIconWrapper}>
              <step.icon size={20} className={styles.stepIcon} />
            </div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDescription}>{step.description}</p>
          </div>
          {/* Removed the stepArrow div */}
        </div>
      ))}
    </div>
  </div>
</div>
      
      
      {/* Benefits section */}
      <div className={styles.benefitsSection} data-section id="benefits-section">
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
                style={{ '--benefit-delay': `${index * 0.1}s` }}
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
      
      {/* Industries section */}
      <div className={styles.industriesSection} data-section id="industries-section">
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
          
          <div className={styles.industriesGrid}>
            {industries.map((industry, index) => (
              <div 
                key={industry.id}
                className={styles.industryCard}
                style={{
                  '--industry-color': industry.color,
                  '--industry-delay': `${index * 0.1}s`
                }}
              >
                <div className={styles.industryHeader}>
                  <div className={styles.industryIconWrapper}>
                    <industry.icon size={24} className={styles.industryIcon} />
                  </div>
                  <h3 className={styles.industryTitle}>{industry.title}</h3>
                </div>
                
                <p className={styles.industryDescription}>{industry.description}</p>
                
                <div className={styles.industryFeatures}>
                  {industry.features.map((feature, idx) => (
                    <div key={idx} className={styles.industryFeature}>
                      <CheckCircle2 size={14} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className={styles.industrySuccess}>
                  <div className={styles.successIcon}>
                    <Award size={16} />
                  </div>
                  <p>{industry.success}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

{/* Enhanced CTA section */}
<div className={styles.ctaSection} data-section id="cta-section">
  <div className={styles.container}>
    <div className={styles.ctaCard}>
      <div className={styles.ctaGlow}></div>
      <div className={styles.ctaPattern}></div>
      
      <div className={styles.ctaContent}>
        <div className={styles.ctaIconWrapper}>
          <Zap size={24} className={styles.ctaIcon} />
        </div>
        <h2 className={styles.ctaTitle}>Ready to elevate your digital presence?</h2>
        <p className={styles.ctaDescription}>
          Let's discuss how our digital marketing expertise can help drive traffic, boost engagement, and increase conversions for your business.
        </p>
        <div className={styles.ctaActions}>
          <button className={styles.ctaPrimary}>
            <span>Get in touch</span>
            <ArrowUpRight size={18} />
          </button>
          <div className={styles.ctaHighlight}>
            <span>Start seeing results in 30 days</span>
          </div>
        </div>
      </div>
      
      <div className={styles.ctaDecoration}>
        <div className={styles.decorationCircle}></div>
        <div className={styles.decorationSquare}></div>
        <div className={styles.decorationTriangle}></div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default DigitalMarketing;