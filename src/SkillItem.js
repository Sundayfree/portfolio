import React from 'react';
import './App.css';
export default function SkillItem(props) {
  const width = props.width;
  return (
    <div className="skll-container">
      <div className="skill-name">{props.name}</div>
      <div className="skill-bar-wrap">
        <div className="skill-bar" style={{ width: width }} />
      </div>
    </div>
  );
}
