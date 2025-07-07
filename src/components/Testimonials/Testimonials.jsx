import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import styles from './Testimonials.module.scss';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const autoPlayRef = useRef(null);

  // Testimonials data
  const testimonials = [
    {
      id: 'coca-cola',
      quote: "Their strategic approach to brand personalization helped us connect with our customers on a deeper level. The results exceeded our expectations with a 47% increase in engagement.",
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "Coca-Cola",
      color: "#E61A27"
    },
    {
      id: 'jura',
      quote: "The campaign transformed how we approach gifting occasions. Their innovative strategies delivered exceptional ROI and strengthened our premium market position.",
      author: "Michael Chen",
      position: "Brand Manager",
      company: "Jura",
      color: "#D4A55C"
    },
    {
      id: 'wgac',
      quote: "Working with this team was transformative for our eco-friendly brand. They understood our mission and created a personalization campaign that resonated with our audience authentically.",
      author: "Emma Patel",
      position: "CEO",
      company: "Who Gives A Crap",
      color: "#4BB4E6"
    },
    {
      id: 'moonpig',
      quote: "Their creative approach to our customizable greeting cards significantly boosted our customer retention. The attention to detail and understanding of our brand values was exceptional.",
      author: "David Reynolds",
      position: "Head of Digital",
      company: "Moonpig",
      color: "#FF69B4"
    }
  ];

  // Intersection Observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        startAutoPlay();
      } else {
        stopAutoPlay();
      }
    }, { threshold: 0.2 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      stopAutoPlay();
    };
  }, []);

  // Auto play functionality
  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayRef.current = setInterval(() => {
      setActiveIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  // Navigation handlers
  const handlePrev = () => {
    setActiveIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
    startAutoPlay();
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
    startAutoPlay();
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
    startAutoPlay();
  };

  return (
    <section 
      className={`${styles.testimonialsSection} ${isVisible ? styles.visible : ''}`}
      ref={sectionRef}
    >
      <div className={styles.container}>
        <div className={styles.sectionIntro}>
          <div className={styles.sectionHeading}>
            <h2 className={styles.sectionTitle}>Testimonials</h2>
            <h3 className={styles.sectionSubtitle}>
              What our <span className={styles.highlight}>clients</span> say
            </h3>
          </div>
          
          <div className={styles.navigation}>
            <button 
              className={styles.navButton} 
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={18} />
            </button>
            <button 
              className={styles.navButton} 
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
        
        <div className={styles.testimonialSlider}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`${styles.testimonialSlide} ${index === activeIndex ? styles.active : ''}`}
              style={{ '--testimonial-color': testimonial.color }}
            >
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialQuoteWrapper}>
                  <div className={styles.logoContainer}>
                    {/* Logo placeholder - will be replaced with actual logo */}
                    <div className={styles.logoPlaceholder} style={{ color: testimonial.color }}>
                      {testimonial.company}
                    </div>
                  </div>
                  
                  <blockquote className={styles.testimonialQuote}>
                    <span className={styles.quoteIcon}>"</span>
                    {testimonial.quote}
                    <span className={styles.quoteIconEnd}>"</span>
                  </blockquote>
                  
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.authorInfo}>
                      <p className={styles.authorName}>{testimonial.author}</p>
                      <p className={styles.authorDetails}>
                        <span className={styles.position}>{testimonial.position}</span>
                        <span className={styles.separator}>•</span>
                        <span className={styles.company}>{testimonial.company}</span>
                      </p>
                    </div>
                    
                    <div className={styles.brandAccent} style={{ backgroundColor: testimonial.color }}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div className={styles.indicators}>
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`${styles.indicator} ${index === activeIndex ? styles.active : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;