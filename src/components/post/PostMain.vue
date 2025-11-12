<script setup lang="ts">
import { ref, defineProps, type Ref } from 'vue'
import PostBody from './PostBody.vue'
import PostHeader from './PostHeader.vue'
import loadPost from '@/composables/yaml'

const props = defineProps(['post_name'])
const post: Ref<Record<string, any>> = ref({
  title: 'Not found',
  subtitle: 'Not found',
  body: 'Not Found',
})

loadPost(props.post_name).then((result) => (post.value = result))
</script>

<template>
  <div class="example">
    <PostHeader :title="post.title" :subtitle="post.subtitle" />
    <PostBody :body="post.body" />
  </div>
</template>

<style scoped>
.example {
  display: flex;
  flex-direction: column;
  gap: 0;
}
</style>
