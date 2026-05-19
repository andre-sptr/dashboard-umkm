'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollReveal({
  children,
  y = 36,
  delay = 0,
  duration = 0.9,
  stagger = 0,
  as: Tag = 'div',
  className = '',
  once = true,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      gsap.set(el, { opacity: 1, y: 0 });
      return undefined;
    }

    const targets = el.dataset.children === 'true' ? el.children : el;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration,
          delay,
          stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: once ? 'play none none none' : 'play none none reverse',
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [y, delay, duration, stagger, once]);

  return (
    <Tag ref={ref} className={className} data-children={stagger > 0 ? 'true' : 'false'}>
      {children}
    </Tag>
  );
}
