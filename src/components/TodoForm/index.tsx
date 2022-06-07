import { PlusCircle } from 'phosphor-react';

import styles from './todoForm.module.scss';

export function TodoForm() {
  return (
    <form className={styles.form}>
      <input
        type='text'
        placeholder='Adicione uma nova tarefa'
      />
      <button
        type='submit'
      >
        Criar <PlusCircle size={18} />
      </button>
    </form>
  );
}
