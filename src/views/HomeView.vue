<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div class="flex flex-row justify-around w-full m-16 item-center">
      <div
        class="flex items-center justify-center p-10 bg-white rounded-full h-96 w-96 "
      >
        <router-link to="/userlogin"
          ><img src="@/assets/User.png" class="w-5/6 h-5/6"
        /></router-link>
      </div>
      <div
        class="flex items-center justify-center p-10 bg-white rounded-full h-96 w-96"
      >
        <router-link to="/adminlogin"
          ><img src="@/assets/Admin.png" class="w-5/6 ml-6 h-5/6"
        /></router-link>
      </div>
    </div>
    <div class="flex flex-row justify-around w-full item-center">
      <router-link to="/userlogin"
        ><ButtonCom msg="Login User" class="p-4"></ButtonCom
      ></router-link>
      <router-link to="/adminlogin"
        ><ButtonCom msg="Login Admin" class="p-4"></ButtonCom
      ></router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ButtonCom from "@/components/ButtonCom.vue";
export default {
  name: "HomeView",
  components: {
    ButtonCom,
  },
};
</script>
