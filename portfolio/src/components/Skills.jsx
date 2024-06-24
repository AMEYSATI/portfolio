import React, { useState, useEffect } from 'react';
import '../styling/Skills.css';

function Skills() {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'NodeJS', 'ReactJS', 'Tailwind', 'PostgreSQL',
    'MySQL', 'C++', 'Express', 'MongoDB', 'Unity'
  ];

  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const newPositions = [];
    for (let i = 0; i < skills.length; i++) {
      let position;
      let isValidPosition = false;

      while (!isValidPosition) {
        position = getRandomPosition();
        isValidPosition = newPositions.every(pos => !isOverlapping(pos, position));
      }

      newPositions.push(position);
    }

    setPositions(newPositions);
  }, [skills.length]);

  const getRandomPosition = () => {
    let x, y;
    do {
      x = Math.floor(Math.random() * 70) + 15; // Adjusted range to 15% - 85%
      y = Math.floor(Math.random() * 70) + 15; // Adjusted range to 15% - 85%
    } while (isInCentralExclusionZone(x, y));

    return { left: `${x}%`, top: `${y}%` };
  };

  const isInCentralExclusionZone = (x, y) => {
    const centralZone = 20; // Define the central exclusion zone as 20% around the center
    return x > 30 && x < 70 && y > 30 && y < 70; // Adjust these values as needed
  };

  const isOverlapping = (pos1, pos2) => {
    const threshold = 10; // Minimum distance between skill items in percentage
    const deltaX = parseFloat(pos1.left) - parseFloat(pos2.left);
    const deltaY = parseFloat(pos1.top) - parseFloat(pos2.top);
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY) < threshold;
  };

  return (
    <div id='skills' className='parent-skill'>
      <h1 className='heading-skills'>Skills</h1>
      {skills.map((skill, index) => {
        const position = positions[index];
        return (
          <div key={index} className='skill-item' style={position}>
            {skill}
          </div>
        );
      })}
    </div>
  );
}

export default Skills;
