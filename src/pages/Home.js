import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaFileContract, 
  FaGavel, 
  FaUserShield, 
  FaHeart, 
  FaUmbrella, 
  FaShieldAlt,
  FaPhone,
  FaEnvelope,
  FaDollarSign
} from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const services = [
    {
      title: 'Living Trust',
      description: 'When it comes to your estate and assets, you want to make sure that they\'re protected. A living trust can help avoid probate and outline the distribution of your assets.',
      price: 'Starting at just $575',
      icon: <FaFileContract />,
      path: '/living-trust',
      color: '#1976d2'
    },
    {
      title: 'Probate Administration',
      description: 'Probate administration allows you to deal with the estate of a person who has died when there are no known or appointed heirs, or when a will cannot be found.',
      price: 'We advance ALL costs of Probate!',
      icon: <FaGavel />,
      path: '/probate-administration',
      color: '#1976d2'
    },
    {
      title: 'Conservatorship & Guardianship',
      description: 'When a loved one has lost the ability to make decisions for themselves, a conservatorship or guardianship can be just what you need.',
      price: 'Recurring annual service available',
      icon: <FaUserShield />,
      path: '/conservatorship',
      color: '#1976d2'
    },
    {
      title: 'Special Needs Trust',
      description: 'A special needs trust is a powerful legal tool that can help protect the financial interests of a child with special needs.',
      price: 'Starting at just $900',
      icon: <FaHeart />,
      path: '/special-needs-trust',
      color: '#1976d2'
    },
    {
      title: 'Irrevocable Life Insurance Trust',
      description: 'If you own a life insurance policy with a significant death benefit, an irrevocable life insurance trust may be of substantial benefit to you.',
      price: 'Starting at just $950',
      icon: <FaUmbrella />,
      path: '/life-insurance-trust',
      color: '#1976d2'
    },
    {
      title: 'Offshore Asset Protection',
      description: 'Asset protection planning is the adoption of advance planning techniques which place one\'s assets beyond the reach of future potential creditors.',
      price: 'Speak to an Attorney today to see if this option is right for you',
      icon: <FaShieldAlt />,
      path: '/asset-protection',
      color: '#1976d2'
    }
  ];

  return (
    <div className="home">
      <motion.section 
        className="hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-content">
          <h1>Protect Your Legacy with Expert Estate Planning</h1>
          <p>Law Offices of Rozsa Gyene provides comprehensive estate planning and probate services to protect your family's future. From living trusts to asset protection, we're here to guide you through every step.</p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">
              <FaPhone /> Get Free Consultation
            </Link>
            <Link to="/questionnaires" className="btn btn-secondary">
              <FaFileContract /> Start Questionnaire
            </Link>
          </div>
        </div>
        <div className="hero-contact">
          <div className="contact-item">
            <FaPhone />
            <div>
              <span>Call Now</span>
              <a href="tel:+18182916217">(818) 291-6217</a>
            </div>
          </div>
          <div className="contact-item">
            <FaEnvelope />
            <div>
              <span>Email Us</span>
              <a href="mailto:rozsagyenelaw@yahoo.com">rozsagyenelaw@yahoo.com</a>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="services">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Our Legal Services</h2>
            <p>Comprehensive estate planning and probate solutions tailored to your needs</p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="service-icon" style={{ color: service.color }}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-price">
                  <FaDollarSign />
                  <span>{service.price}</span>
                </div>
                <Link to={service.path} className="service-link">
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.section 
        className="why-choose"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="why-choose-content">
            <div className="why-choose-text">
              <h2>Why Choose Law Offices of Rozsa Gyene?</h2>
              <ul>
                <li>✓ Experienced estate planning attorney</li>
                <li>✓ Affordable pricing with transparent costs</li>
                <li>✓ Personalized service and attention</li>
                <li>✓ Comprehensive probate administration</li>
                <li>✓ Ongoing client support and guidance</li>
              </ul>
              <Link to="/about" className="btn btn-outline">Learn More About Our Firm</Link>
            </div>
            <div className="why-choose-stats">
              <div className="stat">
                <h3>15+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>500+</h3>
                <p>Families Served</p>
              </div>
              <div className="stat">
                <h3>100%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="cta"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <h2>Ready to Protect Your Family's Future?</h2>
          <p>Contact us today for a free consultation and take the first step towards comprehensive estate planning.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">
              <FaPhone /> Schedule Consultation
            </Link>
            <Link to="/questionnaires" className="btn btn-secondary">
              <FaFileContract /> Complete Questionnaire
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
