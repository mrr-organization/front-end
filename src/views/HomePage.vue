<template>
    <div class="flex flex-col justify-center space-y-5 sm:space-x-20 sm:flex-row ">
        <div class=" sm:m-14 sm:w-[550px] sm:space-y-6 sm:text-left  ">
            <img src="../assets/MRRBG.png" class="mt-6 sm:h-96 sm:w-[90%] h-72 w-96 " />
            <h1 class="mb-5 text-3xl font-bold text-black sm:text-4xl">ความเป็นมา MRR</h1>
            <p class="font-semibold text-[#312a21] sm:text-lg" >ตัวอย่างเว็บแอปประเภทร้องเรียนปัญหาที่พบเจอภายในมหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี ให้ทราบถึงปัญหาเพื่อให้หน่วยงานที่เกี่ยวข้องเข้ามาตรวจสอบข้อมูลและเตรียมพร้อมในการแก้ไขปัญหาให้กลับมาเรียบร้อย. </p>
        </div>
        <div class=" sm:w-[350px] flex flex-col ml-5 justify-end pb-44 ">
        <router-link to="/login-service">
            <ButtonCom msg="เข้าสู่ระบบ" class="px-2 py-2 font-mono text-xl sm:w-56 sm:p-4 hover:!bg-[#FFFFFF] transition-all !bg-[#faf0ef] !text-[#312a21]" >
            </ButtonCom>
        </router-link>
        <router-link to="/dashboard">
            <ButtonCom msg="แดชบอร์ด" class="px-2 py-2 m-5 font-mono text-xl sm:w-56 sm:p-4 hover:!bg-[#FFFFFF] transition-all !bg-[#faf0ef] !text-[#312a21]" >
            </ButtonCom>
        </router-link>
        <router-link to="/about">
            <ButtonCom msg="เกี่ยวกับ" class="px-4 py-2 font-mono text-xl  sm:w-56 sm:p-4 hover:!bg-[#FFFFFF] transition-all !bg-[#faf0ef] !text-[#312a21]" >
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