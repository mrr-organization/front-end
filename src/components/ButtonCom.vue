<template>
  <button
    class="font-bold rounded-lg"
    style="color: #312a21; background-color: #fef1e6"
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