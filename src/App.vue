<template>
  <uploadimage v-if="!appStore.isImageUploaded" />
  <imageeditor v-else />
</template>


<script setup lang="ts">
import { useAppStore } from "./stores/appStore.ts";  // Adjust the path as necessary
import Uploadimage from './components/uploadimage.vue';
import Imageeditor from './components/imageeditor.vue';  // Adjust the path as necessary

const appStore = useAppStore();
</script>
