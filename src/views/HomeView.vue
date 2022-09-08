<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div class="flex flex-row justify-around w-full item-center gap-y-5 flex-wrap">
      <div class="flex flex-col gap-y-4">
        <div class="flex items-center justify-center p-3 sm:p-5 bg-white rounded-full h-36 w-36 lg:w-96 md:h-96 md:w-96">
          <router-link to="/userlogin"><img src="@/assets/User.png" class="w-5/6 h-32 md:h-auto object-contain" /></router-link>
        </div>
        <router-link to="/userlogin">
          <ButtonCom msg="ผู้ใช้งาน" class="p-2 "></ButtonCom>
        </router-link>
      </div>
      <div class="flex flex-col gap-y-4 ">
        <div class="flex items-center justify-center p-3 sm:p-5 bg-white rounded-full h-36 w-36 lg:w-96 md:h-96 md:w-96 self-center">
          <router-link to="/adminlogin"><img src="@/assets/Admin.png" class="w-full sm:w-5/6 sm:ml-6 h-32 md:h-auto object-contain" /></router-link>
        </div>
        <router-link to="/adminlogin">
          <ButtonCom msg="หน่วยงาน / ผู้ดูแลระบบ" class="p-2"></ButtonCom>
        </router-link>
      </div>
    </div>
    <!-- <div class="flex flex-row justify-around w-full ml-4 font-bold item-center sm:p-4">


    </div> -->
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
