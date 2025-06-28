import React from 'react';
import type { Animation } from '../types/animation';

interface CardProps {
  animation: Animation;
  onPlay: (animation: Animation) => void;
}

const Card: React.FC<CardProps> = ({ animation, onPlay }) => {
  const handleClick = () => {
    onPlay(animation);
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-header">
        <div className="card-left">
          <div 
            className="card-color-sample"
            style={{ background: animation.colorSample }}
          />
          <span className="card-title">{animation.name}</span>
        </div>
        <div className="card-action">
          タップで再生
        </div>
      </div>
    </div>
  );
};

export default Card;