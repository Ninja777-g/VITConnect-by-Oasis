import React, { useEffect, useState } from 'react';

function Home() {
  const images = [
    "https://www.colive.com/blog/wp-content/uploads/2018/04/wdwf.jpg",
    "https://vit.ac.in/system/files/header_banner/program-offered.jpg",
    "https://chennai.vit.ac.in/wp-content/uploads/2020/07/AB1-7th-Floor-Nethaji-Auditorium-3.jpg",
    "https://vit.ac.in/system/files/vit-nirf-rank-2024-header.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div style={styles.container}>
      <div style={styles.introduction}>
        <h2 style={styles.introTitle}>Your Gateway to Campus Life</h2>
        <p style={styles.introText}>
          VIT Connect is designed to streamline your college experience by providing easy access to essential services like maps, mess menus, shop listings, FAQs, and events. Join us as we enhance your journey at VIT!
        </p>
      </div>

      <div style={styles.hashtag}>#ConnectToVIT</div>

      <div style={styles.gallery}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Campus Image ${index + 1}`}
            style={{
              ...styles.galleryImage,
              display: currentIndex === index ? 'block' : 'none', // Show only the current image
            }}
          />
        ))}
      </div>
    </div>
  );
}

// Styles as a JavaScript object
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    backgroundImage: "url('https://example.com/background.jpg'), url('https://example.com/overlay.png')", // Replace with your images
    backgroundSize: 'cover, contain',
    backgroundPosition: 'center, center',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  introduction: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    color: '#333',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    maxWidth: '600px',
    marginTop: '80px',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  introTitle: {
    color: '#007BFF',
    marginBottom: '20px',
    fontSize: '2em',
  },
  introText: {
    lineHeight: 1.6,
    fontSize: '1.2em',
  },
  hashtag: {
    marginTop: '20px',
    fontSize: '1.5em',
    color: '#007BFF',
    fontWeight: 'bold',
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
  },
  gallery: {
    display: 'flex',
    overflow: 'hidden',
    maxWidth: '1000px',
    marginTop: '40px',
    position: 'relative',
  },
  galleryImage: {
    width: '100%',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.3s',
  },
};

export default Home;
