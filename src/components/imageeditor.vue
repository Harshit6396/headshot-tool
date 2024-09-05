<script setup lang="ts">
import { useAppStore } from "../stores/appStore";
import Buttonbackground from "./buttonbackground.vue";
import Buttonborder from "./buttonborder.vue";
import Buttonposition from "./buttonposition.vue";
import Buttontext from "./buttontext.vue";

const appStore = useAppStore();

function resetAll(){
  appStore.reset();
}
</script>

<template>
<div class="flex flex-col lg:flex-row items-stretch justify-center p-6 bg-gray-50 rounded-lg shadow-md mx-10">
  <!-- Left Section (Image Placeholder) -->
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
      <Buttonborder />
      <Buttonposition />
      <Buttontext />
      <Buttonbackground />
    </div>
    <div class="mt-4 flex bg-gray-100 p-3 rounded-lg">
      <label class="block text-sm font-medium text-gray-700 ">Background color:</label>
      <input type="color" class=" h-7 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 ml-4" />
    </div>
    <div class="mt-4 grid grid-cols-4 gap-4">
      <!-- Placeholder for patterns -->
      <div class="w-20 h-20 rounded-full bg-gray-300"></div>
      <div class="w-20 h-20 rounded-full bg-gray-300"></div>
      <div class="w-20 h-20 rounded-full bg-gray-300"></div>
      <div class="w-20 h-20 rounded-full bg-gray-300"></div>
      <div class="w-20 h-20 rounded-full bg-gray-300"></div>
      <div class="w-20 h-20 rounded-full bg-gray-300"></div>
      <div class="w-20 h-20 rounded-full bg-gray-300"></div>
      <div class="w-20 h-20 rounded-full bg-gray-300"></div>
      <div class="w-20 h-20 rounded-full bg-gray-300"></div>
      <div class="w-20 h-20 rounded-full bg-gray-300"></div>
      <div class="w-20 h-20 rounded-full bg-gray-300"></div>
      <div class="w-20 h-20 rounded-full bg-gray-300"></div>
    </div>
  </div>
</div>

</template>
