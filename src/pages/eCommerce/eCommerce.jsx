import React, { useState, useEffect, useRef } from 'react';
import {
  Zap, ArrowRight, CheckCircle2, Lightbulb,
  ShoppingCart, Globe, Smartphone, LayoutGrid,
  Code, Search, Star, TrendingUp, 
  CreditCard, Package, RotateCcw, 
  ShoppingBag, Layers, Compass, Award,
  Box, MessageSquare, Truck, Monitor,
  MousePointer, Share2, Users, Heart, 
  Database, Lock, BarChart3, PieChart, Clock,
  Coffee, Tv, Wine, Briefcase, Home as HomeIcon, 
  ShoppingBag as ShoppingBagIcon, User
} from 'lucide-react';
import styles from './eCommerce.module.scss';

const ECommerce = () => {
  // Initialize state with proper values that will ensure the component renders
  const [isVisible, setIsVisible] = useState(true); // Set to true initially to ensure visibility
  const [activeService, setActiveService] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const sectionRef = useRef(null);
  const servicesRef = useRef(null);
  const featuresRef = useRef(null);
  
  // Services data
  const services = [
    {
      id: 'websites',
      title: 'Custom Websites',
      icon: Globe,
      color: '#ec4899',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #d946ef 100%)',
      description: 'We don not just create the ecommerce presence – we fortify and future-proof the brand. From simple iframes to custom, bespoke builds; we build websites to start, or grow, your online shopping offering.',
      features: [
        'Responsive design',
        'Custom shopping experiences',
        'SEO-optimized architecture',
        'Multiple payment gateways'
      ],
      stats: [
        { value: '70%', label: 'of consumers prefer to shop on websites with intuitive design' },
        { value: '3x', label: 'higher conversion rate with optimized checkout' }
      ]
    },
    {
      id: 'apps',
      title: 'Mobile Applications',
      icon: Smartphone,
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
      description: 'We can work with you to build an app that turns browsers into customers, and customers into advocates.',
      features: [
        'Native iOS & Android apps',
        'Push notification marketing',
        'In-app purchase functionality',
        'Seamless account integration'
      ],
      stats: [
        { value: '85%', label: 'of consumers prefer apps to mobile websites for shopping' },
        { value: '2.2x', label: 'longer time spent on apps vs mobile sites' }
      ]
    },
    {
      id: 'tiktok',
      title: 'TikTok Shop',
      icon: LayoutGrid,
      color: '#06b6d4',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%)',
      description: 'We have managed TikTok Shop for both big and small brands. By setting up the right platforms, tools, content, and products, you can be where your customers are shopping.',
      features: [
        'Shop setup & optimization',
        'Product listing management',
        'Content strategy for TikTok',
        'Live shopping events'
      ],
      stats: [
        { value: '50%', label: 'of TikTok users have purchased a product after seeing it on the platform' },
        { value: '37%', label: 'higher engagement rates compared to other platforms' }
      ]
    },
    {
      id: 'marketplace',
      title: 'Marketplace Management',
      icon: ShoppingBag,
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
      description: 'Get set up and trading on marketplaces like Amazon and Tesco Marketplace. We can help with managing listings, content, pricing, and keeping things running smoothly.',
      features: [
        'Marketplace strategy',
        'Product listing optimization',
        'Inventory management',
        'Reviews & reputation management'
      ],
      stats: [
        { value: '63%', label: 'of product searches start on Amazon' },
        { value: '40%', label: 'average sales increase when selling on multiple marketplaces' }
      ]
    }
  ];
  
  // Features data - more dynamic and interactive
  const features = [
    {
      icon: Search,
      title: 'Advanced Search',
      description: 'Enable customers to search by keywords, categories, brands, sizes and other product attributes, improving the shopping experience.',
      color: '#ec4899'
    },
    {
      icon: CreditCard,
      title: 'Multiple Payment Options',
      description: 'Offer different payment methods (such as credit or debit cards, PayPal or Apple Pay), allowing users to choose the most convenient option.',
      color: '#8b5cf6'
    },
    {
      icon: Database,
      title: 'Inventory Management',
      description: 'Real-time stock tracking, automated reordering, and multi-location inventory management keep your business running smoothly.',
      color: '#06b6d4'
    },
    {
      icon: Lock,
      title: 'Secure Checkout',
      description: 'PCI-compliant payment processing, SSL encryption, and fraud prevention tools to protect your customers and your business.',
      color: '#10b981'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Comprehensive data visualization and reporting tools to track sales, customer behavior, and campaign performance.',
      color: '#f59e0b'
    },
    {
      icon: Clock,
      title: 'Automated Workflows',
      description: 'Streamline operations with automated order processing, inventory updates, customer communications, and marketing campaigns.',
      color: '#ef4444'
    }
  ];

  // Industries we work with
  const industries = [
    {
      id: 'food',
      title: 'Food & Beverage',
      icon: Coffee,
      color: '#ec4899',
      description: 'Specialized ecommerce solutions for food brands, restaurants, and beverage companies with unique logistics requirements.',
      features: [
        'Subscription-based ordering',
        'Temperature-sensitive shipping',
        'Freshness guarantees',
        'Recipe integration'
      ]
    },
    {
      id: 'media',
      title: 'TV & Media',
      icon: Tv,
      color: '#8b5cf6',
      description: 'Digital storefronts for media companies, streaming services, and entertainment brands to monetize content and merchandise.',
      features: [
        'Digital content delivery',
        'Subscription management',
        'Branded merchandise',
        'Fan engagement tools'
      ]
    },
    {
      id: 'alcohol',
      title: 'Alcohol',
      icon: Wine,
      color: '#06b6d4',
      description: 'Compliant ecommerce solutions for wine, spirits, and craft beer companies with age verification and regional shipping controls.',
      features: [
        'Age verification systems',
        'Regulatory compliance',
        'Subscription clubs',
        'Localized shipping rules'
      ]
    },
    {
      id: 'licensing',
      title: 'IP & Licensing',
      icon: Briefcase,
      color: '#10b981',
      description: 'Specialized platforms for managing licensed products, character merchandise, and intellectual property-based goods.',
      features: [
        'Rights management',
        'Royalty tracking',
        'Limited edition releases',
        'Fan collectibles'
      ]
    },
    {
      id: 'homeware',
      title: 'Homeware',
      icon: HomeIcon,
      color: '#f59e0b',
      description: 'Custom ecommerce solutions for furniture, decor, and home goods companies with specialized visualization tools.',
      features: [
        'AR product visualization',
        'Room planners',
        'Custom configuration',
        'White glove delivery'
      ]
    },
    {
      id: 'fashion',
      title: 'Fashion & Beauty',
      icon: ShoppingBagIcon,
      color: '#ef4444',
      description: 'Trend-focused ecommerce for fashion brands, cosmetics, and beauty products with seasonal collections and personalization.',
      features: [
        'Virtual try-on',
        'Size recommendation',
        'Subscription boxes',
        'Personalized recommendations'
      ]
    }
  ];

  // Benefits data
  const benefits = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Expand your customer base beyond geographical boundaries and reach customers worldwide.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Growth',
      description: 'Our ecommerce solutions grow with your business, accommodating increasing traffic and sales.'
    },
    {
      icon: Compass,
      title: 'Omnichannel Presence',
      description: 'Seamlessly connect your online store with marketplaces, social media, and physical locations.'
    },
    {
      icon: MousePointer,
      title: 'Improved Conversion',
      description: 'Optimized user journeys and checkout processes to maximize conversion rates.'
    },
    {
      icon: Users,
      title: 'Customer Insights',
      description: 'Gain valuable data on customer behavior to inform business decisions and marketing strategies.'
    },
    {
      icon: Truck,
      title: 'Streamlined Operations',
      description: 'Integrate with inventory, shipping, and customer service systems for efficient management.'
    }
  ];

  // Handle intersection observer to trigger animations when section is visible
  useEffect(() => {
    // Create a new IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });
    
    // Observe the section reference if it exists
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    // Cleanup function to unobserve on component unmount
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
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Auto-rotate features
  useEffect(() => {
    const featureInterval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    
    // Cleanup function to clear interval on component unmount
    return () => clearInterval(featureInterval);
  }, [features.length]);
  
  // Handle industry card selection
  const handleIndustrySelect = (index) => {
    setActiveIndustry(index);
  };
  
  return (
    <div 
      className={`${styles.ecommerce} ${isVisible ? styles.visible : ''}`}
      ref={sectionRef}
    >
      {/* Background elements */}
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
                <span>Ecommerce Development</span>
              </div>
            </div>
            
            <h1 className={styles.heroTitle}>
              <div className={styles.titleRow}>
                <span className={styles.titleText}>Websites,</span>
                <span className={styles.gradientText}>mobile apps,</span>
              </div>
              <div className={styles.titleRow}>
                <span className={styles.titleText}>and</span>
                <span className={styles.titleTextAccent}>marketplace</span>
              </div>
              <div className={styles.titleRow}>
                <span className={styles.titleText}>integration</span>
              </div>
            </h1>
            
            <div className={styles.heroCopy}>
              <p>
                We specialise in crafting cutting-edge ecommerce websites and mobile apps for brands to expand their reach through social commerce and marketplace activation.
              </p>
            </div>
            
            <div className={styles.heroHighlight}>
              <div className={styles.highlightIcon}>
                <Lightbulb size={24} />
              </div>
              <p>
                Whether you're looking to sell on platforms like TikTok Shop, or set up and manage your product listings on major marketplaces such as Amazon and Tesco Marketplace, we've got you covered.
              </p>
            </div>
            
            <div className={styles.statsSection}>
              <div className={styles.statsGroup}>
                <div className={styles.stat}>
                  <div className={styles.statValue}>200+</div>
                  <div className={styles.statLabel}>ecommerce sites launched</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statValue}>45%</div>
                  <div className={styles.statLabel}>average conversion increase</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statValue}>15+</div>
                  <div className={styles.statLabel}>years of ecommerce expertise</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Hero Visual */}
          <div className={styles.heroVisual}>
            <div 
    className={styles.visualWrapper} 
    style={{ transform: 'scale(0.85)', transformOrigin: 'center top' }}
  >
              <div className={styles.visualDashboard}>
                <div className={styles.dashboardHeader}>
                  <div className={styles.dashboardTitle}>Ecommerce Platform</div>
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
                        <ShoppingCart size={16} />
                      </div>
                      <div className={styles.metricContent}>
                        <div className={styles.metricValue}>£9,874</div>
                        <div className={styles.metricLabel}>Today's Sales</div>
                      </div>
                      <div className={styles.metricTrend}>
                        <TrendingUp size={14} />
                        <span>+18.2%</span>
                      </div>
                    </div>
                    
                    <div className={styles.metricCard}>
                      <div className={styles.metricIcon}>
                        <Box size={16} />
                      </div>
                      <div className={styles.metricContent}>
                        <div className={styles.metricValue}>347</div>
                        <div className={styles.metricLabel}>Orders</div>
                      </div>
                      <div className={styles.metricTrend}>
                        <TrendingUp size={14} />
                        <span>+24.5%</span>
                      </div>
                    </div>
                    
                    <div className={styles.metricCard}>
                      <div className={styles.metricIcon}>
                        <Users size={16} />
                      </div>
                      <div className={styles.metricContent}>
                        <div className={styles.metricValue}>2,893</div>
                        <div className={styles.metricLabel}>Visitors</div>
                      </div>
                      <div className={styles.metricTrend}>
                        <TrendingUp size={14} />
                        <span>+12.8%</span>
                      </div>
                    </div>
                    
                    <div className={styles.metricCard}>
                      <div className={styles.metricIcon}>
                        <ShoppingBag size={16} />
                      </div>
                      <div className={styles.metricContent}>
                        <div className={styles.metricValue}>4.8%</div>
                        <div className={styles.metricLabel}>Conversion Rate</div>
                      </div>
                      <div className={styles.metricTrend}>
                        <TrendingUp size={14} />
                        <span>+1.3%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.storePreview}>
                    <div className={styles.storeHeader}>
                      <div className={styles.storeSearch}>
                        <Search size={14} />
                        <div className={styles.storeSearchBar}></div>
                      </div>
                      <div className={styles.storeActions}>
                        <div className={styles.storeAction}><User size={14} /></div>
                        <div className={styles.storeAction}><Heart size={14} /></div>
                        <div className={styles.storeAction}>
                          <ShoppingCart size={14} />
                          <span>3</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className={styles.storeBanner}>
                      <div className={styles.storeBannerContent}>
                        <div className={styles.storeBannerTitle}></div>
                        <div className={styles.storeBannerText}></div>
                        <div className={styles.storeBannerButton}></div>
                      </div>
                    </div>
                    
                    <div className={styles.productShowcase}>
                      {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className={styles.productShowcaseItem}>
                          <div className={styles.productImage}></div>
                          <div className={styles.productInfo}>
                            <div className={styles.productTitle}></div>
                            <div className={styles.productPrice}></div>
                            <div className={styles.productRating}>
                              <Star size={8} />
                              <Star size={8} />
                              <Star size={8} />
                              <Star size={8} />
                              <Star size={8} />
                            </div>
                          </div>
                          <div className={styles.productAddToCart}>
                            <ShoppingCart size={12} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.mobilePreview}>
                <div className={styles.mobileFrame}>
                  <div className={styles.mobileHeader}>
                    <div className={styles.mobileDot}></div>
                  </div>
                  <div className={styles.mobileScreen}>
                    <div className={styles.mobileNav}></div>
                    <div className={styles.mobileProducts}>
                      <div className={styles.mobileProduct}></div>
                      <div className={styles.mobileProduct}></div>
                      <div className={styles.mobileProduct}></div>
                      <div className={styles.mobileProduct}></div>
                    </div>
                    <div className={styles.mobileFooter}></div>
                  </div>
                </div>
              </div>
              
              <div className={styles.visualElements}>
                <div className={styles.visualElement1}></div>
                <div className={styles.visualElement2}></div>
                <div className={styles.visualElement3}></div>
                <div className={styles.visualElement4}></div>
                <div className={styles.visualElement5}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Services section */}
      <div className={styles.servicesSection} ref={servicesRef}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTagline}>Our Ecommerce Services</span>
            <h2 className={styles.sectionTitle}>
              Complete <span className={styles.highlight}>ecommerce solutions</span><br />
              for your brand's success
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
                      <a href={`/services/ecommerce/${service.id}`} className={styles.serviceLink}>
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
      
      {/* Features section */}
      <div className={styles.featuresSection} ref={featuresRef}>
        <div className={styles.container}>
          <div className={styles.featuresHeader}>
            <div className={styles.featuresBadge}>
              <Zap size={16} />
              <span>Key Ecommerce Features</span>
            </div>
            <h2 className={styles.featuresTitle}>
              Drive <span className={styles.highlightAlt}>smooth operations</span>, sales and customer loyalty
            </h2>
          </div>
          
          <div className={styles.featuresInteractive}>
            <div className={styles.featuresDevice}>
              <div className={styles.deviceFrame}>
                <div className={styles.deviceScreen}>
                  {features.map((feature, index) => (
                    <div 
                      key={index} 
                      className={`${styles.featureScreen} ${index === activeFeature ? styles.featureScreenActive : ''}`}
                      style={{ '--feature-color': feature.color }}
                    >
                      <div className={styles.featureHeader}>
                        <feature.icon size={20} />
                        <span>{feature.title}</span>
                      </div>
                      <div className={styles.featureAnimation}>
                        {feature.title === 'Advanced Search' && (
                          <div className={styles.searchAnimation}>
                            <div className={styles.searchInput}>
                              <Search size={16} />
                              <div className={styles.searchInputBar}></div>
                            </div>
                            <div className={styles.searchDropdown}>
                              <div className={styles.searchItem}><div className={styles.searchItemContent}></div></div>
                              <div className={styles.searchItem}><div className={styles.searchItemContent}></div></div>
                              <div className={styles.searchItem}><div className={styles.searchItemContent}></div></div>
                            </div>
                          </div>
                        )}
                        
                        {feature.title === 'Multiple Payment Options' && (
                          <div className={styles.paymentAnimation}>
                            <div className={styles.paymentCard}></div>
                            <div className={styles.paymentOptions}>
                              <div className={styles.paymentOption}></div>
                              <div className={styles.paymentOption}></div>
                              <div className={styles.paymentOption}></div>
                            </div>
                          </div>
                        )}
                        
                        {feature.title === 'Inventory Management' && (
                          <div className={styles.inventoryAnimation}>
                            <div className={styles.inventoryGraph}>
                              <div className={styles.inventoryBar} style={{ height: '60%' }}></div>
                              <div className={styles.inventoryBar} style={{ height: '40%' }}></div>
                              <div className={styles.inventoryBar} style={{ height: '80%' }}></div>
                              <div className={styles.inventoryBar} style={{ height: '30%' }}></div>
                              <div className={styles.inventoryBar} style={{ height: '50%' }}></div>
                            </div>
                            <div className={styles.inventoryList}>
                              <div className={styles.inventoryItem}>
                                <div className={styles.inventoryItemDot} style={{ background: '#10b981' }}></div>
                                <div className={styles.inventoryItemLine}></div>
                              </div>
                              <div className={styles.inventoryItem}>
                                <div className={styles.inventoryItemDot} style={{ background: '#f59e0b' }}></div>
                                <div className={styles.inventoryItemLine}></div>
                              </div>
                              <div className={styles.inventoryItem}>
                                <div className={styles.inventoryItemDot} style={{ background: '#ef4444' }}></div>
                                <div className={styles.inventoryItemLine}></div>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {feature.title === 'Secure Checkout' && (
                          <div className={styles.securityAnimation}>
                            <div className={styles.securityShield}>
                              <Lock size={30} />
                            </div>
                            <div className={styles.securityCircles}>
                              <div className={styles.securityCircle}></div>
                              <div className={styles.securityCircle}></div>
                              <div className={styles.securityCircle}></div>
                            </div>
                            <div className={styles.securityPulse}></div>
                          </div>
                        )}
                        
                        {feature.title === 'Analytics Dashboard' && (
                          <div className={styles.analyticsAnimation}>
                            <div className={styles.analyticsLines}>
                              <div className={styles.analyticsLine}></div>
                              <div className={styles.analyticsLine}></div>
                              <div className={styles.analyticsLine}></div>
                            </div>
                            <div className={styles.analyticsCharts}>
                              <div className={styles.analyticsPie}>
                                <div className={styles.analyticsPieSegment1}></div>
                                <div className={styles.analyticsPieSegment2}></div>
                                <div className={styles.analyticsPieSegment3}></div>
                              </div>
                              <div className={styles.analyticsBars}>
                                <div className={styles.analyticsBar}></div>
                                <div className={styles.analyticsBar}></div>
                                <div className={styles.analyticsBar}></div>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {feature.title === 'Automated Workflows' && (
                          <div className={styles.automationAnimation}>
                            <div className={styles.automationFlow}>
                              <div className={styles.automationNode}>
                                <ShoppingCart size={16} />
                              </div>
                              <div className={styles.automationArrow}></div>
                              <div className={styles.automationNode}>
                                <Package size={16} />
                              </div>
                              <div className={styles.automationArrow}></div>
                              <div className={styles.automationNode}>
                                <Truck size={16} />
                              </div>
                            </div>
                            <div className={styles.automationProgress}></div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className={styles.featuresNav}>
              {features.map((feature, index) => (
                <button 
                  key={index} 
                  className={`${styles.featureButton} ${index === activeFeature ? styles.featureButtonActive : ''}`}
                  onClick={() => setActiveFeature(index)}
                  style={{ '--feature-color': feature.color }}
                >
                  <div className={styles.featureButtonIcon}>
                    <feature.icon size={20} />
                  </div>
                  <div className={styles.featureButtonContent}>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </button>
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
              Tailored ecommerce solutions for <span className={styles.highlightAlt}>every industry</span>
            </h2>
            <p className={styles.industriesDescription}>
              Our ecommerce expertise spans across various sectors, with specialized strategies 
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
                  onClick={() => handleIndustrySelect(index)}
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
                        <div key={idx} className={styles.industryPanelFeature} style={{ '--index': idx }}>
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
              <span>Why Choose Our Ecommerce Solutions</span>
            </div>
            <h2 className={styles.benefitsTitle}>
              How we <span className={styles.highlightAlt}>strengthen your brand</span> online
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
              <h2 className={styles.ctaTitle}>Ready to boost your online sales?</h2>
              <p className={styles.ctaDescription}>
                With our expertise, we'll help your brand attract new customers, strengthen your digital presence, and boost sales across all ecommerce channels.
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

export default ECommerce;