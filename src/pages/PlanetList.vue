<script lang="ts" setup>
import { useRouter } from 'vue-router';
import useFetch from '../composables/useFetch';
import { PlanetResponse } from '../types/planet';
import { onMounted, onUnmounted } from 'vue';
const { data, loading } = useFetch<PlanetResponse>('https://swapi.dev/api/planets')

const router = useRouter()

const scrollListener = (e: Event) => {
    console.log(e)
}


onMounted(() => {
    document.addEventListener('scroll', scrollListener)
})

onUnmounted(() => {
    document.removeEventListener('scroll', scrollListener)
})

</script>

<template>
    <div style="height : 200vh;">
        <a href="/demo">demo</a>
        <RouterLink to="/demo">demo</RouterLink>
        <button @click="router.push('/demo')">demo</button>
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
    </div>

</template>