import { ITodo } from './types/todo.type';

import common from './styles/common.module.scss';
import styles from './app.module.scss';
import { Header } from './components/Header';
import { TodoForm } from './components/TodoForm';
import { EmptyList } from './components/EmptyList';
import { Card } from './components/Card';

export function App() {
  const todos: ITodo[] = [];

  const hasTodo = todos.length !== 0;

  return (
    <div>
      <Header />

      <div className={common.container}>
        <TodoForm />

        <div className={styles.headerList}>
          <p>Tarefas criadas<span>{todos.length}</span></p>
          <p>Concluídas<span>0 {hasTodo ? `de ${todos.length}` : null}</span></p>
        </div>

        {hasTodo
          ? todos.map((todo) => (
            <Card
              id={todo.id}
              content={todo.content}
              isCompleted={todo.isCompleted}
            />
          ))
          : <EmptyList />
        }
      </div>
    </div>
  );
}
