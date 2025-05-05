<template>
  <div>
    <h2>Dimensiones del componente</h2>
    <p>Ancho: {{ width }} px | Alto: {{ height }} px</p>
    <div
      :style="{
        width: width + 'px',
        height: height + 'px',
        border: '1px solid black',
        backgroundColor: 'lightblue'
      }"
      class="dimension-box"
    >
      <p>Este es el área del componente</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  width: number;
  height: number;
}>();
</script>

  