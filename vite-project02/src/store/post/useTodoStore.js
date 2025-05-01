import React from 'react';
import { create } from 'zustand';

const useTodoStore = create((set, get) => ({
  todos: [
    {
      id: 1,
      text: '밥먹기',
      completed: false,
    },
    {
      id: 2,
      text: '숙면',
      completed: false,
    },
    {
      id: 3,
      text: '숨쉬기',
      completed: false,
    },
  ],

  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    })),

  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),

  filter: 'all', //(all, active, completed)
  setFilter: (filter) => set({ filter }),
  getFilteredTodos: () => {
    // get() 함수 안에는 우리가 정의한 모든 객체들이 나온다 => { todos, filter, toggleTodo, deleteTodo, setFilter, getFilteredTodos}
    // 객체구조할당을 통해 필요한 객체만 가져온다 => {todos, filter}
    const { todos, filter } = get();
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  },
}));

export default useTodoStore;
