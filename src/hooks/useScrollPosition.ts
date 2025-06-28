import { useState, useCallback, useRef } from 'react';
import type { UseScrollPositionReturn } from '../types/animation';

export const useScrollPosition = (): UseScrollPositionReturn => {
  const [savedScrollPosition, setSavedScrollPosition] = useState<number>(0);
  const containerRef = useRef<HTMLElement | null>(null);

  const saveScrollPosition = useCallback(() => {
    const container = document.querySelector('.container') as HTMLElement;
    if (container) {
      containerRef.current = container;
      const scrollTop = container.scrollTop;
      setSavedScrollPosition(scrollTop);
    }
  }, []);

  const restoreScrollPosition = useCallback(() => {
    const container = document.querySelector('.container') as HTMLElement;
    if (container && savedScrollPosition !== undefined) {
      // 複数フレーム待機してDOM更新を確実に完了させる
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (container) {
            container.scrollTop = savedScrollPosition;
            // スムーズスクロールを一時的に無効化して即座に復元
            container.style.scrollBehavior = 'auto';
            container.scrollTop = savedScrollPosition;
            // スムーズスクロールを再有効化
            setTimeout(() => {
              container.style.scrollBehavior = 'smooth';
            }, 100);
          }
        });
      });
    }
  }, [savedScrollPosition]);

  return {
    savedScrollPosition,
    saveScrollPosition,
    restoreScrollPosition
  };
};