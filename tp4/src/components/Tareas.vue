<template>
  <div class="tareas-container">
    <h2>Lista de Tareas</h2>

    <div class="input-group">
      <input
        v-model="nuevaTarea"
        placeholder="Agregar tarea"
        @keyup.enter="agregarTarea"
      />
      <button @click="agregarTarea">+</button>
    </div>

    <ul class="tareas-list">
      <li v-for="(tarea, index) in tareas" :key="index">
        {{ tarea }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, onBeforeUpdate, onUpdated } from 'vue';

const tareas = ref<string[]>(['Estudiar', 'Leer']);
const nuevaTarea = ref('');

const agregarTarea = () => {
  if (nuevaTarea.value.trim()) {
    tareas.value.push(nuevaTarea.value.trim());
    nuevaTarea.value = '';
  }
};

onBeforeUpdate(() => {
  console.log('Lista aún no modificada');
});

onUpdated(() => {
  console.log('Lista modificada');
});
</script>

<style scoped>
.tareas-container {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.input-group {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.input-group input {
  flex: 1;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.input-group button {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.input-group button:hover {
  background-color: #0056b3;
}

.tareas-list {
  list-style: none;
  padding: 0;
}

.tareas-list li {
  padding: 10px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  margin-bottom: 8px;
  border-radius: 4px;
}
</style>
