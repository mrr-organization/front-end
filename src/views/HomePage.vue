<template>
    <div class="flex flex-col justify-center mt-32 space-y-6 sm:space-x-20 sm:flex-row sm:mt-52 ">
        <div class=" sm:m-16 sm:space-x-5 sm:w-[550px] space-y-6  sm:space-y-6 sm:text-left  ">
            <h1 class="text-3xl font-bold sm:text-4xl ">ความเป็นมา MRR</h1>
            <p class="font-semibold sm:text-lg" >MOD Rong Rean is for being a medium for agencies.
            of King Mongkut's University of Technology, Thonburi responsible learned about the problems that people in the area of King Mongkut's University of Technology met To reduce the accident rate for people in the area of King Mongkut's University of Technology safe. </p>
        </div>
        <div class="  sm:w-[350px] flex flex-col ml-5 ">
        <router-link to="/login-service">
            <ButtonCom msg="เข้าสู่ระบบ" class="px-2 py-2 font-mono text-xl sm:m-10 sm:w-56 sm:p-4" 
            style="background-color: #faf0ef; color: #312a21">
            </ButtonCom>
        </router-link>
        <router-link to="/dashboard">
            <ButtonCom msg="แดชบอร์ด" class="px-2 py-2 m-5 font-mono text-xl sm:m-10 sm:w-56 sm:p-4" 
            style="background-color: #faf0ef; color: #312a21">
            </ButtonCom>
        </router-link>
        <router-link to="/about">
            <ButtonCom msg="เกี่ยวกับ" class="px-4 py-2 font-mono text-xl sm:m-10 sm:w-56 sm:p-4" 
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