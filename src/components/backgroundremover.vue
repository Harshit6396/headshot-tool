<template>
    <div>
      <h2>Background Remover</h2>
      <input type="file" @change="loadImage" accept="image/*" />
      <div v-if="imageLoaded">
        <canvas ref="canvas"></canvas>
      </div>
    </div>
  </template>
  
  <script>
  import * as bodyPix from '@tensorflow-models/body-pix';
  import '@tensorflow/tfjs';
  
  export default {
    data() {
      return {
        imageLoaded: false,
      };
    },
    methods: {
      async loadImage(event) {
        const file = event.target.files[0];
        if (file) {
          const img = new Image();
          img.src = URL.createObjectURL(file);
          img.onload = async () => {
            this.imageLoaded = true;
            const canvas = this.$refs.canvas;
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
  
            // Load the BodyPix model
            const net = await bodyPix.load();
  
            // Perform person segmentation
            const segmentation = await net.segmentPerson(canvas, {
              internalResolution: 'medium',
              segmentationThreshold: 0.7,
            });
  
            // Remove background
            const backgroundBlurAmount = 10;
            const edgeBlurAmount = 3;
            const flipHorizontal = false;
  
            bodyPix.drawBokehEffect(
              canvas,
              img,
              segmentation,
              backgroundBlurAmount,
              edgeBlurAmount,
              flipHorizontal
            );
          };
        }
      },
    },
  };
  </script>
  