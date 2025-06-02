import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About NewsWebApp</h1>
      <p>
        <strong>NewsWebApp</strong> is your go-to platform for staying updated with the latest news from around the world.
        Whether it's politics, technology, sports, or entertainment, we bring real-time updates in a simple, user-friendly format.
      </p>

      <h2>🔍 Features:</h2>
      <ul>
        <li>Browse top headlines in a clean layout</li>
        <li>Filter news by categories like Sports, Tech, and Business</li>
        <li>Read detailed articles with support for markdown</li>
        <li>Responsive design for mobile and desktop</li>
        <li>Powered by modern tech: React, Node.js, MongoDB/JSON</li>
      </ul>

      <p className="footer-note">Stay informed. Stay ahead. 📲</p>
    </div>
  );
};

export default About;
