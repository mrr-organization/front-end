<template>
    <div class="mt-40">
        <Vue3Lottie class=""
    animationLink="https://assets2.lottiefiles.com/packages/lf20_suhe7qtm.json"
    :width="550"
  />
    </div>
    <button @click="redirectToHomePage" class="bg-green-500 p-2 rounded-xl text-white font-semibold">กลับไปหน้าแรก</button>
</template>
<script>
import { Vue3Lottie } from 'vue3-lottie'

export default {
  components: {
    Vue3Lottie,
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    user() {
      return this.$store.state.auth.user;
    },
  },
  created() {

  },
  methods: {
    redirectToHomePage () {
      if (this.loggedIn) {
      if (this.user.userType === "ADMIN") {
        this.$router.push("/admin-service");
      }
      if (this.user.userType === "MODERATOR") {
        this.$router.push("/moderator-service");
      }
      if (
        this.user.userType === "STUDENT" ||
        this.user.userType === "PERSONNEL"
      ) {
        this.$router.push("/user-service");
      }
    }else{
      this.$router.push("/");
    }
    }
  }
}
</script>
