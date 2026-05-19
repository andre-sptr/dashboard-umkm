'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function MagneticButton({
  as: Tag = 'a',
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  fullWidth = false,
  ...props
}) {
  const ref = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const label = labelRef.current;
    const strength = 18;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(el, { x: (x / rect.width) * strength, y: (y / rect.height) * strength, duration: 0.4, ease: 'power3.out' });
      if (label) gsap.to(label, { x: (x / rect.width) * strength * 0.6, y: (y / rect.height) * strength * 0.6, duration: 0.4, ease: 'power3.out' });
    };
    const onLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
      if (label) gsap.to(label, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    };

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  const cls = ['btn', `btn-${variant}`, `btn-${size}`, fullWidth ? 'btn-full' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <Tag ref={ref} href={href} className={cls} {...props}>
        <span ref={labelRef} className="btn-label">{children}</span>
        <span className="btn-glow" aria-hidden="true" />
      </Tag>
      <style jsx>{`
        :global(.btn) {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 28px;
          border-radius: var(--radius-full);
          font-weight: 600;
          font-size: 15px;
          letter-spacing: -0.005em;
          cursor: pointer;
          overflow: hidden;
          transition: box-shadow var(--duration-base) var(--ease-out),
                      color var(--duration-base) var(--ease-out),
                      border-color var(--duration-base) var(--ease-out);
          will-change: transform;
          border: 1px solid transparent;
          isolation: isolate;
        }
        :global(.btn-label) { position: relative; z-index: 2; display: inline-flex; align-items: center; gap: 8px; }
        :global(.btn-glow) {
          position: absolute;
          inset: 0;
          background: var(--grad-primary);
          opacity: 0;
          transition: opacity 0.4s var(--ease-out);
          z-index: 1;
        }
        :global(.btn:hover .btn-glow) { opacity: 1; }
        :global(.btn-sm) { padding: 10px 18px; font-size: 13px; }
        :global(.btn-md) { padding: 14px 26px; font-size: 14px; }
        :global(.btn-lg) { padding: 18px 36px; font-size: 15px; }
        :global(.btn-full) { width: 100%; }

        :global(.btn-primary) {
          background: var(--grad-primary);
          color: #050510;
          box-shadow: 0 12px 40px rgba(0, 229, 255, 0.25), inset 0 0 0 1px rgba(255,255,255,0.15);
        }
        :global(.btn-primary:hover) { box-shadow: 0 20px 60px rgba(139, 92, 246, 0.45); }
        :global(.btn-primary .btn-glow) { display: none; }

        :global(.btn-secondary) {
          background: rgba(255, 255, 255, 0.04);
          color: var(--text-0);
          border-color: var(--border);
          backdrop-filter: blur(12px);
        }
        :global(.btn-secondary:hover) { color: #050510; border-color: transparent; }

        :global(.btn-ghost) {
          background: transparent;
          color: var(--text-1);
          border-color: var(--border-soft);
        }
        :global(.btn-ghost:hover) { color: #050510; border-color: transparent; }
      `}</style>
    </>
  );
}
