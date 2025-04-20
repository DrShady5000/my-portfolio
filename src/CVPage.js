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
          <div className="project">
            <h3>Full-Stack Personal Blog Platform – <a href="https://my-blog-5ky8e6bbo-drshadys-projects.vercel.app/" target="_blank" rel="noreferrer">My Blog</a> <a href="https://github.com/DrShady5000/my-blog" target="_blank" rel="noreferrer">GitHub Repo</a></h3>
            <ul>
              <li>Built a full-stack personal blog using TypeScript, Next.js (React) for the frontend, Node.js for the backend, and MongoDB for persistent storage.</li>
              <li>Designed to document my coding journey with modern web development practices.</li>
              <li>Enabled post creation with rich text and optional image upload.</li>
              <li>Implemented static site generation (SSG) with dynamic routing via Next.js.</li>
              <li>Secured sensitive data using .env.local for environment variables.</li>
              <li>Deployed to Vercel with production-ready optimizations.</li>
              <li>Showcases practical use of full-stack technologies, clean UI, and live deployment.</li>
            </ul>
          </div>
          <div className="project">
            <h3>Delivery Practice Refresh (DPR) Dashboard – Foodstuffs IT</h3>
            <ul>
              <li>Developed a Power BI dashboard to help Foodstuffs IT squads track delivery practices and maturity levels.</li>
              <li>Designed real-time data visualizations for improved decision-making.</li>
              <li>Focused on usability, accuracy, and reporting clarity.</li>
            </ul>
          </div>
          <div className="project">
            <h3>Trade Me Auction (Mock Project) – Mission Ready</h3>
            <ul>
              <li>Improved the Trade Me Watchlist by enhancing item comparison functionality.</li>
              <li>Built the frontend with React.js and the backend with Node.js.</li>
              <li>Utilized MongoDB for data storage and version control via GitHub.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Work Experience</h2>
          <div className="job">
            <h3>Warehouse Assistant – FedEx, East Tāmaki, Auckland | Feb 2023 – Present</h3>
            <p>Assisted in sorting freight and managing held packages. Maintained warehouse organization and supported logistics operations.</p>
          </div>
          <div className="job">
            <h3>Shift Supervisor – McDonald's, Māngere, Auckland | Mar 2017 – Feb 2023</h3>
            <p>Led a high-performing team to manage daily store operations efficiently. Provided exceptional customer service and ensured accurate cash handling. Conducted maintenance & troubleshooting of store equipment.</p>
          </div>
          <div className="job">
            <h3>Intern – Foodstuffs IT | Oct – Dec 2024</h3>
            <p>Assisted in the development & optimization of Power BI dashboards. Collaborated with teams to analyze and visualize key business data. Worked with stakeholders to enhance dashboard usability and reporting accuracy.</p>
          </div>
        </section>

        <section>
          <h2>References</h2>
          <p>Available on request</p>
        </section>
      </div>
    </div>
  );
};

export default CV;
