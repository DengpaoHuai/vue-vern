<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { deleteButter, getButters } from '../services/butter';
import useButterStore from '../store/useButterStore';

const { butters } = storeToRefs(useButterStore())


/*
const deleteItem = (id: string) => {
    deleteButter(id).then(() => {
        butters.value = butters.value.filter(butter => butter._id !== id)
    })
}*/

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
            <button @click="deleteItem(butter._id)">
                delete
            </button>
        </div>
    </div>

</template>