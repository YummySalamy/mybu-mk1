import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SidebarItems } from './SidebarItems';
import { FaChevronLeft, FaChevronDown } from 'react-icons/fa';
import { FaRegLightbulb } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import './assets/Sidebar.css';

const Sidebar = ({ toggleTheme, currentTheme }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [openSubNav, setOpenSubNav] = useState(null);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavItemClick = (index, hasSubItems) => {
    if (hasSubItems) {
      setOpenSubNav(openSubNav === index ? null : index);
    }
  };

  const isSubItemActive = (subItemHref) => location.pathname === subItemHref;

  const isNavItemActive = (item) => {
    if (item.navItems.length > 0) {
      return item.navItems.some((subItem) => isSubItemActive(subItem.href));
    }
    return location.pathname === item.href;
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      {/* Toggle Sidebar Button */}
      <div className="sidebar-header">
        <button className="toggle-btn" onClick={toggleSidebar}>
          <FaChevronLeft className={`chevron-icon ${isOpen ? '' : 'rotate'}`} />
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="nav-menu">
        <ul>
          {SidebarItems.map((item, index) => (
            <li
              key={index}
              className={`nav-item ${isNavItemActive(item) ? 'active' : ''}`}
            >
              {/* Navitems Sin Subitems */}
              {item.navItems.length === 0 ? (
                <Link to={item.href} className="nav-link">
                  <span className="nav-icon">{item.icon}</span>
                  {isOpen && <span className="nav-label">{item.label}</span>}
                </Link>
              ) : (
                /* Navitems Con Subitems */
                <div
                  className="nav-link"
                  onClick={() => handleNavItemClick(index, true)}
                >
                  <span className="nav-icon">{item.icon}</span>
                  {isOpen && <span className="nav-label">{item.label}</span>}
                  <FaChevronDown
                    className={`dropdown-icon ${
                      openSubNav === index ? 'rotate' : ''
                    }`}
                  />
                </div>
              )}

              {/* Subnavigation */}
              {item.navItems.length > 0 && (
                <ul
                  className={`subnav ${
                    openSubNav === index ? 'visible' : 'hidden'
                  }`}
                >
                  {item.navItems.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className={`subnav-item ${
                        isSubItemActive(subItem.href) ? 'active' : ''
                      }`}
                    >
                      <Link to={subItem.href} className="subnav-link">
                        <span className="subnav-icon">{subItem.icon}</span>
                        {isOpen && (subItem.label)}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          {/* Theme Toggle Button */}
          <li className="theme-toggle">
            <button className="theme-toggle-btn" onClick={toggleTheme}>
              {currentTheme === 'light' ? (
                <FaRegLightbulb className="theme-icon light" />
              ) : (
                <FaMoon className="theme-icon dark" />
              )}
              {isOpen && (
                <span className="theme-label">
                  {currentTheme === 'light' ? 'Light Mode' : 'Dark Mode'}
                </span>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
