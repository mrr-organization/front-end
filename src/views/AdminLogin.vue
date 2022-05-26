<template>
<div class="flex flex-col items-center justify-center h-screen ">
  <div class="flex items-center justify-center p-10 bg-white rounded-full h-96 w-96">
    <img src="@/assets/Admin.png" class="w-5/6 h-5/6 ">
    </div>
    <div class="flex flex-row justify-around w-full mt-10 item-center">
        <h1 class="text-3xl font-semibold" style="color:#312A21;">Admin</h1>
    </div>
    <div class="flex flex-col mt-10 space-y-4 item-center w-72">
       <InputBox msg="Email"></InputBox>
       <InputBox msg="Password"></InputBox>
<router-link to="/mainadmin"><ButtonCom msg = "Sign In" class="p-3 "></ButtonCom></router-link>
    </div>
    
</div>
</template>

<script>
import InputBox from "@/components/InputBox.vue"
import ButtonCom from "@/components/ButtonCom.vue"
export default {
    components :{ InputBox , ButtonCom}
}
</script>

<style>

</style>