import { createContext, ReactNode, useState } from 'react';

import { ITodo } from '../types/todo.type';
import { v4 as uuidV4 } from 'uuid';

interface TodosProviderProps {
  children: ReactNode;
}

interface TodosContextData {
  todos: ITodo[];
  createTodo: (content: string) => void;
}

export const useTodos = createContext<TodosContextData>({} as TodosContextData);

export function TodosProvider({ children }: TodosProviderProps) {
  const [todos, setTodos] = useState<ITodo[]>([]);

  function createTodo(content: string) {
    const todo: ITodo = {
      id: uuidV4(),
      content: content,
      isCompleted: false
    }

    setTodos([...todos, todo]);
  }

  return (
    <useTodos.Provider value={{ todos, createTodo }}>
      {children}
    </useTodos.Provider>
  );
}
