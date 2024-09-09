<template>
  <div class="p-4">
    <div class="space-y-2">
      <div class="bg-gray-50 p-2 rounded-md flex flex-col items-start justify-start border border-black/5 space-y-1">
        <div class="flex items-center justify-between w-full">
          <span class="text-sm text-gray-700">Thickness:</span>
        </div>
        <div>
          <VueSlider v-model="thickness" :min="1" :max="50" />
          <p>Value: {{ thickness }}</p>
        </div>
      </div>

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
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, computed } from "vue";
import VueSlider from "vue-3-slider-component";

const thickness = ref(3);

const computedD = computed(() => {
  const outerRadius = 50;  // Outer radius should be fixed to cover the entire SVG viewbox
  const maxThickness = 50;
  const innerRadius = outerRadius - (thickness.value * (outerRadius / maxThickness));  // Reverse the thickness logic

  return `M50 50m-${outerRadius},0a${outerRadius},${outerRadius} 0 1,0 ${outerRadius * 2},0a ${outerRadius},${outerRadius} 0 1,0 -${outerRadius * 2},0zM50 50m-${innerRadius},0a${innerRadius},${innerRadius} 0 0,1 ${innerRadius * 2},0a ${innerRadius},${innerRadius} 0 0,1 -${innerRadius * 2},0z`;
});
</script>


