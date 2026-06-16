<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from "vue";
import { TodoItem } from "../types";

export default defineComponent({
  setup() {
    const state = reactive({
      newTask: {
        label: "",
        type: "personal",
      } as TodoItem,
      taskItems: [] as TodoItem[],
      listFilter: "all",
    });

    const filteredTasks = computed(() => {
      if (state.listFilter === "complete") {
        return state.taskItems.filter((item: TodoItem) => {
          return item.isComplete === true;
        });
      } else if (state.listFilter === "incomplete") {
        return state.taskItems.filter((item: TodoItem) => {
          return item.isComplete === false;
        });
      }
      return state.taskItems;
    });

    const addTask = () => {
      state.taskItems.push({
        ...state.newTask,
        isComplete: false,
      });
    };

    return {
      ...toRefs(state),
      filteredTasks,
      addTask,
    };
  },
});
</script>
<template>
  <div class="todo-page">
    <h1>Todo</h1>
    <form @submit.prevent>
      <div class="mb1">
        <label for="task-label">Task Label: </label>
        <input type="text" id="task-label" v-model="newTask.label" />
      </div>
      <div class="mb1">
        <label for="task-type">Take Type: </label>
        <select name="task-type" id="task-type" v-model="newTask.type">
          <option value="personal">Personal</option>
          <option value="work">Work</option>
          <option value="miscellaneous">Miscellaneous</option>
        </select>
      </div>
      <button @click="addTask">Add Task</button>
    </form>
    <h2>Task List</h2>
    <div class="filter-buttons" :class="'filter-buttons-' + listFilter">
      <button class="all" @click="listFilter = 'all'">All</button>
      <button class="incomplete" @click="listFilter = 'incomplete'">
        Incomplete
      </button>
      <button class="complete" @click="listFilter = 'complete'">
        Complete
      </button>
    </div>

    <ul>
      <li v-for="(task, index) in filteredTasks" :key="`task-${index}`">
        <input type="checkbox" v-model="task.isComplete" />

        <span :class="{ completed: task.isComplete }">
          {{ task.label }} ({{ task.type }})
        </span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.todo-page {
  max-width: 700px;
  margin: 0 auto;
  text-align: left;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
}

h2 {
  width: 300px;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

form {
  width: 250px;
  border: 1px solid #39495c;
  padding: 1.5rem;
  margin: auto;
  margin-bottom: 2rem;
}

.mb1 {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
}

label {
  display: inline-block;
  width: 100px;
  font-weight: bold;
}

input[type="text"],
select {
  padding: 8px 10px;
  border: 1px solid #39495c;
  font-size: 1rem;
}

button {
  cursor: pointer;
  border: 1px solid #42b983;
  background: white;
  color: #42b983;
  padding: 8px 16px;
  font-size: 1rem;
  transition: all 0.2s ease;
}

button:hover {
  background: #42b983;
  color: white;
}

ul {
  width: 300px;
  list-style: none;
  padding: 0;
  margin: auto;
  margin-top: 1rem;
}

li {
  border: 1px solid #39495c;
  padding: 12px 16px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}

input[type="checkbox"] {
  width: 18px;
  height: 18px;
}

.filter-buttons {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 300px;
  margin: auto;
  margin-bottom: 1rem;
}

.filter-buttons-all .all,
.filter-buttons-incomplete .incomplete,
.filter-buttons-complete .complete {
  border: 1px solid #39495c;
  color: #39495c;
}
.filter-buttons-all .all:hover,
.filter-buttons-incomplete .incomplete:hover,
.filter-buttons-complete .complete:hover {
  border-color: #42b983;
  color: white;
}

.completed {
  text-decoration: line-through;
  color: #888;
}
</style>
