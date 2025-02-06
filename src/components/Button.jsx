import styles from './Button.module.scss';

// eslint-disable-next-line react/prop-types
export default function Button({text, type}) {
  return <button type={type} className={styles['button']}>
    {text}
  </button>
}