<template>
  <div>
    <h2>Background Remover</h2>
    <input type="file" @change="onFileSelected" accept="image/*" />
    <div v-if="loading">Processing image...</div>
    <div v-else-if="isImageUploaded">
      <img :src="processedImageUrl ?? imageUrl ?? undefined" alt="Processed Image" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useAppStore } from '../stores/appStore';
const appStore = useAppStore();
const onFileSelected = async (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0] || null;
  await appStore.setSelectedFile(file);
};
const {
  isImageUploaded,
  imageUrl,
  processedImageUrl,
  loading,
} = appStore;
</script>
<style scoped>
/* Add your styles here */
</style>