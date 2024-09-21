import React from 'react';

const Footer = () => {
  const footerStyles = {
    backgroundColor: '#0d0d0d', // Dark background
    color: '#00ffc6', // Neon aqua text
    textAlign: 'center',
    padding: '20px 0',
    fontSize: '1.1em',
    borderTop: '2px solid #00a8ff', // Neon blue border at the top
    boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.5)', // Soft shadow above the footer
  };

  return (
    <footer style={footerStyles}>
      <p>© 2024 VITConnect. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
