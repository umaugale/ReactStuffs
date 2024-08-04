import React from 'react';
import './Home.css'; 

const Welcome = () => {
  const lines = [
    "Hii....              ",
    "This is Uma          ",
    "Welcome to my website"
  ];

  return (
    <div className="welcome-container">
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="line">
          {line.split('').map((char, charIndex) => (
            <span 
              key={charIndex} 
              className={`letter ${char === ' ' ? 'space' : ''}`}
              style={{ animationDelay: `${(lineIndex * 2) + (charIndex * 0.2)}s` }}
            >
              {char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Welcome;
