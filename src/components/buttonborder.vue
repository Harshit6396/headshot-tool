<template>
  <div class="p-4">
    <div class="space-y-2">
      <div class="bg-gray-50 p-2 rounded-md flex flex-col items-start justify-start border border-black/5 space-y-1">
        <div class="flex items-center justify-between w-full">
          <span class="text-sm text-gray-700">Thickness:</span>
        </div>
        <div class="w-full">
          <VueSlider 
            v-model="appStore.$state.thickness" 
            :min="1" 
            :max="50"
            tooltip="always"
            class="custom-slider"
          />
          <p>Value: {{ appStore.$state.thickness }}</p>
        </div>
      </div>
      <div class="bg-gray-50 p-2 rounded-md flex flex-col items-start justify-start border border-black/5 space-y-1">
        <div class="flex items-center justify-between w-full">
          <span class="text-sm text-gray-700">Offset:</span>
        </div>
        <div class="w-full">
          <VueSlider 
            v-model="appStore.$state.offset" 
            :min="0" 
            :max="50"
            tooltip="always"
            class="custom-slider"
          />
          <p>Value: {{ appStore.$state.offset }}</p>
        </div>
      </div>
      <div class="bg-gray-50 p-2 rounded-md flex flex-col items-start justify-start border border-black/5 space-y-1">
        <div class="flex items-center justify-between w-full">
          <span class="text-sm text-gray-700">Opacity:</span>
        </div>
        <div class="w-full">
          <VueSlider 
            v-model="appStore.$state.opacity" 
            :min="0" 
            :max="100"
            tooltip="always"
            class="custom-slider"
          />
          <p>Value: {{ appStore.$state.opacity }}%</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '../stores/appStore';
import VueSlider from "vue-3-slider-component";

const appStore = useAppStore();
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
