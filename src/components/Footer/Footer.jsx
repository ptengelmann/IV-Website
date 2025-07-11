import React from 'react';
import { Mail, Phone, Linkedin, Instagram, MapPin } from 'lucide-react';
import styles from './Footer.module.scss';
import logo from '../../assets/logos/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerBackground}>
        <div className={styles.patternOverlay}></div>
        <div className={styles.grid}></div>
        <div className={styles.gradientOverlay}></div>
      </div>

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

            {/* Quick Links */}
            <div className={styles.linksColumn}>
              <h3 className={styles.linksTitle}>Quick Links</h3>
              <nav className={styles.quickLinks}>
                <a href="/" className={styles.quickLink}>Home</a>
                <a href="/about" className={styles.quickLink}>Who We Are</a>
                <a href="/services" className={styles.quickLink}>What We Do</a>
                <a href="/portfolio" className={styles.quickLink}>Portfolio</a>
                <a href="/blog" className={styles.quickLink}>Blog</a>
              </nav>
            </div>

            {/* Head Office */}
            <div className={styles.addressColumn}>
              <div className={styles.addressBlock}>
                <h3 className={styles.addressTitle}>Head Office</h3>
                <p className={styles.addressSubtitle}>(Registered Office Address)</p>
                <address className={styles.address}>
                  <MapPin size={18} className={styles.addressIcon} />
                  <span>
                    The Griffin, Main Road. Plumtree,<br />
                    Nottingham, NG12 5NB
                  </span>
                </address>
              </div>
            </div>

            {/* Fulfilment & Production Facility */}
            <div className={styles.addressColumn}>
              <div className={styles.addressBlock}>
                <h3 className={styles.addressTitle}>Fulfilment & Production Facility</h3>
                <p className={styles.addressSubtitle}>(Deliveries)</p>
                <address className={styles.address}>
                  <MapPin size={18} className={styles.addressIcon} />
                  <span>
                    Unit 18, Sleaford Business Park,<br />
                    Sleaford, NG34 7EQ
                  </span>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className={styles.bottomSection}>
        <div className={styles.container}>
          <div className={styles.bottomContent}>
            <div className={styles.copyright}>
              <p>
                Copyright © <a href="/" className={styles.copyrightLink}>
                  iv Creative
                </a>, {currentYear}. All Rights Reserved.
              </p>
            </div>

            <div className={styles.legalLinks}>
              <a href="/terms" className={styles.legalLink}>Terms And Conditions</a>
              <span className={styles.legalSeparator}></span>
              <a href="/privacy" className={styles.legalLink}>Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
