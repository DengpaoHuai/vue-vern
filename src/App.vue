<script setup lang="ts">
import { reactive, ref } from 'vue';
import CardComponent from './components/CardComponent.vue';
import PlanetList from './pages/PlanetList.vue';


const counter = ref(0)
const counter2 = reactive({ counter: 0 });

const increment = (e: MouseEvent) => {
  counter.value++;
  console.log(counter);
};

const increment2 = () => {
  counter2.counter++;
  console.log(counter2);
};

</script>

<template>
  <PlanetList></PlanetList>
  <CardComponent title="title : chose" footer="test">
    <p>tout et n'importe quoi</p>
  </CardComponent>
  <button @click="increment">
    {{ counter }}
  </button>
  <button @click="increment2">
    {{ counter2.counter }}
  </button>
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
