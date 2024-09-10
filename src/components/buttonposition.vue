<template>
       <div class="bg-white p-6 rounded-lg shadow-md space-y-6">
         <div>
           <div class="flex justify-between items-center mb-2">
             <label class="text-sm font-medium text-gray-700">Zoom:</label>
             <span class="text-sm text-gray-500">{{ appStore.zoom }}</span>
           </div>
           <VueSlider 
             v-model="appStore.zoom"
             :min="100"
             :max="400"
             :step="1"
             class="custom-slider"
           />
         </div>
         <div>
           <div class="flex justify-between items-center mb-2">
             <label class="text-sm font-medium text-gray-700">Offset Top:</label>
             <span class="text-sm text-gray-500">{{ appStore.offsetTop }}</span>
           </div>
           <VueSlider 
             v-model="appStore.offsetTop"
             :min="0"
             :max="100"
             :step="1"
             class="custom-slider"
           />
         </div>
         <div>
           <div class="flex justify-between items-center mb-2">
             <label class="text-sm font-medium text-gray-700">Offset Left:</label>
             <span class="text-sm text-gray-500">{{ appStore.offsetLeft }}</span>
           </div>
           <VueSlider 
             v-model="appStore.offsetLeft"
             :min="0"
             :max="100"
             :step="1"
             class="custom-slider"
           />
         </div>
         <div>
           <div class="flex justify-between items-center mb-2">
             <label class="text-sm font-medium text-gray-700">Rotate:</label>
             <span class="text-sm text-gray-500">{{ appStore.rotation }}°</span>
           </div>
           <VueSlider 
             v-model="appStore.rotation"
             :min="-180"
             :max="180"
             :step="1"
             class="custom-slider"
           />
         </div>
       </div>
     </template>

<script setup lang="ts">
import { useAppStore } from '../stores/appStore';
import VueSlider from 'vue-3-slider-component';

const appStore = useAppStore();
</script>