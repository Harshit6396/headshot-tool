<template>
  <div class="p-4">
    <div class="space-y-2">
      <div
          class="bg-gray-50 p-2 rounded-md flex flex-col items-start justify-start border border-black/5 space-y-1"
      >
        <div class="flex items-center justify-between w-full">
          <span class="text-sm text-gray-700">Thickness:</span>
        </div>
        <div>
          <VueSlider v-model="thickness" />
          <p>Value: {{ thickness }}</p>
        </div>
      </div>
      <hr class="w-full my-6 bg-black/50"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import VueSlider from "vue-3-slider-component";
const thickness = ref(0);
</script>