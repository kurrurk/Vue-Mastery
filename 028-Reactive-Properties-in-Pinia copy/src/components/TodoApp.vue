<script setup>
import TodoForm from './TodoForm.vue'
import TodoList from './TodoList.vue'
</script>
<template>
  <div class="todo-app">
    <h1>To Do List</h1>
    <todo-form />
    <todo-list />
  </div>
</template>
<style scoped>
.todo-app {
  padding: 5vh 2.5rem;
  min-height: 100vh;
  max-height: 100%;
  width: 30vw;
  min-width: 320px;
  background: #f8fafb;
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow:
    0 10px 25px rgba(17, 34, 51, 0.08),
    0 25px 60px rgba(17, 34, 51, 0.12),
    0 50px 120px rgba(17, 34, 51, 0.15);
}
</style>
