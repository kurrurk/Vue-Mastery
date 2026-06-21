<script setup>
import { ref } from "vue";
import NotificationToast from "./components/NotificationToast.vue";

const message = ref("Image uploaded successfully!");

const clearNotification = () => {
  message.value = "";
};
</script>

<template>
  <NotificationToast
    status="success"
    :message="message"
    @clear-notification="clearNotification"
  ></NotificationToast>
</template>

<style scoped>
.notification {
  max-width: calc(100vw - 30px);
}
</style>
