<template>
  <div
    class="grid grid-cols-8 gap-2 bg-gray-100 p-2 rounded-md border border-gray-200"
  >
    <button
      v-for="(button, index) in buttons"
      :key="index"
      class="border border-gray-100 w-full h-[32px] rounded-md"
      :style="button.style"
      @click="selectColor(button.style.backgroundColor, button.style.backgroundImage)"
    ></button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAppStore } from '../stores/appStore';

// Use the store
const appStore = useAppStore();

// Function to handle color selection
const selectColor = (backgroundColor: string, _backgroundImage: string) => {
  // Since the colors in this case are uniform, use the backgroundColor
  appStore.startColor = backgroundColor;
  appStore.endColor = backgroundColor;
};

// Data for buttons
const buttons = ref([
  {
    style: {
      backgroundColor: "rgb(255, 255, 255)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
    },
  },
  {
    style: {
      backgroundColor: "rgb(0, 0, 0)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%)",
    },
  },
  {
    style: {
      backgroundColor: "rgb(238, 9, 121)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(238, 9, 121) 0%, rgb(238, 9, 121) 100%)",
    },
  },
  {
    style: {
      backgroundColor: "rgb(228, 58, 21)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(228, 58, 21) 0%, rgb(228, 58, 21) 100%)",
    },
  },
  {
    style: {
      backgroundColor: "rgb(238, 156, 167)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(238, 156, 167) 0%, rgb(238, 156, 167) 100%)",
    },
  },
  {
    style: {
      backgroundColor: "rgb(236, 0, 140)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(236, 0, 140) 0%, rgb(236, 0, 140) 100%)",
    },
  },
  {
    style: {
      backgroundColor: "rgb(249, 83, 198)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(249, 83, 198) 0%, rgb(249, 83, 198) 100%)",
    },
  },
  {
    style: {
      backgroundColor: "rgb(204, 43, 94)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(204, 43, 94) 0%, rgb(204, 43, 94) 100%)",
    },
  },
  {
    style: {
      backgroundColor: "rgb(255, 0, 153)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(255, 0, 153) 0%, rgb(255, 0, 153) 100%)",
    },
  },
  {
    style: {
      backgroundColor: "rgb(204, 43, 94)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(204, 43, 94) 0%, rgb(204, 43, 94) 100%)",
    },
  },
  {
    style: {
      backgroundColor: "rgb(236, 0, 140)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(236, 0, 140) 0%, rgb(236, 0, 140) 100%)",
    },
  },
  {
    style: {
      backgroundColor: "rgb(142, 45, 226)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(142, 45, 226) 0%, rgb(142, 45, 226) 100%)",
    },
  },
  {
    style: {
      backgroundColor: "rgb(247, 255, 0)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(247, 255, 0) 0%, rgb(247, 255, 0) 100%)",
    },
  },
  {
    style: {
      backgroundColor: "rgb(230, 92, 0)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(230, 92, 0) 0%, rgb(230, 92, 0) 100%)",
    },
  },
  {
    style: {
      backgroundColor: "rgb(255, 226, 89)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(255, 226, 89) 0%, rgb(255, 226, 89) 100%)",
    },
  },
  {
    style: {
      backgroundColor: "rgb(194, 21, 0)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(194, 21, 0) 0%, rgb(194, 21, 0) 100%)",
    },
  },
  {
    style: {
      backgroundColor: "rgb(230, 92, 0)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(230, 92, 0) 0%, rgb(230, 92, 0) 100%)",
    },
  },
  {
    style: {
      backgroundColor: "rgb(255, 224, 0)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(255, 224, 0) 0%, rgb(255, 224, 0) 100%)",
    },
  },
  {
    style: {
      backgroundColor: "rgb(121, 159, 12)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(121, 159, 12) 0%, rgb(121, 159, 12) 100%)",
    },
  },
  {
    style: {
      backgroundColor: "rgb(0, 70, 127)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(0, 70, 127) 0%, rgb(0, 70, 127) 100%)",
    },
  },
  {
    style: {
      backgroundColor: "rgb(65, 77, 11)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(65, 77, 11) 0%, rgb(65, 77, 11) 100%)",
    },
  },
  {
    style: {
      backgroundColor: "rgb(28, 216, 210)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(28, 216, 210) 0%, rgb(28, 216, 210) 100%)",
    },
  },
  {
    style: {
      backgroundColor: "rgb(61, 126, 170)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(61, 126, 170) 0%, rgb(61, 126, 170) 100%)",
    },
  },
  {
    style: {
      backgroundColor: "rgb(218, 226, 248)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(218, 226, 248) 0%, rgb(218, 226, 248) 100%)",
    },
  },
  {
    style: {
      backgroundColor: "rgb(252, 53, 76)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(252, 53, 76) 0%, rgb(252, 53, 76) 100%)",
    },
  },
  {
    style: {
      backgroundColor: "rgb(33, 147, 176)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(33, 147, 176) 0%, rgb(33, 147, 176) 100%)",
    },
  },
  {
    style: {
      backgroundColor: "rgb(18, 194, 233)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(18, 194, 233) 0%, rgb(18, 194, 233) 100%)",
    },
  },
  {
    style: {
      backgroundColor: "rgb(84, 51, 255)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(84, 51, 255) 0%, rgb(84, 51, 255) 100%)",
    },
  },
  {
    style: {
      backgroundColor: "rgb(20, 136, 204)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(20, 136, 204) 0%, rgb(20, 136, 204) 100%)",
    },
  },
  {
    style: {
      backgroundColor: "rgb(185, 43, 39)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(185, 43, 39) 0%, rgb(185, 43, 39) 100%)",
    },
  },
  {
    style: {
      backgroundColor: "rgb(142, 45, 226)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(142, 45, 226) 0%, rgb(142, 45, 226) 100%)",
    },
  },
  {
    style: {
      backgroundColor: "rgb(151, 150, 240)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(151, 150, 240) 0%, rgb(151, 150, 240) 100%)",
    },
  },
]);
</script>
