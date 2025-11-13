<script setup lang="ts">
import { defineProps } from 'vue'
import { type Entry } from '@/composables/downloadable'
import DownloadButton from '@/components/downloads/DownloadButton.vue'

const props = defineProps(['entry'])
const entryData = props.entry as Entry
</script>

<template>
  <div class="download-entry">
    <h4>{{ entryData.name }}</h4>
    <div class="download-inner">
      <p>{{ entryData.description }}</p>
      <DownloadButton />
    </div>
  </div>
</template>

<style scoped>
.download-entry {
  display: flex;
  flex-direction: column;
  gap: 0px;
  /* border: 1px black solid; */
  width: fit-content;
  border-radius: 6px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.318);

  padding-left: 1%;
  padding-right: 2%;
}

h4,
p {
  margin: 0px;
  margin-bottom: 3px;
}

h4 {
  margin-top: 5px;
}

.download-inner {
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: left;
  align-items: center;
}
</style>
