'use client';

import { useEffect, useRef, useState } from 'react';

const prefersReducedMotion = () => (
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
);

export default function Reveal({ children, delay = 0, className = '' }) {
  const [isIntersecting, setIsIntersecting] = useState(prefersReducedMotion);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;

    if (prefersReducedMotion()) {
      return undefined;
    }

    if (typeof IntersectionObserver === 'undefined') {
      const fallback = window.setTimeout(() => setIsIntersecting(true), 0);
      return () => window.clearTimeout(fallback);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const delayClass = delay > 0 ? `reveal-delay-${delay}` : '';

  return (
    <div
      ref={ref}
      className={`reveal-wrapper ${isIntersecting ? 'revealed' : ''} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}
