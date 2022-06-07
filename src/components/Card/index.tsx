import styles from './card.module.scss';
import { Trash } from 'phosphor-react';

import { ITodo } from '../../types/todo.type';

export function Card({ id, content, isCompleted }: ITodo) {
  return (
    <div className={styles.todoCard} key={id}>
      <input type='checkbox' checked={isCompleted} />
      <p>{content}</p>
      <button>
        <Trash size={20} />
      </button>
    </div>
  );
}
