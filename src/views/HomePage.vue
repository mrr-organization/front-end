<template>
    <!-- <div class="flex justify-center mt-10">
        <img src="../assets/MRRBG.png" class="w-96 h-96" />
    </div> -->
    <div class="flex flex-col justify-center space-y-5 sm:space-x-20 sm:flex-row sm:mt-2 ">
        <div class=" sm:m-16 sm:w-[550px] sm:space-y-6 sm:text-left  ">
            <img src="../assets/MRRBG.png" class="mt-6 sm:h-64 sm:w-96 h-72 w-96 sm:mt-32" />
            <h1 class="mb-5 text-3xl font-bold sm:text-4xl">ความเป็นมา MRR</h1>
            <p class="font-semibold sm:text-lg" >MOD Rong Rean is for being a medium for agencies.
            of King Mongkut's University of Technology, Thonburi responsible learned about the problems that people in the area of King Mongkut's University of Technology met To reduce the accident rate for people in the area of King Mongkut's University of Technology safe. </p>
        </div>
        <div class="  sm:w-[350px] flex flex-col ml-5  ">
        <router-link to="/login-service"  class="sm:mt-64">
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