<template>
    <div>
        <h2>Lista de elementos</h2>
        <ul v-if="items.length">
            <li v-for="(item, index) in items" :key="item.id">{{ item.nombre }}</li>
        </ul>
        <Loader v-else>
        </Loader>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import type { Profesion } from '../interfaces/Profesion';
import { profesiones } from '../data/profesiones';
import Loader from './Loader.vue';

const items = ref<Profesion[]>([]);

onMounted(() => {
    setTimeout(() => {
        items.value = profesiones;
    }, 3000);
});
</script>