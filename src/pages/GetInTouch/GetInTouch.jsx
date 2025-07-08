import React, { useState, useEffect, useRef } from 'react';
import {
  MessageSquare, Briefcase, Send, MapPin, Phone, Mail, 
  Zap, ArrowRight, ArrowLeft, CheckCircle2, Calendar, Sparkles, 
  ShoppingCart, Target, Paintbrush, Truck, Globe, 
  Users, Award, Shield, ChevronRight, User, DollarSign,
  ChevronDown, X, ArrowUp
} from 'lucide-react';
import styles from './GetInTouch.module.scss';

const GetInTouch = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedApproach, setSelectedApproach] = useState(null);
  const [isPackageVisible, setIsPackageVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    businessStage: '',
    budget: '',
    interests: []
  });
  
  const sectionRef = useRef(null);
  const formCardRef = useRef(null);
  
  // Service pillars data
  const servicePillars = [
    {
      id: 'ecommerce',
      title: 'Ecommerce Development',
      icon: ShoppingCart,
      color: '#ec4899',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #d946ef 100%)',
      description: 'High-performance websites, mobile apps, and marketplace integrations to boost your digital presence.'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      icon: Target,
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
      description: 'Tailored strategies to boost visibility and drive conversions across digital channels.'
    },
    {
      id: 'design',
      title: 'Design & Production',
      icon: Paintbrush,
      color: '#06b6d4',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%)',
      description: 'Bringing brands to life with unique designs, merchandise, and bespoke packaging solutions.'
    },
    {
      id: 'operations',
      title: 'Operations & Fulfillment',
      icon: Truck,
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
      description: 'Optimizing supply chains for efficiency with global distribution and fulfillment solutions.'
    }
  ];
  
  // Business stages
  const businessStages = [
    { value: 'startup', label: 'Just starting out', icon: Sparkles },
    { value: 'growing', label: 'Growing business', icon: Zap },
    { value: 'established', label: 'Established brand', icon: Award },
    { value: 'enterprise', label: 'Enterprise level', icon: Globe }
  ];
  
  // Solution approaches
  const solutionApproaches = [
    {
      id: 'starter',
      title: 'Starter Approach',
      tier: 'BASIC',
      description: 'For businesses just beginning their journey',
      targetAudience: 'New ventures and small businesses',
      features: [
        'Essential platform development',
        'Foundational marketing setup',
        'Core branding elements',
        'Basic operations management'
      ]
    },
    {
      id: 'growth',
      title: 'Growth Approach',
      tier: 'GROWTH',
      description: 'For growing businesses ready to expand',
      targetAudience: 'Growing businesses with established presence',
      isPopular: true,
      features: [
        'Advanced platform capabilities',
        'Multi-channel marketing strategies',
        'Comprehensive brand development',
        'Streamlined operational processes'
      ]
    },
    {
      id: 'enterprise',
      title: 'Enterprise Approach',
      tier: 'ENTERPRISE',
      description: 'For established brands requiring advanced solutions',
      targetAudience: 'Established brands and enterprise organizations',
      features: [
        'Enterprise-grade platform architecture',
        'Integrated marketing ecosystems',
        'Premium brand experience development',
        'Global operations optimization'
      ]
    }
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
  
  // Handle intersection observer for animations
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
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Toggle service interest
  const handleInterestToggle = (interestId) => {
    setFormData(prev => {
      const currentInterests = [...prev.interests];
      if (currentInterests.includes(interestId)) {
        return { ...prev, interests: currentInterests.filter(id => id !== interestId) };
      } else {
        return { ...prev, interests: [...currentInterests, interestId] };
      }
    });
  };
  
  // Navigate to next step
  const goToNextStep = (e) => {
    if (e) e.preventDefault();
    
    if (currentStep === 1) {
      // Check if required fields in step 1 are filled
      if (!formData.name || !formData.email) {
        // Show error or handle validation
        return;
      }
    }
    
    setCurrentStep(prev => prev + 1);
    
    // Scroll to top of form
    setTimeout(() => {
      if (formCardRef.current) {
        formCardRef.current.scrollTop = 0;
      }
    }, 100);
  };
  
  // Navigate to previous step
  const goToPreviousStep = () => {
    setCurrentStep(prev => Math.max(1, prev - 1));
    
    // Scroll to top of form
    setTimeout(() => {
      if (formCardRef.current) {
        formCardRef.current.scrollTop = 0;
      }
    }, 100);
  };
  
  // Toggle package section visibility
  const togglePackageSection = () => {
    setIsPackageVisible(prev => !prev);
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData, selectedApproach);
    // Here you would typically send the data to your backend
    
    setIsSubmitted(true);
    
    setTimeout(() => {
      if (formCardRef.current) {
        formCardRef.current.scrollTop = 0;
        
        window.scrollTo({
          top: window.pageYOffset + formCardRef.current.getBoundingClientRect().top - 20,
          behavior: 'smooth'
        });
      }
    }, 0);
  };
  
  return (
    <section 
      className={styles.getInTouch}
      ref={sectionRef}
      data-visible={isVisible}
    >
      <div className={styles.sectionBackground}>
        <div className={styles.gridPattern}></div>
        <div className={styles.gradientOverlay}></div>
      </div>
      
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.badgeWrapper}>
              <div className={styles.badge}>
                <Sparkles size={16} />
                <span>Let's work together</span>
              </div>
            </div>
            
            <h1 className={styles.heroTitle}>
              <div className={styles.titleRow}>
                <span className={styles.titleText}>Ready to transform your</span>
              </div>
              <div className={styles.titleRow}>
                <span className={styles.titleText}>
                  <span className={styles.titleTextAccent}>digital presence</span>?
                </span>
              </div>
            </h1>
            
            <div className={styles.heroCopy}>
              <p>
                Whether you have a specific project in mind or just want to explore possibilities,
                we're here to help turn your vision into reality.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Section */}
      <div className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactLayout}>
            {/* Info Panel */}
            <div className={styles.contactInfo}>
              <div className={styles.infoCard}>
                <div className={styles.infoHeader}>
                  <h2>How can we help?</h2>
                  <p>
                    From attracting and converting customers to creating and delivering 
                    products, we provide end-to-end solutions tailored to your needs.
                  </p>
                </div>
                
                <div className={styles.contactDetails}>
                  <div className={styles.contactItem}>
                    <MapPin size={20} />
                    <div>
                      <h3>Visit us</h3>
                      <p>Unit 18, Sleaford Business Park, Sleaford, NG34 7EQ</p>
                    </div>
                  </div>
                  
                  <div className={styles.contactItem}>
                    <Phone size={20} />
                    <div>
                      <h3>Call us</h3>
                      <p>+44(0)1529 300452</p>
                    </div>
                  </div>
                  
                  <div className={styles.contactItem}>
                    <Mail size={20} />
                    <div>
                      <h3>Email us</h3>
                      <p>customerservices@iv-creative.co.uk</p>
                    </div>
                  </div>
                </div>
                
                <div className={styles.servicePillars}>
                  <h3>Our core services</h3>
                  <div className={styles.pillarsGrid}>
                    {servicePillars.map((pillar) => (
                      <div 
                        key={pillar.id} 
                        className={styles.pillarCard}
                        style={{ '--pillar-color': pillar.color }}
                      >
                        <div className={styles.pillarIcon}>
                          <pillar.icon size={24} />
                        </div>
                        <div className={styles.pillarContent}>
                          <h4>{pillar.title}</h4>
                          <p>{pillar.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className={styles.contactForm}>
              <div className={styles.formCard} ref={formCardRef}>
                {!isSubmitted ? (
                  <>
                    <div className={styles.formHeader}>
                      <h2>Tell us about your project</h2>
                      
                      {/* Progress indicator */}
                      {currentStep > 1 && (
                        <div className={styles.progressWrapper}>
                          <div className={styles.progressSteps}>
                            {[1, 2, 3].map(step => (
                              <div 
                                key={step} 
                                className={`${styles.progressStep} ${currentStep >= step ? styles.active : ''}`}
                                onClick={() => step < currentStep && setCurrentStep(step)}
                              >
                                {step}
                              </div>
                            ))}
                          </div>
                          <div className={styles.progressBar}>
                            <div 
                              className={styles.progressFill} 
                              style={{ width: `${(currentStep - 1) * 50}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <form onSubmit={handleSubmit}>
                      {/* Step 1: Basic Contact Info */}
                      {currentStep === 1 && (
                        <div className={styles.formStep}>
                          <div className={styles.stepHeading}>
                            <span className={styles.stepNumber}>1</span>
                            <h3>Contact Information</h3>
                          </div>
                          
                          <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                              <label htmlFor="name">Your Name *</label>
                              <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Jane Smith"
                                required
                              />
                            </div>
                            
                            <div className={styles.formGroup}>
                              <label htmlFor="email">Email Address *</label>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="jane@example.com"
                                required
                              />
                            </div>
                          </div>
                          
                          <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                              <label htmlFor="phone">Phone Number (Optional)</label>
                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="+44 7123 456789"
                              />
                            </div>
                            
                            <div className={styles.formGroup}>
                              <label htmlFor="company">Company (Optional)</label>
                              <input
                                type="text"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                                placeholder="Your Company Ltd"
                              />
                            </div>
                          </div>
                          
                          <div className={styles.formGroup}>
                            <label htmlFor="message">How can we help? *</label>
                            <textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              placeholder="Tell us about your project or inquiry..."
                              rows={4}
                              required
                            />
                          </div>
                          
                          <div className={styles.messageLength}>
                            <span>Brief message</span>
                            <div className={styles.messageLengthIndicator}>
                              <div className={`${styles.messageLengthBar} ${formData.message.length > 30 ? styles.good : styles.short}`}></div>
                            </div>
                            <span>Detailed message</span>
                          </div>
                          
                          <div className={styles.optionsToggle}>
  <button 
    type="button" 
    className={styles.optionsToggleButton}
    onClick={() => {
      // Check if required fields are filled before proceeding
      if (formData.name && formData.email && formData.message) {
        goToNextStep();
      } else {
        // You could add validation messaging here
        alert("Please fill in all required fields before adding more details.");
      }
    }}
  >
    <span>Add more details (optional)</span>
    <ChevronDown size={18} />
  </button>
</div>  
                          
                          <button type="submit" className={styles.submitButton}>
                            <span>Send Message</span>
                            <Send size={18} />
                          </button>
                        </div>
                      )}
                      
                      {/* Step 2: Business Details */}
                      {currentStep === 2 && (
                        <div className={styles.formStep}>
                          <div className={styles.stepHeading}>
                            <span className={styles.stepNumber}>2</span>
                            <h3>Business Details</h3>
                          </div>
                          
                          <div className={styles.formGroup}>
                            <label>What stage is your business at?</label>
                            <div className={styles.stageOptions}>
                              {businessStages.map((stage) => (
                                <div 
                                  key={stage.value}
                                  className={`${styles.stageOption} ${formData.businessStage === stage.value ? styles.selected : ''}`}
                                  onClick={() => setFormData({...formData, businessStage: stage.value})}
                                >
                                  <stage.icon size={20} />
                                  <span>{stage.label}</span>
                                  <div className={styles.stageCheck}>
                                    {formData.businessStage === stage.value && <CheckCircle2 size={16} />}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className={styles.formGroup}>
                            <label>What's your approximate budget?</label>
                            <div className={styles.budgetOptions}>
                              {[
                                { value: 'under-5k', label: 'Under £5,000', icon: Briefcase },
                                { value: '5k-15k', label: '£5,000 - £15,000', icon: Briefcase },
                                { value: '15k-50k', label: '£15,000 - £50,000', icon: Briefcase },
                                { value: 'over-50k', label: 'Over £50,000', icon: Briefcase }
                              ].map((budget) => (
                                <div 
                                  key={budget.value}
                                  className={`${styles.budgetOption} ${formData.budget === budget.value ? styles.selected : ''}`}
                                  onClick={() => setFormData({...formData, budget: budget.value})}
                                >
                                  <budget.icon size={20} />
                                  <span>{budget.label}</span>
                                  <div className={styles.budgetCheck}>
                                    {formData.budget === budget.value && <CheckCircle2 size={16} />}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className={styles.formGroup}>
                            <label>What services are you interested in?</label>
                            <div className={styles.interestOptions}>
                              {servicePillars.map((pillar) => (
                                <div 
                                  key={pillar.id}
                                  className={`${styles.interestOption} ${formData.interests.includes(pillar.id) ? styles.selected : ''}`}
                                  style={{ '--interest-color': pillar.color }}
                                  onClick={() => handleInterestToggle(pillar.id)}
                                >
                                  <div className={styles.interestIcon}>
                                    <pillar.icon size={18} />
                                  </div>
                                  <span>{pillar.title}</span>
                                  <div className={styles.interestCheck}>
                                    {formData.interests.includes(pillar.id) && <CheckCircle2 size={16} />}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className={styles.formNavigation}>
                            <button 
                              type="button" 
                              className={styles.backButton}
                              onClick={goToPreviousStep}
                            >
                              <ArrowLeft size={18} />
                              <span>Back</span>
                            </button>
                            
                            <button 
                              type="button" 
                              className={styles.nextButton}
                              onClick={goToNextStep}
                            >
                              <span>Next: Solution Approaches</span>
                              <ArrowRight size={18} />
                            </button>
                          </div>
                        </div>
                      )}
                      
                      {/* Step 3: Solution Approaches */}
                      {currentStep === 3 && (
                        <div className={styles.formStep}>
                          <div className={styles.stepHeading}>
                            <span className={styles.stepNumber}>3</span>
                            <h3>Solution Approaches</h3>
                          </div>
                          
                          <p className={styles.stepDescription}>
                            Based on your requirements, select an approach that best fits your needs and budget.
                          </p>
                          
                          <div className={styles.solutionApproaches}>
                            {solutionApproaches.map((approach) => (
                              <div 
                                key={approach.id}
                                className={`${styles.approachCard} ${selectedApproach?.id === approach.id ? styles.selected : ''} ${approach.isPopular ? styles.popular : ''}`}
                                onClick={() => setSelectedApproach(approach)}
                                style={{ 
                                  '--approach-color': approach.tier === 'BASIC' ? '#3b82f6' : 
                                                      approach.tier === 'GROWTH' ? '#f59e0b' : 
                                                      '#4b5563'
                                }}
                              >
                                {approach.isPopular && (
                                  <div className={styles.popularBadge}>
                                    <Sparkles size={14} />
                                    <span>Most Popular</span>
                                  </div>
                                )}
                                
                                <div className={styles.approachGlow}></div>
                                
                                <div className={styles.tierBadge}>
                                  {approach.tier}
                                </div>
                                
                                <div className={styles.approachHeader}>
                                  <h4>{approach.title}</h4>
                                  <p className={styles.approachDescription}>{approach.description}</p>
                                  <div className={styles.targetAudience}>{approach.targetAudience}</div>
                                </div>
                                
                                <div className={styles.approachFeatures}>
                                  {approach.features.map((feature, idx) => (
                                    <div key={idx} className={styles.featureItem}>
                                      <CheckCircle2 size={16} />
                                      <span>{feature}</span>
                                    </div>
                                  ))}
                                </div>
                                
                                <div className={styles.approachSelectButton}>
                                  {selectedApproach?.id === approach.id ? (
                                    <span className={styles.selectedLabel}>
                                      <CheckCircle2 size={18} />
                                      Selected
                                    </span>
                                  ) : (
                                    <span className={styles.selectButton}>
                                      Select This Approach
                                    </span>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          <div className={styles.formNavigation}>
                            <button 
                              type="button" 
                              className={styles.backButton}
                              onClick={goToPreviousStep}
                            >
                              <ArrowLeft size={18} />
                              <span>Back</span>
                            </button>
                            
                            <button type="submit" className={styles.submitButton}>
                              <span>Submit Request</span>
                              <Send size={18} />
                            </button>
                          </div>
                        </div>
                      )}
                    </form>
                  </>
                ) : (
                  <div className={styles.successPage}>
                    <div className={styles.successHeader}>
                      <div className={styles.successIcon}>
                        <CheckCircle2 size={40} />
                      </div>
                      <h3>Thank you {formData.name.split(' ')[0]} for reaching out!</h3>
                      <p>We've received your request and will be in touch shortly. Here's a summary of your enquiry:</p>
                    </div>
                    
                    <div className={styles.summaryCard}>
                      <div className={styles.summarySection}>
                        <h4>Contact Details</h4>
                        <div className={styles.summaryItem}>
                          <User size={16} />
                          <span>Name:</span>
                          <strong>{formData.name}</strong>
                        </div>
                        <div className={styles.summaryItem}>
                          <Mail size={16} />
                          <span>Email:</span>
                          <strong>{formData.email}</strong>
                        </div>
                        {formData.phone && (
                          <div className={styles.summaryItem}>
                            <Phone size={16} />
                            <span>Phone:</span>
                            <strong>{formData.phone}</strong>
                          </div>
                        )}
                        {formData.company && (
                          <div className={styles.summaryItem}>
                            <Briefcase size={16} />
                            <span>Company:</span>
                            <strong>{formData.company}</strong>
                          </div>
                        )}
                      </div>
                      
                      {formData.businessStage || formData.budget ? (
                        <div className={styles.summarySection}>
                          <h4>Business Details</h4>
                          {formData.businessStage && (
                            <div className={styles.summaryItem}>
                              <Zap size={16} />
                              <span>Business Stage:</span>
                              <strong>
                                {businessStages.find(stage => stage.value === formData.businessStage)?.label || formData.businessStage}
                              </strong>
                            </div>
                          )}
                          {formData.budget && (
                            <div className={styles.summaryItem}>
                              <DollarSign size={16} />
                              <span>Budget Range:</span>
                              <strong>
                                {formData.budget === 'under-5k' ? 'Under £5,000' :
                                formData.budget === '5k-15k' ? '£5,000 - £15,000' :
                                formData.budget === '15k-50k' ? '£15,000 - £50,000' :
                                formData.budget === 'over-50k' ? 'Over £50,000' : formData.budget}
                              </strong>
                            </div>
                          )}
                        </div>
                      ) : null}
                      
                      {formData.interests.length > 0 && (
                        <div className={styles.summarySection}>
                          <h4>Services Interested In</h4>
                          <div className={styles.interestTags}>
                            {formData.interests.map(interest => {
                              const pillar = servicePillars.find(p => p.id === interest);
                              return (
                                <div 
                                  key={interest} 
                                  className={styles.interestTag}
                                  style={{ '--interest-color': pillar?.color || '#ec4899' }}
                                >
                                  {pillar ? <pillar.icon size={14} /> : <Zap size={14} />}
                                  <span>{pillar?.title || interest}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                      
                      {selectedApproach && (
                        <div className={styles.summarySection}>
                          <h4>Solution Approach</h4>
                          <div className={styles.approachSummary}>
                            <div 
                              className={styles.approachBadge}
                              style={{ 
                                '--approach-color': selectedApproach.tier === 'BASIC' ? '#3b82f6' : 
                                                    selectedApproach.tier === 'GROWTH' ? '#f59e0b' : '#4b5563'
                              }}
                            >
                              {selectedApproach.tier}
                            </div>
                            <strong>{selectedApproach.title}</strong>
                            <p>{selectedApproach.description}</p>
                          </div>
                        </div>
                      )}
                      
                      {formData.message && (
                        <div className={styles.summarySection}>
                          <h4>Your Message</h4>
                          <div className={styles.messageSummary}>
                            <MessageSquare size={16} />
                            <p>"{formData.message}"</p>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className={styles.nextSteps}>
                      <h4>What's Next?</h4>
                      <div className={styles.nextStepsList}>
                        <div className={styles.nextStep}>
                          <div className={styles.stepNumber}>1</div>
                          <div className={styles.stepInfo}>
                            <strong>Initial Review</strong>
                            <p>Our team will review your enquiry within 24 hours</p>
                          </div>
                        </div>
                        <div className={styles.nextStep}>
                          <div className={styles.stepNumber}>2</div>
                          <div className={styles.stepInfo}>
                            <strong>Contact</strong>
                            <p>We'll reach out to discuss your requirements in detail</p>
                          </div>
                        </div>
                        <div className={styles.nextStep}>
                          <div className={styles.stepNumber}>3</div>
                          <div className={styles.stepInfo}>
                            <strong>Proposal</strong>
                            <p>We'll prepare a tailored solution for your needs</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className={styles.successActions}>
                      <button 
                        className={styles.resetButton}
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            name: '',
                            email: '',
                            phone: '',
                            company: '',
                            message: '',
                            businessStage: '',
                            budget: '',
                            interests: []
                          });
                          setSelectedApproach(null);
                          setCurrentStep(1);
                        }}
                      >
                        <ArrowLeft size={18} />
                        <span>Submit Another Enquiry</span>
                      </button>
                      
                      <a href="/portfolio" className={styles.portfolioButton}>
                        <span>View Our Portfolio</span>
                        <ArrowRight size={18} />
                      </a>
                    </div>
                  </div>
                )}
              </div>
              </div>
         </div>
       </div>
     </div>
     
     {/* Brands Section */}
     <div className={styles.brandsSection}>
       <div className={styles.container}>
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

     {/* Process Section */}
     <div className={styles.processSection}>
       <div className={styles.container}>
         <div className={styles.processHeader}>
           <div className={styles.processBadge}>
             <Zap size={16} />
             <span>Our Approach</span>
           </div>
           <h2 className={styles.processTitle}>
             We follow a proven <span className={styles.highlight}>process</span> to deliver results
           </h2>
           <p className={styles.processDescription}>
             Our systematic approach ensures we deliver exceptional outcomes for all of our clients
           </p>
         </div>
         
         <div className={styles.processStepsHorizontal}>
           <div className={styles.timelineTrackHorizontal}></div>
           
           <div className={styles.stepsGridHorizontal}>
             <div className={styles.stepHorizontal}>
               <div className={styles.stepNumber}>1</div>
               <div className={styles.stepContent}>
                 <h3>Discovery</h3>
                 <p>We dive deep to understand your business, goals, and challenges</p>
               </div>
             </div>
             
             <div className={styles.stepHorizontal}>
               <div className={styles.stepNumber}>2</div>
               <div className={styles.stepContent}>
                 <h3>Strategy</h3>
                 <p>We develop a tailored strategy to achieve your specific objectives</p>
               </div>
             </div>
             
             <div className={styles.stepHorizontal}>
               <div className={styles.stepNumber}>3</div>
               <div className={styles.stepContent}>
                 <h3>Creation</h3>
                 <p>Our team brings your vision to life with expert execution</p>
               </div>
             </div>
             
             <div className={styles.stepHorizontal}>
               <div className={styles.stepNumber}>4</div>
               <div className={styles.stepContent}>
                 <h3>Launch</h3>
                 <p>We ensure a smooth deployment and transition to market</p>
               </div>
             </div>
             
             <div className={styles.stepHorizontal}>
               <div className={styles.stepNumber}>5</div>
               <div className={styles.stepContent}>
                 <h3>Growth</h3>
                 <p>Continuous optimization and scaling to maximize your success</p>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
     
     {/* Map Section */}
     <div className={styles.mapSection}>
       <div className={styles.container}>
         <div className={styles.mapWrapper}>
           <div className={styles.googleMap}>
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2403.5598092483874!2d-0.41105932328155073!3d52.99825997935183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4878765d6b4f49c9%3A0x1924ee029f91ed41!2sSleaford%20Business%20Park%2C%20Sleaford%20NG34%207EQ!5e0!3m2!1sen!2suk!4v1688655727945!5m2!1sen!2suk" 
               width="100%" 
               height="450" 
               style={{ border: 0 }} 
               allowFullScreen="" 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
           </div>
         </div>
       </div>
     </div>
     
     {/* CTA Section */}
     <div className={styles.ctaSection}>
       <div className={styles.container}>
         <div className={styles.ctaCard}>
           <div className={styles.ctaContent}>
             <h2>Ready to get started?</h2>
             <p>Book a free consultation call with our experts</p>
             <div className={styles.ctaFeatures}>
               <div className={styles.ctaFeature}>
                 <CheckCircle2 size={20} />
                 <span>No obligation</span>
               </div>
               <div className={styles.ctaFeature}>
                 <CheckCircle2 size={20} />
                 <span>Tailored advice</span>
               </div>
               <div className={styles.ctaFeature}>
                 <CheckCircle2 size={20} />
                 <span>Clear next steps</span>
               </div>
             </div>
             <button className={styles.ctaButton}>
               <Calendar size={18} />
               <span>Schedule a Call</span>
               <ChevronRight size={18} />
             </button>
           </div>
           
           <div className={styles.ctaDecoration}>
             <div className={styles.ctaShape1}></div>
             <div className={styles.ctaShape2}></div>
             <div className={styles.ctaShape3}></div>
           </div>
         </div>
       </div>
     </div>
   </section>
 );
};

export default GetInTouch;