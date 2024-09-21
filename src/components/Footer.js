import React from 'react';

const Footer = () => {
  const footerStyles = {
    backgroundColor: '#222629', // Dark metallic background from your palette
    color: '#86C232', // Neon green text for a vibrant look
    textAlign: 'center',
    padding: '20px 0',
    fontSize: '1.1em',
    borderTop: '2px solid #61892F', // Darker neon green border at the top
    boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.5)', // Soft shadow above the footer
  };

  return (
    <footer style={footerStyles}>
      <p>© 2024 VITConnect. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
