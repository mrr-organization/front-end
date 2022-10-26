<template>
    <div class="flex justify-center space-x-20 space-y-6 mt-52 ">
        <div class=" sm:m-16 sm:space-x-5 sm:w-[450px]  sm:space-y-6 sm:text-left  ">
            <h1 class="font-bold sm:text-4xl ">ความเป็นมา MRR</h1>
            <p class="text-lg font-semibold" >MOD Rong Rean is for being a medium for agencies.
            of King Mongkut's University of Technology, Thonburi responsible learned about the problems that people in the area of King Mongkut's University of Technology met To reduce the accident rate for people in the area of King Mongkut's University of Technology safe. </p>
        </div>
        <div class="  w-[350px] flex flex-col  ">
        <router-link to="/login-service">
            <ButtonCom msg="เข้าสู่ระบบ" class="w-56 p-4 m-10 font-mono text-xl" 
            style="background-color: #faf0ef; color: #312a21">
            </ButtonCom>
        </router-link>
        <router-link to="/dashboard">
            <ButtonCom msg="แดชบอร์ด" class="w-56 p-4 m-10 font-mono text-xl" 
            style="background-color: #faf0ef; color: #312a21">
            </ButtonCom>
        </router-link>
        <router-link to="/about">
            <ButtonCom msg="เกี่ยวกับ" class="w-56 p-4 m-10 font-mono text-xl" 
            style="background-color: #faf0ef; color: #312a21">
            </ButtonCom>
        </router-link>
        </div>
    </div>
</template>
<script>
import ButtonCom from "@/components/BasicButton.vue";
export default {
    components: { ButtonCom},
}
</script>