import { ChangeEvent, useContext } from 'react';
import { useTodos } from '../../contexts/useTodos';
import { ITodo } from '../../types/todo.type';

import styles from './card.module.scss';
import { Trash } from 'phosphor-react';

export function Card({ id, content, isCompleted }: ITodo) {
  const { deleteTodo, isCompleteTodo } = useContext(useTodos);

  function handleDeleteTodo() {
    deleteTodo(id);
  }

  function handleTodoCompleteChange() {
    isCompleteTodo(id);
  }

  return (
    <div className={styles.todoCard}>
      <input
        type='checkbox'
        onChange={handleTodoCompleteChange}
        checked={isCompleted}
      />
      <p>{content}</p>
      <button onClick={handleDeleteTodo}>
        <Trash size={20} />
      </button>
    </div>
  );
}
