<template>
  <div data-theme="night">
    <nav class="navbar bg-base-100 shadow-sm px-6">
      <NuxtLink class="text-primary hover:underline hover:text-secondary" to="/"
        >Home</NuxtLink
      >
    </nav>

    <main class="px-6">
      <slot />
    </main>
  </div>
</template>
