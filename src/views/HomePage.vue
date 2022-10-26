<template>
    <div class="mt-20 flex justify-center">
        <div class=" bg-white w-[350px] h-96 top-12 border-t-2 m-8">
            <h1>Title</h1>
            <p>content</p>
        </div>
        <div class=" bg-white w-[350px] top-12 border-t-2 flex flex-col  m-8">
        <router-link to="/login-service">
            <ButtonCom msg="เข้าสู่ระบบ" class="w-56 p-3 m-10" 
            style="background-color: #faf0ef; color: #312a21">
            </ButtonCom>
        </router-link>
        <router-link to="/dashboard">
            <ButtonCom msg="แดชบอร์ด" class="w-56 p-3  m-10" 
            style="background-color: #faf0ef; color: #312a21">
            </ButtonCom>
        </router-link>
        <router-link to="/about">
            <ButtonCom msg="เกี่ยวกับ" class="w-56 p-3  m-10" 
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