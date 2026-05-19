'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SplitHeading({ as: Tag = 'h1', children, className = '', delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return undefined;

    const words = el.querySelectorAll('.split-word');
    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power4.out',
          stagger: 0.04,
          delay,
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, el);
    return () => ctx.revert();
  }, [delay]);

  const text = typeof children === 'string' ? children : '';
  const parts = text.split(' ');

  return (
    <Tag ref={ref} className={className}>
      {parts.map((w, i) => (
        <span key={i} className="split-line" style={{ display: 'inline-block', overflow: 'hidden', paddingBottom: '0.08em' }}>
          <span className="split-word" style={{ display: 'inline-block', willChange: 'transform' }}>
            {w}{i < parts.length - 1 ? ' ' : ''}
          </span>
        </span>
      ))}
    </Tag>
  );
}
