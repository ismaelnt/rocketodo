import styles from './todoList.module.scss';
import { EmptyList } from './EmptyList';
import { HeaderList } from './HeaderList';

export function TodoList() {
  return (
    <div>
      <HeaderList />
      <div className={styles.line} />
      <EmptyList />


    </div>
  );
}
