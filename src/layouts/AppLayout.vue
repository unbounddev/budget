<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Button from 'primevue/button'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <Button label="Verify" />
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>
