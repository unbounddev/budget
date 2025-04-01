<script setup lang="ts">
import { onMounted, ref } from 'vue'
import PocketBase from 'pocketbase'
let pb: null | PocketBase = null
const currentUser = ref()
const username = ref('')
const password = ref('')

onMounted(async () => {
  pb = new PocketBase('http://127.0.0.1:8090')
})
</script>

<template>
  <div><h1>SignUp</h1></div>
</template>
