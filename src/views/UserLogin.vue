<template>
  <div class=" min-h-screen flex items-center justify-center">
      <div class=" w-full h-96 flex flex-row mx-10 ">
          <div class=" w-1/2 flex flex-col items-center justify-center border-r-2 border-black ">
              <div class="font-bold text-2xl" style="color:#312A21;">MRR</div>
             <div class=" mt-10 flex flex-col item-center space-y-5 w-60">
                    <InputBox msg="Email"></InputBox>
                    <InputBox msg="Password"></InputBox>
                    <ButtonCom msg = "Sign In" class="p-3 "></ButtonCom>
    </div>
          </div>
          <div class=" w-1/2 flex flex-col items-center justify-center"> 
              <div class=" mt-10 flex flex-col item-center space-y-5 w-60">
                    <ButtonCom msg = "Sigh in with Google" class="p-3 "></ButtonCom>
                    <div class="font-semibold w-full flex items-center justify-center " style="color:#312A21;"><span class="w-4/5 h-0.5 bg-black mx-2"/> 
                     <div class="px-2"> or </div>
                    <span class="w-4/5 h-0.5 bg-black mx-2 "/></div>
                    <ButtonCom msg = "Register" class="p-3 "></ButtonCom>
    </div>
              </div>
          
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