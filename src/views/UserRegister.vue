<template>
  <div class="flex flex-col items-center justify-center h-screen">
      <div class="flex items-center justify-center p-5 ">
         <h1 class="text-3xl font-semibold" style="color:#312A21;">Register MRR</h1>
      </div>
    <div class="flex flex-col space-y-8 item-center w-72">
       <InputBox msg="email@kmutt.ac.th"></InputBox>
       <InputBox msg="Password"></InputBox>
       <InputBox msg="Confirm password"></InputBox>
       <InputBox msg="Phone number"></InputBox>
     
    </div>
     <div class="flex flex-row w-64 mt-5 space-x-16 item-center">
       <router-link to="/UserLogin"><ButtonCom msg = "Register" class="p-3 "></ButtonCom></router-link>
       <router-link to="/UserLogin"><ButtonCom msg = "Cancel" class="p-3 text-white " style = "background-color: #F25F54"></ButtonCom></router-link>
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