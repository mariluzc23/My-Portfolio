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
          title="Restaurant Reservation System"
          description="Full stack reservation and table management system."
          techStack={
            <ul>
              <li>React</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>PostreSQL</li>
            </ul>}
          codeLinkDemo="https://bit.ly/3ySb8cQ"
          codeLink=" https://bit.ly/3AF6CPr"
          />
          <ProjectCard
          title="Flashcard App"
          description="An interactive web application designed to help users learn and memorize information through digital flashcards."
          techStack={
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>HTML</li>
            <li>Bootstrap</li>
          </ul>}
          codeLinkDemo=""
          codeLink="https://bit.ly/4dxk8TV"
          />
        </div>
      </section>
      <hr></hr>
      <section id="java-projects">
        <h2>Java Projects</h2>
        <div className="projects-grid">
          <ProjectCard
          title="
          Currency Converter App"
          description="Developed a Java Swing application for currency conversion, featuring an intuitive GUI."
          techStack={
            <ul>
              <li>Java</li>
              <li>Java Swing</li>
            </ul>}
          codeLinkDemo="https://bit.ly/3sEw3N2"
          codeLink="https://bit.ly/3R1yN1b"
          />
           <ProjectCard
          title="Tic-Tac-Toe"
          description="This is a Tic-Tac-Toe gameboard that can be played in the terminal/console."
          techStack={
            <ul>
              <li>Java</li>
            </ul>}
          codeLinkDemo=""
          codeLink="https://bit.ly/3sVVp9m"
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
