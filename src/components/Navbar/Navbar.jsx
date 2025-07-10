import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Zap, 
  ShoppingBag, 
  Layers, 
  Box,
  ArrowRight
} from 'lucide-react';
import styles from './Navbar.module.scss';
// Import the logo image
import logo from '../../assets/logos/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'Who we are', link: '/who-we-are' },
    { 
      name: 'What we do', 
      link: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Digital Marketing', link: '/services/digital-marketing', icon: Zap, color: '#E72D88' },
        { name: 'eCommerce', link: '/services/ecommerce', icon: ShoppingBag, color: '#197DC2' },
        { name: 'Design, Print & Production', link: '/services/design', icon: Layers, color: '#37BACD' },
        { name: 'Operations', link: '/services/operations', icon: Box, color: '#954091' }
      ]
    },
    { name: 'Portfolio', link: '/portfolio' },
    { name: 'Blog', link: '/blog' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = isMobileMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.navbarContent}>
          <a href="/" className={styles.logo}>
            <img src={logo} alt="IV Creative Logo" className={styles.logoImage} />
          </a>

          <div className={styles.mobileMenuToggle} onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>

          <div className={`${styles.navMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
            <ul className={styles.navLinks} ref={dropdownRef}>
              {menuItems.map((item, index) => (
                <li key={index} className={`${styles.navItem} ${item.hasDropdown ? styles.hasDropdown : ''}`}>
                  {item.hasDropdown ? (
                    <>
                      <button 
                        className={`${styles.navLink} ${activeDropdown === index ? styles.active : ''}`}
                        onClick={() => toggleDropdown(index)}
                      >
                        {item.name}
                        <ChevronDown size={16} className={styles.dropdownIcon} />
                      </button>
                      
                      <div className={`${styles.dropdownMenu} ${activeDropdown === index ? styles.active : ''}`}>
                        <div className={styles.dropdownHeader}>
                          <h3>Our Services</h3>
                          <p>Comprehensive solutions for your business needs</p>
                        </div>
                        
                        <div className={styles.dropdownContent}>
                          {item.dropdownItems.map((dropdownItem, dIdx) => (
                            <a 
                              key={dIdx} 
                              href={dropdownItem.link} 
                              className={styles.dropdownItem}
                              style={{ '--item-color': dropdownItem.color }}
                            >
                              <div className={styles.dropdownItemIcon}>
                                <dropdownItem.icon size={20} />
                              </div>
                              <div className={styles.dropdownItemContent}>
                                <span>{dropdownItem.name}</span>
                                <ArrowRight size={14} className={styles.dropdownItemArrow} />
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <a href={item.link} className={styles.navLink}>
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            
            <a href="/contact" className={styles.ctaButton}>
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;