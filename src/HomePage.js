import React from 'react';
import './HomePage.css';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="home-container">
      <section className="intro">
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I’m Sahil Deo, a full-stack developer with a passion for building innovative applications using the latest technologies.</p>
        <a href="#about-me" className="btn">Learn More</a>
      </section>
      
      <section id="about-me" className="about-me">
        <h2>About Me</h2>
        <p>I’m a passionate full-stack developer with expertise in React, Node.js, and cloud technologies. I’m constantly learning and improving my skills. I’m also excited about AI and data visualization!</p>
      </section>

      <section id="projects" className="projects">
        <h2>My Projects</h2>
        <div className="project-card">
          <h3>Project 1: E-commerce App</h3>
          <p>A full-stack e-commerce app built with React, Node.js, and MongoDB. Users can browse products, add them to the cart, and make purchases.</p>
        </div>
        <div className="project-card">
          <h3>Project 2: Blog Platform</h3>
          <p>A blog platform where users can create, edit, and comment on posts. It has a user authentication system and is built with React and Node.js.</p>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
