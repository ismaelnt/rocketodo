import styles from './card.module.scss';
import { Trash } from 'phosphor-react';

export function Card() {
  return (
    <div className={styles.todoCard}>
      <input type='checkbox' />
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <button>
        <Trash size={20} />
      </button>
    </div>
  );
}
