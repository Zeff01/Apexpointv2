import React, { useRef, useState, useEffect } from 'react';
import PlayPause from '@/components/icons/playpause';

const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function togglePlay(): void {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  }

  useEffect(() => {
    audioRef.current?.play();
    setIsPlaying(true);

    return () => {
      audioRef.current?.pause();
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef} loop src={'/assets/audio/summer-vibe_long-bgmusic.mp3'} />
      <button onClick={togglePlay}>
        <PlayPause />
      </button>
    </div>
  );
};

export default BackgroundMusic;
