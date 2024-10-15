import React from 'react';
import { Link } from 'react-router-dom';
// import picture from '../assets/picture.jpg'; // Adjust the path as necessary

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={logoContainer}>
        {/* <img src={picture.jpg} alt="App Logo" style={logoStyle} /> */}
        <h1 style={titleStyle}>Note Taking App</h1>
      </div>
      <p style={descriptionStyle}>
        A simple and efficient way to create, organize, and manage your notes.
      </p>
      <nav>
        <ul style={navStyle}>
          <li><Link to="/aboutus">About</Link></li>
          <li><Link to="/">Home</Link></li>
          {/* <li><Link to="/login">Login</Link></li> */}
          <li><Link to="/userprofile">User Profile</Link></li>
        </ul>
      </nav>
    </header>
  );
};

// Styles (you can customize these)
const headerStyle = {
  background: 'pink',
  padding: '20px 20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const logoContainer = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
};

// const logoStyle = {
//   width: '50px', // Adjust size as needed
//   height: '50px',
//   marginRight: '10px',
// };

const titleStyle = {
  margin: 0,
};

const descriptionStyle = {
  fontStyle: 'italic',
  
  color: '#black',
  textAlign: 'center',
  marginBottom: '10px',
};

const navStyle = {
  listStyleType: 'none',
  display: 'flex',
  gap: '15px',
};

export default Header;

