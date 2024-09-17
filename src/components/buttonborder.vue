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
    <div class="space-y-4 mt-4">
    <div class="grid grid-cols-3 gap-4">
      <!-- Gradient Button -->
      <div
        class="flex items-center justify-start p-2 space-x-2 rounded cursor-pointer w-full"
        :class="{
          'bg-blue-100 border border-blue-300': selectedOption === 'gradient',
          'bg-gray-100': selectedOption !== 'gradient'
        }"
        @click="selectOption('gradient')"
      >
        <div
          class="flex items-center justify-center w-4 h-4 rounded-full bg-white"
          :class="{
            'border border-blue-300': selectedOption === 'gradient',
          }"
        >
          <div
            v-if="selectedOption === 'gradient'"
            class="w-2 h-2 bg-blue-500 rounded-full"
          ></div>
        </div>
        <span
          class="text-sm"
          :class="{
            'font-medium text-blue-500': selectedOption === 'gradient',
          }"
        >
          Gradient
        </span>
      </div>

      <!-- Solid Button -->
      <div
        class="flex items-center justify-start p-2 space-x-2 rounded cursor-pointer w-full"
        :class="{
          'bg-blue-100 border border-blue-300': selectedOption === 'solid',
          'bg-gray-100': selectedOption !== 'solid'
        }"
        @click="selectOption('solid')"
      >
        <div
          class="flex items-center justify-center w-4 h-4 rounded-full bg-white"
          :class="{
            'border border-blue-300': selectedOption === 'solid',
          }"
        >
          <div
            v-if="selectedOption === 'solid'"
            class="w-2 h-2 bg-blue-500 rounded-full"
          ></div>
        </div>
        <span
          class="text-sm"
          :class="{
            'font-medium text-blue-500': selectedOption === 'solid',
          }"
        >
          Solid
        </span>
      </div>
    </div>

    <!-- Conditional Rendering of Components -->
    <SolidColor v-if="selectedOption === 'solid'" />
    <GradientColor v-if="selectedOption === 'gradient'" />
  </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAppStore } from '../stores/appStore';
import VueSlider from 'vue-3-slider-component';

// Import your components
import SolidColor from '../components/solidcolor.vue';
import GradientColor from '../components/gradientcolor.vue';

const appStore = useAppStore();
const selectedOption = ref<'solid' | 'gradient'>('solid');

// Function to select the option
const selectOption = (option: 'solid' | 'gradient') => {
  selectedOption.value = option;
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
