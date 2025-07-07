import React from 'react';
import { ArrowRight, Mail, Phone, Linkedin, Instagram } from 'lucide-react';
import styles from './Footer.module.scss';
// Import the logo image
import logo from '../../assets/logos/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      {/* Top section */}
      <div className={styles.topSection}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            {/* Logo and contact info */}
            <div className={styles.companyInfo}>
              <a href="/" className={styles.footerLogo}>
                <img src={logo} alt="IV Creative Logo" className={styles.logoImage} />
              </a>
              
              <div className={styles.contactDetails}>
                <h3 className={styles.contactTitle}>Contact Us</h3>
                
                <a href="mailto:customerservices@iv-creative.co.uk" className={styles.contactLink}>
                  <Mail size={18} />
                  <span>customerservices@iv-creative.co.uk</span>
                </a>
                
                <a href="tel:+4401529300452" className={styles.contactLink}>
                  <Phone size={18} />
                  <span>+44(0)1529 300452</span>
                </a>
              </div>
            </div>
            
            {/* Address columns */}
            <div className={styles.addressColumn}>
              <div className={styles.addressBlock}>
                <h3 className={styles.addressTitle}>Fulfilment & Production Facility</h3>
                <p className={styles.addressSubtitle}>(Deliveries)</p>
                <address className={styles.address}>
                  Unit 18, Sleaford Business Park,<br />
                  Sleaford, NG34 7EQ
                </address>
              </div>
            </div>
            
            <div className={styles.addressColumn}>
              <div className={styles.addressBlock}>
                <h3 className={styles.addressTitle}>Head Office:</h3>
                <p className={styles.addressSubtitle}>(Registered Office Address)</p>
                <address className={styles.address}>
                  The Griffin, Main Road. Plumtree,<br />
                  Nottingham, NG12 5NB
                </address>
              </div>
            </div>
            
            {/* CTA */}
            <div className={styles.ctaColumn}>
              <a href="/contact" className={styles.ctaButton}>
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation section */}
      <div className={styles.navSection}>
        <div className={styles.container}>
          <nav className={styles.footerNav}>
            <a href="/" className={styles.footerNavLink}>Home</a>
            <a href="/about" className={styles.footerNavLink}>Who We Are</a>
            <a href="/services" className={styles.footerNavLink}>What We Do</a>
            <a href="/portfolio" className={styles.footerNavLink}>Portfolio</a>
            <a href="/blog" className={styles.footerNavLink}>Blog</a>
          </nav>
        </div>
      </div>
      
      {/* Bottom section */}
      <div className={styles.bottomSection}>
        <div className={styles.container}>
          <div className={styles.bottomContent}>
            <div className={styles.copyright}>
              <p>Copyright © <a href="/" className={styles.copyrightLink}>iv Creative</a>, {currentYear}. All Rights Reserved.</p>
            </div>
            
            <div className={styles.legalLinks}>
              <a href="/terms" className={styles.legalLink}>Terms And Conditions</a>
              <span className={styles.legalSeparator}></span>
              <a href="/privacy" className={styles.legalLink}>Privacy Policy</a>
            </div>
            
            <div className={styles.socialLinks}>
              <a href="https://linkedin.com" className={styles.socialLink} aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" className={styles.socialLink} aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;