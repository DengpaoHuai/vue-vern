<script setup lang="ts">
import CardComponent from './components/CardComponent.vue';

</script>

<template>
  <CardComponent title="title : chose" footer="test">
    <p>tout et n'importe quoi</p>
  </CardComponent>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
