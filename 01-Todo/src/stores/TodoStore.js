import { defineStore } from 'pinia'

const todos = [
  {
    id: '1',
    title: 'Reading book',
    priority: 'High',
    createdAt: '11/06/2023',
    done: true,
  },
  {
    id: '2',
    title: 'Buy something',
    priority: 'Mid',
    createdAt: '12/06/2023',
    done: false,
  },
  {
    id: '3',
    title: 'Doing Homework',
    priority: 'Low',
    createdAt: '13/06/2023',
    done: true,
  },
]

export const useTodoStore = defineStore('todo-store', {
  // Data
  state() {
    return {
      todo: [...todos],
      loading: true,
      errMsg: '',
    }
  },
  // computed , Read Data
  getters: {
    sorted() {
      return this.todo.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    },
    done: (state) =>
      state.todo
        .filter((p) => p.done)
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
  },
  // methods , Events or Write and Set Data
  actions: {
    getTodo() {
      //ToDo
    },
    addTodo(todo) {
      //ToDo
    },
  },
})
