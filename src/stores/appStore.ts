import { defineStore } from "pinia";

export const useAppStore = defineStore({
  id: "appStore",
  state: () => ({
    loading: false,  // Tracks the loading state of image upload
    selectedFile: null as File | null  // Tracks the selected file after upload
  }),
  getters: {
    isImageUploaded: (state) => !!state.selectedFile,  // Getter to check if the image is uploaded
    imageUrl: (state) => {
      // If there's a selected file, create a URL for it
      return state.selectedFile ? URL.createObjectURL(state.selectedFile) : null;
    }
  },
  actions: {
    setLoading(value: boolean) {
      this.loading = value;
    },
    setSelectedFile(file: File | null) {
      this.selectedFile = file;
    },
    reset() {
      this.loading = false;
      this.selectedFile = null;  // Reset selectedFile, which in turn resets imageUrl
    }
  }
});
