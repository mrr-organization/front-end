<template>
  <button
    class="font-bold rounded-lg"
    style="color: #ffffff; background-color: #384bb1"
  >
    {{ msg }}
  </button>
</template>

<script>
export default {
  props: {
    msg: String,
  },
};
</script>

<style>
</style>