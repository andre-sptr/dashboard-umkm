import Link from 'next/link';
import Button from './Button';
import styles from './PortfolioCard.module.css';

export default function PortfolioCard({ demo = {}, className = '', ctaLabel }) {
  const sections = demo.sections ?? [];
  const stats = demo.stats ?? [];
  const href = demo.href;
  const isPlaceholder = demo.isPlaceholder ?? demo.placeholder ?? !href;
  const isLinked = Boolean(href) && !isPlaceholder;
  const actionLabel = ctaLabel ?? demo.ctaLabel ?? (isLinked ? 'Lihat Detail Demo' : 'Coming soon');
  const cardClass = [styles.demoCard, !isLinked ? styles.placeholderCard : '', className].filter(Boolean).join(' ');
  const visualClass = [styles.demoVisual, demo.theme ? styles[demo.theme] : ''].filter(Boolean).join(' ');
  const Wrapper = isLinked ? Link : 'article';
  const wrapperProps = isLinked
    ? { href, 'aria-label': `Lihat demo ${demo.title}` }
    : { 'aria-label': demo.title };

  return (
    <Wrapper className={cardClass} {...wrapperProps}>
      <div className={visualClass}>
        <div className={styles.demoBadge}>{demo.sector}</div>
        <div className={styles.demoPreview}>
          <span>{demo.title}</span>
          <strong>{demo.tagline}</strong>
          <small>{demo.highlight}</small>
        </div>
      </div>
      <div className={styles.demoContent}>
        <div>
          <h3>{demo.title}</h3>
          <p>{demo.desc}</p>
        </div>
        <ul className={styles.demoSections} aria-label={`Section demo ${demo.title}`}>
          {sections.map((section) => (
            <li key={section}>{section}</li>
          ))}
        </ul>
        <div className={styles.demoStats} aria-label={`Fitur utama ${demo.title}`}>
          {stats.map((stat) => (
            <span key={stat}>{stat}</span>
          ))}
        </div>
        <div className={styles.demoAction}>
          <Button as="span" variant="secondary" fullWidth aria-disabled={!isLinked || undefined}>
            {actionLabel}
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}
