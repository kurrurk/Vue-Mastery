<script setup>
import { useRouter } from 'vue-router'
import { inject } from 'vue'

const { event } = defineProps(['event'])
const router = useRouter()
const GStore = inject('GStore')

const register = () => {
  // If registration API call successful
  // Push back to the details
  GStore.flashMessage = 'You are successfully registered for ' + event.title
  setTimeout(() => {
    GStore.flashMessage = ''
  }, 3000)
  router.push({
    name: 'EventDetails',
    //id: props.event.id, не обязательно мы все равно послучем его
  })
}
</script>
<template>
  <p>Register for event here</p>
  <button @click="register">Register Me!</button>
</template>
<style scoped>
button {
  padding: 0.7rem 1.2rem 0.6rem;
  margin-top: 1rem;
  border: 2px solid #2c3e50;
  border-radius: 5px;
  background: white;
  color: #2c3e50;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

button:hover {
  border-color: #42b983;
  background: #42b983;
  color: white;
}

button:active {
  transform: translateY(1px);
}

button:focus-visible {
  outline: 3px solid rgba(44, 62, 80, 0.3);
  outline-offset: 3px;
}
</style>
