import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const styles = {
    navbar: {
      backgroundColor: 'rgba(10, 116, 218, 0.9)',
      padding: '15px 30px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: 'background-color 0.4s ease-in-out',
    },
    navbarList: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      gap: '20px',
      alignItems: 'center',
    },
    navbarItem: {
      margin: 0,
    },
    navbarLink: {
      color: '#ffffff',
      textDecoration: 'none',
      fontSize: '1.2em',
      padding: '10px 20px',
      borderRadius: '30px',
      transition: 'background-color 0.4s ease, transform 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: 'transparent',
    },
    navbarLinkHover: {
      backgroundColor: 'rgba(0, 168, 255, 0.5)',
      boxShadow: '0 0 15px rgba(10, 116, 218, 0.7)',
      transform: 'translateY(-2px)',
    },
  };

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navbarList}>
        {[
          { name: 'Home', path: '/' },
          { name: 'Mess Menu', path: '/mess-menu' },
          { name: 'Campus Map', path: '/campus-map' },
          { name: 'Clubs', path: '/clubs' },
          { name: 'Forum', path: '/forum' },
          { name: 'Events', path: '/events' },
          { name: 'Shops', path: '/shop-listings' },
          { name: 'About Us', path: '/about' }
        ].map((item, index) => (
          <li style={styles.navbarItem} key={index}>
            <Link 
              to={item.path} 
              style={styles.navbarLink}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = styles.navbarLinkHover.backgroundColor;
                e.target.style.boxShadow = styles.navbarLinkHover.boxShadow;
                e.target.style.transform = styles.navbarLinkHover.transform;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.boxShadow = 'none';
                e.target.style.transform = 'none';
              }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
