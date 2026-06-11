<script setup>
import { useTodoListStore } from '@/stores/todoList'
import { storeToRefs } from 'pinia'

const store = useTodoListStore()
const { todoList } = storeToRefs(store)

const { toggleCompleted } = store
</script>
<template>
  <div v-for="todo in todoList" :key="todo.id" class="item">
    <div class="content">
      <span :class="{ completed: todo.completed }">{{ todo.item }}</span>
      <span class="icon" @click.stop="toggleCompleted(todo.id)">{{
        !todo.completed ? '&#10004;' : '&#10007;'
      }}</span>
    </div>
  </div>
</template>
<style scoped>
.item {
  padding: 5px;
  margin: 5px auto;
}
.item .icon {
  cursor: pointer;
  padding: 4px 5px;
  margin-left: 15px;
  border: 1px solid #2c3e50;
  border-radius: 3px;
}
.item .icon:hover {
  background: #2c3e50;
  color: #fff;
}
.completed {
  text-decoration: line-through;
}
</style>
