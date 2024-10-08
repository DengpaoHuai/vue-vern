import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
import { Butter } from "../types/butter";
import { createButter, getButters } from "../services/butter";

const useButterStore = defineStore("butter", () => {
  const butters = ref<Butter[]>([]);

  onMounted(() => {
    getButters().then((data: Butter[]) => {
      butters.value = data;
    });
  });
  const addButter = async (butter: Omit<Butter, "_id">) => {
    const newButter = await createButter(butter);
    butters.value.push(newButter);
  };

  return {
    butters,
    addButter,
  };
});

export default useButterStore;
