<script lang="ts" setup>
defineProps<{
    title: string,
    footer: string
}>()
//defineProps(['title'])
/*defineProps({
    title: {
        type: String,
        required: true
    }
})*/
</script>


<template>

    <div class="card">
        <div class="title_container">
            <h2>

                {{ title }}
            </h2>
        </div>
        <div class="content_container">
            <slot></slot>
        </div>
        <footer>
            <p> {{ footer }}</p>
        </footer>
    </div>

</template>