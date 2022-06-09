import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { useTodos } from '../../contexts/useTodos';

import { PlusCircle } from 'phosphor-react';
import styles from './todoForm.module.scss';

export function TodoForm() {
  const { createTodo } = useContext(useTodos);
  const [newTodo, setNewTodo] = useState('');

  function handleNewTodoChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTodo(event.target.value);
  }

  function handleCreateTodo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    createTodo(newTodo);
    setNewTodo('');
  }

  return (
    <form className={styles.form} onSubmit={handleCreateTodo}>
      <input
        type='text'
        name='todo'
        placeholder='Adicione uma nova tarefa'
        value={newTodo}
        onChange={handleNewTodoChange}
        required
      />
      <button type='submit'>
        Criar <PlusCircle size={18} />
      </button>
    </form>
  );
}
