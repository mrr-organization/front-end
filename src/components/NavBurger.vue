<template>
  <div>
    <div v-if="isOpenMenu" class="fixed bottom-0 bg-white w-[350px] top-14">
      <div class="absolute p-4 border-t-4 border-black space-y-7 inset-x-10">
        <router-link to="/profile" class="flex text-xl font-semibold text-black hover:text-black hover:no-underline ">
          <img src="../assets/Usernav.svg" /> <span class="self-center ml-4"> บัญชี </span>
        </router-link>
        <button  class="flex text-xl font-semibold text-black hover:text-black hover:no-underline ">
          <img src="../assets/ring.svg" /> <span class="self-center ml-4"> การแจ้งเตือน </span>  
        </button>
        <!-- <router-link to="/notirepair" class="flex text-xl font-semibold text-black hover:text-black hover:no-underline ">
          <img src="../assets/ring.svg" /> <span class="self-center ml-4"> การแจ้งเตือน </span>  
        </router-link> -->
        <router-link to="/dashboard" class="flex text-xl font-semibold text-black hover:text-black hover:no-underline ">
          <img src="../assets/dashboard.svg" /> <span class="self-center ml-4"> แดชบอร์ด </span>  
        </router-link>
        <router-link to="/notirepair" class="flex text-xl font-semibold text-black hover:text-black hover:no-underline ">
          <img src="../assets/notirepair.svg" /> <span class="self-center ml-4"> แจ้งซ่อม </span>  
        </router-link>
        <router-link to="/trackMrr" class="flex text-xl font-semibold text-black hover:text-black hover:no-underline ">
          <img src="../assets/statusrepair.svg" /> <span class="self-center ml-4"> สถานะแจ้งซ่อม </span>  
        </router-link>
      </div>
    </div>
    <nav class="fixed top-0 left-0 right-0 p-1 bg-white">
      <div class="w-full h-full">
        <div
          v-if="!isOpenMenu"
          @click="
            () => {
              isOpenMenu = true;
            }
          "
          class="absolute z-50 ml-6 cursor-pointer w-9 top-4"
        >
          <img src="../assets/HamburgerMenu.svg" />
        </div>
        <div
          v-else
          @click="
            () => {
              isOpenMenu = false;
            }
          "
          class="absolute z-50 flex w-10 ml-6 cursor-pointer top-4"
        >
          <img src="../assets/Closebar.svg" />
          <span class="ml-2 text-xl font-semibold">CLOSE</span>
        </div>

        <div class="relative flex flex-row justify-center w-full">
          <router-link
            to="/"
            class="self-center p-2 text-2xl font-semibold uppercase rounded-lg"
            style="color: #384bb1"
            >MRR</router-link
          >
          <router-link
            to="/about"
            class="absolute self-end p-1 my-1 text-base font-semibold rounded sm:p-2 right-4"
            style="color: #ffffff; background-color: #384bb1"
            href="#"
            v-if="!isLogin"
            >About Me</router-link
          >
          <router-link
            to="/about"
            class="absolute self-end p-2 my-1 text-base font-semibold rounded right-4"
            style="color: #384bb1; background-color: ##faf0ef"
            href="#"
            v-else
            >ออกจากระบบ</router-link
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false,
      isOpenMenu: false,
    };
  },
};
</script>

<style>
</style>