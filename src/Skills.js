import React from 'react';
import { FaReact, FaNodeJs, FaJava, FaHtml5, FaCss3Alt, FaBootstrap, } from 'react-icons/fa';

function Skills() {
    return (
      <section id="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-card" style={{color: '#00d8ff'}}>
            <FaReact size={50} />
            <p>React.js</p>
          </div>
          <div className="skill-card" style={{color: '#3c873a'}}>
            <FaNodeJs size={50} />
            <p>Node.js</p>
          </div>
          <div className="skill-card" style={{color: '#e34c26'}}>
            <FaHtml5 size={50} />
            <p>HTML</p>
          </div>
          <div className="skill-card" style={{color: '#264de4'}}>
            <FaCss3Alt size={50} />
            <p>CSS</p>
          </div>
          <div className="skill-card" style={{color: '#563d7c'}}>
            <FaBootstrap size={50} />
            <p>Bootstrap</p>
          </div>
          <div className="skill-card" style={{color: '#5382a1'}}>
            <FaJava size={50} />
            <p>Java</p>
          </div>
          {/* Add more skills */}
        </div>
      </section>
    );
  }

  export default Skills;