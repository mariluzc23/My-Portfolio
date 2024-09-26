import React, {useState, useEffect }from 'react';
import { LuArrowUpToLine } from "react-icons/lu";
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

  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  useEffect(() => {
    const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
}; 
}, []);

  return (
    <div>
      <PortfolioNavBar/>
      <Header/>
      <About/>
      <section id="javascript-projects">
        <h2>JavaScript Projects</h2>
        <div className="projects-grid">
          <ProjectCard
          title="Restaurant Reservation System"
          description="Full stack reservation and table management system."
          techStack={
            <ul>
              <li>React</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
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
          codeLinkDemo="https://flashcard-app-capstone-one1.vercel.app/"
          codeLink="https://bit.ly/4dxk8TV"
          />
        </div>
      </section>
      
      {/* DISABLED JAVA PROJECTS SECTION WHEN ENABLED PLEASE ADJUST NAV BAR*/}

      {/* <hr></hr>
      <section id="java-projects">
        <h2>Java Projects</h2>
        <div className="projects-grid">
          <ProjectCard
          title="
          Currency Converter"
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
      </section> */}
      <Skills /> 
      <Education/>
      <Contact/>
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: 'FFFFF',
            color: 'black',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            fontSize: '24px',
            cursor: 'pointer',
            zIndex: 1000,
          }}
        >
        <LuArrowUpToLine />
        </button>
      )}
    </div>
  );
}


export default App;
