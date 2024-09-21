import React from 'react';

function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.introduction}>
        <h2 style={styles.introTitle}>Your Gateway to Campus Life</h2>
        <p style={styles.introText}>
          VIT Connect is designed to streamline your college experience by providing easy access to essential services like maps, mess menus, shop listings, FAQs, and events. Join us as we enhance your journey at VIT!
        </p>
        <button style={styles.ctaButton}>Explore Now</button>
      </div>

      <div style={styles.hashtag}>#ConnectToVIT</div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    margin: 0,
    padding: 0,
    backgroundColor: '#222629', // Dark background
    color: '#e2e8f0', // Light text
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    textAlign: 'center',
    padding: '20px',
    animation: 'fadeIn 1.5s ease-in-out',
  },
  introduction: {
    backgroundColor: '#474B4F', // Darker background with slight transparency
    color: '#e2e8f0', // Light text
    padding: '30px 40px', // Adjusted padding
    borderRadius: '30px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
    maxWidth: '900px',
    marginTop: '60px',
    textAlign: 'center',
    fontSize: '1.5em',
    lineHeight: 1.6,
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    animation: 'slideIn 0.7s ease-out',
  },
  introTitle: {
    color: '#86C232', // Neon green for title
    fontWeight: '700',
    fontSize: '2.5em',
    letterSpacing: '1px',
    marginBottom: '20px',
  },
  introText: {
    fontSize: '1.2em',
    lineHeight: '1.8',
    marginBottom: '30px',
  },
  ctaButton: {
    padding: '10px 30px',
    fontSize: '1.1em',
    color: '#222629', // Dark text
    backgroundColor: '#86C232', // Neon green for button
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'background 0.3s ease, transform 0.3s ease',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
    fontWeight: '600',
  },
  ctaButtonHover: {
    backgroundColor: '#61892F', // Darker green on hover
    transform: 'scale(1.05)',
  },
  hashtag: {
    marginTop: '50px',
    fontSize: '2em',
    color: '#86C232', // Neon green
    fontWeight: 'bold',
    letterSpacing: '2px',
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
    animation: 'fadeIn 1.8s ease-in-out',
  },
  '@keyframes fadeIn': {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
  '@keyframes slideIn': {
    from: {
      transform: 'translateY(-50px)',
    },
    to: {
      transform: 'translateY(0)',
    },
  },
};

export default Home;
