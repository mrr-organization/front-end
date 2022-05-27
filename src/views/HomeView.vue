<template>
  <div class="h-screen flex flex-col justify-center items-center">
    <div class="flex flex-row item-center m-16 justify-around w-full">
      <div
        class="
          bg-white
          rounded-full
          p-10
          h-96
          w-96
          flex
          items-center
          justify-center
        "
      >
        <router-link to="/userlogin"
          ><img src="@/assets/User.png" class="h-5/6 w-5/6"
        /></router-link>
      </div>
      <div
        class="
          bg-white
          rounded-full
          p-10
          h-96
          w-96
          flex
          items-center
          justify-center
        "
      >
        <router-link to="/adminlogin"
          ><img src="@/assets/Admin.png" class="h-5/6 w-5/6"
        /></router-link>
      </div>
    </div>
    <div class="flex flex-row item-center w-full justify-around">
      <router-link to="/userlogin"
        ><ButtonCom msg="Login User" class="p-5"></ButtonCom
      ></router-link>
      <router-link to="/adminlogin"
        ><ButtonCom msg="Login Admin" class="p-5"></ButtonCom
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
