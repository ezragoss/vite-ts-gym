<template>
  <div class="post-body">
    <p>{{ props.body }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps(['body'])
</script>

<style scoped>
.post-body {
  padding-left: 2%;
  padding-right: 2%;
}
</style>
