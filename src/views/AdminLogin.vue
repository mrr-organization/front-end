<template>
<div class=" h-screen  flex flex-col justify-center items-center">
  <div class="bg-white rounded-full p-10 h-96 w-96 flex items-center justify-center">
    <img src="@/assets/Admin.png" class="h-5/6 w-5/6 ">
    </div>
    <div class=" flex flex-row item-center w-full justify-around mt-10 ">
        <h1 class="font-semibold text-3xl" style="color:#312A21;">Admin</h1>
    </div>
    <div class=" mt-10 flex flex-col item-center space-y-4 w-72">
       <InputBox msg="Email"></InputBox>
       <InputBox msg="Password"></InputBox>
       <ButtonCom msg = "Sign In" class="p-3 "></ButtonCom>
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