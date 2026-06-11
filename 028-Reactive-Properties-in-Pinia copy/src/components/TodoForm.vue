<script setup>
import { ref } from 'vue'
import { useTodoListStore } from '@/stores/todoList'

const todo = ref('')
const store = useTodoListStore()

function addItemAndClear(item) {
  if (item.length == 0) {
    return
  }
  store.addTodo(item)
  todo.value = ''
}
</script>
<template>
  <div>
    <form @submit.prevent="addItemAndClear(todo)">
      <input v-model="todo" type="text" /><button>Add</button>
    </form>
  </div>
</template>
<style scoped>
form {
  width: 100%;
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  margin-top: 15px;
}
input {
  width: 100%;
  flex: 1;
  padding: 10px 18px;
  border: 1px solid #dbe3ea;
  border-radius: 12px;
  background: white;
  font-size: 16px;
  color: #243b53;
  transition: 0.2s;
}
input:focus {
  outline: none;
  border-color: #42b983;
  box-shadow: 0 0 0 4px rgba(66, 185, 131, 0.15);
}
button {
  padding: 10px 24px;
  border: none;
  border-radius: 12px;
  background: #2f6089;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}
button:hover {
  background: #3c729f;

  transform: translateY(-1px);
}
button:active {
  transform: translateY(0);
}
.alert-div {
  min-height: 25px;
}
.actions {
  display: flex;
  gap: 8px;
}
.alert {
  color: #d1495b;
  font-size: 1em;
  font-weight: 600;
}
</style>
