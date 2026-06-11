import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todoList', {
  // state
  state: () => ({
    todoList: [],
    id: 0,
  }),
  // getters
  // actions
  actions: {
    addTodo(item) {
      this.todoList.push({ item, id: this.id++, complete: false })
    },
    deleteTodo(itemId) {
      this.todoList = this.todoList.filte((object) => {
        return object.id !== itemId
      })
    },
  },
})
