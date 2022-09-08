<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div class="flex flex-row justify-around w-full m-16 space-x-3 item-center">
      <div
        class="flex items-center justify-center p-5 bg-white rounded-full h-44 w-96 sm:h-96 sm:w-96"
      >
        <router-link to="/userlogin"
          ><img src="@/assets/User.png" class="w-5/6 "
        /></router-link>
      </div>
      <div
        class="flex items-center justify-center p-5 bg-white rounded-full h-44 w-96 sm:h-96 sm:w-96"
      >
        <router-link to="/adminlogin"
          ><img src="@/assets/Admin.png" class="w-full sm:w-5/6 sm:ml-6 "
        /></router-link>
      </div>
    </div>
    <div class="flex flex-row justify-around w-full ml-4 font-bold item-center sm:p-4">
      <router-link to="/userlogin" 
        ><ButtonCom msg="ผู้ใช้งาน" class="p-2 "></ButtonCom
      ></router-link>
      <router-link to="/adminlogin"
        ><ButtonCom msg="หน่วยงาน / ผู้ดูแลระบบ" class="p-2 mb-3 "></ButtonCom
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
