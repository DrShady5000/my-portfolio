import React from 'react';
import './HomePage.css';

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
        <p>
          I’m a passionate full-stack developer with expertise in React, Node.js, and cloud technologies. 
          I’m constantly learning and improving my skills. I have worked on several projects involving web 
          applications, APIs, and data visualization using tools like Power BI and low-code platforms such as 
          Power Apps. My goal is to develop scalable and efficient solutions while continuously expanding my 
          knowledge, especially in the areas of AI and machine learning.
        </p>
        <p>
          In my free time, I enjoy experimenting with new technologies, contributing to open-source projects, 
          and staying up  -to-date with the latest trends in software development. I’m always excited about the 
          potential of AI to change the way we interact with technology and solve complex problems. 
          Currently, I am working on expanding my portfolio by working on some projects while also working to learn C#.
        </p>
      </section>

      <section id="projects" className="projects">
        <h2>My Projects</h2>
        <div className="project-card">
          <h3>Project 1: Blog Platform to Track My Journey</h3>
          <p>
            This blog platform was created to document my journey as a developer. It allows me to write about my experiences, challenges, and growth as I learn new technologies, improve my coding skills, and work on various projects. Built using TypeScript, Next.js, and MongoDB. I deployed it using Vercel. Through this platform, I can track my progress over time and share my learning experiences with others.
          </p>
          <p>
            You can check out the live blog at: <a href="https://my-blog-5ky8e6bbo-drshadys-projects.vercel.app/" target="_blank" rel="noopener noreferrer">My Blog</a>
          </p>
        </div>
        <div className="project-card">
          <h3>Project 2: Data Dashboard</h3>
          <p>A data visualization dashboard using React, Node.js, and Power BI to present complex datasets. The dashboard allows users to interact with and filter data in real time, providing insights into business performance.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
