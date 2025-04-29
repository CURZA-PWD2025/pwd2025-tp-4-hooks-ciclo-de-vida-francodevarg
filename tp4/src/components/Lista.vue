<template>
    <div>
        <h2>Lista de elementos</h2>
        <ul v-if="items.length">
            <li v-for="(item, index) in items" :key="item.id">{{ item.nombre }}</li>
        </ul>
        <p v-else>Cargando...</p>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import type { Profesion } from '../interfaces/Profesion';
import { profesiones } from '../data/profesiones';

const items = ref<Profesion[]>([]);

onMounted(() => {
    setTimeout(() => {
        items.value = profesiones;
    }, 3000);
});
</script>