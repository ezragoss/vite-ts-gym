<template>
  <div class="post-body">
    <p>{{ props.body }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps(['body'])
</script>
