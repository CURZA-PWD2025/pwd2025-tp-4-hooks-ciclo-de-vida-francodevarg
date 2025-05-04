<template>
  <div>
    <h2>Lista de Tareas</h2>
    <input v-model="nuevaTarea" placeholder="Agregar tarea" @keyup.enter="agregarTarea" />
    <ul>
      <li
        v-for="(tarea, index) in tareas"
        :key="index"
      >
        {{ tarea }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, onUpdated } from 'vue';

const tareas = ref<string[]>(['Estudiar', 'Comprar comida', 'Hacer ejercicio']);
const nuevaTarea = ref('');

const agregarTarea = () => {
  if (nuevaTarea.value.trim()) {
    tareas.value.push(nuevaTarea.value.trim());
    nuevaTarea.value = '';
  }
};

onUpdated(() => {
  console.log('Lista modificada');
});
</script>
