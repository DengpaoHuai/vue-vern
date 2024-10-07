import { onMounted, Ref, ref } from "vue";

const useFetch = <T>(url: string) => {
  const data = ref<null | T>(null);
  const loading = ref(false);
  const error = ref(null);

  onMounted(() => {
    loading.value = true;
    fetch(url)
      .then((response) => response.json())
      .then((result: T) => {
        data.value = result;
      })
      .catch((err) => (error.value = err))
      .finally(() => {
        loading.value = false;
      });
  });

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
