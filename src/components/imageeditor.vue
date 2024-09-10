<template>
  <div class="flex flex-col lg:flex-row  max-w-[64rem] mx-auto">
    <!-- Left Section (Image and Buttons) -->
    <div class="w-full lg:w-1/2 max-w-md mx-auto">
  <div
    class="relative w-full aspect-square bg-gray-100 rounded-lg shadow-md"
  >
    <!-- SVG Border -->
    <div
      class="absolute inset-0 z-10"
      :style="{ transform: `rotate(${appStore.$state.rotation}deg)` }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 100 100"
        class="w-full h-full"
      >
        <defs>
          <linearGradient id="MyGradient">
            <stop offset="0%" :stop-color="appStore.$state.startColor" />
            <stop offset="100%" :stop-color="appStore.$state.endColor" />
          </linearGradient>
        </defs>
        <path
          :d="computedD"
          fill="url(#MyGradient)"
          stroke="none"
          :fill-opacity="appStore.$state.opacity / 100"
        />
      </svg>
    </div>

    <!-- Image -->
    <div
      class="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full"
    >
      <div
        class="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden"
        :style="{
          transform: `scale(${appStore.zoom / 100})`,
    rotate: `${appStore.rotation}deg`,
    marginTop: `${appStore.offsetTop}px`,
    marginLeft: `${appStore.offsetLeft}px`,
        }"
      >
        <img
          v-if="appStore.imageUrl"
          :src="appStore.imageUrl"
          alt="Profile"
          class="w-full h-full object-cover rounded-full"
        />
        <p v-else class="text-center text-gray-500">Your Image Here</p>
        <!-- Text Overlay -->
        <div
          v-if="appStore.$state.text"
          class="absolute inset-0 flex items-center justify-center text-center overflow-hidden"
          :style="{
            fontSize: `${appStore.$state.fontSize}px`,
            transform: `rotate(${appStore.$state.textRotation}deg)`,
            letterSpacing: `${appStore.$state.letterSpacing}px`,
            top: `${appStore.$state.textOffset}px`,
            color: `${appStore.$state.textColor}`,
          }"
        >
          {{ appStore.$state.text }}
        </div>
      </div>
    </div>
  </div>

  <!-- Buttons -->
  <div class="flex mt-4 space-x-4">
    <button
      class="flex-1 bg-indigo-700 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-800 focus:outline-none"
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
    <div
      class="w-full lg:w-1/2 mt-6 lg:mt-0 lg:ml-6 flex flex-col bg-white rounded-lg shadow-lg p-4"
    >
      <div class="flex space-x-4 bg-gray-200 rounded-lg">
        <button
          @click="toggleComponent('border')"
          class="py-2 px-4 rounded-lg text-sm font-medium bg-gray-200 text-gray-700"
          :class="{ 'bg-white': activeComponent === 'border' }"
        >
          Border
        </button>
        <button
          @click="toggleComponent('background')"
          class="py-2 px-4 rounded-lg text-sm font-medium bg-gray-200 text-gray-700"
          :class="{ 'bg-white': activeComponent === 'background' }"
        >
          Background
        </button>
        <button
          @click="toggleComponent('position')"
          class="py-2 px-4 rounded-lg text-sm font-medium bg-gray-200 text-gray-700"
          :class="{ 'bg-white': activeComponent === 'position' }"
        >
          Position
        </button>
        <button
          @click="toggleComponent('text')"
          class="py-2 px-4 rounded-lg text-sm font-medium bg-gray-200 text-gray-700"
          :class="{ 'bg-white': activeComponent === 'text' }"
        >
          Text
        </button>
      </div>
      <Buttonborder v-if="activeComponent === 'border'" class="mt-4" />
      <Buttonbackground v-if="activeComponent === 'background'" class="mt-4" />
      <Buttonposition v-if="activeComponent === 'position'" class="mt-4" />
      <Buttontext v-if="activeComponent === 'text'" class="mt-4" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useAppStore } from "../stores/appStore";
import Buttonbackground from "./buttonbackground.vue";
import Buttonborder from "./buttonborder.vue";
import Buttonposition from "./buttonposition.vue";
import Buttontext from "./buttontext.vue";

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
  const outerRadius = 50; // Outer radius should be fixed to cover the entire SVG viewbox
  const maxThickness = 50;
  const thickness = appStore.$state.thickness * (outerRadius / maxThickness);
  const maxOffset = thickness; // Maximum offset is the thickness of the border
  const offset = (appStore.$state.offset / 50) * maxOffset; // Scale offset to be within the thickness

  const innerRadius = outerRadius - thickness + offset;

  return `M50 50m-${outerRadius},0a${outerRadius},${outerRadius} 0 1,0 ${
    outerRadius * 2
  },0a ${outerRadius},${outerRadius} 0 1,0 -${outerRadius * 2},0z
          M50 50m-${innerRadius},0a${innerRadius},${innerRadius} 0 0,1 ${
    innerRadius * 2
  },0a ${innerRadius},${innerRadius} 0 0,1 -${innerRadius * 2},0z`;
});
</script>
