<script lang="ts" setup>
import { ref, onMounted } from 'vue';

type Planet = {
    name: string;
    population: string;
    diameter: string;
    climate: string;
    terrain: string;
    gravity: string;
    rotation_period: string;
    orbital_period: string;
    surface_water: string;
    residents: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;

}

type PlanetResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Planet[];
}

const planets = ref<Array<Planet>>([]);

onMounted(() => {
    fetch("https://swapi.dev/api/planets/")
        .then((response) => response.json())
        .then((data: PlanetResponse) => {
            console.log(data);
            planets.value = data.results;
        });
})

</script>

<template>

    <div>
        <div v-for="planet in planets">
            <h2>
                {{ planet.name }}
            </h2>
            <p>
                population : {{ planet.population }}
            </p>
        </div>
    </div>

</template>