import React from 'react';

// 1. ミニマルフェード
export const MinimalFade: React.FC = () => {
  return (
    <div className="fullscreen-animation minimal-fade">
      <div className="minimal-fade-logo animated-element">
        SPLASH
      </div>
    </div>
  );
};

// 2. グラデーション波
export const GradientWave: React.FC = () => {
  return (
    <div className="fullscreen-animation gradient-wave">
      <div className="gradient-wave-element animated-element" />
    </div>
  );
};

// 3. パーティクル爆発
export const ParticleExplosion: React.FC = () => {
  const particles = Array.from({ length: 24 }, (_, i) => (
    <div key={i} className="particle animated-element" />
  ));

  return (
    <div className="fullscreen-animation particle-explosion">
      {particles}
    </div>
  );
};

// 4. タイポグラフィ
export const Typography: React.FC = () => {
  const text = "WELCOME";
  const chars = text.split('').map((char, i) => (
    <span key={i} className="typography-char animated-element">
      {char}
    </span>
  ));

  return (
    <div className="fullscreen-animation typography">
      <div className="typography-text">
        {chars}
      </div>
    </div>
  );
};

// 5. 液体モーフィング
export const LiquidMorph: React.FC = () => {
  return (
    <div className="fullscreen-animation liquid-morph">
      <div className="liquid-shape animated-element" />
    </div>
  );
};

// 6. ネオン回路
export const NeonCircuit: React.FC = () => {
  return (
    <div className="fullscreen-animation neon-circuit">
      <svg className="circuit-svg animated-element" viewBox="0 0 300 300">
        <path
          className="circuit-path"
          d="M50 50 L250 50 L250 150 L150 150 L150 250 L250 250"
        />
        <path
          className="circuit-path"
          d="M50 100 L200 100 L200 200 L100 200"
          style={{ animationDelay: '0.2s' }}
        />
        <path
          className="circuit-path"
          d="M75 75 L225 75 L225 175 L125 175"
          style={{ animationDelay: '0.4s' }}
        />
      </svg>
    </div>
  );
};

// 7. 3Dキューブ
export const Cube3D: React.FC = () => {
  return (
    <div className="fullscreen-animation cube-3d">
      <div className="cube animated-element">
        <div className="cube-face front"></div>
        <div className="cube-face back"></div>
        <div className="cube-face right"></div>
        <div className="cube-face left"></div>
        <div className="cube-face top"></div>
        <div className="cube-face bottom"></div>
      </div>
    </div>
  );
};

// 8. オーガニック
export const Organic: React.FC = () => {
  return (
    <div className="fullscreen-animation organic">
      <div className="organic-shape animated-element" />
    </div>
  );
};

// 9. グリッチ
export const Glitch: React.FC = () => {
  return (
    <div className="fullscreen-animation glitch">
      <div className="glitch-text animated-element">
        GLITCH
      </div>
    </div>
  );
};

// 10. 線描アニメーション
export const LineDrawing: React.FC = () => {
  return (
    <div className="fullscreen-animation line-drawing">
      <svg className="line-svg animated-element" viewBox="0 0 280 280">
        <path
          className="line-path"
          d="M40 140 Q70 40 140 70 Q240 100 210 140 Q240 240 140 210 Q40 180 40 140"
        />
      </svg>
    </div>
  );
};