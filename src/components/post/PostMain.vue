<script setup lang="ts">
import { ref, defineProps, type Ref } from 'vue'
import PostBody from './PostBody.vue'
import PostHeader from './PostHeader.vue'
import loadPost from '@/composables/yaml'
import DownloadBundle from '../downloads/DownloadBundle.vue'

const props = defineProps(['post_name'])
const post: Ref<Record<string, any>> = ref({
  title: 'Not found',
  subtitle: 'Not found',
  body: 'Not Found',
  downloads: [],
})

loadPost(props.post_name).then((result) => (post.value = result))
</script>

<template>
  <div class="post">
    <PostHeader :title="post.title" :subtitle="post.subtitle" />
    <PostBody :body="post.body" />
    <div class="download-entries">
      <h1>Downloads</h1>
      <div v-for="entry in post.downloads" v-bind:key="entry">
        <DownloadBundle :name="entry" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.post {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.download-entries {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-left: 2%;
  padding-right: 2%;
}
</style>
