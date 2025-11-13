<script setup lang="ts">
import { ref, defineProps, type Ref } from 'vue'
import loadDownloads, { type Downloads } from '@/composables/downloadable'
import DownloadEntry from '@/components/downloads/DownloadEntry.vue'

const props = defineProps(['name'])
const downloads: Ref<Downloads> = ref({
  name: 'Not found',
  description: 'Not found',
  entries: [],
})
loadDownloads(props.name).then(
  (result) =>
    (downloads.value = result
      ? result
      : {
          name: 'Not found',
          description: 'Not found',
          entries: [],
        }),
)
</script>

<template>
  <div class="download-bundle">
    <h3>{{ downloads.name }}</h3>
    <p>{{ downloads.description }}</p>
    <div class="download-listing">
      <div v-for="entry in downloads.entries" v-bind:key="entry.url">
        <DownloadEntry :entry="entry" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.download-bundle {
  background: white;
  padding: 5px;
  padding-left: 1%;
  padding-right: 1%;
  padding-bottom: 1%;
  width: fit-content;
  border-radius: 8px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.072);
}

h3,
p {
  margin: 0px;
}

h3 {
  margin-top: 5px;
  margin-bottom: 5px;
}

p {
  margin-bottom: 10px;
}

.download-listing {
  display: flex;
  gap: 5px;
  flex-direction: column;
}
</style>
