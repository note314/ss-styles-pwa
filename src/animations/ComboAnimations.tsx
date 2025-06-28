import React from 'react';

// 11. グラデーション × パーティクル
export const GradientParticle: React.FC = () => {
  const particles = Array.from({ length: 16 }, (_, i) => (
    <div key={i} className="floating-particle animated-element" />
  ));

  return (
    <div className="fullscreen-animation gradient-particle">
      {particles}
    </div>
  );
};

// 12. タイポグラフィ × フェード × スケール
export const TypographyFadeScale: React.FC = () => {
  return (
    <div className="fullscreen-animation typography-fade-scale">
      <div className="scale-text animated-element">
        SCALE
      </div>
    </div>
  );
};

// 13. 液体モーフィング × グラデーション
export const LiquidGradient: React.FC = () => {
  return (
    <div className="fullscreen-animation liquid-gradient">
      <div className="liquid-gradient-shape animated-element" />
    </div>
  );
};

// 14. 3D × ネオン × 回転
export const NeonCube3D: React.FC = () => {
  return (
    <div className="fullscreen-animation neon-cube-3d">
      <div className="neon-cube animated-element">
        <div className="neon-cube-face front"></div>
        <div className="neon-cube-face back"></div>
        <div className="neon-cube-face right"></div>
        <div className="neon-cube-face left"></div>
        <div className="neon-cube-face top"></div>
        <div className="neon-cube-face bottom"></div>
      </div>
    </div>
  );
};

// 15. ミニマル × 線描 × 微細パーティクル
export const MinimalLineParticle: React.FC = () => {
  const microParticles = Array.from({ length: 6 }, (_, i) => (
    <div key={i} className="micro-particle animated-element" />
  ));

  return (
    <div className="fullscreen-animation minimal-line-particle">
      <svg className="minimal-line-svg animated-element" viewBox="0 0 200 200">
        <path
          className="minimal-line-path"
          d="M50 100 Q100 50 150 100 Q100 150 50 100"
        />
      </svg>
      {microParticles}
    </div>
  );
};

// 16. オーガニック × 液体 × カラー変化
export const OrganicLiquidColor: React.FC = () => {
  return (
    <div className="fullscreen-animation organic-liquid-color">
      <div className="organic-liquid-shape animated-element" />
    </div>
  );
};

// 17. グリッチ × タイポグラフィ × ネオン
export const GlitchTypoNeon: React.FC = () => {
  return (
    <div className="fullscreen-animation glitch-typo-neon">
      <div className="glitch-neon-text animated-element">
        NEON
      </div>
    </div>
  );
};

// 18. 線描 × フェード × グロー
export const LineDrawGlow: React.FC = () => {
  return (
    <div className="fullscreen-animation line-draw-glow">
      <svg className="glow-line-svg animated-element" viewBox="0 0 300 300">
        <path
          className="glow-line-path path-1"
          d="M50 150 Q100 50 150 100 Q200 150 150 200 Q100 250 50 150"
        />
        <path
          className="glow-line-path path-2"
          d="M100 100 Q150 75 200 100 Q225 150 200 200 Q150 225 100 200 Q75 150 100 100"
        />
        <path
          className="glow-line-path path-3"
          d="M125 125 Q150 112.5 175 125 Q187.5 150 175 175 Q150 187.5 125 175 Q112.5 150 125 125"
        />
      </svg>
    </div>
  );
};

// 19. パーティクル × 3D × グラデーション
export const Particle3DGradient: React.FC = () => {
  const particles = Array.from({ length: 20 }, (_, i) => (
    <div key={i} className="particle-3d animated-element" />
  ));

  return (
    <div className="fullscreen-animation particle-3d-gradient">
      {particles}
    </div>
  );
};

// 20. ネオン × 線描 × モーフィング
export const NeonLineMorph: React.FC = () => {
  return (
    <div className="fullscreen-animation neon-line-morph">
      <svg className="neon-morph-svg animated-element" viewBox="0 0 320 320">
        <path className="neon-morph-path" />
      </svg>
    </div>
  );
};

// 21. タイポグラフィ × グリッチ × パーティクル
export const TypoGlitchParticle: React.FC = () => {
  const chaosParticles = Array.from({ length: 16 }, (_, i) => (
    <div key={i} className="chaos-particle animated-element" />
  ));

  return (
    <div className="fullscreen-animation typo-glitch-particle">
      <div className="chaos-text animated-element">
        CHAOS
      </div>
      {chaosParticles}
    </div>
  );
};