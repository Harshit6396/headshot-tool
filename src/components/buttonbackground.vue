<template>
  <div class="p-4">
  

    <!-- Background Image Options -->
    <div class="mt-6 grid grid-cols-4 gap-4">
        <!-- First Image (Uploaded Image) -->
    <div v-if="isImageUploaded" class="relative w-full group rounded-full overflow-hidden bg-gray-700 aspect-1">
  <img v-bind:src="imageUrl || undefined" class="v-lazy-image v-lazy-image-loaded" alt="Uploaded Image" />
</div>

      <div
        v-for="(backgroundUrl, index) in backgrounds"
        :key="index"
        class="relative w-full group rounded-full overflow-hidden bg-gray-700 aspect-1 cursor-pointer"
        @click="selectBackground(index)"
      >
        <img
          :src="backgroundUrl"
          :srcset="`${backgroundUrl} 1x, ${backgroundUrl} 2x`"
          class="v-lazy-image v-lazy-image-loaded"
          alt="Background"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { useAppStore } from '../stores/appStore';

const appStore = useAppStore();

const isImageUploaded = computed(() => appStore.isImageUploaded);
const imageUrl = computed(() => appStore.imageUrl);

const backgrounds = ref<string[]>([]);

onMounted(async () => {
  const storedBackgrounds = localStorage.getItem('backgrounds');

  if (storedBackgrounds) {
    backgrounds.value = JSON.parse(storedBackgrounds);
  } else {
    const pngUrls = generateImageUrls('png', 100);
    const jpegUrls = generateImageUrls('jpeg', 100);

    const allUrls = [...pngUrls, ...jpegUrls];
    const validBackgrounds = await validateImageUrls(allUrls);

    backgrounds.value = validBackgrounds;
    localStorage.setItem('backgrounds', JSON.stringify(backgrounds.value));
  }
});

function generateImageUrls(extension: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) =>
    `https://storage.googleapis.com/postcrafts-public-content/headshotpro/images/backgrounds/${extension}/${i + 1}.${extension}`
  );
}

async function validateImageUrls(urls: string[]): Promise<string[]> {
  const validationResults = await Promise.all(
    urls.map(async (url) => {
      const exists = await imageExists(url);
      return exists ? url : null;
    })
  );
  return validationResults.filter((url) => url !== null) as string[];
}

async function imageExists(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
}

function selectBackground(index: number) {
  const selectedUrl = backgrounds.value[index];
  appStore.selectedBackgroundUrl = selectedUrl; // Update the store with the selected background URL
}
</script>
