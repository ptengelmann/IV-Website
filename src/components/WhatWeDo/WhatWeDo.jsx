    import React, { useState, useEffect, useRef } from 'react';
    import {
    ShoppingBag, Zap, ArrowRight, CheckCircle2, 
    MoveRight, Box, Layers, BarChart3, 
    Smartphone, LayoutGrid, Share2, Search,
    ShoppingCart, Paintbrush, Printer, MessageSquare,
    TrendingUp, Truck, Package, RotateCcw, Globe,
    Code, Target, Users, PenTool
    } from 'lucide-react';
    import styles from './WhatWeDo.module.scss';

    const WhatWeDo = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activePillar, setActivePillar] = useState(0);
    const [isAutoScrolling, setIsAutoScrolling] = useState(true);
    const sectionRef = useRef(null);
    const timelineRef = useRef(null);
    
    // Core pillars data
    const pillars = [
        {
        id: 'ecommerce',
        title: 'Ecommerce Development',
        icon: ShoppingCart,
        color: '#ec4899',
        gradient: 'linear-gradient(135deg, #ec4899 0%, #d946ef 100%)',
        description: 'High-performance websites, mobile apps, and marketplace integrations to boost your digital presence.',
        features: [
            { 
            icon: Globe, 
            title: 'Custom Websites',
            description: 'Bespoke ecommerce solutions built for conversion and customer experience'
            },
            { 
            icon: Smartphone, 
            title: 'Mobile Applications',
            description: 'Native and progressive web apps that drive engagement and sales'
            },
            { 
            icon: LayoutGrid, 
            title: 'Marketplace Integration',
            description: 'TikTok Shop, Amazon, and Tesco Marketplace setup and management'
            },
            { 
            icon: Code, 
            title: 'Platform Development',
            description: 'Scalable solutions with cutting-edge technology and seamless UX'
            }
        ]
        },
        {
        id: 'digital-marketing',
        title: 'Digital Marketing',
        icon: Target,
        color: '#8b5cf6',
        gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
        description: 'Tailored strategies to boost visibility and drive conversions across digital channels.',
        features: [
            { 
            icon: Search, 
            title: 'SEO & PPC',
            description: 'Data-driven search strategies that increase visibility and ROI'
            },
            { 
            icon: Share2, 
            title: 'Social Media',
            description: 'Engaging content and campaigns across all relevant platforms'
            },
            { 
            icon: MessageSquare, 
            title: 'Content Creation',
            description: 'Compelling storytelling that resonates with your target audience'
            },
            { 
            icon: BarChart3, 
            title: 'Analytics & Insights',
            description: 'Performance tracking and optimization for continuous improvement'
            }
        ]
        },
        {
        id: 'design',
        title: 'Design & Production',
        icon: Paintbrush,
        color: '#06b6d4',
        gradient: 'linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%)',
        description: 'Bringing brands to life with unique designs, merchandise, and bespoke packaging solutions.',
        features: [
            { 
            icon: PenTool, 
            title: 'Brand Identity',
            description: 'Distinctive visual identities that capture your brand essence'
            },
            { 
            icon: Layers, 
            title: 'Packaging Design',
            description: 'Innovative and sustainable packaging that stands out on shelves'
            },
            { 
            icon: Printer, 
            title: 'Digital & Commercial Print',
            description: 'High-quality printing services for all marketing materials'
            },
            { 
            icon: ShoppingBag, 
            title: 'Branded Merchandise',
            description: 'Custom promotional products that reinforce brand recognition'
            }
        ]
        },
        {
        id: 'operations',
        title: 'Operations & Fulfillment',
        icon: Truck,
        color: '#10b981',
        gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
        description: 'Optimizing supply chains for efficiency with global distribution and fulfillment solutions.',
        features: [
            { 
            icon: Package, 
            title: 'Global Distribution',
            description: 'Worldwide shipping solutions for DTC and B2B businesses'
            },
            { 
            icon: Users, 
            title: 'Customer Service',
            description: 'Responsive support teams that maintain high satisfaction rates'
            },
            { 
            icon: RotateCcw, 
            title: 'Returns Management',
            description: 'Streamlined processes that minimize costs and maximize recovery'
            },
            { 
            icon: TrendingUp, 
            title: 'Supply Chain Optimization',
            description: 'Data-driven insights to improve efficiency and reduce costs'
            }
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
    
    // Auto-scroll through pillars with a timer
    useEffect(() => {
        let interval;
        
        if (isAutoScrolling) {
        interval = setInterval(() => {
            setActivePillar((prev) => (prev + 1) % pillars.length);
        }, 5000);
        }
        
        return () => clearInterval(interval);
    }, [isAutoScrolling, pillars.length]);
    
    // Handle timeline scroll when active pillar changes
    useEffect(() => {
        if (timelineRef.current) {
        const activeElement = timelineRef.current.querySelector(`.${styles.timelineItemActive}`);
        if (activeElement) {
            const containerWidth = timelineRef.current.offsetWidth;
            const elementOffset = activeElement.offsetLeft;
            const elementWidth = activeElement.offsetWidth;
            
            // Center the active element
            timelineRef.current.scrollTo({
            left: elementOffset - (containerWidth / 2) + (elementWidth / 2),
            behavior: 'smooth'
            });
        }
        }
    }, [activePillar]);
    
    // Handle manual pillar selection
    const handlePillarSelect = (index) => {
        setActivePillar(index);
        setIsAutoScrolling(false);
        
        // Resume auto-scrolling after 10 seconds of inactivity
        const timer = setTimeout(() => {
        setIsAutoScrolling(true);
        }, 10000);
        
        return () => clearTimeout(timer);
    };
    
    return (
        <section 
        className={`${styles.whatWeDo} ${isVisible ? styles.visible : ''}`}
        ref={sectionRef}
        >
        <div className={styles.sectionBackground}>
            <div className={styles.gridPattern}></div>
            <div className={styles.gradientOverlay}></div>
        </div>
        
        <div className={styles.container}>
            <div className={styles.sectionHeader}>
            <span className={styles.sectionTagline}>Our Services</span>
            <h2 className={styles.sectionTitle}>
                Let's break down our <span className={styles.highlight}>core pillars</span>
            </h2>
            <p className={styles.sectionDescription}>
                Our approach is centered around four integrated pillars, ensuring a seamless end-to-end experience that takes your brand from initial strategy to market success.
            </p>
            </div>
            
            {/* Interactive timeline */}
            <div className={styles.timelineWrapper} ref={timelineRef}>
            <div className={styles.timelineTrack}>
                <div 
                className={styles.timelineProgress} 
                style={{ 
                    width: `${(activePillar / (pillars.length - 1)) * 100}%`,
                    background: pillars[activePillar].gradient
                }}
                ></div>
                
                {pillars.map((pillar, index) => (
                <div 
                    key={pillar.id}
                    className={`${styles.timelineItem} ${index === activePillar ? styles.timelineItemActive : ''} ${index < activePillar ? styles.timelineItemCompleted : ''}`}
                    onClick={() => handlePillarSelect(index)}
                >
                    <div 
                    className={styles.timelinePoint}
                    style={{ 
                        borderColor: index <= activePillar ? pillar.color : 'rgba(255, 255, 255, 0.2)',
                        background: index === activePillar ? pillar.color : index < activePillar ? pillar.color : 'transparent'
                    }}
                    >
                    {index < activePillar && (
                        <CheckCircle2 size={14} className={styles.timelineCheck} />
                    )}
                    {index === activePillar && (
                        <pillar.icon size={14} className={styles.timelineIcon} />
                    )}
                    </div>
                    <div className={styles.timelineLabel}>{pillar.title}</div>
                </div>
                ))}
            </div>
            </div>
            
            {/* Pillar detail section */}
            <div className={styles.pillarDetails}>
            {pillars.map((pillar, index) => (
                <div 
                key={pillar.id}
                className={`${styles.pillarDetail} ${index === activePillar ? styles.pillarDetailActive : ''}`}
                style={{ 
                    '--pillar-color': pillar.color,
                    '--pillar-gradient': pillar.gradient
                }}
                >
                <div className={styles.pillarContent}>
                    <div className={styles.pillarHeader}>
                    <div className={styles.pillarIconWrapper}>
                        <pillar.icon size={32} className={styles.pillarIcon} />
                        <div className={styles.pillarIconGlow}></div>
                    </div>
                    <div>
                        <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                        <p className={styles.pillarDescription}>{pillar.description}</p>
                    </div>
                    </div>
                    
                    <div className={styles.pillarFeatures}>
                    {pillar.features.map((feature, idx) => (
                        <div 
                        key={`${pillar.id}-feature-${idx}`}
                        className={styles.featureCard}
                        style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                        <div 
                            className={styles.featureIconWrapper} 
                            style={{ background: `linear-gradient(135deg, ${pillar.color}20, ${pillar.color}10)` }}
                        >
                            <feature.icon size={20} className={styles.featureIcon} />
                        </div>
                        <div className={styles.featureContent}>
                            <h4 className={styles.featureTitle}>{feature.title}</h4>
                            <p className={styles.featureDescription}>{feature.description}</p>
                        </div>
                        </div>
                    ))}
                    </div>
                    
                    <div className={styles.pillarActions}>
                    <a href={`/services/${pillar.id}`} className={styles.pillarLink}>
                        <span>Explore {pillar.title}</span>
                        <MoveRight size={18} />
                    </a>
                    </div>
                </div>
                
                <div className={styles.pillarVisualization}>
                    <div 
                    className={styles.pillarVisualBg}
                    style={{ background: pillar.gradient }}
                    ></div>
                    
                    {/* Custom visualization for each pillar */}
                    <div className={styles.pillarVisualContent}>
                    {pillar.id === 'ecommerce' && (
                        <div className={styles.ecommerceVisual}>
                        <div className={styles.deviceFrame}>
                            <div className={styles.deviceScreen}>
                            <div className={styles.ecommerceUI}>
                                <div className={styles.ecommerceHeader}></div>
                                <div className={styles.ecommerceHero}></div>
                                <div className={styles.ecommerceProducts}>
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className={styles.ecommerceProduct}></div>
                                ))}
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className={styles.mobileFrame}>
                            <div className={styles.mobileScreen}>
                            <div className={styles.mobileUI}>
                                <div className={styles.mobileHeader}></div>
                                <div className={styles.mobileContent}></div>
                            </div>
                            </div>
                        </div>
                        </div>
                    )}
                    
{pillar.id === 'digital-marketing' && (
                        <div className={styles.marketingVisual}>
                        <div className={styles.analyticsGraph}>
                            <div className={styles.graphBars}>
                            {[35, 55, 40, 70, 60, 80, 75].map((height, i) => (
                                <div 
                                key={i} 
                                className={styles.graphBar} 
                                style={{ height: `${height}%` }}
                                ></div>
                            ))}
                            </div>
                            <div className={styles.graphLine}></div>
                        </div>
                        <div className={styles.socialIcons}>
                            {['facebook', 'instagram', 'tiktok', 'pinterest', 'twitter'].map((platform) => (
                            <div key={platform} className={`${styles.socialIcon} ${styles[platform]}`}></div>
                            ))}
                        </div>
                        </div>
                    )}
                    
                    {pillar.id === 'design' && (
                        <div className={styles.designVisual}>
                        <div className={styles.packageDesign}>
                            <div className={styles.packageBox}></div>
                            <div className={styles.packageElements}>
                            <div className={styles.designElement1}></div>
                            <div className={styles.designElement2}></div>
                            <div className={styles.designElement3}></div>
                            </div>
                        </div>
                        <div className={styles.printItems}>
                            <div className={styles.printItem1}></div>
                            <div className={styles.printItem2}></div>
                            <div className={styles.printItem3}></div>
                        </div>
                        </div>
                    )}
                    
                    {pillar.id === 'operations' && (
                        <div className={styles.operationsVisual}>
                        <div className={styles.supplyChain}>
                            <div className={styles.warehouse}></div>
                            <div className={styles.logistics}>
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className={styles.logisticsPath}>
                                <div className={styles.logisticsVehicle} style={{ animationDelay: `${i * 0.8}s` }}></div>
                                </div>
                            ))}
                            </div>
                            <div className={styles.destination}></div>
                        </div>
                        <div className={styles.globeWrapper}>
                            <div className={styles.globe}></div>
                            <div className={styles.globeConnections}></div>
                        </div>
                        </div>
                    )}
                    </div>
                </div>
                </div>
            ))}
            </div>
            
            {/* Section footer with CTA */}
            <div className={styles.sectionFooter}>
            <p className={styles.footerText}>
                Our four pillars work seamlessly together to provide a truly end-to-end solution, 
                from attracting and converting customers to creating and delivering products.
            </p>
            <a href="/services" className={styles.ctaButton}>
                <span>Explore All Services</span>
                <ArrowRight size={18} />
            </a>
            </div>
        </div>
        </section>
    );
    };

    export default WhatWeDo;