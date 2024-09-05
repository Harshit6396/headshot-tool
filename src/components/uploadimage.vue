<script setup lang="ts">
import { useAppStore } from "../stores/appStore";

const appStore = useAppStore();

function onFileChange(event: Event) {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0] || null;

  if (file) {
    appStore.setLoading(true);
    appStore.setSelectedFile(file);

    // Simulate an upload process (replace with actual upload logic)
    setTimeout(() => {
      appStore.setLoading(false);
      console.log("File upload completed");
    }, 2000);
  } else {
    appStore.setLoading(false);
  }
}

</script>

<template>
  <div id="editor" class="max-w-5xl mx-auto relative z-10">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        class="flex items-start content-start justify-start h-full overflow-hidden bg-white rounded-lg shadow card h-full shadow-2xl col-span-2"
        data-v-1392f61c=""
      >
        <div class="w-full h-full">
          <div
            class="p-4 h-full flex justify-between flex-col"
            data-v-1392f61c=""
          >
            <div class="h-full relative" data-v-1392f61c="">
              <div
                class="gradient-bg bg-black opacity-5 absolute z-10 w-full h-full rounded-md"
              ></div>
              <div
                class="relative z-20 flex items-center flex-col justify-center h-full p-16"
              >
                <div class="space-y-1 mb-6 text-center">
                  <h5 class="font-bold text-2xl">
                    Upload a photo to get started
                  </h5>
                </div>
                <div>
                  <label for="fileextra">
                    <div
                      class="cursor-pointer flex content-center items-center justify-center text-center px-6 py-3 border border-transparent text-base font-bold rounded-md shadow-sm text-black gradient-bg hover:bg-red-900 hover:border-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 text-black mr-1.5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v12m6-6H6"
                        ></path>
                      </svg>
                      <span>Click here to add your image</span>
                    </div>
                  </label>
                  <input
                    id="fileextra"
                    name="fileextra"
                    type="file"
                    accept="image/png, image/jpeg, image/heic, image/heif, image/jpg"
                    class="hidden"
                    @change="onFileChange"
                  />
                </div>
                <div
                  class="flex flex-col items-center justify-center space-x-2 mt-4"
                >
                  <p class="py-4 text-xs text-gray-600">
                    Or try an example photo:
                  </p>
                  <div class="flex items-center justify-center space-x-2 ml-2">
                    <button>
                      <img
                        src="https://storage.googleapis.com/postcrafts-public-content/headshotpro/images/try-avatar-1.png"
                        class="w-10 border border-gray-300 h-10 rounded-full"
                      />
                    </button>
                    <button>
                      <img
                        src="https://storage.googleapis.com/postcrafts-public-content/headshotpro/images/try-avatar-2.png"
                        class="w-10 border border-gray-300 h-10 rounded-full"
                      />
                    </button>
                  </div>
                </div>
                <div
                  class="flex items-center text-center md:text-left justify-center w-full mt-6"
                >
                  <svg
                    fill="none"
                    stroke-width="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    class="hidden md:flex w-4 h-4 text-green-500 mr-1.5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                    ></path>
                  </svg>
                  <span
                    >Your privacy is
                    <strong class="text-green-500">protected</strong>. All image
                    processings are done on your local browser.</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="v-portal" style="display: none" data-v-1392f61c=""></div>
        </div>
      </div>
      <!---->
    </div>
  </div>
</template>
