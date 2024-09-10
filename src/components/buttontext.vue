<template>
    <div
      class="w-full lg:w-11/12 mt-6 lg:mt-0 lg:ml-6 flex flex-col bg-white rounded-lg shadow-lg p-6"
    >
      <!-- Text Input Section -->
      <div class="mb-4">
        <label for="textInput" class="block text-sm font-medium text-gray-700"
          >Insert circular text</label
        >
        <textarea
          id="textInput"
          placeholder="#profilepicturemaker"
          rows="3"
          class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          v-model="appStore.$state.text"
        ></textarea>
      </div>
  
      <!-- Slider Section -->
      <div class="grid grid-cols-2 gap-6">
        <div class="flex flex-col">
          <label
            for="offsetSlider"
            class="block text-sm font-medium text-gray-700"
            >Offset:</label
          >
          <input
            type="range"
            id="offsetSlider"
            min="0"
            max="100"
            v-model="appStore.$state.textOffset"
            class="mt-2"
          />
          <p class="text-right text-sm text-gray-500 mt-1">
            {{ appStore.$state.textOffset }}
          </p>
        </div>
  
        <div class="flex flex-col">
          <label
            for="rotationSlider"
            class="block text-sm font-medium text-gray-700"
            >Rotation:</label
          >
          <input
            type="range"
            id="rotationSlider"
            min="0"
            max="360"
            v-model="appStore.$state.textRotation"
            class="mt-2"
          />
          <p class="text-right text-sm text-gray-500 mt-1">
            {{ appStore.$state.textRotation }}
          </p>
        </div>
  
        <div class="flex flex-col">
          <label
            for="fontSizeSlider"
            class="block text-sm font-medium text-gray-700"
            >Font size:</label
          >
          <input
            type="range"
            id="fontSizeSlider"
            min="8"
            max="50"
            v-model="appStore.$state.fontSize"
            class="mt-2"
          />
          <p class="text-right text-sm text-gray-500 mt-1">
            {{ appStore.$state.fontSize }}
          </p>
        </div>
  
        <div class="flex flex-col">
          <label
            for="letterSpacingSlider"
            class="block text-sm font-medium text-gray-700"
            >Letter spacing:</label
          >
          <input
            type="range"
            id="letterSpacingSlider"
            min="0"
            max="10"
            v-model="appStore.$state.letterSpacing"
            class="mt-2"
          />
          <p class="text-right text-sm text-gray-500 mt-1">
            {{ appStore.$state.letterSpacing }}
          </p>
        </div>
  
        <div class="col-span-2">
          <label for="textColor" class="block text-sm font-medium text-gray-700"
            >Text color:</label
          >
          <input
            type="color"
            id="textColor"
            v-model="appStore.$state.textColor"
            class="mt-2 w-full h-10 border-gray-300 shadow-sm rounded-lg"
          />
        </div>
      </div>
    </div>
  </template>

<script setup lang="ts">
import { useAppStore } from "../stores/appStore";

const appStore = useAppStore();
</script>
