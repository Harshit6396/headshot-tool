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
const selectColor = (backgroundColor: string, backgroundImage: string) => {
  // Extract the colors from the backgroundImage
  const gradientColors = backgroundImage.match(/rgb\((\d+, \d+, \d+)\)/g);

  if (gradientColors && gradientColors.length === 2) {
    appStore.startColor = gradientColors[0];
    appStore.endColor = gradientColors[1];
  } else {
    // Fallback to a single color if no gradient found
    appStore.startColor = backgroundColor;
    appStore.endColor = backgroundColor;
  }
};

// Data for buttons
const buttons = ref([
  {
    style: {
      backgroundColor: "rgb(255, 255, 255)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(255, 255, 255) 0%, rgb(205, 205, 205) 100%)"
    }
  },
  {
    style: {
      backgroundColor: "rgb(0, 0, 0)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(0, 0, 0) 0%, rgb(205, 205, 205) 100%)"
    }
  },
  {
    style: {
      backgroundColor: "rgb(238, 9, 121)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(238, 9, 121) 0%, rgb(255, 106, 0) 100%)"
    }
  },
  {
    style: {
      backgroundColor: "rgb(228, 58, 21)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(228, 58, 21) 0%, rgb(230, 82, 69) 100%)"
    }
  },
  {
    style: {
      backgroundColor: "rgb(238, 156, 167)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(238, 156, 167) 0%, rgb(255, 221, 225) 100%)"
    }
  },
  {
    style: {
      backgroundColor: "rgb(236, 0, 140)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(236, 0, 140) 0%, rgb(252, 103, 103) 100%)"
    }
  },
  {
    style: {
      backgroundColor: "rgb(249, 83, 198)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(249, 83, 198) 0%, rgb(185, 29, 115) 100%)"
    }
  },
  {
    style: {
      backgroundColor: "rgb(204, 43, 94)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(204, 43, 94) 0%, rgb(117, 58, 136) 100%)"
    }
  },
  {
    style: {
      backgroundColor: "rgb(255, 0, 153)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(255, 0, 153) 0%, rgb(73, 50, 64) 100%)"
    }
  },
  {
    style: {
      backgroundColor: "rgb(204, 43, 94)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(204, 43, 94) 0%, rgb(117, 58, 136) 100%)"
    }
  },
  {
    style: {
      backgroundColor: "rgb(236, 0, 140)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(236, 0, 140) 0%, rgb(252, 103, 103) 100%)"
    }
  },
  {
    style: {
      backgroundColor: "rgb(142, 45, 226)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(142, 45, 226) 0%, rgb(74, 0, 224) 100%)"
    }
  },
  {
    style: {
      backgroundColor: "rgb(247, 255, 0)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(247, 255, 0) 0%, rgb(219, 54, 164) 100%)"
    }
  },
  {
    style: {
      backgroundColor: "rgb(230, 92, 0)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(230, 92, 0) 0%, rgb(249, 212, 35) 100%)"
    }
  },
  {
    style: {
      backgroundColor: "rgb(255, 226, 89)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(255, 226, 89) 0%, rgb(255, 167, 81) 100%)"
    }
  },
  {
    style: {
      backgroundColor: "rgb(194, 21, 0)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(194, 21, 0) 0%, rgb(255, 197, 0) 100%)"
    }
  },
  {
    style: {
      backgroundColor: "rgb(230, 92, 0)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(230, 92, 0) 0%, rgb(249, 212, 35) 100%)"
    }
  },
  {
    style: {
      backgroundColor: "rgb(255, 224, 0)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(255, 224, 0) 0%, rgb(121, 159, 12) 100%)"
    }
  },
  {
    style: {
      backgroundColor: "rgb(121, 159, 12)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(121, 159, 12) 0%, rgb(172, 187, 120) 100%)"
    }
  },
  {
    style: {
      backgroundColor: "rgb(0, 70, 127)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(0, 70, 127) 0%, rgb(165, 204, 130) 100%)"
    }
  },
  {
    style: {
      backgroundColor: "rgb(65, 77, 11)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(65, 77, 11) 0%, rgb(114, 122, 23) 100%)"
    }
  },
  {
    style: {
      backgroundColor: "rgb(28, 216, 210)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(28, 216, 210) 0%, rgb(147, 237, 199) 100%)"
    }
  },
  {
    style: {
      backgroundColor: "rgb(61, 126, 170)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(61, 126, 170) 0%, rgb(255, 228, 122) 100%)"
    }
  },
  {
    style: {
      backgroundColor: "rgb(218, 226, 248)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(218, 226, 248) 0%, rgb(214, 164, 164) 100%)"
    }
  },
  {
    style: {
      backgroundColor: "rgb(252, 53, 76)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(252, 53, 76) 0%, rgb(10, 191, 188) 100%)"
    }
  },
  {
    style: {
      backgroundColor: "rgb(33, 147, 176)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(33, 147, 176) 0%, rgb(109, 213, 237) 100%)"
    }
  },
  {
    style: {
      backgroundColor: "rgb(18, 194, 233)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(18, 194, 233) 0%, rgb(196, 113, 237) 100%)"
    }
  },
  {
    style: {
      backgroundColor: "rgb(84, 51, 255)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(84, 51, 255) 0%, rgb(165, 254, 203) 100%)"
    }
  },
  {
    style: {
      backgroundColor: "rgb(20, 136, 204)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(20, 136, 204) 0%, rgb(43, 50, 178) 100%)"
    }
  },
  {
    style: {
      backgroundColor: "rgb(185, 43, 39)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(185, 43, 39) 0%, rgb(21, 101, 192) 100%)"
    }
  },
  {
    style: {
      backgroundColor: "rgb(142, 45, 226)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(142, 45, 226) 0%, rgb(74, 0, 224) 100%)"
    }
  },
  {
    style: {
      backgroundColor: "rgb(151, 150, 240)",
      backgroundImage:
        "-webkit-linear-gradient(45deg, rgb(151, 150, 240) 0%, rgb(251, 199, 212) 100%)"
    }
  }
]);
</script>
