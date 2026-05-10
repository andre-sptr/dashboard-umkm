import styles from './Button.module.css';

export default function Button({
  as: Component = 'button',
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}) {
  const buttonClass = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
    className,
  ].filter(Boolean).join(' ');
  
  return (
    <Component className={buttonClass} {...props}>
      {children}
    </Component>
  );
}
