import React from "react";
import "./CVPage.css";

const CV = () => {
  return (
    <div className="cv-container">
      <header className="cv-header">
        <h1>Sahil Deo</h1>
        <p>📞 022 479 1311 | ✉️ sahil.deo5000@gmail.com</p>
        <div className="cv-links">
          <a href="https://www.linkedin.com/in/sahil-deo/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/DrShady5000" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </header>

      <section>
        <h2>Professional Summary</h2>
        <p>
          Experienced leader transitioning into full-stack development with expertise in React, Node.js, MySQL, and cloud solutions. Strong problem-solving, multitasking, and critical-thinking abilities. Passionate about applying technical skills to innovative projects and continuously improving through hands-on development.
        </p>
      </section>

      <section>
        <h2>Technical Skills</h2>
        <ul>
          <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React.js, UI/UX principles</li>
          <li><strong>Backend:</strong> Node.js, Express.js</li>
          <li><strong>Databases:</strong> MySQL, MongoDB</li>
          <li><strong>Cloud:</strong> Microsoft Azure</li>
          <li><strong>APIs:</strong> RESTful API design & integration</li>
          <li><strong>Version Control:</strong> Git, GitHub</li>
          <li><strong>AI/ML:</strong> Google AI, Azure AI</li>
          <li><strong>Testing:</strong> Jest (TDD)</li>
          <li><strong>Agile:</strong> Scrum, Jira</li>
          <li><strong>Data Analytics & Visualization:</strong> Power BI</li>
        </ul>
      </section>

      <section>
        <h2>Professional Skills</h2>
        <p>
          ✔️ Customer Service | ✔️ Leadership | ✔️ Time Management | ✔️ Critical Thinking | ✔️ Communication | ✔️ Problem Solving | ✔️ Team Collaboration | ✔️ Adaptability
        </p>
      </section>

      <section>
        <h2>Education</h2>
        <ul>
          <li><strong>Certificate in Digital Technology Product Solutions (Level 6)</strong> – Mission Ready | Completed 2025</li>
          <li><strong>Certificate in Digital Technology Product Solutions (Level 5)</strong> – Mission Ready | Completed 2024</li>
          <li><strong>Certificate in Technology Product Development (Level 4)</strong> – Mission Ready | Completed 2024</li>
          <li><strong>NCEA Level 3</strong> – One Tree Hill College, Auckland | Graduated 2017</li>
          <li><strong>NCEA Level 2</strong> – Passed with Merit</li>
          <li><strong>NCEA Level 1</strong> – Passed with Merit</li>
        </ul>
      </section>

      <section>
        <h2>Projects</h2>

        <div className="cv-card">
          <h3>
            Full-Stack Personal Blog Platform
            <a href="https://my-blog-5ky8e6bbo-drshadys-projects.vercel.app/" target="_blank" rel="noreferrer"> My Blog</a>
            <a href="https://github.com/DrShady5000/my-blog" target="_blank" rel="noreferrer"> GitHub Repo</a>
          </h3>
          <ul>
            <li>Built a full-stack personal blog using TypeScript, Next.js (React), Node.js, and MongoDB.</li>
            <li>Supports rich text post creation with image upload.</li>
            <li>Uses SSG and dynamic routing in Next.js.</li>
            <li>Deployed to Vercel with optimized performance.</li>
          </ul>
        </div>

        <div className="cv-card">
          <h3>Delivery Practice Refresh (DPR) Dashboard – Foodstuffs IT</h3>
          <ul>
            <li>Built a Power BI dashboard for tracking delivery practices and maturity levels.</li>
            <li>Focused on real-time insights, usability, and reporting clarity.</li>
          </ul>
        </div>

        <div className="cv-card">
          <h3>Trade Me Auction (Mock Project) – Mission Ready</h3>
          <ul>
            <li>Enhanced item comparison functionality on a Trade Me mock system.</li>
            <li>Used React.js for frontend, Node.js backend, and MongoDB for storage.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Work Experience</h2>

        <div className="cv-card">
          <h3>Warehouse Assistant – FedEx, East Tāmaki | Feb 2023 – Present</h3>
          <p>Sorted freight and managed packages. Supported warehouse organization and logistics flow.</p>
        </div>

        <div className="cv-card">
          <h3>Shift Supervisor – McDonald's, Māngere | Mar 2017 – Feb 2023</h3>
          <p>Led a team to manage store operations. Delivered customer service, managed cash, and maintained equipment.</p>
        </div>

        <div className="cv-card">
          <h3>Intern – Foodstuffs IT | Oct – Dec 2024</h3>
          <p>Assisted in Power BI dashboard development. Collaborated with stakeholders to visualize and report business data.</p>
        </div>
      </section>

      <section>
        <h2>References</h2>
        <p>Available on request</p>
      </section>
    </div>
  );
};

export default CV;