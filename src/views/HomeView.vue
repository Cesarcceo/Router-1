<script setup>
import { storeToRefs } from 'pinia'
import TheWelcome from '../components/TheWelcome.vue'
import { usercounterStore } from '@/store/counter'
const useCounter = usercounterStore()

const {increment} = useCounter
const {count, double} = storeToRefs(useCounter)
</script>

<template>
  <h1>Home Counter: {{ count }}</h1>
  <h2>Double: {{ double }}</h2>
  <button @click="increment">increment</button>
  <main>
    <TheWelcome />
  </main>
</template>
