import React from 'react';
import '../styles/components/experience.sass';

const Experience = () => {
  const skills = [
    { name: 'React', experience: '66.67%' },
    { name: 'TypeScript', experience: '100%' },
    { name: 'JavaScript', experience: '100%' },
    { name: 'Java', experience: '33.33%' },
  ];

  return (
    <div className="experience">
      <h2>Experiência</h2>
      {skills.map((skill, index) => (
        <div key={index} className="skill">
          <div className="skill-name">{skill.name}</div>
          <div className="skill-bar">
            <div className="skill-experience" style={{ width: skill.experience }}>
              {skill.experience}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
