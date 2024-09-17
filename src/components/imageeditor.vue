<template>
<div class="flex flex-col lg:flex-row max-w-[64rem] mx-auto ">
    <!-- Left Section (Image and Buttons) -->
    <div class="w-full lg:w-1/2 max-w-md mx-auto flex-grow">
    <div class="relative w-full aspect-square bg-gray-100 rounded-lg shadow-md">
      <!-- SVG Border -->
      <div class="absolute inset-0 z-10" :style="{ transform: `rotate(${appStore.rotation}deg)` }">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="w-full h-full">
          <defs>
            <linearGradient id="MyGradient">
              <stop offset="0%" :stop-color="appStore.startColor" />
              <stop offset="100%" :stop-color="appStore.endColor" />
            </linearGradient>
          </defs>
          <path :d="computedD" fill="url(#MyGradient)" :fill-opacity="appStore.opacity / 100" />
        </svg>
      </div>

      <!-- Image with Background -->
      <div class="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full">
        <div
          class="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden relative"
          :style="{
            transform: `scale(${appStore.zoom / 100}) rotate(${appStore.rotation}deg)`,
            marginTop: `${appStore.offsetTop}px`,
            marginLeft: `${appStore.offsetLeft}px`,
          }"
        >
          <!-- Background Image -->
          <img
            v-if="appStore.selectedBackgroundUrl"
            :src="appStore.selectedBackgroundUrl"
            alt="Background"
            class="w-full h-full object-cover absolute inset-0"
          />

          <!-- Processed Image (Foreground) -->
          <img
            v-if="appStore.processedImageUrl || appStore.imageUrl"
            :src="appStore.processedImageUrl || appStore.imageUrl"
            alt="Profile"
            class="w-full h-full object-cover relative"
          />
          <p v-else class="text-center text-gray-500">Your Image Here</p>

          <!-- Text Overlay -->
          <div
            v-if="appStore.text"
            class="absolute inset-0 flex items-center justify-center text-center overflow-hidden"
            :style="{
              fontSize: `${appStore.fontSize}px`,
              transform: `rotate(${appStore.textRotation}deg)`,
              letterSpacing: `${appStore.letterSpacing}px`,
              top: `${appStore.textOffset}px`,
              color: `${appStore.textColor}`,
            }"
          >
            {{ appStore.text }}
          </div>
        </div>
      </div>
    </div>

    <!-- Buttons -->
    <div class="flex mt-4 space-x-4">
      <button
        class="flex-1 bg-indigo-700 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-800 focus:outline-none"
        @click="downloadImage"
      >
        Download headshot
      </button>
      <button
        class="flex-1 bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 focus:outline-none"
        @click="resetAll"
      >
        Reset
      </button>
    </div>
  </div>

    <!-- Right Section (Options) -->
    <div class="w-full lg:w-1/2 mt-6 lg:mt-0 lg:ml-6 flex-grow flex flex-col bg-white rounded-lg shadow-lg p-4" style="height: 630px; overflow-y: auto;">
    <div class="flex space-x-4 bg-gray-200 rounded-lg">
      <button @click="toggleComponent('border')" class="py-2 px-4 rounded-lg text-sm font-medium bg-gray-200 text-gray-700"
        :class="{ 'bg-white': activeComponent === 'border' }">
        Border
      </button>
      <button @click="toggleComponent('background')"
        class="py-2 px-4 rounded-lg text-sm font-medium bg-gray-200 text-gray-700"
        :class="{ 'bg-white': activeComponent === 'background' }">
        Background
      </button>
      <button @click="toggleComponent('position')" class="py-2 px-4 rounded-lg text-sm font-medium bg-gray-200 text-gray-700"
        :class="{ 'bg-white': activeComponent === 'position' }">
        Position
      </button>
      <button @click="toggleComponent('text')" class="py-2 px-4 rounded-lg text-sm font-medium bg-gray-200 text-gray-700"
        :class="{ 'bg-white': activeComponent === 'text' }">
        Text
      </button>
    </div>
    <div class="mt-4 overflow-y-auto flex-grow">
      <Buttonborder v-if="activeComponent === 'border'" />
      <Buttonbackground v-if="activeComponent === 'background'" />
      <Buttonposition v-if="activeComponent === 'position'" />
      <Buttontext v-if="activeComponent === 'text'" />
    </div>
  </div>
</div>

</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useAppStore } from '../stores/appStore';
import Buttonbackground from './buttonbackground.vue';
import Buttonborder from './buttonborder.vue';
import Buttonposition from './buttonposition.vue';
import Buttontext from './buttontext.vue';

const appStore = useAppStore();
const activeComponent = ref<string | null>('border');

function toggleComponent(component: string) {
  activeComponent.value = component; // Always select the new component
}

function resetAll() {
  activeComponent.value = null;
  appStore.reset();
  appStore.startColor = '#fff';
  appStore.endColor = '#fff';
}

const computedD = computed(() => {
  const outerRadius = 50; // Outer radius covers the entire SVG viewbox
  const maxThickness = 50;
  const thickness = appStore.thickness * (outerRadius / maxThickness);
  const maxOffset = thickness; // Maximum offset is the thickness of the border
  const offset = (appStore.offset / 50) * maxOffset; // Scale offset within the thickness

  const innerRadius = outerRadius - thickness + offset;

  return `M50 50 m-${outerRadius},0
          a${outerRadius},${outerRadius} 0 1,0 ${outerRadius * 2},0
          a${outerRadius},${outerRadius} 0 1,0 -${outerRadius * 2},0
          Z
          M50 50 m-${innerRadius},0
          a${innerRadius},${innerRadius} 0 1,1 ${innerRadius * 2},0
          a${innerRadius},${innerRadius} 0 1,1 -${innerRadius * 2},0
          Z`;
});
</script>

