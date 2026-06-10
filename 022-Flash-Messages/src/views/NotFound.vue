<script setup>
defineProps({
  resource: {
    type: String,
    requered: true,
    default: 'page',
  },
})
</script>
<template>
  <h1>Oops!</h1>
  <h3>The {{ resource }} you're looking for is in another castle.</h3>
  <router-link :to="{ name: 'event-list' }">Back to the home page</router-link>
</template>
