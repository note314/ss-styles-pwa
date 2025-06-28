import type { Animation } from '../types/animation';

export const animations: Animation[] = [
  // ベース技術演出（1-10）
  {
    id: 1,
    name: 'ミニマルフェード',
    description: '大きなロゴがフェードイン',
    category: 'base',
    colorSample: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
    component: 'MinimalFade'
  },
  {
    id: 2,
    name: 'グラデーション波',
    description: '画面を横切る美しいグラデーション',
    category: 'base',
    colorSample: 'linear-gradient(45deg, #f093fb 0%, #f5576c 100%)',
    component: 'GradientWave'
  },
  {
    id: 3,
    name: 'パーティクル爆発',
    description: '中央から放射状にパーティクル散布',
    category: 'base',
    colorSample: 'linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)',
    component: 'ParticleExplosion'
  },
  {
    id: 4,
    name: 'タイポグラフィ',
    description: '大文字が順次表示',
    category: 'base',
    colorSample: 'linear-gradient(45deg, #43e97b 0%, #38f9d7 100%)',
    component: 'Typography'
  },
  {
    id: 5,
    name: '液体モーフィング',
    description: '大きな流体形状の変化',
    category: 'base',
    colorSample: 'linear-gradient(45deg, #fa709a 0%, #fee140 100%)',
    component: 'LiquidMorph'
  },
  {
    id: 6,
    name: 'ネオン回路',
    description: '光る回路パターンが画面に展開',
    category: 'base',
    colorSample: 'linear-gradient(45deg, #a8edea 0%, #fed6e3 100%)',
    component: 'NeonCircuit'
  },
  {
    id: 7,
    name: '3Dキューブ',
    description: '立体キューブが画面中央で回転',
    category: 'base',
    colorSample: 'linear-gradient(45deg, #d299c2 0%, #fef9d7 100%)',
    component: 'Cube3D'
  },
  {
    id: 8,
    name: 'オーガニック',
    description: '自然な有機的形状が変化',
    category: 'base',
    colorSample: 'linear-gradient(45deg, #89f7fe 0%, #66a6ff 100%)',
    component: 'Organic'
  },
  {
    id: 9,
    name: 'グリッチ',
    description: '画面全体にデジタルノイズ',
    category: 'base',
    colorSample: 'linear-gradient(45deg, #fdbb2d 0%, #22c1c3 100%)',
    component: 'Glitch'
  },
  {
    id: 10,
    name: '線描アニメーション',
    description: '線が文字/図形を描く',
    category: 'base',
    colorSample: 'linear-gradient(45deg, #e0c3fc 0%, #9bb5ff 100%)',
    component: 'LineDrawing'
  },
  
  // 組み合わせ技術演出（11-21）
  {
    id: 11,
    name: 'グラデーション × パーティクル',
    description: '背景グラデーション + 浮遊パーティクル',
    category: 'combo',
    colorSample: 'linear-gradient(45deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
    component: 'GradientParticle'
  },
  {
    id: 12,
    name: 'タイポグラフィ × フェード × スケール',
    description: '大文字のスケール変化',
    category: 'combo',
    colorSample: 'linear-gradient(45deg, #4facfe 0%, #43e97b 50%, #f5576c 100%)',
    component: 'TypographyFadeScale'
  },
  {
    id: 13,
    name: '液体モーフィング × グラデーション',
    description: '流体 + 色変化',
    category: 'combo',
    colorSample: 'linear-gradient(45deg, #fa709a 0%, #fee140 50%, #a8edea 100%)',
    component: 'LiquidGradient'
  },
  {
    id: 14,
    name: '3D × ネオン × 回転',
    description: '光るキューブの回転',
    category: 'combo',
    colorSample: 'linear-gradient(45deg, #d299c2 0%, #fef9d7 50%, #89f7fe 100%)',
    component: 'NeonCube3D'
  },
  {
    id: 15,
    name: 'ミニマル × 線描 × 微細パーティクル',
    description: '線描 + 小パーティクル',
    category: 'combo',
    colorSample: 'linear-gradient(45deg, #e0c3fc 0%, #9bb5ff 50%, #fdbb2d 100%)',
    component: 'MinimalLineParticle'
  },
  {
    id: 16,
    name: 'オーガニック × 液体 × カラー変化',
    description: '有機的変形 + 色遷移',
    category: 'combo',
    colorSample: 'linear-gradient(45deg, #89f7fe 0%, #fa709a 50%, #43e97b 100%)',
    component: 'OrganicLiquidColor'
  },
  {
    id: 17,
    name: 'グリッチ × タイポグラフィ × ネオン',
    description: 'グリッチ文字 + 光効果',
    category: 'combo',
    colorSample: 'linear-gradient(45deg, #fdbb2d 0%, #22c1c3 50%, #a8edea 100%)',
    component: 'GlitchTypoNeon'
  },
  {
    id: 18,
    name: '線描 × フェード × グロー',
    description: '光る線の描画',
    category: 'combo',
    colorSample: 'linear-gradient(45deg, #e0c3fc 0%, #667eea 50%, #f093fb 100%)',
    component: 'LineDrawGlow'
  },
  {
    id: 19,
    name: 'パーティクル × 3D × グラデーション',
    description: '3Dパーティクル + 背景',
    category: 'combo',
    colorSample: 'linear-gradient(45deg, #4facfe 0%, #d299c2 50%, #66a6ff 100%)',
    component: 'Particle3DGradient'
  },
  {
    id: 20,
    name: 'ネオン × 線描 × モーフィング',
    description: '光る線の形状変化',
    category: 'combo',
    colorSample: 'linear-gradient(45deg, #a8edea 0%, #fed6e3 50%, #fef9d7 100%)',
    component: 'NeonLineMorph'
  },
  {
    id: 21,
    name: 'タイポグラフィ × グリッチ × パーティクル',
    description: '文字 + ノイズ + 爆発',
    category: 'combo',
    colorSample: 'linear-gradient(45deg, #fdbb2d 0%, #22c1c3 25%, #f5576c 50%, #43e97b 75%, #e0c3fc 100%)',
    component: 'TypoGlitchParticle'
  }
];

export const getAnimationById = (id: number): Animation | undefined => {
  return animations.find(animation => animation.id === id);
};

export const getBaseAnimations = (): Animation[] => {
  return animations.filter(animation => animation.category === 'base');
};

export const getComboAnimations = (): Animation[] => {
  return animations.filter(animation => animation.category === 'combo');
};