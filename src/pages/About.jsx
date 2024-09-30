import React from "react";
import "../styles/about.css"; // Importing the CSS file
import ProfilePicture from "../assets/images/ProfileAI.png";
import NameLogo from "../assets/images/logo-black-transparent-small.png";
import CSSIcon from "../assets/skills/css.png";
import HTMLIcon from "../assets/skills/html_1.png";
import JSIcon from "../assets/skills/js.png";
import GitHubIcon from "../assets/skills/github.png";
import ReactIcon from "../assets/skills/react.png";
import NodeIcon from "../assets/skills/node.png";
import Python from "../assets/skills/python.png";
import PostgreSQL from "../assets/skills/postgresql.png";

const technologies = [
  { icon: JSIcon },
  { icon: ReactIcon },
  { icon: NodeIcon },
  { icon: HTMLIcon },
  { icon: CSSIcon },
  { icon: PostgreSQL },
  { icon: GitHubIcon },
  { icon: Python },
  // Add more technologies as needed
];

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <img src={NameLogo} alt="NameLogo" className="name-logo" />
          <p>
            Hi there! As a full-stack software developer with expertise in both
            front-end and back-end technologies, my passion lies in crafting
            modern, user-friendly software solutions that deliver exceptional
            user experiences. I love designing, engineering, and implementing
            innovative solutions that drive success and efficiency. With more
            than a decade-long career in the tech and construction industries, I
            bring valuable transferable skills, such as problem-solving,
            attention to detail, and a deep understanding of user needs. This
            background enriches my approach to software development, allowing me
            to create solutions that are not only technically robust but also
            empathetic to the user experience.
          </p>
        </div>
        <div className="about-image">
          <img src={ProfilePicture} alt="Profile" />
        </div>
      </div>
      <div className="technologies-section">
        <div className="technologies-icons">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-icon">
              <img src={tech.icon} alt={tech.name} className="tech-image" />
              {/* You can add tech.name if needed */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
