import React, { useState, useEffect, useRef } from 'react';
import { Shield, Lock, FileText, Globe, User, ChevronDown } from 'lucide-react';
import styles from './PrivacyPolicy.module.scss';

const PrivacyPolicy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
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

  // Toggle accordion sections
  const toggleAccordion = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };

  // Privacy policy sections for accordion
  const policySections = [
    {
      title: "Personal Data We Collect",
      icon: User,
      content: (
        <>
          <p>IV Creative collects data to operate effectively and provide you with services best suited to your individual needs.</p>
          
          <p>You have choices about the data we collect. When you are asked to provide personal data, you may decline, but if you choose not to provide data that is necessary to deliver our services in full to you, the service delivered may be limited.</p>
          
          <p>The data we collect depends on the context of the services you require to be delivered from our company, the choices you make, including protecting your privacy, and the products and services you use. The data we collect can include the following:</p>
          
          <p><strong>Name and Contact Data</strong> – We collect your first name and last name, e-mail address, postal address, telephone number and other similar contact data.</p>
        </>
      )
    },
    {
      title: "How We Use Personal Data",
      icon: FileText,
      content: (
        <>
          <p>IV Creative uses the data we collect for three basic purposes:</p>
          <ul>
            <li>To operate our business</li>
            <li>Provide our service to you</li>
            <li>To send communications to you</li>
          </ul>
          
          <p>In carrying out these purposes we collect data to give you information about our services.</p>
          
          <h4>Providing and improving our products</h4>
          <p>We use data to provide and improve the services we offer and to improve essential business operations. This includes delivering our services, maintaining & improving the performance of our Services and products, developing our customer service, conducting research and providing customer support. Examples of such uses include the following:</p>
          
          <ul>
            <li><strong>Providing Services</strong> – we use data to carry out your instructions with us and to provide our services to you.</li>
            <li><strong>Client support</strong> – We use data to provide customer care and support services.</li>
            <li><strong>Provision of Services</strong> – We use data to provide our services that have been agreed with you.</li>
            <li><strong>Service Improvement</strong> – We use data to continually improve our services to you.</li>
            <li><strong>Business Operations</strong> – we use data to develop, analyse and feed into business intelligence that enables us to operate, protect and make informed decisions and report on the performance of our business.</li>
            <li><strong>Communications</strong> – We use data we collect to communicate with you and personalise our communications with you.</li>
          </ul>
        </>
      )
    },
    {
      title: "Reasons We Share Personal Data",
      icon: Globe,
      content: (
        <>
          <p>We share your personal data with your consent. We will access, transfer, disclose and preserve personal data, when we have a good faith belief that doing so is necessary to:</p>
          
          <ul>
            <li>Comply with applicable law or respond to valid legal processes, including from law enforcement or other government agencies;</li>
            <li>Protect our customers, for example to prevent spam or attempts to defraud users of our services;</li>
            <li>Operate and maintain the security of our services, including to prevent or stop an attack on our computer systems or networks; or</li>
            <li>protect the rights or property of IV Creative, including enforcing the terms governing the use of our services;</li>
          </ul>
        </>
      )
    },
    {
      title: "How to Access & Control Your Personal Data",
      icon: Lock,
      content: (
        <p>You can request to view, edit or delete your personal data by contacting our office, in writing, at The Griffin, Main Road, Plumtree, Nottingham, NG12 5NB.</p>
      )
    },
    {
      title: "Cookies",
      icon: FileText,
      content: (
        <>
          <p>Our website uses cookies which are small text files that originate from us and are stored on your computer or website server. They do not retrieve information about you that is stored on your hard drive and do not corrupt or damage your computer or computer files. They help us identify website visitor behaviour and visitors' particular preferences.</p>
          
          <p>Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies including how to see what cookies have been set and how to manage and delete them, visit <a href="http://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>.</p>
          
          <p>To opt out of being tracked by Google Analytics across all websites visit <a href="http://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">http://tools.google.com/dlpage/gaoptout</a>.</p>
        </>
      )
    },
    {
      title: "Credit Card Details",
      icon: Shield,
      content: (
        <p>IV Creative will never ask for Credit Card details and request that you do not enter it on any of the forms on the IV Creative website.</p>
      )
    },
    {
      title: "External Sites",
      icon: Globe,
      content: (
        <p>IV Creative is not responsible for the content of external internet sites. You are advised to read the privacy policy of external sites before disclosing any personal information.</p>
      )
    },
    {
      title: "Remember The Risks Whenever You Use The Internet",
      icon: Shield,
      content: (
        <p>While we do our best to protect your personal information, we cannot guarantee the security of any information that you transmit to IV Creative and you are solely responsible for maintaining the secrecy of any passwords or other account information. In addition other Internet sites or services that may be accessible through IV Creative have separate data and privacy practices independent of us, and therefore we disclaim any responsibility or liability for their policies or actions. Please contact those vendors and others directly if you have any questions about their privacy policies.</p>
      )
    },
    {
      title: "European Privacy Rights",
      icon: Globe,
      content: (
        <>
          <p>IV Creative adheres to applicable data protection laws in the European Economic Area, which if applicable includes the following rights:</p>
          
          <ul>
            <li>If the processing of personal data is based on your consent, you have a right to withdraw consent at any time for future processing;</li>
            <li>You have a right to request from us, a "data controller" as defined in the law, access to and rectification of your personal data;</li>
            <li>You have a right to object to the processing of your personal data; and</li>
            <li>You have a right to lodge a complaint with a data protection authority.</li>
          </ul>
          
          <p>When we process personal data about you, we do so with your consent and/or as necessary to provide the services/products you use, operate our business, meet our contractual and legal obligations, protect the security of our systems and our customers, or fulfill other legitimate interests of IV Creative as described in the "How We Use Personal Data" and "Reasons We Share Personal Data" sections above. When we transfer personal data from the European Economic Area, we do so based on a variety of legal mechanisms, as described in "Where We Store and Process Personal Data" below.</p>
        </>
      )
    },
    {
      title: "Security of Personal Data",
      icon: Shield,
      content: (
        <p>IV Creative is committed to protecting the security of your personal data. We use a variety of security technologies and procedures to help protect your personal data from unauthorized access, use or disclosure. For example, we store the personal data you provide on computer systems that have limited access and are in controlled facilities held within two locations within the UK. When we transmit highly confidential data over the links to cloud apps into one app which your client can download.</p>
      )
    },
    {
      title: "Where We Store and Process Personal Data",
      icon: Globe,
      content: (
        <p>Personal data collected by IV Creative will be held securely and we take steps to ensure that the data we collect under this privacy statement is processed according to the provisions of this statement and the requirements of applicable UK & EU law.</p>
      )
    },
    {
      title: "Our Retention of Personal Data",
      icon: FileText,
      content: (
        <>
          <p>IV Creative retains personal data for as long as necessary to provide the products and fulfill the transactions you have requested, or for other essential purposes such as complying with our legal obligations, resolving disputes and enforcing our agreements. Because these needs can vary for different data types in the context of different products, actual retention periods can vary significantly. The criteria used to determine the retention periods include:</p>
          
          <ul>
            <li>How long is the personal data needed to provide the products and operate our business?</li>
            <li>Is the personal data of a sensitive type? If so, a shortened retention time would generally be appropriate.</li>
            <li>Has IV Creative adopted and announced a specific retention period for a certain data type?</li>
          </ul>
        </>
      )
    },
    {
      title: "Changes to This Privacy Statement",
      icon: FileText,
      content: (
        <p>We will update this privacy statement when necessary to reflect customer feedback and changes in our services/products. When we post changes to this statement, we will revise the "last updated" date at the top of the statement and describe the changes. If there are material changes to the statement or in how IV Creative will use your personal data, we will notify you either by prominently posting a notice of such changes before they take effect or by directly sending you a notification. We encourage you to periodically review this privacy statement to learn how IV Creative is protecting your information.</p>
      )
    },
    {
      title: "How to Contact Us",
      icon: User,
      content: (
        <>
          <p>If you have a privacy concern, complaint or a question for the Data Controller of IV Creative, please contact us by using our Contact form for IV Creative <a href="/contact" target="_blank" rel="noopener noreferrer">https://iv-creative.co.uk/contact/</a></p>
          
          <p>Unless otherwise stated, IV Creative is a data controller for personal data we collect through the services/products subject to this statement. Our address is IV Creative, The Griffin, Main Road, Plumtree, Nottingham, NG12 5NB</p>
          
          <p>Telephone: +44(0)1529 300452.</p>
        </>
      )
    }
  ];

  return (
    <section 
      className={`${styles.privacyPolicy} ${isVisible ? styles.visible : ''}`} 
      ref={sectionRef}
    >
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              <div className={styles.titleRow}>
                <span className={styles.titleText}>Privacy </span>
                <span className={styles.titleTextAccent}>Policy</span>
              </div>
            </h1>
            <div className={styles.heroDescription}>
              <p>IV Creative respects your privacy. This privacy statement explains what personal data we collect from you, through our interactions with you and how we use that data.</p>
              <p>This statement applies to IV Creative's interactions with you and the services listed below.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content Section */}
      <div className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.policyIntro}>
            <p>
              <strong>Any personal information you provide to us</strong> including and similar to your name, address, telephone number and e-mail address will not be released, sold, or rented to any entities or individuals outside of IV Creative.
            </p>
          </div>
          
          <div className={styles.policyAccordion}>
            {policySections.map((section, index) => (
              <div 
                key={index} 
                className={`${styles.accordionItem} ${activeAccordion === index ? styles.active : ''}`}
              >
                <button 
                  className={styles.accordionHeader}
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeAccordion === index}
                >
                  <div className={styles.accordionTitle}>
                    <div className={styles.iconWrapper}>
                      <section.icon size={20} />
                    </div>
                    <h3>{section.title}</h3>
                  </div>
                  <div className={styles.accordionToggle}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                <div className={styles.accordionContent}>
                  <div className={styles.accordionBody}>
                    {section.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.policyFooter}>
            <div className={styles.lastUpdated}>
              <p>Last Updated: July 5, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;