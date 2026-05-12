import Link from 'next/link';
import Button from './Button';
import styles from './PortfolioCard.module.css';

export default function PortfolioCard({ demo = {}, className = '' }) {
  const sections = demo.sections ?? [];
  const stats = demo.stats ?? [];
  const cardClass = [styles.demoCard, className].filter(Boolean).join(' ');
  const visualClass = [styles.demoVisual, demo.theme ? styles[demo.theme] : ''].filter(Boolean).join(' ');

  return (
    <Link className={cardClass} href={demo.href ?? '#'} aria-label={`Lihat demo ${demo.title}`}>
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
          <Button as="span" variant="secondary" fullWidth>
            Lihat Detail Demo
          </Button>
        </div>
      </div>
    </Link>
  );
}
