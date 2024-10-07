<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { PlanetResponse } from '../types/planet';
import { getPlanet } from '../services/planets';

const planets = ref<PlanetResponse>({
    count: 0,
    next: null,
    previous: null,
    results: []
});
const getData = async (url: string) => {
    const data = await getPlanet(url)
    planets.value = data;
}

onMounted(() => {
    getData("https://swapi.dev/api/planets/")
})

</script>

<template>
    <div>
        <div v-for="planet in planets.results">
            <h2>
                {{ planet.name }}
            </h2>
            <p>
                population : {{ planet.population }}
            </p>
        </div>
        <button :disabled="!planets.previous" @click="planets.previous && getData(planets.previous!)">
            previous
        </button>
        <button :disabled="!planets.next" @click="planets.next && getData(planets.next)">
            next
        </button>
    </div>
</template>