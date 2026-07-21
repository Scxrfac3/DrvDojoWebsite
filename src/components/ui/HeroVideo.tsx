import React, { useRef, useEffect } from "react";

interface HeroVideoProps {
  src: string;
  className?: string;
}

// Reusable hero video used across the driving-lesson location pages.
// Mirrors the ref-based play-forcing used on the Isle of Dogs page so the
// video reliably autoplays on HTTPS origins (React does not reliably set the
// `muted` DOM *property* from the JSX attribute alone).
const HeroVideo = ({ src, className = "" }: HeroVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;
    const tryPlay = () => video.play().catch(() => {});
    tryPlay();
    // Some browsers need a tick after mount before play() is honoured
    const t = setTimeout(tryPlay, 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className={className}
    />
  );
};

export default HeroVideo;
