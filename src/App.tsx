import { useCallback } from 'react';
import Header from './components/Header';
import CardList from './components/CardList';
import FullscreenAnimation from './components/FullscreenAnimation';
import { useAnimation } from './hooks/useAnimation';
import { useScrollPosition } from './hooks/useScrollPosition';
import { animations } from './data/animationConfig';
import type { Animation } from './types/animation';
import './styles/globals.css';
import './styles/components.css';
import './styles/animations.css';

function App() {
  const { activeAnimation, isFullscreen, playAnimation } = useAnimation();
  const { saveScrollPosition, restoreScrollPosition } = useScrollPosition();

  const handlePlayAnimation = useCallback((animation: Animation) => {
    // スクロール位置を保存
    saveScrollPosition();
    
    // アニメーション再生
    playAnimation(animation);
    
    // 1秒後にスクロール位置を復元
    setTimeout(() => {
      restoreScrollPosition();
    }, 1000);
  }, [playAnimation, saveScrollPosition, restoreScrollPosition]);

  return (
    <div className="app-container">
      <Header />
      <CardList 
        animations={animations}
        onPlayAnimation={handlePlayAnimation}
      />
      <FullscreenAnimation 
        animation={activeAnimation}
        isVisible={isFullscreen}
      />
    </div>
  );
}

export default App;
