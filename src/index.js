import React, { useState } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Scale, FileText, Users, Heart, Shield, Globe, Clock, Facebook, Linkedin, Twitter } from 'lucide-react';

const Homepage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (key) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  const navigation = [
    {
      label: 'Estate Planning',
      dropdown: true,
      items: [
        { label: 'Living Trusts', href: '/living-trusts' },
        { label: 'Trust Amendment', href: '/trust-amendment' },
        { label: 'Will or Trust', href: '/will-or-trust' },
        { label: 'Special Needs Trust', href: '/special-needs-trust' },
        { label: 'Life Insurance Trust', href: '/life-insurance-trust' }
      ]
    },
    { label: 'Probate', href: '/probate' },
    { label: 'Conservatorship', href: '/conservatorship' },
    {
      label: 'Asset Protection',
      dropdown: true,
      items: [
        { label: 'Asset Protection Services', href: '/asset-protection-services' },
        { label: 'Offshore Asset Protection', href: '/offshore-asset-protection' }
      ]
    },
    {
      label: 'Resources',
      dropdown: true,
      items: [
        { label: 'Estate Planning Questionnaire', href: '/questionnaire' },
        { label: 'Estate Planning Intake Form', href: '/estate-planning-questionnaire' },
        { label: 'Probate Form', href: '/probate-intake-form' },
        { label: 'Client Portal', href: 'https://portal.livingtrust-attorneys.com' }
      ]
    },
    { label: 'About', href: '#About' },
    { label: 'Contact', href: '#Contact' }
  ];

  const services = [
    {
      title: "Probate Administration",
      description: "Probate administration allows you to deal with the estate of a person who has died when there are no known or appointed heirs, or when a will cannot be found.",
      highlight: "We advance ALL costs of Probate!",
      icon: <Scale size={60} color="white" />,
      link: "/probate#FormJump"
    },
    {
      title: "Living Trust",
      description: "When it comes to your estate and assets, you want to make sure that they're protected. A living trust can help avoid probate and outline the distribution of your assets.",
      highlight: "Starting at just $575",
      icon: <FileText size={60} color="white" />,
      link: "/living-trusts#FormJump"
    },
    {
      title: "Conservatorship & Guardianship",
      description: "When a loved one has lost the ability to make decisions for themselves, a conservatorship or guardianship can be just what you need.",
      highlight: "Recurring annual service available",
      icon: <Users size={60} color="white" />,
      link: "/conservatorship#FormJump"
    },
    {
      title: "Special Needs Trust",
      description: "A special needs trust is a powerful legal tool that can help protect the financial interests of a child with special needs.",
      highlight: "Starting at just $900",
      icon: <Heart size={60} color="white" />,
      link: "/special-needs#FormJump"
    },
    {
      title: "Irrevocable Life Insurance Trust",
      description: "If you own a life insurance policy with a significant death benefit, an irrevocable life insurance trust may be of substantial benefit to you.",
      highlight: "Starting at just $950",
      icon: <Shield size={60} color="white" />,
      link: "/irrevocable-life-insurance-trust#FormJump"
    },
    {
      title: "Offshore Asset Protection",
      description: "Asset protection planning is the adoption of advance planning techniques which place one's assets beyond the reach of future potential creditors.",
      highlight: "Speak to an Attorney today",
      icon: <Globe size={60} color="white" />,
      link: "/offshore-asset-protection#FormJump"
    }
  ];

  const testimonials = [
    { text: "Amazed by the information that was given. Rozsa was very knowledgeable. I was deeply touched and in shock. I really appreciated her.", author: "Laura C." },
    { text: "After going through what I did during my wife's battle with cancer for not having a health-care directive I now have peace of mind knowing my kids won't have to deal with what I did thank you Rozsa.", author: "Jose R." },
    { text: "Thanks for being so patient with us. Rozsa took the time to explain everything to us. Great demeanor.", author: "Edina H." },
    { text: "I thought that getting a conservatorship for my father would be a complicated, dragging process. It turned out to be much easier than I imagined.", author: "Alan B." },
    { text: "Gave us a weekend appointment, answered all our questions in a way that we could understand and you explained went over the required forms in detail. Thank you!", author: "Eva J." },
    { text: "We have been working with Rozsa for about 3 months now, and the process has been so rewarding. She took care of everything and made the legalities of our estate planning a breeze.", author: "Erica C." }
  ];

  return (
    <div className="homepage">
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
          font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        .homepage {
          background-color: #f5f5f5;
        }
        
        /* Professional Navigation Styles */
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          background-color: #0f1f3d;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .nav-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
        }
        
        .brand {
          display: flex;
          align-items: center;
          color: white;
          text-decoration: none;
          padding: 15px 0;
        }
        
        .logo {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #c9a961, #e8d4a0);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: #0f1f3d;
          font-family: 'Georgia', serif;
        }
        
        .business-title {
          color: white;
          font-family: 'Georgia', 'Times New Roman', serif;
          font-size: 18px;
          font-weight: 400;
          margin-left: 15px;
          letter-spacing: 0.5px;
        }
        
        .nav-menu {
          display: flex;
          align-items: center;
        }
        
        .nav-item {
          position: relative;
        }
        
        .nav-link {
          color: rgba(255,255,255,0.9);
          text-decoration: none;
          font-weight: 400;
          font-size: 15px;
          padding: 20px 16px;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: all 0.3s;
          border-bottom: 3px solid transparent;
        }
        
        .nav-link:hover {
          color: white;
          background-color: rgba(255,255,255,0.05);
          border-bottom-color: #c9a961;
        }
        
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: white;
          min-width: 280px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s;
          border-top: 3px solid #c9a961;
        }
        
        .nav-item:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        
        .dropdown-item {
          color: #333;
          padding: 15px 20px;
          display: block;
          text-decoration: none;
          transition: all 0.3s;
          border-left: 3px solid transparent;
          font-size: 14px;
        }
        
        .dropdown-item:hover {
          background-color: #f8f9fa;
          color: #0f1f3d;
          border-left-color: #c9a961;
          padding-left: 25px;
        }
        
        .button-nav {
          background: linear-gradient(135deg, #c9a961, #e8d4a0);
          color: #0f1f3d;
          padding: 10px 25px;
          margin-left: 20px;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .button-nav:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(201,169,97,0.3);
        }
        
        .menu-button {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        
        /* Hero Section */
        .hero-section {
          margin-top: 60px;
          background: linear-gradient(135deg, #0f1f3d 0%, #1a3259 100%);
          min-height: 90vh;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }
        
        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: repeating-linear-gradient(
            45deg,
            rgba(255,255,255,0.02) 0,
            rgba(255,255,255,0.02) 1px,
            transparent 1px,
            transparent 15px
          );
        }
        
        .hero-top {
          padding: 60px 20px 40px;
          text-align: center;
          z-index: 1;
        }
        
        .hero-main {
          flex: 1;
          background: linear-gradient(rgba(197, 235, 252, 0.95), rgba(255, 255, 255, 0.98));
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding: 40px 20px;
          position: relative;
        }
        
        .hero-card {
          background-color: white;
          padding: 50px;
          border-radius: 8px;
          text-align: center;
          max-width: 700px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.1);
          border-top: 4px solid #c9a961;
        }
        
        .hero-card h2 {
          color: #0f1f3d;
          font-family: 'Georgia', serif;
          font-size: 32px;
          font-weight: 400;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
        }
        
        .hero-card p {
          color: #4a5568;
          font-size: 18px;
          margin-bottom: 35px;
          line-height: 1.6;
        }
        
        .hero-button {
          background: linear-gradient(135deg, #1a3259, #2d4a7c);
          color: white;
          padding: 18px 40px;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .hero-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(26,50,89,0.3);
        }
        
        /* About Section */
        .about-section {
          display: flex;
          min-height: 500px;
        }
        
        .about-content {
          background: linear-gradient(135deg, #2d4a7c, #3d5a8c);
          flex: 1;
          padding: 80px;
          color: white;
        }
        
        .about-image {
          flex: 1;
          background: linear-gradient(135deg, #e8e8e8, #f5f5f5);
        }
        
        .section-title {
          font-family: 'Georgia', serif;
          font-size: 38px;
          font-weight: 400;
          margin-bottom: 30px;
          letter-spacing: -0.5px;
        }
        
        /* Services Section */
        .services-section {
          background: #f8f9fa;
          padding: 100px 20px;
        }
        
        .services-header {
          text-align: center;
          margin-bottom: 70px;
        }
        
        .services-header h2 {
          color: #0f1f3d;
          font-family: 'Georgia', serif;
          font-size: 42px;
          font-weight: 400;
          margin-bottom: 10px;
          letter-spacing: -0.5px;
        }
        
        .services-header-line {
          width: 80px;
          height: 3px;
          background: #c9a961;
          margin: 20px auto;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .service-card {
          background: white;
          border-radius: 8px;
          padding: 40px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
          transition: all 0.3s;
          border-top: 3px solid transparent;
        }
        
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.12);
          border-top-color: #c9a961;
        }
        
        .service-icon {
          width: 90px;
          height: 90px;
          background: linear-gradient(135deg, #1a3259, #2d4a7c);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
        }
        
        .service-title {
          color: #0f1f3d;
          text-align: center;
          font-family: 'Georgia', serif;
          font-size: 24px;
          font-weight: 400;
          margin-bottom: 20px;
        }
        
        .service-description {
          color: #4a5568;
          text-align: center;
          font-size: 15px;
          line-height: 1.7;
          margin-bottom: 20px;
        }
        
        .service-highlight {
          color: #c9a961;
          font-weight: 600;
          display: block;
          margin-top: 15px;
          font-size: 14px;
        }
        
        .service-buttons {
          display: flex;
          gap: 10px;
          justify-content: center;
        }
        
        .service-button-primary {
          background: transparent;
          color: #1a3259;
          padding: 10px 20px;
          border: 2px solid #1a3259;
          border-radius: 4px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s;
        }
        
        .service-button-primary:hover {
          background: #1a3259;
          color: white;
        }
        
        .service-button-secondary {
          background: linear-gradient(135deg, #c9a961, #e8d4a0);
          color: #0f1f3d;
          padding: 10px 20px;
          border-radius: 4px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.3s;
        }
        
        .service-button-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(201,169,97,0.3);
        }
        
        /* Testimonials Section */
        .testimonials-section {
          background: linear-gradient(135deg, #0f1f3d, #1a3259);
          padding: 100px 20px;
        }
        
        .testimonials-header {
          text-align: center;
          margin-bottom: 70px;
        }
        
        .testimonials-header h2 {
          color: white;
          font-family: 'Georgia', serif;
          font-size: 42px;
          font-weight: 400;
          margin-bottom: 20px;
        }
        
        .testimonials-header p {
          color: rgba(255,255,255,0.8);
          font-size: 16px;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.7;
        }
        
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .testimonial-item {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          padding: 35px;
          transition: all 0.3s;
        }
        
        .testimonial-item:hover {
          background: rgba(255,255,255,0.08);
          transform: translateY(-5px);
        }
        
        .testimonial-text {
          color: rgba(255,255,255,0.95);
          font-size: 16px;
          font-style: italic;
          line-height: 1.8;
          margin-bottom: 25px;
        }
        
        .testimonial-author {
          color: #c9a961;
          font-size: 14px;
          font-weight: 600;
          text-align: right;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        /* Contact Section */
        .contact-section {
          display: flex;
          min-height: 500px;
        }
        
        .contact-content {
          flex: 1;
          padding: 80px;
          background: white;
        }
        
        .contact-info h2 {
          color: #0f1f3d;
          font-family: 'Georgia', serif;
          font-size: 38px;
          font-weight: 400;
          margin-bottom: 50px;
        }
        
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 30px;
          color: #4a5568;
          font-size: 16px;
        }
        
        .contact-item svg {
          color: #c9a961;
          margin-top: 3px;
        }
        
        .contact-button {
          background: linear-gradient(135deg, #1a3259, #2d4a7c);
          color: white;
          padding: 15px 35px;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          text-decoration: none;
          display: inline-block;
          margin-top: 40px;
          transition: all 0.3s;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 500;
        }
        
        .contact-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(26,50,89,0.3);
        }
        
        .contact-image {
          flex: 1;
          background: linear-gradient(135deg, #e8e8e8, #f5f5f5);
        }
        
        /* Professional Footer */
        .footer {
          background-color: #0a1628;
          color: white;
          padding-top: 80px;
        }
        
        .footer-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 60px;
          margin-bottom: 60px;
        }
        
        .footer-column h3 {
          font-family: 'Georgia', serif;
          font-size: 20px;
          font-weight: 400;
          margin-bottom: 25px;
          color: #c9a961;
        }
        
        .footer-logo {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .footer-logo .logo {
          margin-right: 15px;
        }
        
        .footer-description {
          color: rgba(255,255,255,0.7);
          line-height: 1.8;
          font-size: 14px;
          margin-bottom: 25px;
        }
        
        .footer-social {
          display: flex;
          gap: 15px;
        }
        
        .social-icon {
          width: 40px;
          height: 40px;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          cursor: pointer;
        }
        
        .social-icon:hover {
          background-color: #c9a961;
          border-color: #c9a961;
        }
        
        .footer-links {
          list-style: none;
        }
        
        .footer-links li {
          margin-bottom: 12px;
        }
        
        .footer-links a {
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          font-size: 14px;
          transition: all 0.3s;
        }
        
        .footer-links a:hover {
          color: #c9a961;
          padding-left: 5px;
        }
        
        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin-bottom: 20px;
          color: rgba(255,255,255,0.7);
          font-size: 14px;
        }
        
        .footer-contact-item svg {
          color: #c9a961;
          margin-top: 2px;
        }
        
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding: 30px 0;
        }
        
        .footer-bottom-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .footer-copyright {
          color: rgba(255,255,255,0.5);
          font-size: 14px;
        }
        
        .footer-bottom-links {
          display: flex;
          gap: 30px;
        }
        
        .footer-bottom-links a {
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s;
        }
        
        .footer-bottom-links a:hover {
          color: #c9a961;
        }
        
        /* Mobile Styles */
        @media (max-width: 991px) {
          .nav-menu {
            position: fixed;
            top: 60px;
            right: -100%;
            width: 320px;
            height: calc(100vh - 60px);
            background-color: #0f1f3d;
            flex-direction: column;
            padding: 20px 0;
            transition: right 0.3s;
            overflow-y: auto;
            align-items: stretch;
          }
          
          .nav-menu.active {
            right: 0;
          }
          
          .nav-item {
            width: 100%;
          }
          
          .nav-link {
            width: 100%;
            padding: 15px 20px;
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }
          
          .dropdown-menu {
            position: static;
            width: 100%;
            box-shadow: none;
            background-color: rgba(0,0,0,0.2);
            opacity: 1;
            visibility: visible;
            transform: none;
            display: none;
          }
          
          .dropdown-menu.active {
            display: block;
          }
          
          .dropdown-item {
            padding-left: 40px;
            border-left: none;
          }
          
          .button-nav {
            margin: 20px;
          }
          
          .menu-button {
            display: block;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
          }
          
          .about-section {
            flex-direction: column;
          }
          
          .about-content {
            padding: 60px 40px;
          }
          
          .contact-section {
            flex-direction: column;
          }
          
          .contact-content {
            padding: 60px 40px;
          }
          
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
          
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
          
          .footer-bottom-content {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
        }
        
        @media (max-width: 767px) {
          .business-title {
            font-size: 14px;
          }
          
          .hero-card {
            padding: 30px;
          }
          
          .hero-card h2 {
            font-size: 24px;
          }
          
          .hero-button {
            font-size: 14px;
            padding: 14px 30px;
          }
          
          .section-title {
            font-size: 30px;
          }
          
          .about-content {
            padding: 40px 20px;
          }
          
          .contact-content {
            padding: 40px 20px;
          }
          
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .footer-bottom-links {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="/" className="brand">
            <div className="logo">RG</div>
            <div className="business-title">LAW OFFICES OF ROZSA GYENE</div>
          </a>
          
          <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            {navigation.map((item, index) => (
              <div key={index} className="nav-item">
                {item.dropdown ? (
                  <>
                    <a 
                      href="#" 
                      className="nav-link"
                      onClick={(e) => {
                        e.preventDefault();
                        if (window.innerWidth <= 991) {
                          toggleDropdown(item.label);
                        }
                      }}
                    >
                      {item.label}
                      <ChevronDown size={14} />
                    </a>
                    <div className={`dropdown-menu ${activeDropdown === item.label ? 'active' : ''}`}>
                      {item.items.map((subItem, subIndex) => (
                        <a key={subIndex} href={subItem.href} className="dropdown-item">
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a href={item.href} className="nav-link">
                    {item.label}
                  </a>
                )}
              </div>
            ))}
            <a href="https://square.site/book/0W2A8PKKPYC21/law-offices-of-rozsa-gyene-glendale-ca" className="button-nav">
              Book Appointment
            </a>
          </div>
          
          <button className="menu-button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-top">
          <h1 style={{ color: 'white', fontFamily: 'Georgia, serif', fontSize: '42px', fontWeight: '400', marginBottom: '15px', letterSpacing: '-0.5px' }}>
            THE LAW OFFICES OF ROZSA GYENE
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '20px', marginBottom: '35px' }}>
            Estate Planning & Probate Specialists Since 2001
          </p>
          <p style={{ color: '#c9a961', fontSize: '18px', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '500' }}>
            Free Legal Consultation
          </p>
          <div>
            <a href="tel:+18182916217" style={{ color: 'white', fontSize: '32px', fontWeight: '300', textDecoration: 'none', marginRight: '30px' }}>
              (818) 291-6217
            </a>
            <a href="tel:+18184344541" style={{ color: 'white', fontSize: '32px', fontWeight: '300', textDecoration: 'none' }}>
              (818) 434-4541
            </a>
          </div>
        </div>
        
        <div className="hero-main">
          <div className="hero-card">
            <h2>Peace of Mind Through Proper Planning</h2>
            <p>Draft your customized estate plan over the phone, online, or at our offices. Protect your family's future with comprehensive legal guidance.</p>
            <a href="https://square.site/book/0W2A8PKKPYC21/law-offices-of-rozsa-gyene-glendale-ca" className="hero-button">
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="About" className="about-section">
        <div className="about-content">
          <h2 className="section-title">About Our Practice</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '25px', color: 'rgba(255,255,255,0.9)' }}>
            The Law Offices of Rozsa Gyene is a highly experienced California law firm devoted to wealth transfer and preservation through proactive planning.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '25px', color: 'rgba(255,255,255,0.9)' }}>
            We provide comprehensive assistance in:
          </p>
          <ul style={{ marginLeft: '20px', marginBottom: '25px' }}>
            <li style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '12px', color: 'rgba(255,255,255,0.9)' }}>Living Trusts for Families and Individuals</li>
            <li style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '12px', color: 'rgba(255,255,255,0.9)' }}>Probate & Trust Administration</li>
            <li style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '12px', color: 'rgba(255,255,255,0.9)' }}>Conservatorship & Guardianship</li>
            <li style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '12px', color: 'rgba(255,255,255,0.9)' }}>Irrevocable Trusts</li>
            <li style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '12px', color: 'rgba(255,255,255,0.9)' }}>Offshore Asset Protection</li>
          </ul>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'rgba(255,255,255,0.9)' }}>
            Since 2001, we have guided thousands of satisfied clients through the essential process of estate planning. Let us help you protect your loved ones and assets.
          </p>
        </div>
        <div className="about-image"></div>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <div className="services-header">
          <h2>Our Services</h2>
          <div className="services-header-line"></div>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <div className="service-description">
                {service.description}
                <span className="service-highlight">{service.highlight}</span>
              </div>
              <div className="service-buttons">
                <a href={service.link} className="service-button-primary">Learn More</a>
                <a href="https://square.site/book/0W2A8PKKPYC21/law-offices-of-rozsa-gyene-glendale-ca" className="service-button-secondary">
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <div className="testimonials-header">
          <h2>Client Testimonials</h2>
          <p>
            We've helped thousands of satisfied clients ensure their family, legacy and assets are protected.
          </p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-author">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div id="Contact" className="contact-section">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Contact Us</h2>
            <div className="contact-item">
              <Phone size={20} />
              <div>
                <strong>(818) 291-6217</strong><br />
                <strong>(818) 434-4541</strong>
              </div>
            </div>
            <div className="contact-item">
              <Mail size={20} />
              <strong>rozsagyenelaw@yahoo.com</strong>
            </div>
            <div className="contact-item">
              <MapPin size={20} />
              <div>
                <strong>Main Office</strong><br />
                450 N Brand Blvd. Suite 623<br />
                Glendale, CA 91203
              </div>
            </div>
            <div className="contact-item">
              <Clock size={20} />
              <div>
                <strong>Office Hours</strong><br />
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: By Appointment<br />
                Sunday: Closed
              </div>
            </div>
            <a href="https://square.site/book/0W2A8PKKPYC21/law-offices-of-rozsa-gyene-glendale-ca" className="contact-button">
              Schedule Consultation
            </a>
          </div>
        </div>
        <div className="contact-image"></div>
      </div>

      {/* Professional Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-column">
              <div className="footer-logo">
                <div style={{ color: 'white', fontFamily: 'Georgia, serif', fontSize: '18px' }}>
                  Law Offices of Rozsa Gyene
                </div>
              </div>
              <p className="footer-description">
                Providing comprehensive estate planning and probate services to California families since 2001. 
                We are dedicated to protecting your legacy and ensuring your wishes are honored.
              </p>
              <div className="footer-social">
                <div className="social-icon">
                  <Facebook size={18} />
                </div>
                <div className="social-icon">
                  <Linkedin size={18} />
                </div>
                <div className="social-icon">
                  <Twitter size={18} />
                </div>
              </div>
            </div>
            
            <div className="footer-column">
              <h3>Services</h3>
              <ul className="footer-links">
                <li><a href="/living-trusts">Living Trusts</a></li>
                <li><a href="/probate">Probate Administration</a></li>
                <li><a href="/conservatorship">Conservatorship</a></li>
                <li><a href="/special-needs-trust">Special Needs Trust</a></li>
                <li><a href="/asset-protection">Asset Protection</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Resources</h3>
              <ul className="footer-links">
                <li><a href="/questionnaire">Planning Questionnaire</a></li>
                <li><a href="/estate-planning-questionnaire">Intake Form</a></li>
                <li><a href="https://portal.livingtrust-attorneys.com">Client Portal</a></li>
                <li><a href="#About">About Us</a></li>
                <li><a href="#Contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Get in Touch</h3>
              <div className="footer-contact-item">
                <Phone size={16} />
                <div>
                  (818) 291-6217<br />
                  (818) 434-4541
                </div>
              </div>
              <div className="footer-contact-item">
                <Mail size={16} />
                <div>rozsagyenelaw@yahoo.com</div>
              </div>
              <div className="footer-contact-item">
                <MapPin size={16} />
                <div>
                  450 N Brand Blvd. Suite 623<br />
                  Glendale, CA 91203
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              © 2024 Law Offices of Rozsa Gyene. All rights reserved.
            </div>
            <div className="footer-bottom-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/disclaimer">Legal Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
