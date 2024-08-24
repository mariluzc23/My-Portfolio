import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PortfolioNavBar from './NavBar.js';
import Header from './Header.js';
import About from './About.js';
import ProjectCard from './ProjectCard.js';
import Skills from './Skills.js';
import Education from './Education.js';
import Contact from './Contact.js';


  
function App() {
  return (
    <div>
      <PortfolioNavBar/>
      <Header/>
      <About/>
      <section id="javascript-projects">
        <h2>Javascript Projects</h2>
        <div className="projects-grid">
          <ProjectCard
          title="Restaurant Reservation App"
          description="Full stack reservation and table management system"
          techStack={
            <ul>
              <li>React</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>PostreSQL</li>
            </ul>}
          codeLinkDemo="https://bit.ly/3HUKkdR"
          codeLink=" https://bit.ly/3PnZg4s"
          />
          <ProjectCard
          title="Flashcard App"
          description="A responsive and interactive web application designed to help users learn and memorize information through digital flashcards."
          techStack={
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>HTML</li>
            <li>Bootstrap</li>
          </ul>}
          codeLink="https://bit.ly/4dxk8TV"
          />
        </div>
      </section>
      <hr></hr>
      <section id="java-projects">
        <h2>Java Projects</h2>
        <div className="projects-grid">
          <ProjectCard
          title="Project One"
          description="Enter description"
          techStack={
            <ul>
              <li>enter stack</li>
              <li>enter stack</li>
            </ul>}
          codeLink="Enter Link"
          />
           <ProjectCard
          title="Project Two"
          description="Enter description"
          techStack={
            <ul>
              <li>enter stack</li>
              <li>enter stack</li>
            </ul>}
          codeLink="Enter Link"
          />
        </div>
      </section>
      <Skills /> 
      <Education/>
      <Contact/>
    </div>
  );
}


export default App;
