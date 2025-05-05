import React from "react";
import "./CVPage.css";

const CV = () => {
  return (
    <div className="cv-container">
      <header className="cv-header">
        <h1>Sahil Deo</h1>
        <div className="cv-links">
          <a href="https://devbysahil.netlify.app/" target="_blank" rel="noreferrer">Portfolio</a>
          <a href="https://www.linkedin.com/in/sahil-deo/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/DrShady5000" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </header>

      <section>
        <h2>Summary</h2>
        <p>
          I’m a full-stack developer with a strong leadership background and a hands-on approach to learning. After several years in team management, I’ve shifted my focus to software development, working with React, Node.js, and TypeScript. I'm passionate about solving problems and building meaningful tech, and I'm always eager to grow and take on new challenges.
        </p>
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
            <li>• Developed a blog platform to document my developer journey.</li>
            <li>• Built with TypeScript, Next.js (frontend), Node.js (backend), and MongoDB (data storage).</li>
            <li>• Designed a clean, responsive UI with static site generation and dynamic routing.</li>
            <li>• Deployed via Vercel with secure environment variables and optimized performance.</li>
            <li>• Strengthened real-world full-stack development skills and project architecture thinking.</li>
            <li><strong>• Tech Stack:</strong> TypeScript, Next.js, Node.js, MongoDB, Vercel</li>
          </ul>
        </div>

        <div className="cv-card">
          <h3>Delivery Practice Refresh (DPR) Dashboard – Foodstuffs IT</h3>
          <ul>
            <li>• Refined a Power BI dashboard to help IT teams track delivery practices and maturity levels.</li>
            <li>• Designed real-time data visualizations and user-friendly reports for internal use.</li>
            <li>• Helped teams monitor KPIs like delivery maturity and team adoption benchmarks.</li>
            <li><strong>• Tech Stack:</strong> Power BI, Data Visualization, Agile, IT Analytics</li>
          </ul>
        </div>

        <div className="cv-card">
          <h3>Developer Portfolio Website
            <a href="https://github.com/DrShady5000/my-portfolio" target="_blank" rel="noreferrer"> GitHub Repo</a>
            </h3>
          <ul>
            <li>• Created a personal site to showcase my work, skills, and development journey.</li>
            <li>• Built with React, Next.js, and TypeScript, fully responsive across devices.</li>
            <li>• Focused on clean layout, accessibility, and ease of navigation.</li>
            <li>• Designed to serve as a professional home for projects and career highlights.</li>
            <li><strong>• Tech Stack:</strong> React, Next.js, TypeScript, UI/UX, Responsive Design</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Technical Skills</h2>
        <ul>
          <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React.js, TypeScript, UI/UX principles</li>
          <li><strong>Backend:</strong> Node.js, Express.js, .NET (ASP.NET Core - learning)</li>
          <li><strong>Databases:</strong> MySQL, MongoDB</li>
          <li><strong>Cloud & DevOps:</strong> Microsoft Azure, .env management, CI/CD basics</li>
          <li><strong>APIs:</strong> RESTful API design & integration</li>
          <li><strong>Version Control:</strong> Git, GitHub</li>
          <li><strong>AI/ML:</strong> Google AI, Azure AI</li>
          <li><strong>Testing:</strong> Jest (TDD)</li>
          <li><strong>Agile:</strong> Scrum, Jira</li>
          <li><strong>Data Analytics & Visualization:</strong> Power BI</li>
          <li><strong>Currently Learning:</strong> C#, .NET (ASP.NET Core)</li>
        </ul>
      </section>

      <section>
        <h2>Professional Skills</h2>
        <ul>
          <li>✔️ Customer Service</li>
          <li>✔️ Leadership</li>
          <li>✔️ Time Management</li>
          <li>✔️ Critical Thinking</li>
          <li>✔️ Communication</li>
          <li>✔️ Problem Solving</li>
          <li>✔️ Team Collaboration</li>
          <li>✔️ Adaptability</li>
        </ul>
      </section>

      <section>
        <h2>Languages</h2>
        <ul>
          <li>English</li>
          <li>Hindi (conversational, unable to write)</li>
        </ul>
      </section>

      <section>
        <h2>Experience</h2>
        <div className="cv-card">
          <h3>Warehouse Assistant – FedEx, East Tāmaki | Feb 2023 – Present</h3>
          <ul>
            <li>• Maintained warehouse efficiency by organizing, sorting, and processing freight.</li>
            <li>• Supported logistics and ensured packages were routed accurately and on time.</li>
          </ul>
        </div>

        <div className="cv-card">
          <h3>Shift Supervisor – McDonald's, Māngere | Mar 2017 – Feb 2023</h3>
          <ul>
            <li>• Led a dedicated team of staff, ensuring daily operations ran smoothly.</li>
            <li>• Provided exceptional customer service and managed cash handling.</li>
            <li>• Helped troubleshoot and maintain equipment, keeping the restaurant in top shape.</li>
            <li>• Trained new staff and ensured all operational standards were met.</li>
          </ul>
        </div>

        <div className="cv-card">
          <h3>Intern – Foodstuffs IT | Oct – Dec 2024</h3>
          <ul>
            <li>• Improved existing Power BI dashboards that helped the IT team track key metrics.</li>
            <li>• Collaborated closely with the team, refining the dashboards to provide clear, real-time insights for better decision-making.</li>
            <li>• Worked with stakeholders to refine dashboard usability and real-time reporting.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Education</h2>
        <ul>
          <li><strong>NCEA Level 3</strong> – One Tree Hill College, Auckland | Graduated 2017</li>
          <li><strong>Merit in Level 1 & Level 2</strong> – One Tree Hill College, Auckland</li>
        </ul>
      </section>

      <section>
        <h2>Certifications</h2>
        <div className="certificate">
          <p><strong>Certificate in Applied Digital Technology Product Solutions (Level 6)</strong> – Mission Ready | Feb 2025</p>
          <a href="https://www.credential.net/0a194b53-0506-4c11-8769-82ffe84714bb#acc.GP3FM8ar" target="_blank" rel="noreferrer" aria-label="View Certificate in Applied Digital Technology Product Solutions (Level 6)">View Certificate</a>
          <p>This course provided advanced skills in cloud, AI, and DevOps, offering hands-on experience to optimize workflows in a professional tech setting.</p>
        </div>

        <div className="certificate">
          <p><strong>Certificate in Digital Technology Product Solutions (Level 5)</strong> – Mission Ready | Nov 2024</p>
          <a href="https://www.credential.net/fd717047-e3a4-4635-a227-c667f2ca0bc4#acc.WRDBjANa" target="_blank" rel="noreferrer" aria-label="View Certificate in Digital Technology Product Solutions (Level 5)">View Certificate</a>
          <p>This course gave me a solid foundation in cloud services, AI, DevOps, and agile practices, which I apply to my software development projects.</p>
        </div>

        <div className="certificate">
          <p><strong>Certificate in Technology Development (Level 4)</strong> – Mission Ready | May 2024</p>
          <a href="https://www.credential.net/58e432ca-ee48-454d-866d-34f1b63ce436#acc.FULMwVEq" target="_blank" rel="noreferrer" aria-label="View Certificate in Technology Development (Level 4)">View Certificate</a>
          <p>I learned how to build responsive web apps, server-side software, and manage databases, including frameworks, security, and unit testing.</p>
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
