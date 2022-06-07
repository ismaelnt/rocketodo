import clipboard from '../../assets/clipboard.svg';

import styles from './emptyList.module.scss';

export function EmptyList() {
  return (
    <div>
      <div className={styles.line} />
      <div className={styles.emptyList}>
        <img src={clipboard} width={56} alt='Clipboard' />
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
