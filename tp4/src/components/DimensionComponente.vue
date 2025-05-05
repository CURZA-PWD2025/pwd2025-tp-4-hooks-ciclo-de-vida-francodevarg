<template>
    <div>
      <h1>Controlar dimensiones</h1>
  
        <div>
          <label for="width">Ancho:</label>
          <input type="number" id="width" v-model.number="width" min="0" />
        </div>
        <div>
          <label for="height">Alto:</label>
          <input type="number" id="height" v-model.number="height" min="0" />
        </div>  
      <Dimension :width="width" :height="height" />
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import Dimension from './Dimension.vue';
  
  const width = ref(window.innerWidth - window.innerWidth * 0.2);
  const height = ref(window.innerHeight - window.innerHeight * 0.2);

  </script>
  
  