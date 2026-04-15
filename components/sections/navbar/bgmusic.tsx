'use client';

import { useEffect, useRef } from 'react';

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // ✅ autoplay muted first (required)
    audio.muted = true;
    audio.volume = 1;

    audio.play().catch(() => {});

    // ✅ unlock on first interaction (no UI needed)
    const unlock = () => {
      audio.muted = false;
      audio.play().catch(() => {});

      window.removeEventListener('click', unlock);
      window.removeEventListener('touchstart', unlock);
    };

    window.addEventListener('click', unlock);
    window.addEventListener('touchstart', unlock);

    return () => {
      window.removeEventListener('click', unlock);
      window.removeEventListener('touchstart', unlock);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/assets/audio/summer-vibe_long-bgmusic.mp3"
      loop
      autoPlay
      playsInline
      style={{ display: 'none' }} // no UI
    />
  );
};

export default BackgroundMusic;
