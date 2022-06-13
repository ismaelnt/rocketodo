import { createContext, ReactNode, useState } from 'react';

import { ITodo } from '../types/todo.type';
import { v4 as uuidV4 } from 'uuid';

interface TodosProviderProps {
  children: ReactNode;
}

interface TodosContextData {
  todos: ITodo[];
  createTodo: (content: string) => void;
  deleteTodo: (id: string) => void;
  isCompleteTodo: (id: string) => void;
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

  function deleteTodo(id: string) {
    const todosWithoutDeleteOne = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(todosWithoutDeleteOne);
  }

  function isCompleteTodo(id: string) {
    const todoIsComplete = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }

      return todo;
    });

    setTodos(todoIsComplete);
  }

  return (
    <useTodos.Provider value={{ todos, createTodo, deleteTodo, isCompleteTodo }}>
      {children}
    </useTodos.Provider>
  );
}
