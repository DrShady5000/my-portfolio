import React from "react";
import "./CVPage.css";

const CV = () => {
  return (
    <div className="cv-container">
      <div className="cv-card">
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
            Experienced leader transitioning into full-stack development with expertise in React, Node.js, MySQL, and cloud solutions. Strong problem-solving, multitasking, and critical-thinking abilities. Pursuing a Diploma in Digital Technology Development & Design, specializing in full-stack development, cloud computing, and AI integration. Passionate about applying technical skills to innovative projects.
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
            <li><strong>Data Analytics:</strong> Power BI</li>
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
            <li><strong>Certificate in Professional Software Development (AI & Cloud)</strong> – Mission Ready, 2025</li>
            <li><strong>NCEA Level 3</strong> – One Tree Hill College, 2017</li>
            <li><strong>NCEA Level 2</strong> – Passed with Merit</li>
            <li><strong>NCEA Level 1</strong> – Passed with Merit</li>
          </ul>
        </section>

        <section>
          <h2>Projects</h2>
          <div className="project">
            <h3>DPR Dashboard – Foodstuffs IT</h3>
            <ul>
              <li>Developed a Power BI dashboard to help IT squads track delivery practices.</li>
              <li>Designed real-time visualizations for better decision-making.</li>
            </ul>
          </div>
          <div className="project">
            <h3>Insurance Claim API – Mission Ready</h3>
            <ul>
              <li>Built REST APIs using Node.js and tested with Jest.</li>
              <li>Collaborated with GitHub for versioning and teamwork.</li>
            </ul>
          </div>
          <div className="project">
            <h3>Trade Me Auction (Mock Project) – Mission Ready</h3>
            <ul>
              <li>Created item comparison features using React.js and Node.js.</li>
              <li>Used MongoDB for data storage.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Work Experience</h2>
          <div className="job">
            <h3>Warehouse Assistant – FedEx (Feb 2023 – Present)</h3>
            <p>Sorted freight, managed held packages, and supported logistics.</p>
          </div>
          <div className="job">
            <h3>Shift Supervisor – McDonald's (Mar 2017 – Feb 2023)</h3>
            <p>Led operations, trained staff, and handled troubleshooting.</p>
          </div>
          <div className="job">
            <h3>Intern – Foodstuffs IT (Oct – Dec 2025)</h3>
            <p>Assisting with Power BI dashboards, analysis, and stakeholder feedback.</p>
          </div>
        </section>

        <section>
          <h2>References</h2>
          <p>
            Ashnita Devi – 02040265489 | deviashnita@hotmail.com <br />
            Johnny Hopper – 0217562275 | johnnyhopper@gmail.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default CV;
