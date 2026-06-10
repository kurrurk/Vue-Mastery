<script setup>
import { ref, onMounted } from 'vue'
import EventServices from '../../sevices/EventServices'
import router from '../../router'

const event = ref(null)
const props = defineProps({
  id: {
    required: true,
  },
})

onMounted(() => {
  // fetch event (by id) and set local data
  EventServices.getEvent(props.id)
    .then((response) => {
      event.value = response.data
    })
    .catch((error) => {
      if (error.responce && error.responce.status === 404) {
        router.push({
          name: '404Resource',
          params: { resource: 'event' },
        })
      } else {
        router.push({ name: 'NetworkError' })
      }
    })
})
</script>
<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <nav>
      <router-link :to="{ name: 'EventDetails' }">Details</router-link>
      <!-- можно убрать id так как он все равно подгружается через роутер. См прошлый урок -->
      |
      <router-link :to="{ name: 'EventRegister' }">Register</router-link>
      <!-- можно убрать id так как он все равно подгружается через роутер. См прошлый урок -->
      |
      <router-link :to="{ name: 'EventEdit' }">Edit</router-link>
      <!-- можно убрать id так как он все равно подгружается через роутер. См прошлый урок -->
    </nav>
    <router-view :event="event" />
  </div>
</template>
