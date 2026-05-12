import styles from './Eyebrow.module.css';

export default function Eyebrow({ children, className = '' }) {
  const eyebrowClass = [styles.eyebrow, className].filter(Boolean).join(' ');

  return <p className={eyebrowClass}>{children}</p>;
}
