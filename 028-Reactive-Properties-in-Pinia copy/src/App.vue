<script setup>
import TodoApp from './components/TodoApp.vue'
</script>

<template>
  <todo-app />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  display: flex;
  justify-content: center;
  font-family: Avenir, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  background:
    radial-gradient(circle at top left, #4d81ad 0%, transparent 40%),
    radial-gradient(circle at bottom right, #42b98333 0%, transparent 45%),
    linear-gradient(160deg, #244761 0%, #2f6089 30%, #4d7594 70%, #5e88a8 100%);
}
</style>
