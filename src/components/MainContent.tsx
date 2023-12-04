import TechnologiesContainer from "./TechnologiesContainer";
import AboutContainer from "./AboutContainer";
import ProjectsContainer from "./ProjectsContainer";
import React from 'react';


import "../styles/components/maincontent.sass";
import ExperienceContainer from "./ExperienceContainer";
import Experience from "./Experience";

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <Experience />
      <ExperienceContainer />
      <TechnologiesContainer />
      <ProjectsContainer />
    </main>
  );
};

export default MainContent;
