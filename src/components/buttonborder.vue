<script setup lang="ts">
import { ref } from "vue";
import VueSlider from "vue-3-slider-component";

const value = ref(100);
</script>
<template>
  <div class="p-4">
    <div class="space-y-2">
   <div
    class="bg-gray-50 p-2 rounded-md flex flex-col items-start justify-start border border-black/5 space-y-1"
  >
    <div class="flex items-center justify-between w-full">
      <span class="text-sm text-gray-700">Thickness:</span>
      <span class="text-sm text-gray-700">{{ thickness }}</span>
    </div>
    <VueSlider v-model="value" />
    <p>Value: {{ value }}</p>
  </div>
      <div
        class="bg-gray-50 p-2 rounded-md flex flex-col items-start justify-start border border-black/5 space-y-1"
      >
        <div class="flex items-center justify-between w-full">
          <span class="text-sm text-gray-700">Offset:</span>
          <span class="text-sm text-gray-700">0</span>
        </div>
        <input
          id="myRange"
          type="range"
          min="0"
          max="50"
          steps="1"
          class="w-full"
        />
      </div>
      <div
        class="bg-gray-50 p-2 rounded-md flex flex-col items-start justify-start border border-black/5 space-y-1"
      >
        <div class="flex items-center justify-between w-full">
          <span class="text-sm text-gray-700">Opacity:</span>
          <span class="text-sm text-gray-700">100</span>
        </div>
        <input
          id="myRange"
          type="range"
          min="0"
          max="100"
          steps="1"
          class="w-full"
        />
      </div>
    </div>
    <hr class="w-full my-6 bg-black/50" />
    <div class="space-y-2">
      <div class="grid grid-cols-3 gap-4">
        <div
          class="flex items-center content-center justify-start p-2 space-x-2 rounded cursor-pointer w-full border border-blue-300 bg-blue-100"
        >
          <div
            class="flex items-center content-center justify-center w-4 h-4 rounded-full bg-white"
          >
            <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
          </div>
          <span for="gradient" class="text-sm font-medium text-blue-500">
            Gradient
          </span>
        </div>
        <div
          class="flex items-center content-center justify-start p-2 space-x-2 rounded cursor-pointer w-full bg-gray-100"
        >
          <div
            class="flex items-center content-center justify-center w-4 h-4 rounded-full bg-white border-blue-300 border"
          >
            <!---->
          </div>
          <span for="solid" class="text-sm"> Solid </span>
        </div>
      </div>
      <div
        class="grid grid-cols-8 gap-2 bg-gray-100 p-2 rounded-md border border-gray-200"
      >
        <button
          class="border border-gray-100 w-full h-[32px] rounded-md"
          style="
            background-color: rgb(255, 255, 255);
            background-image: -webkit-linear-gradient(
              45deg,
              rgb(255, 255, 255) 0%,
              rgb(205, 205, 205) 100%
            );
          "
        ></button
        ><button
          class="border border-gray-100 w-full h-[32px] rounded-md"
          style="
            background-color: rgb(0, 0, 0);
            background-image: -webkit-linear-gradient(
              45deg,
              rgb(0, 0, 0) 0%,
              rgb(205, 205, 205) 100%
            );
          "
        ></button
        ><button
          class="border border-gray-100 w-full h-[32px] rounded-md"
          style="
            background-color: rgb(238, 9, 121);
            background-image: -webkit-linear-gradient(
              45deg,
              rgb(238, 9, 121) 0%,
              rgb(255, 106, 0) 100%
            );
          "
        ></button
        ><button
          class="border border-gray-100 w-full h-[32px] rounded-md"
          style="
            background-color: rgb(228, 58, 21);
            background-image: -webkit-linear-gradient(
              45deg,
              rgb(228, 58, 21) 0%,
              rgb(230, 82, 69) 100%
            );
          "
        ></button
        ><button
          class="border border-gray-100 w-full h-[32px] rounded-md"
          style="
            background-color: rgb(238, 156, 167);
            background-image: -webkit-linear-gradient(
              45deg,
              rgb(238, 156, 167) 0%,
              rgb(255, 221, 225) 100%
            );
          "
        ></button
        ><button
          class="border border-gray-100 w-full h-[32px] rounded-md"
          style="
            background-color: rgb(236, 0, 140);
            background-image: -webkit-linear-gradient(
              45deg,
              rgb(236, 0, 140) 0%,
              rgb(252, 103, 103) 100%
            );
          "
        ></button
        ><button
          class="border border-gray-100 w-full h-[32px] rounded-md"
          style="
            background-color: rgb(249, 83, 198);
            background-image: -webkit-linear-gradient(
              45deg,
              rgb(249, 83, 198) 0%,
              rgb(185, 29, 115) 100%
            );
          "
        ></button
        ><button
          class="border border-gray-100 w-full h-[32px] rounded-md"
          style="
            background-color: rgb(204, 43, 94);
            background-image: -webkit-linear-gradient(
              45deg,
              rgb(204, 43, 94) 0%,
              rgb(117, 58, 136) 100%
            );
          "
        ></button
        ><button
          class="border border-gray-100 w-full h-[32px] rounded-md"
          style="
            background-color: rgb(255, 0, 153);
            background-image: -webkit-linear-gradient(
              45deg,
              rgb(255, 0, 153) 0%,
              rgb(73, 50, 64) 100%
            );
          "
        ></button
        ><button
          class="border border-gray-100 w-full h-[32px] rounded-md"
          style="
            background-color: rgb(204, 43, 94);
            background-image: -webkit-linear-gradient(
              45deg,
              rgb(204, 43, 94) 0%,
              rgb(117, 58, 136) 100%
            );
          "
        ></button
        ><button
          class="border border-gray-100 w-full h-[32px] rounded-md"
          style="
            background-color: rgb(236, 0, 140);
            background-image: -webkit-linear-gradient(
              45deg,
              rgb(236, 0, 140) 0%,
              rgb(252, 103, 103) 100%
            );
          "
        ></button
        ><button
          class="border border-gray-100 w-full h-[32px] rounded-md"
          style="
            background-color: rgb(142, 45, 226);
            background-image: -webkit-linear-gradient(
              45deg,
              rgb(142, 45, 226) 0%,
              rgb(74, 0, 224) 100%
            );
          "
        ></button
        ><button
          class="border border-gray-100 w-full h-[32px] rounded-md"
          style="
            background-color: rgb(247, 255, 0);
            background-image: -webkit-linear-gradient(
              45deg,
              rgb(247, 255, 0) 0%,
              rgb(219, 54, 164) 100%
            );
          "
        ></button
        ><button
          class="border border-gray-100 w-full h-[32px] rounded-md"
          style="
            background-color: rgb(230, 92, 0);
            background-image: -webkit-linear-gradient(
              45deg,
              rgb(230, 92, 0) 0%,
              rgb(249, 212, 35) 100%
            );
          "
        ></button
        ><button
          class="border border-gray-100 w-full h-[32px] rounded-md"
          style="
            background-color: rgb(255, 226, 89);
            background-image: -webkit-linear-gradient(
              45deg,
              rgb(255, 226, 89) 0%,
              rgb(255, 167, 81) 100%
            );
          "
        ></button
        ><button
          class="border border-gray-100 w-full h-[32px] rounded-md"
          style="
            background-color: rgb(194, 21, 0);
            background-image: -webkit-linear-gradient(
              45deg,
              rgb(194, 21, 0) 0%,
              rgb(255, 197, 0) 100%
            );
          "
        ></button
        ><button
          class="border border-gray-100 w-full h-[32px] rounded-md"
          style="
            background-color: rgb(230, 92, 0);
            background-image: -webkit-linear-gradient(
              45deg,
              rgb(230, 92, 0) 0%,
              rgb(249, 212, 35) 100%
            );
          "
        ></button
        ><button
          class="border border-gray-100 w-full h-[32px] rounded-md"
          style="
            background-color: rgb(255, 224, 0);
            background-image: -webkit-linear-gradient(
              45deg,
              rgb(255, 224, 0) 0%,
              rgb(121, 159, 12) 100%
            );
          "
        ></button
        ><button
          class="border border-gray-100 w-full h-[32px] rounded-md"
          style="
            background-color: rgb(121, 159, 12);
            background-image: -webkit-linear-gradient(
              45deg,
              rgb(121, 159, 12) 0%,
              rgb(172, 187, 120) 100%
            );
          "
        ></button
        ><button
          class="border border-gray-100 w-full h-[32px] rounded-md"
          style="
            background-color: rgb(0, 70, 127);
            background-image: -webkit-linear-gradient(
              45deg,
              rgb(0, 70, 127) 0%,
              rgb(165, 204, 130) 100%
            );
          "
        ></button
        ><button
          class="border border-gray-100 w-full h-[32px] rounded-md"
          style="
            background-color: rgb(65, 77, 11);
            background-image: -webkit-linear-gradient(
              45deg,
              rgb(65, 77, 11) 0%,
              rgb(114, 122, 23) 100%
            );
          "
        ></button
        ><button
          class="border border-gray-100 w-full h-[32px] rounded-md"
          style="
            background-color: rgb(28, 216, 210);
            background-image: -webkit-linear-gradient(
              45deg,
              rgb(28, 216, 210) 0%,
              rgb(147, 237, 199) 100%
            );
          "
        ></button
        ><button
          class="border border-gray-100 w-full h-[32px] rounded-md"
          style="
            background-color: rgb(61, 126, 170);
            background-image: -webkit-linear-gradient(
              45deg,
              rgb(61, 126, 170) 0%,
              rgb(255, 228, 122) 100%
            );
          "
        ></button
        ><button
          class="border border-gray-100 w-full h-[32px] rounded-md"
          style="
            background-color: rgb(218, 226, 248);
            background-image: -webkit-linear-gradient(
              45deg,
              rgb(218, 226, 248) 0%,
              rgb(214, 164, 164) 100%
            );
          "
        ></button
        ><button
          class="border border-gray-100 w-full h-[32px] rounded-md"
          style="
            background-color: rgb(252, 53, 76);
            background-image: -webkit-linear-gradient(
              45deg,
              rgb(252, 53, 76) 0%,
              rgb(10, 191, 188) 100%
            );
          "
        ></button
        ><button
          class="border border-gray-100 w-full h-[32px] rounded-md"
          style="
            background-color: rgb(33, 147, 176);
            background-image: -webkit-linear-gradient(
              45deg,
              rgb(33, 147, 176) 0%,
              rgb(109, 213, 237) 100%
            );
          "
        ></button
        ><button
          class="border border-gray-100 w-full h-[32px] rounded-md"
          style="
            background-color: rgb(18, 194, 233);
            background-image: -webkit-linear-gradient(
              45deg,
              rgb(18, 194, 233) 0%,
              rgb(196, 113, 237) 100%
            );
          "
        ></button
        ><button
          class="border border-gray-100 w-full h-[32px] rounded-md"
          style="
            background-color: rgb(84, 51, 255);
            background-image: -webkit-linear-gradient(
              45deg,
              rgb(84, 51, 255) 0%,
              rgb(165, 254, 203) 100%
            );
          "
        ></button
        ><button
          class="border border-gray-100 w-full h-[32px] rounded-md"
          style="
            background-color: rgb(20, 136, 204);
            background-image: -webkit-linear-gradient(
              45deg,
              rgb(20, 136, 204) 0%,
              rgb(43, 50, 178) 100%
            );
          "
        ></button
        ><button
          class="border border-gray-100 w-full h-[32px] rounded-md"
          style="
            background-color: rgb(185, 43, 39);
            background-image: -webkit-linear-gradient(
              45deg,
              rgb(185, 43, 39) 0%,
              rgb(21, 101, 192) 100%
            );
          "
        ></button
        ><button
          class="border border-gray-100 w-full h-[32px] rounded-md"
          style="
            background-color: rgb(142, 45, 226);
            background-image: -webkit-linear-gradient(
              45deg,
              rgb(142, 45, 226) 0%,
              rgb(74, 0, 224) 100%
            );
          "
        ></button
        ><button
          class="border border-gray-100 w-full h-[32px] rounded-md"
          style="
            background-color: rgb(151, 150, 240);
            background-image: -webkit-linear-gradient(
              45deg,
              rgb(151, 150, 240) 0%,
              rgb(251, 199, 212) 100%
            );
          "
        ></button>
      </div>
      <div class="grid grid-cols-4 gap-4">
        <div
          class="bg-gray-50 col-span-1 p-2 flex flex-col rounded-md border border-gray-200"
        >
          <span class="text-sm text-gray-700">From:</span>
          <input type="color" class="w-full rounded-md" />
        </div>
        <div
          class="bg-gray-50 col-span-1 p-2 flex flex-col rounded-md border border-gray-200"
        >
          <span class="text-sm text-gray-700">To:</span>
          <input type="color" class="w-full rounded-md" />
        </div>
        <div
          class="bg-gray-50 p-2 rounded-md flex flex-col items-start justify-start border border-black/5 space-y-1 col-span-2"
        >
          <div class="flex items-center justify-between w-full">
            <span class="text-sm text-gray-700">Rotation:</span>
            <span class="text-sm text-gray-700">45</span>
          </div>
          <input
            id="myRange"
            type="range"
            min="0"
            max="180"
            steps="1"
            class="w-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>
