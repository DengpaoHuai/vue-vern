<script lang="ts" setup>
import { reactive } from 'vue';
import { createButter } from '../services/butter';
import { useRouter } from 'vue-router';
import useButterStore from '../store/useButterStore';

const router = useRouter()
const { addButter } = useButterStore()

const form = reactive({
    name: '',
    isSalted: false,
    origin: '',
    price: 0,
})

const submit = () => {
    console.log(form)
    addButter(form).then(() => {
        router.push('/butter')
    })
}

</script>


<template>
    <div>
        <h1>Butter Form</h1>

        <form @submit.prevent="submit">
            <div>
                <label for="name">Name</label>
                <input type="text" id="name" name="name" v-model="form.name">
            </div>
            <div>
                <label for="isSalted">Is Salted</label>
                <input type="checkbox" id="isSalted" v-model="form.isSalted">
            </div>
            <div>
                <label for="origin">Origin</label>
                <input type="text" id="origin" v-model="form.origin">
            </div>
            <div>
                <label for="price">Price</label>
                <input type="number" id="price" v-model="form.price">
            </div>
            <button>
                Submit
            </button>
        </form>
    </div>

</template>