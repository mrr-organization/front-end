<template>
    <div class="mt-40">
        <Vue3Lottie class=""
    animationLink="https://assets1.lottiefiles.com/packages/lf20_x4fnw3zb.json"
    :width="550"
  />
    </div>
    <button @click="redirectToLogin" class="bg-green-500 p-2 rounded-xl text-white font-semibold">กลับไปหน้าล็อกอิน</button>
</template>

<script>
import { Vue3Lottie } from 'vue3-lottie'
import AuthService from "@/services/auth.service";

export default {
  components: {
    Vue3Lottie,
  },
  created() {
    this.verifyEmail();
  },
  methods: {
    redirectToLogin () {
        this.$router.push("/user-login");
    },
    verifyEmail () {
        console.log(this.$route.params.code);
        AuthService.verifyEmail(this.$route.params.code);
    }
  }
}
</script>