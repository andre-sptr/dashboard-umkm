'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Marquee({ items = [], speed = 40 }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    const half = track.scrollWidth / 2;
    const tween = gsap.to(track, {
      x: -half,
      duration: half / speed,
      ease: 'none',
      repeat: -1,
    });
    return () => tween.kill();
  }, [speed]);

  return (
    <div className="marquee">
      <div ref={trackRef} className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-dot" aria-hidden="true" />
          </span>
        ))}
      </div>
      <style jsx>{`
        .marquee {
          overflow: hidden;
          width: 100%;
          padding: 18px 0;
          border-top: 1px solid var(--border-soft);
          border-bottom: 1px solid var(--border-soft);
          mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
        }
        .marquee-track {
          display: inline-flex;
          gap: 56px;
          white-space: nowrap;
          will-change: transform;
        }
        .marquee-item {
          font-family: var(--font-mono);
          font-size: 14px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--text-1);
          display: inline-flex;
          align-items: center;
          gap: 56px;
        }
        .marquee-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-cyan);
          box-shadow: 0 0 12px var(--accent-cyan);
        }
      `}</style>
    </div>
  );
}
