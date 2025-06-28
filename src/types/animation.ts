export interface Animation {
  id: number;
  name: string;
  description: string;
  category: 'base' | 'combo';
  colorSample: string;
  component: string;
}

export interface AnimationState {
  activeAnimation: Animation | null;
  isFullscreen: boolean;
  savedScrollPosition: number;
}

export interface UseAnimationReturn {
  activeAnimation: Animation | null;
  isFullscreen: boolean;
  playAnimation: (animation: Animation) => void;
  closeAnimation: () => void;
}

export interface UseScrollPositionReturn {
  savedScrollPosition: number;
  saveScrollPosition: () => void;
  restoreScrollPosition: () => void;
}