import styles from './todoList.module.scss';
import { Card } from '../Card';

export function TodoList() {
  return (
    <div>
      <div className={styles.headerList}>
        <p>Tarefas criadas <span>0</span></p>
        <p>Concluídas <span>0</span></p>
      </div>

      {/* <EmptyList /> */}

      <Card />
      <Card />
      <Card />
    </div>
  );
}
