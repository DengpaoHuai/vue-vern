<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { getButters } from '../services/butter';
import { Butter } from '../types/butter';




const butters = ref<Butter[]>([])

onMounted(() => {
    getButters().then((data: Butter[]) => {
        butters.value = data
    })
})

</script>


<template>
    <div>
        <h1>Butter List</h1>

        <div v-for="(butter, index) in butters" :key="butter._id">
            <h2>
                {{ butter.name.toLocaleUpperCase() }}
            </h2>
            <p>
                Origin : {{ butter.origin }}
            </p>
            <p>
                Price : {{ butter.price }}
            </p>
        </div>
    </div>

</template>