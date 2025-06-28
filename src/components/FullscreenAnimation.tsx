import React from 'react';
import type { Animation } from '../types/animation';
import { 
  MinimalFade, 
  GradientWave, 
  ParticleExplosion, 
  Typography, 
  LiquidMorph,
  NeonCircuit,
  Cube3D,
  Organic,
  Glitch,
  LineDrawing
} from '../animations/BaseAnimations';
import {
  GradientParticle,
  TypographyFadeScale,
  LiquidGradient,
  NeonCube3D,
  MinimalLineParticle,
  OrganicLiquidColor,
  GlitchTypoNeon,
  LineDrawGlow,
  Particle3DGradient,
  NeonLineMorph,
  TypoGlitchParticle
} from '../animations/ComboAnimations';

interface FullscreenAnimationProps {
  animation: Animation | null;
  isVisible: boolean;
}

const FullscreenAnimation: React.FC<FullscreenAnimationProps> = ({ 
  animation, 
  isVisible 
}) => {
  if (!animation || !isVisible) {
    return null;
  }

  const renderAnimation = () => {
    switch (animation.component) {
      case 'MinimalFade':
        return <MinimalFade />;
      case 'GradientWave':
        return <GradientWave />;
      case 'ParticleExplosion':
        return <ParticleExplosion />;
      case 'Typography':
        return <Typography />;
      case 'LiquidMorph':
        return <LiquidMorph />;
      case 'NeonCircuit':
        return <NeonCircuit />;
      case 'Cube3D':
        return <Cube3D />;
      case 'Organic':
        return <Organic />;
      case 'Glitch':
        return <Glitch />;
      case 'LineDrawing':
        return <LineDrawing />;
      case 'GradientParticle':
        return <GradientParticle />;
      case 'TypographyFadeScale':
        return <TypographyFadeScale />;
      case 'LiquidGradient':
        return <LiquidGradient />;
      case 'NeonCube3D':
        return <NeonCube3D />;
      case 'MinimalLineParticle':
        return <MinimalLineParticle />;
      case 'OrganicLiquidColor':
        return <OrganicLiquidColor />;
      case 'GlitchTypoNeon':
        return <GlitchTypoNeon />;
      case 'LineDrawGlow':
        return <LineDrawGlow />;
      case 'Particle3DGradient':
        return <Particle3DGradient />;
      case 'NeonLineMorph':
        return <NeonLineMorph />;
      case 'TypoGlitchParticle':
        return <TypoGlitchParticle />;
      default:
        return (
          <div className="fullscreen-animation" style={{ background: animation.colorSample }}>
            <div style={{ color: 'white', textAlign: 'center' }}>
              <h2>{animation.name}</h2>
              <p>アニメーション実装予定</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`fullscreen-overlay ${!isVisible ? 'hidden' : ''}`}>
      {renderAnimation()}
    </div>
  );
};

export default FullscreenAnimation;