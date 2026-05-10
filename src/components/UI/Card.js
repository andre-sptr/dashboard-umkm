import styles from './Card.module.css';

export default function Card({ children, className = '', padding = 'md', hoverEffect = true }) {
  const cardClass = `${styles.card} ${styles[padding]} ${hoverEffect ? styles.hover : ''} ${className}`;
  
  return (
    <div className={cardClass}>
      {children}
    </div>
  );
}
