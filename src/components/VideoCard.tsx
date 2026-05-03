import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  poster: string;
  caption: string;
  meta?: string;
  rot?: "l" | "r" | "none";
  tape?: boolean;
  variant?: "wide" | "tall" | "default";
  index: number;
};

export default function VideoCard({
  src,
  poster,
  caption,
  meta,
  rot,
  tape,
  variant,
  index,
}: Props) {
  const rotDeg = rot === "l" ? -1.4 : rot === "r" ? 1.6 : 0;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);

  // 視界に入ったら自動再生、外れたら一時停止
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            v.play().catch(() => {});
          } else {
            v.pause();
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(v);
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    return () => {
      obs.disconnect();
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
    };
  }, []);

  function toggleSound(e: React.MouseEvent) {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    const next = !muted;
    v.muted = next;
    setMuted(next);
    if (!next) v.play().catch(() => {});
  }

  function togglePlay(e: React.MouseEvent) {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  }

  return (
    <motion.div
      className={`polaroid videocard ${variant ?? ""}`}
      initial={{ opacity: 0, y: 36, rotate: rotDeg + (rot === "l" ? -4 : 4) }}
      whileInView={{ opacity: 1, y: 0, rotate: rotDeg }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {tape ? <span className="tape" /> : null}
      <div className="vid-wrap" onClick={togglePlay}>
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          preload="metadata"
        />
        {!playing ? (
          <div className="vid-overlay">
            <div className="vid-play">▶</div>
          </div>
        ) : null}
        <button
          type="button"
          className="vid-sound"
          aria-label={muted ? "音を出す" : "ミュート"}
          onClick={toggleSound}
        >
          {muted ? "🔇" : "🔊"}
        </button>
      </div>
      <div className="cap">
        {caption}
        {meta ? <small>{meta}</small> : null}
      </div>
    </motion.div>
  );
}
