import React, { useState, useEffect, useRef } from 'react';
import {
  ShoppingBag, Zap, ArrowRight, CheckCircle2, 
  TrendingUp, Sparkles, MoveRight, 
  ArrowUpRight, Star, Box, Layers,
  ShoppingCart, Globe, Monitor, Smartphone, 
  Users, BarChart3, Heart
} from 'lucide-react';
import styles from './HeroSection.module.scss';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activePillar, setActivePillar] = useState(null);
  const heroRef = useRef(null);
  const blobRef = useRef(null);
  const dashboardRef = useRef(null);
  
  // Business pillars data
  const pillars = [
    {
      id: 'digital',
      title: 'Digital Marketing',
      icon: Zap,
      color: '#ec4899',
      description: 'Attract new customers through targeted digital campaigns',
      features: ['Social media', 'SEO', 'Content creation']
    },
    {
      id: 'ecommerce',
      title: 'E-commerce',
      icon: ShoppingBag,
      color: '#8b5cf6',
      description: 'Convert through multichannel e-commerce solutions',
      features: ['TikTok Shop', 'Amazon', 'Custom web development']
    },
    {
      id: 'design',
      title: 'Design & Production',
      icon: Layers,
      color: '#06b6d4',
      description: 'Create innovative products and brand experiences',
      features: ['Bespoke packaging', 'Digital print', 'Personalization']
    },
    {
      id: 'operations',
      title: 'Operations',
      icon: Box,
      color: '#10b981',
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

  // Featured clients
  const clients = [
    { name: 'Coca-Cola', color: '#FF0000' },
    { name: 'Renais', color: '#E5DDB2' },
    { name: 'Moonpig', color: '#FF69B4' },
    { name: 'Who Gives A Crap', color: '#FFFFFF' },
    { name: 'Diageo', color: '#E91E63' },
    { name: 'Glenfiddich', color: '#D4B764' },
    { name: 'Fox & Vamp', color: '#E9A23D' }
  ];

  useEffect(() => {
    // Load elements with slight delay for better animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Mouse move event for interactive blob
    const handleMouseMove = (e) => {
      if (!heroRef.current || !blobRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Move blob with enhanced sensitivity
      const blobX = (x / rect.width) * 50 - 25;
      const blobY = (y / rect.height) * 50 - 25;
      
      blobRef.current.style.transform = `translate(${blobX}%, ${blobY}%)`;
      
      // Add subtle dashboard tilt effect
      if (dashboardRef.current) {
        const tiltX = (y / rect.height - 0.5) * 5; // -2.5 to 2.5 degrees
        const tiltY = (x / rect.width - 0.5) * -5; // -2.5 to 2.5 degrees
        dashboardRef.current.style.transform = `perspective(1200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(0.85)`;
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
        <div className={styles.blob} ref={blobRef}></div>
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
            
            {/* Improved headline with better spacing and animation timing */}
            <h1 className={styles.headline}>
              <div className={styles.headlineRow}>
                <span className={styles.headlineText}>From</span>
                <span className={styles.headlineTextAccent}>attracting</span>
              </div>
              <div className={styles.headlineRow}>
                <span className={styles.headlineTextAccent}>converting</span>
                <span className={styles.headlineText}>customers, to</span>
              </div>
              <div className={styles.headlineRow}>
                <span className={styles.gradientText}>creating</span>
                <span className={styles.headlineText}>and</span>
                <span className={styles.gradientText}>delivering</span>
              </div>
              <div className={styles.headlineRow}>
                <div className={styles.productWrapper}>
                  <span className={styles.headlineText}>products</span>
                  <div className={styles.productUnderline}></div>
                </div>
              </div>
            </h1>
            
            <div className={styles.subheadlineWrapper}>
              <p className={styles.subheadline}>
                Find new ways to <span className={styles.emphasisText}>sell</span>, and new ways to <span className={styles.emphasisText}>reach</span> your customers.
                <br />
                We're a <span className={styles.emphasisTag}>one-stop partner</span> to <span className={styles.emphasisText}>increase</span> your
                revenue and help you <span className={styles.emphasisGlow}>grow</span>.
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
          
          {/* Dashboard Visual to fill the right side gap */}
          <div className={styles.heroDashboard}>
            <div className={styles.dashboardWrapper} ref={dashboardRef}>
              <div className={styles.dashboardFrame}>
                <div className={styles.dashboardHeader}>
                  <div className={styles.dashboardTitle}>Business Dashboard</div>
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
                  </div>
                  
                  <div className={styles.dashboardChart}>
                    <div className={styles.chartHeader}>
                      <div className={styles.chartTitle}>Sales Performance</div>
                      <div className={styles.chartPeriod}>This Month</div>
                    </div>
                    <div className={styles.chartBody}>
                      <div className={styles.chartBars}>
                        <div className={styles.chartBar} style={{ height: '60%' }}><div className={styles.chartTooltip}>£8,465</div></div>
                        <div className={styles.chartBar} style={{ height: '45%' }}><div className={styles.chartTooltip}>£6,285</div></div>
                        <div className={styles.chartBar} style={{ height: '75%' }}><div className={styles.chartTooltip}>£10,374</div></div>
                        <div className={styles.chartBar} style={{ height: '50%' }}><div className={styles.chartTooltip}>£7,129</div></div>
                        <div className={styles.chartBar} style={{ height: '85%' }}><div className={styles.chartTooltip}>£11,982</div></div>
                        <div className={styles.chartBar} style={{ height: '70%' }}><div className={styles.chartTooltip}>£9,876</div></div>
                        <div className={styles.chartBar} style={{ height: '90%', background: 'linear-gradient(to top, #8b5cf6, #ec4899)' }}><div className={styles.chartTooltip}>£12,485</div></div>
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
                  
                  <div className={styles.dashboardFooter}>
                    <div className={styles.footerItem}>
                      <div className={styles.footerIcon}>
                        <Globe size={16} />
                      </div>
                      <div className={styles.footerLabel}>Online Store</div>
                    </div>
                    <div className={styles.footerItem}>
                      <div className={styles.footerIcon}>
                        <Smartphone size={16} />
                      </div>
                      <div className={styles.footerLabel}>Mobile App</div>
                    </div>
                    <div className={styles.footerItem}>
                      <div className={styles.footerIcon}>
                        <Heart size={16} />
                      </div>
                      <div className={styles.footerLabel}>Customer</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.dashboardGlow}></div>
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