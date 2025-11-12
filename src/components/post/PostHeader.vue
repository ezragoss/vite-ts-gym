<template>
  <div class="header">
    <h1>{{ props.title }}</h1>
    <h2>{{ props.subtitle }}</h2>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps(['title', 'subtitle'])
</script>

<style>
.header {
  background: rgba(239, 239, 239, 0.832);
}
</style>
