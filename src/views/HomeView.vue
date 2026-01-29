<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { usercounterStore } from '@/store/counter'
const useCounter = usercounterStore()
</script>

<template>
  <h1>Home Counter: {{ useCounter.count }}</h1>
  <h2>Double: {{ useCounter.double }}</h2>
  <button @click="useCounter.increment">increment</button>
  <main>
    <TheWelcome />
  </main>
</template>
