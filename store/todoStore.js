import { defineStore } from "pinia";

export const useTodoStore = defineStore({
  id: "todo",
  state: () => ({
    todos: [],
  }),
  getters: {
    totalUndoneTodos() {
      return this.todos.filter((todo) => !todo.done).length;
    },
  },
  actions: {
    addTodo(newTodo) {
      this.todos.push({
        title: newTodo,
        done: false,
      });
    },
    removeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
    toggleTodoStatus(todo) {
      todo.done = !todo.done;
    },
    clearTodos() {
      this.todos = [];
    },
  },
});
