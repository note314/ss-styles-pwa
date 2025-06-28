import { useState, useCallback } from 'react';
import type { Animation, UseAnimationReturn } from '../types/animation';

export const useAnimation = (): UseAnimationReturn => {
  const [activeAnimation, setActiveAnimation] = useState<Animation | null>(null);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const playAnimation = useCallback((animation: Animation) => {
    setActiveAnimation(animation);
    setIsFullscreen(true);

    // 1秒後に自動的にフルスクリーンを閉じる
    setTimeout(() => {
      setIsFullscreen(false);
      setActiveAnimation(null);
    }, 1000);
  }, []);

  const closeAnimation = useCallback(() => {
    setIsFullscreen(false);
    setActiveAnimation(null);
  }, []);

  return {
    activeAnimation,
    isFullscreen,
    playAnimation,
    closeAnimation
  };
};