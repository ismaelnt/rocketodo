import { createContext, ReactNode, useState } from 'react';

import { ITodo } from '../types/todo.type';
import { v4 as uuidV4 } from 'uuid';

interface TodosProviderProps {
  children: ReactNode;
}

interface TodosContextData {
  todos: ITodo[];
  createTodo: (content: string) => void;
  deleteTodo: (todoToDelete: string) => void;
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

  function deleteTodo(todoToDelete: string) {
    const todosWithoutDeleteOne = todos.filter((todo) => {
      return todo.id !== todoToDelete
    });

    setTodos(todosWithoutDeleteOne);
  }

  return (
    <useTodos.Provider value={{ todos, createTodo, deleteTodo }}>
      {children}
    </useTodos.Provider>
  );
}
