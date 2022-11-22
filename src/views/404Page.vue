<template>
    <div class="mt-40">
        <Vue3Lottie class=""
    animationLink="https://assets2.lottiefiles.com/packages/lf20_suhe7qtm.json"
    :width="550"
  />
    </div>
    <button @click="redirectToHomePage" class="bg-green-500 p-2 rounded-xl">Back to homepage</button>
</template>
<script>
import { Vue3Lottie } from 'vue3-lottie'

export default {
  components: {
    Vue3Lottie,
  },
  methods: {
    redirectToHomePage () {
        this.$router.push("/");
    }
  }
}
</script>
