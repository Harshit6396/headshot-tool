<template>
<div class="flex flex-col lg:flex-row items-stretch justify-center p-6 bg-gray-50 rounded-lg shadow-md mx-10">
  <!-- Left Section (Image Placeholder) -->
  <div class="relative w-full h-full z-10 rounded-full" style="opacity: 1; transform: rotate(45deg);">
    <svg id="svgBorder" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">
      <defs>
        <linearGradient id="MyGradient">
          <stop offset="0%" stop-color="#f5f5f5"></stop>
          <stop offset="100%" stop-color="#c1c1c1"></stop>
        </linearGradient>
      </defs>
      <path :d="computedD" fill="url(#MyGradient)" stroke="none"></path>
    </svg>
  </div>
  <div class="w-full lg:w-1/2 flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-4">
  <!-- Circular Border -->
  <div class="w-48 h-48 flex items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 to-orange-500">
    <div class="w-44 h-44 bg-white rounded-full flex items-center justify-center overflow-hidden">
      <!-- Show the uploaded image if available, otherwise show the placeholder text -->
      <img v-if="appStore.imageUrl" :src="appStore.imageUrl" alt="Uploaded Image" class="w-full h-full object-cover rounded-full" />
      <p v-else class="text-center text-gray-500">Your Image Here</p>
    </div>
  </div>
  <!-- Buttons -->
  <div class="flex mt-4 space-x-4">
    <button class="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none">
      Download headshot
    </button>
    <button class="bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700 focus:outline-none" @click="resetAll">
      Reset
    </button>
  </div>
</div>

  
  <!-- Right Section (Options) -->
  <div class="w-full lg:w-1/2 mt-6 lg:mt-0 lg:ml-6 flex flex-col bg-white rounded-lg shadow-lg p-4">
    <div class="flex space-x-4 bg-gray-200 rounded-lg">
      <button @click="toggleComponent('border')" class="py-2 px-4 rounded-lg text-sm font-medium bg-gray-200 text-gray-700">Border</button>
    <button @click="toggleComponent('background')" class="py-2 px-4 rounded-lg text-sm font-medium bg-gray-200 text-gray-700">Background</button>
    <button @click="toggleComponent('position')" class="py-2 px-4 rounded-lg text-sm font-medium bg-gray-200 text-gray-700">Position</button>
    <button @click="toggleComponent('text')" class="py-2 px-4 rounded-lg text-sm font-medium bg-gray-200 text-gray-700">Text</button>

   

    </div>
    <Buttonborder v-if="activeComponent === 'border'" class="mt-4" />
    <Buttonbackground v-if="activeComponent === 'background'" class="mt-4" />
    <Buttonposition v-if="activeComponent === 'position'" class="mt-4" />
    <Buttontext v-if="activeComponent === 'text'" class="mt-4" />

  </div>
</div>

</template>

<script setup lang="ts">
import {computed, ref} from 'vue';
import { useAppStore } from '../stores/appStore';
import Buttonbackground from './buttonbackground.vue';
import Buttonborder from './buttonborder.vue';
import Buttonposition from './buttonposition.vue';
import Buttontext from './buttontext.vue';

const appStore = useAppStore();
const activeComponent = ref<string | null>(null);

function toggleComponent(component: string) {
  if (activeComponent.value === component) {
    activeComponent.value = null; // Deselect if the same button is clicked
  } else {
    activeComponent.value = component; // Select the new component
  }
}

function resetAll() {
  activeComponent.value = null;
  appStore.reset();
}


const computedD = computed(() => {
  const outerRadius = 50;  // Outer radius should be fixed to cover the entire SVG viewbox
  const maxThickness = 50;
  const innerRadius = outerRadius - (appStore.$state.thickness * (outerRadius / maxThickness));  // Reverse the thickness logic

  return `M50 50m-${outerRadius},0a${outerRadius},${outerRadius} 0 1,0 ${outerRadius * 2},0a ${outerRadius},${outerRadius} 0 1,0 -${outerRadius * 2},0zM50 50m-${innerRadius},0a${innerRadius},${innerRadius} 0 0,1 ${innerRadius * 2},0a ${innerRadius},${innerRadius} 0 0,1 -${innerRadius * 2},0z`;
});
</script>