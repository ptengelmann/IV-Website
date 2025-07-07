import React, { useState, useEffect, useRef } from 'react';
import { Shield, FileText, ExternalLink, Copyright } from 'lucide-react';
import styles from './TermsConditions.module.scss';

const TermsConditions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to trigger animations
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

  return (
    <section 
      className={`${styles.termsConditions} ${isVisible ? styles.visible : ''}`} 
      ref={sectionRef}
    >
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              <div className={styles.titleRow}>
                <span className={styles.titleText}>Terms & </span>
                <span className={styles.titleTextAccent}>Conditions</span>
              </div>
            </h1>
            <div className={styles.heroDescription}>
              <p>By accessing this site, you signify your agreement with and understanding of the following terms of use and legal restrictions pertaining to both this site and the material in it.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content Section */}
      <div className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.termsWrapper}>
            {/* Copyright Section */}
            <div className={styles.termsSection}>
              <div className={styles.sectionHeader}>
                <div className={styles.iconWrapper}>
                  <Copyright size={24} />
                </div>
                <h2>Copyright</h2>
              </div>
              <div className={styles.sectionContent}>
                <p>All logos, images and trademarks mentioned here in belong to their respective owners. All pages on this web site are the property of IV Creative. You may not otherwise copy or transmit the contents of this website either electronically or in hard copies. You may not alter the content of this website in any manner.</p>
                
                <p>If you are interested in using the contents of this website in any manner except as described elsewhere in this document, please contact webmaster, for information on licensing.</p>
              </div>
            </div>
            
            {/* Disclaimer Section */}
            <div className={styles.termsSection}>
              <div className={styles.sectionHeader}>
                <div className={styles.iconWrapper}>
                  <Shield size={24} />
                </div>
                <h2>Disclaimer</h2>
              </div>
              <div className={styles.sectionContent}>
                <p>IV Creative makes every effort to ensure that information contained in these pages is accurate and up to date. However, no liability is accepted arising from reliance upon the information contained in these pages or any other information accessed via these web pages.</p>
              </div>
            </div>
            
            {/* External Links Section */}
            <div className={styles.termsSection}>
              <div className={styles.sectionHeader}>
                <div className={styles.iconWrapper}>
                  <ExternalLink size={24} />
                </div>
                <h2>Links to External Sites</h2>
              </div>
              <div className={styles.sectionContent}>
                <p>This site may contain links to other sites. IV Creative is not responsible for any content that appears on these linked sites.</p>
              </div>
            </div>
            
            {/* General Usage Guidelines - Added for completeness */}
            <div className={styles.termsSection}>
              <div className={styles.sectionHeader}>
                <div className={styles.iconWrapper}>
                  <FileText size={24} />
                </div>
                <h2>General Usage Guidelines</h2>
              </div>
              <div className={styles.sectionContent}>
                <p>In using this website, you agree not to:</p>
                <ul>
                  <li>Use this website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.</li>
                  <li>Use this website in any way which is unlawful, illegal, fraudulent or harmful.</li>
                  <li>Use this website for any purpose related to marketing without our express written consent.</li>
                  <li>Use this website to copy, store, host, transmit, send, use, publish or distribute any material which consists of malware.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className={styles.termsFooter}>
            <div className={styles.acceptanceNote}>
              <p>By continuing to use our website, you acknowledge that you have read, understood, and agree to these terms and conditions.</p>
            </div>
            <div className={styles.lastUpdated}>
              <p>Last Updated: July 5, 2025</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact CTA Section */}
      <div className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <h3>Have Questions About Our Terms?</h3>
              <p>Our team is happy to answer any questions you may have about our terms and conditions.</p>
              <a href="/contact" className={styles.ctaButton}>Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsConditions;