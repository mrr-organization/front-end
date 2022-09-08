<template>
  <button
    @click="showAlert"
    class="font-bold rounded-lg "
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
  methods: {
    showAlert() {
      this.$emit('handleClick')
      console.log('ddd')
    }
  }
};
</script>

<style>
</style>