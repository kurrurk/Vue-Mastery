<script setup>
import { useTodoListStore } from '@/stores/todoList'
import { storeToRefs } from 'pinia'

const store = useTodoListStore()
const { todoList } = storeToRefs(store)

const { toggleCompleted, deleteTodo } = store
</script>
<template>
  <div v-for="todo in todoList" :key="todo.id" class="item">
    <div :class="{ completed: todo.completed }" class="content">
      <span class="text">{{ todo.item }}</span>
      <div>
        <span class="icon action" @click.stop="toggleCompleted(todo.id)">&#10004;</span>
        <span @click="deleteTodo(todo.id)" class="x action">&#128465;</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
span {
  margin: 0 10px;
  justify-content: center;
}
.item {
  display: flex;
  justify-content: flex-start;
  margin-top: 15px;
}
.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 24px;
  background: #f8fafb;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.075);
  transition: 0.2s;
}

.content:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(41, 85, 121, 0.253);
}

.content span:first-child {
  font-size: 18px;
  color: #243b53;
}

.content > div {
  display: flex;
  gap: 10px;
}

.content::before {
  content: '';
  width: 9px;
  height: 9px;
  min-width: 9px;
  min-height: 9px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1px solid grey;
  margin-right: 15px;
}

.content.completed::before {
  background: #42b983;
  border-color: #42b983;
}

.icon,
.x {
  cursor: pointer;
  font-size: 24px;
  transition: 0.2s;
}

.x {
  font-size: 20px;
  line-height: 110%;
}

.icon:hover {
  transform: scale(1.2);
}

.x:hover {
  transform: scale(1.2);
}

.action {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
  margin: 0;
}

.text {
  overflow: hidden;
}

.completed .text {
  text-decoration: line-through;
}
/* .item {
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
} */
</style>
