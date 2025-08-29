import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaHome, 
  FaFileContract, 
  FaGavel, 
  FaUserShield, 
  FaHeart, 
  FaUmbrella, 
  FaShieldAlt,
  FaUser,
  FaPhone,
  FaUserLock,
  FaClipboardList,
  FaChevronDown,
  FaChevronRight
} from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = [
    {
      title: 'Home',
      path: '/',
      icon: <FaHome />
    },
    {
      title: 'Trust Services',
      icon: <FaFileContract />,
      dropdown: [
        { title: 'Living Trust', path: '/living-trust', icon: <FaFileContract /> },
        { title: 'Revocable Trust', path: '/revocable-trust', icon: <FaFileContract /> },
        { title: 'Irrevocable Trust', path: '/irrevocable-trust', icon: <FaFileContract /> },
        { title: 'Special Needs Trust', path: '/special-needs-trust', icon: <FaHeart /> },
        { title: 'Life Insurance Trust', path: '/life-insurance-trust', icon: <FaUmbrella /> },
        { title: 'Charitable Trust', path: '/charitable-trust', icon: <FaHeart /> }
      ]
    },
    {
      title: 'Probate Services',
      icon: <FaGavel />,
      dropdown: [
        { title: 'Probate Administration', path: '/probate-administration', icon: <FaGavel /> },
        { title: 'Probate Litigation', path: '/probate-litigation', icon: <FaGavel /> },
        { title: 'Will Contest', path: '/will-contest', icon: <FaGavel /> },
        { title: 'Estate Administration', path: '/estate-administration', icon: <FaGavel /> }
      ]
    },
    {
      title: 'Protection Services',
      icon: <FaShieldAlt />,
      dropdown: [
        { title: 'Asset Protection', path: '/asset-protection', icon: <FaShieldAlt /> },
        { title: 'Conservatorship', path: '/conservatorship', icon: <FaUserShield /> },
        { title: 'Guardianship', path: '/guardianship', icon: <FaUserShield /> }
      ]
    },
    {
      title: 'Client Resources',
      icon: <FaClipboardList />,
      dropdown: [
        { title: 'Questionnaires', path: '/questionnaires', icon: <FaClipboardList /> },
        { title: 'Client Portal', path: '/client-portal', icon: <FaUserLock /> },
        { title: 'Document Library', path: '/document-library', icon: <FaClipboardList /> }
      ]
    },
    {
      title: 'About',
      path: '/about',
      icon: <FaUser />
    },
    {
      title: 'Contact',
      path: '/contact',
      icon: <FaPhone />
    }
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Law Offices of Rozsa Gyene</h2>
        <p>Estate Planning & Probate</p>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <div key={index} className="nav-item">
            {item.dropdown ? (
              <>
                <button 
                  className={`nav-button dropdown-toggle ${openDropdown === index ? 'active' : ''}`}
                  onClick={() => toggleDropdown(index)}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-text">{item.title}</span>
                  <span className="dropdown-arrow">
                    {openDropdown === index ? <FaChevronDown /> : <FaChevronRight />}
                  </span>
                </button>
                <AnimatePresence>
                  {openDropdown === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="dropdown-menu"
                    >
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          className={`nav-link dropdown-item ${isActive(subItem.path) ? 'active' : ''}`}
                          onClick={() => setOpenDropdown(null)}
                        >
                          <span className="nav-icon">{subItem.icon}</span>
                          <span className="nav-text">{subItem.title}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <Link 
                to={item.path} 
                className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.title}</span>
              </Link>
            )}
          </div>
        ))}
      </nav>
      
      <div className="sidebar-footer">
        <div className="contact-info">
          <p><strong>Phone:</strong></p>
          <a href="tel:+18182916217" className="phone-link">(818) 291-6217</a>
          <p><strong>Address:</strong></p>
          <p className="address">450 N Brand Blvd Suite 600<br />Glendale, CA 91203</p>
          <p><strong>Email:</strong></p>
          <a href="mailto:rozsagyenelaw@yahoo.com" className="email-link">
            rozsagyenelaw@yahoo.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
