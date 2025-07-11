import React, { useState, useEffect, useRef } from 'react';
import {
  MessageSquare, Briefcase, Send, MapPin, Phone, Mail, 
  Zap, ArrowRight, ArrowLeft, CheckCircle2, Star, 
  ShoppingCart, Target, Paintbrush, Truck, 
  Users, Award, Shield, User, DollarSign,
  ChevronDown, X, Sparkles, Globe
} from 'lucide-react';
import styles from './GetInTouch.module.scss';

const GetInTouch = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedApproach, setSelectedApproach] = useState(null);
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
      color: '#1B7DC2',
      description: 'High-performance websites, mobile apps, and marketplace integrations to boost your digital presence.'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      icon: Target,
      color: '#1B7DC2',
      description: 'Tailored strategies to boost visibility and drive conversions across digital channels.'
    },
    {
      id: 'design',
      title: 'Design & Production',
      icon: Paintbrush,
      color: '#1B7DC2',
      description: 'Bringing brands to life with unique designs, merchandise, and bespoke packaging solutions.'
    },
    {
      id: 'operations',
      title: 'Operations & Fulfillment',
      icon: Truck,
      color: '#1B7DC2',
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
  
  // Featured clients - from the Hero section
  const clients = [
    { name: 'Coca-Cola', color: '#F40009' },
    { name: 'Renais', color: '#E5DDB2' },
    { name: 'Moonpig', color: '#FF629B' },
    { name: 'Who Gives A Crap', color: '#FFFFFF' },
    { name: 'Diageo', color: '#004B8D' },
    { name: 'Glenfiddich', color: '#DFB232' },
    { name: 'Fox & Vamp', color: '#E9A23D' }
  ];
  
  // Handle intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsLoaded(true);
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
      className={`${styles.getInTouch} ${isLoaded ? styles.loaded : ''}`}
      ref={sectionRef}
    >
      <div className={styles.sectionBackground}>
        <div className={styles.patternOverlay}></div>
        <div className={styles.grid}></div>
        <div className={styles.gradientOverlay}></div>
      </div>
      
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.badgeWrapper}>
              <div className={styles.badge}>
                <Star size={14} />
                <span>Let's work together</span>
              </div>
            </div>
            
            <h1 className={styles.heroTitle}>
              <div className={styles.titleRow}>
                <span className={styles.headlineText}>Ready to transform your</span>
              </div>
              <div className={styles.titleRow}>
                <span className={styles.headlineTextPink}>digital presence</span>
                <span className={styles.headlineText}>?</span>
              </div>
            </h1>
            
            <div className={styles.subheadlineWrapper}>
              <p className={styles.subheadline}>
                Whether you have a specific project in mind or just want to explore possibilities,
                we're here to help turn your <span className={styles.emphasisTextPink}>vision</span> into 
                <span className={styles.emphasisTextPink}> reality</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Section - Redesigned Layout */}
      <div className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactLayout}>
            
            {/* Combined form and info */}
            <div className={styles.formAndInfoContainer}>
              {/* Contact Form - Left Side */}
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
                                    '--approach-color': approach.tier === 'BASIC' ? '#1B7DC2' : 
                                                        approach.tier === 'GROWTH' ? '#E72D88' : 
                                                        '#4B5563'
                                  }}
                                >
                                  {approach.isPopular && (
                                    <div className={styles.popularBadge}>
                                      <Star size={14} />
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
                                    style={{ '--interest-color': pillar?.color || '#E72D88' }}
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
                                  '--approach-color': selectedApproach.tier === 'BASIC' ? '#1B7DC2' : 
                                                      selectedApproach.tier === 'GROWTH' ? '#E72D88' : '#4B5563'
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
              
              {/* Contact Info Panel - Right Side */}
              <div className={styles.contactInfo}>
                <div className={styles.infoCard}>
                  <div className={styles.infoHeader}>
                    <h2>How can we help?</h2>
                    <p>
                      From <span className={styles.emphasisTextPink}>attracting</span> and <span className={styles.emphasisTextPink}>converting</span> customers to <span className={styles.emphasisTextPink}>creating</span> and <span className={styles.emphasisTextPink}>delivering</span> products, we provide end-to-end solutions tailored to your needs.
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
            </div>
          </div>
        </div>
      </div>
      
      {/* Trusted Brands Section - From Hero Component */}
      <div className={styles.clientsSection}>
        <div className={styles.container}>
          <div className={styles.clientsWrapper}>
            <div className={styles.clientsHeading}>
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
      </div>
    </section>
  );
};

export default GetInTouch;