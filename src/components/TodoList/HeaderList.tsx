import styles from './todoList.module.scss';

export function HeaderList() {
  return (
    <div className={styles.headerList}>
      <p>Tarefas criadas <span>0</span></p>
      <p>Concluídas <span>0</span></p>
    </div>
  );
}
