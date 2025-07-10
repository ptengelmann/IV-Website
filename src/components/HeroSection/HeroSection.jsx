import React, { useState, useEffect, useRef } from 'react';
import {
  ShoppingBag, Zap, ArrowRight, CheckCircle2, 
  TrendingUp, Sparkles, MoveRight, 
  ArrowUpRight, Star, Box, Layers,
  ShoppingCart, Globe, Monitor, Smartphone, 
  Users, BarChart3, Heart, Rocket
} from 'lucide-react';
import styles from './HeroSection.module.scss';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activePillar, setActivePillar] = useState(null);
  const heroRef = useRef(null);
  const illustrationRef = useRef(null);
  
  // Business pillars data
  const pillars = [
    {
      id: 'digital',
      title: 'Digital Marketing',
      icon: Zap,
      color: '#E72D88',
      description: 'Attract new customers through targeted digital campaigns',
      features: ['Social media', 'SEO', 'Content creation']
    },
    {
      id: 'ecommerce',
      title: 'E-commerce',
      icon: ShoppingBag,
      color: '#E72D88',
      description: 'Convert through multichannel e-commerce solutions',
      features: ['TikTok Shop', 'Amazon', 'Custom web development']
    },
    {
      id: 'design',
      title: 'Design & Production',
      icon: Layers,
      color: '#1B7DC2',
      description: 'Create innovative products and brand experiences',
      features: ['Bespoke packaging', 'Digital print', 'Personalization']
    },
    {
      id: 'operations',
      title: 'Operations',
      icon: Box,
      color: '#1B7DC2',
      description: 'Fulfill and ship products with maximum efficiency',
      features: ['Global distribution', 'B2B and DTC', 'Customer services']
    }
  ];

  // Stats
  const stats = [
    { value: '7500+', label: 'projects executed' },
    { value: 'Global', label: 'distribution' },
    { value: 'A+', label: 'customer service rating' }
  ];

  const clients = [
    { name: 'Coca-Cola', color: '#F40009' },
    { name: 'Renais', color: '#E5DDB2' },
    { name: 'Moonpig', color: '#FF629B' },
    { name: 'Who Gives A Crap', color: '#FFFFFF' },
    { name: 'Diageo', color: '#004B8D' },
    { name: 'Glenfiddich', color: '#DFB232' },
    { name: 'Fox & Vamp', color: '#E9A23D' }
  ];

  useEffect(() => {
    // Load elements with slight delay for better animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Mouse move event for interactive illustration
    const handleMouseMove = (e) => {
      if (!heroRef.current || !illustrationRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Add subtle illustration tilt effect
      if (illustrationRef.current) {
        const tiltX = (y / rect.height - 0.5) * 5; // -2.5 to 2.5 degrees
        const tiltY = (x / rect.width - 0.5) * -5; // -2.5 to 2.5 degrees
        illustrationRef.current.style.transform = `perspective(1200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(0.85)`;
      }
    };

    // Initialize event listeners
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }

    // Cleanup event listeners
    return () => {
      clearTimeout(timer);
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [isLoaded]);

  // Handle pillar card hover interactions
  const handlePillarHover = (pillarId) => {
    setActivePillar(pillarId);
  };

  const handlePillarLeave = () => {
    setActivePillar(null);
  };

  return (
    <section className={`${styles.heroSection} ${isLoaded ? styles.loaded : ''}`} ref={heroRef}>
      <div className={styles.heroBackground}>
        <div className={styles.patternOverlay}></div>
        <div className={styles.grid}></div>
      </div>
      
      <div className={styles.heroContainer}>
        <div className={styles.heroMain}>
          <div className={styles.heroContent}>
            <div className={styles.badgeWrapper}>
              <div className={styles.badge}>
                <Star size={14} />
                <span>End-to-end ecommerce agency</span>
              </div>
            </div>
            
            {/* Simplified headline with cleaner typography */}
            <h1 className={styles.headline}>
              <div className={styles.headlineRow}>
                <span className={styles.headlineText}>From</span>
                <span className={styles.headlineTextPink}>attracting</span>
              </div>
              <div className={styles.headlineRow}>
                <span className={styles.headlineTextPink}>and converting</span>
                <span className={styles.headlineText}>customers, to</span>
              </div>
              <div className={styles.headlineRow}>
                <span className={styles.headlineTextPink}>creating</span>
                <span className={styles.headlineText}>and</span>
                <span className={styles.headlineTextPink}>delivering</span>
              </div>
              <div className={styles.headlineRow}>
                <span className={styles.headlineText}>products</span>
              </div>
            </h1>

            <div className={styles.subheadlineWrapper}>
              <p className={styles.subheadline}>
                Find new ways to <span className={styles.emphasisTextPink}>sell</span>, and new ways to <span className={styles.emphasisTextPink}>reach</span> your customers.
                <br />
                We're a <span className={styles.emphasisTextPink}>one-stop partner</span> to increase your
                revenue and help you <span className={styles.emphasisTextPink}>grow</span>.
              </p>
            </div>
            
            <div className={styles.ctaGroup}>
              <button className={styles.primaryCta}>
                <span>Get in touch</span>
                <ArrowUpRight size={18} />
              </button>
              <button className={styles.secondaryCta}>
                <span>Learn more</span>
                <MoveRight size={18} />
              </button>
            </div>
          </div>
          
          {/* Simple E-commerce Ecosystem Illustration */}
          <div className={styles.heroIllustration}>
            <div className={styles.illustrationWrapper} ref={illustrationRef}>
              <div className={styles.ecommerceIllustration}>
                {/* Brand Hub */}
                <div className={styles.brandHub}>
                  <div className={styles.hubIcon}>
                    <ShoppingBag size={24} />
                  </div>
                  <div className={styles.hubLabel}>YOUR BRAND</div>
                </div>
                
                {/* Service Panels */}
                <div className={styles.servicePanels}>
                  <div className={styles.servicePanel}>
                    <div className={styles.designPanel}>
                      <div className={styles.panelHeader}>
                        <h3>Design & <br/>Digital Production</h3>
                      </div>
                      <ul className={styles.featureList}>
                        <li>Branding</li>
                        <li>Social</li>
                        <li>Packaging</li>
                        <li>SEO</li>
                        <li>UX/UI</li>
                        <li>PPC</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className={styles.servicePanel}>
                    <div className={styles.journeyPanel}>
                      <div className={styles.journeyStep}>
                        <div className={styles.stepIcon}>
                          <Users size={16} />
                        </div>
                        <span>Attract</span>
                        <div className={styles.stepMetric}>+24%</div>
                      </div>
                      <div className={styles.stepArrow}>
                        <ArrowRight size={16} />
                      </div>
                      <div className={styles.journeyStep}>
                        <div className={styles.stepIcon}>
                          <ShoppingCart size={16} />
                        </div>
                        <span>Convert</span>
                        <div className={styles.stepMetric}>+18%</div>
                      </div>
                      <div className={styles.stepArrow}>
                        <ArrowRight size={16} />
                      </div>
                      <div className={styles.journeyStep}>
                        <div className={styles.stepIcon}>
                          <Box size={16} />
                        </div>
                        <span>Deliver</span>
                        <div className={styles.stepMetric}>-12%</div>
                      </div>
                      <div className={styles.stepArrow}>
                        <ArrowRight size={16} />
                      </div>
                      <div className={styles.journeyStep}>
                        <div className={styles.stepIcon}>
                          <Heart size={16} />
                        </div>
                        <span>Retain</span>
                        <div className={styles.stepMetric}>+32%</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.servicePanel}>
                    <div className={styles.ecommercePanel}>
                      <div className={styles.panelHeader}>
                        <h3>E-commerce</h3>
                      </div>
                      <ul className={styles.channelList}>
                        <li>
                          <Globe size={14} />
                          <span>Web Store</span>
                        </li>
                        <li>
                          <Smartphone size={14} />
                          <span>Mobile</span>
                        </li>
                        <li>
                          <ShoppingCart size={14} />
                          <span>Marketplace</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className={styles.servicePanel}>
                    <div className={styles.operationsPanel}>
                      <div className={styles.panelHeader}>
                        <h3>Operations</h3>
                      </div>
                      <ul className={styles.featureList}>
                        <li>Fulfillment</li>
                        <li>Analytics</li>
                        <li>Support</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className={styles.metricsPanel}>
                    <div className={styles.metric}>
                      <div className={styles.metricIcon}>
                        <Rocket size={16} />
                      </div>
                      <div className={styles.metricContent}>
                        <div className={styles.metricValue}>3.8x</div>
                        <div className={styles.metricLabel}>Growth Rate</div>
                      </div>
                    </div>
                    <div className={styles.metric}>
                      <div className={styles.metricIcon}>
                        <ShoppingCart size={16} />
                      </div>
                      <div className={styles.metricContent}>
                        <div className={styles.metricValue}>+42%</div>
                        <div className={styles.metricLabel}>Conversion</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.illustrationGlow}></div>
            </div>
          </div>
          
          <div className={styles.statsSection}>
            <div className={styles.statsGroup}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.stat}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Pillar cards with improved layout for better space utilization */}
        <div className={styles.pillarsSection}>
          <div className={styles.pillarCards}>
            {pillars.map((pillar) => (
              <div 
                key={pillar.id}
                className={`${styles.pillarCard} ${activePillar === pillar.id ? styles.active : ''}`}
                onMouseEnter={() => handlePillarHover(pillar.id)}
                onMouseLeave={handlePillarLeave}
                style={{
                  '--pillar-color': pillar.color,
                  '--pillar-gradient': `linear-gradient(135deg, ${pillar.color} 0%, ${pillar.color}99 100%)`
                }}
              >
                <div className={styles.pillarIcon}>
                  <pillar.icon size={24} />
                </div>
                
                <div className={styles.pillarContent}>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                  
                  <div className={styles.pillarFeatures}>
                    {pillar.features.map((feature, idx) => (
                      <div key={idx} className={styles.feature}>
                        <CheckCircle2 size={12} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className={styles.pillarLinkWrapper}>
                    <a href={`#${pillar.id}`} className={styles.pillarLink}>
                      <span>Learn more</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
                
                <div className={styles.chevronPattern}></div>
                
                <div 
                  className={styles.cardGlow}
                  style={{ 
                    '--x': '50%', 
                    '--y': '50%' 
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className={styles.clientsSection}>
        <div className={styles.clientsWrapper}>
          <div className={styles.clientsHeading}>
            <Sparkles size={16} />
            <span>Trusted by brands of all shapes and sizes:</span>
          </div>
          
          <div className={styles.clientLogos}>
            {clients.map((client, index) => (
              <div 
                key={index} 
                className={styles.clientLogo}
                style={{ '--client-color': client.color }}
              >
                {client.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;