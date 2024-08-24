import React, {useState} from 'react';
import { GoStack } from "react-icons/go";
import { FaRegEye, FaLaptopCode } from "react-icons/fa";
import Image from './images/chris-ried-ieic5Tq8YMk-unsplash.jpg';


/* Handles Card Flip */
function ProjectCard({ title, description, techStack, codeLinkDemo, codeLink }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`project-card ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
      {/* Content of the card */}
      <div className="project-card-front">
        <img src={Image} alt={`${title}`} className="project-image"/>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="project-card-back">
        <h3>{title}</h3>
        <ul>
            <GoStack /><strong> Tech Stack:</strong> {techStack}  
        </ul>
        <button className="code-button" onClick={() => window.open(codeLinkDemo, "_blank", "noopener noreferrer")}>
          <FaRegEye />
          <strong> Live Demo</strong>
        </button>
        <button className="code-button" onClick={() => window.open(codeLink, "_blank", "noopener noreferrer")}>
          <FaLaptopCode />
          <strong> View Code</strong>
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;