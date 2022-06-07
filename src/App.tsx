import common from './styles/common.module.scss';

import { Header } from './components/Header';
import { TodoForm } from './components/TodoForm';

export function App() {
  return (
    <div>
      <Header />

      <div className={common.container}>
        <TodoForm />
      </div>
    </div>
  );
}
