import React from 'react';
import picture from '../picture.jpg';

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Our Note-Taking App</h1>
      <p style={styles.paragraph}>
        Our Note-Taking App is designed to help you capture and organize your thoughts with ease.
        Whether you're jotting down quick ideas or crafting detailed notes, our app provides a user-friendly interface
        that makes note-taking simple and efficient.
      </p>
      <p style={styles.italicParagraph}>
        "Capture your thoughts, organize your ideas, and unleash your creativity."
      </p>
      <img src={picture} alt="About Us" style={styles.image} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    
    backgroundColor: '#pink', 
    textAlign: 'center',
    padding: '20px',
    transition: 'background-color 0.5s ease',
  },
  title: {
    fontSize: '36px',
    color: '#333', // Dark text color
    marginBottom: '20px',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)', 
  },
  paragraph: {
    fontSize: '18px',
    color: '#555', // Medium gray text
    marginBottom: '20px',
  },
  image: {
    width: '250px', 
    height: 'auto', 
    
  },

  italicParagraph: {
    fontSize: '20px',
    color: '#ff69b4', 
    fontStyle: 'italic',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)', 
    
    },
  },
};

export default AboutUs;

