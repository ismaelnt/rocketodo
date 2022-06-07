import common from './styles/common.module.scss';

import { Header } from './components/Header';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

export function App() {
  return (
    <div>
      <Header />

      <div className={common.container}>
        <TodoForm />

        <TodoList />
      </div>
    </div>
  );
}
