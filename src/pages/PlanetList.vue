<script lang="ts" setup>
import useFetch from '../composables/useFetch';
import { PlanetResponse } from '../types/planet';
const { data, loading, error } = useFetch<PlanetResponse>('https://swapi.dev/api/planets')

</script>

<template>
    <div>
        <div v-if="loading">chargement...</div>
        <div v-for="planet in data?.results">
            <h2>
                {{ planet.name }}
            </h2>
            <p>
                population : {{ planet.population }}
            </p>
        </div>
    </div>
</template>