import { defineStore } from "pinia";
import * as bodyPix from '@tensorflow-models/body-pix';
import '@tensorflow/tfjs';

export const useAppStore = defineStore({
  id: "appStore",
  state: () => ({
    loading: false,  // Tracks the loading state of image processing
    selectedFile: null as File | null,  // Tracks the selected file after upload
    processedImageUrl: null as string | null,  // URL for the image with the background removed
    thickness: 1,
    offset: 1,
    zoom: 100,
    offsetLeft : 0,
    rotation:0,
    offsetTop: 0,
    opacity: 1,
    text: '',
    textOffset: 0,
    textRotation: 0,
    fontSize: 16,
    letterSpacing: 1,
    textColor: '#000000',
    startColor: '#000',
     endColor: '#000'
    
  }),
  getters: {
    isImageUploaded: (state) => !!state.selectedFile,
    imageUrl: (state) => {
      return state.selectedFile ? URL.createObjectURL(state.selectedFile) : null;
    },
  },
  actions: {
    setLoading(value: boolean) {
      this.loading = value;
    },
    async setSelectedFile(file: File | null) {
      this.selectedFile = file;
      if (file) {
        await this.removeBackground();  // Automatically remove the background when a file is selected
      }
    },
    reset() {
      this.loading = false;
      this.selectedFile = null;
      this.processedImageUrl = null;  // Reset processedImageUrl
      this.zoom = 100;
      this.offsetTop = 0;
      this.offsetLeft = 0;
      this.rotation = 0;
      this.text = '';
      this.textOffset = 0;
      this.textRotation = 0;
      this.fontSize = 16;
      this.letterSpacing = 1;
      this.textColor = '#000000';
      this.opacity = 0;
    },
    async removeBackground() {
      if (!this.selectedFile) return;

      this.setLoading(true);
      const img = new Image();
      img.src = this.imageUrl as string;

      img.onload = async () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d') as any;
        ctx?.drawImage(img, 0, 0);

        // Load the BodyPix model
        const net = await bodyPix.load();

        // Perform person segmentation
        const segmentation = await net.segmentPerson(canvas, {
          internalResolution: 'medium',
          segmentationThreshold: 0.7,
        });

        // Create a mask where the background is transparent
        const maskBackground = bodyPix.toMask(segmentation);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.putImageData(maskBackground, 0, 0);
        ctx.globalCompositeOperation = 'destination-over';
        ctx.drawImage(img, 0, 0);

        this.processedImageUrl = canvas.toDataURL();  // Store the processed image URL
        this.setLoading(false);
      };
    },
  },
});
