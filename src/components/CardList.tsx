import React from 'react';
import Card from './Card';
import type { Animation } from '../types/animation';

interface CardListProps {
  animations: Animation[];
  onPlayAnimation: (animation: Animation) => void;
}

const CardList: React.FC<CardListProps> = ({ animations, onPlayAnimation }) => {
  return (
    <div className="container scrollable">
      <div className="card-list">
        {animations.map((animation) => (
          <Card
            key={animation.id}
            animation={animation}
            onPlay={onPlayAnimation}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;