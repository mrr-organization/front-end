<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div class="flex flex-row justify-around w-full m-16 item-center">
      <div class="flex items-center justify-center h-96 w-96">
        <router-link to="/notirepair"
          ><img src="@/assets/repairnoti.png" class="w-5/6 ml-4 h-5/6"
        /></router-link>
      </div>
      <div class="flex items-center justify-center h-96 w-96">
        <router-link to="/trackMrr"
          ><img src="@/assets/trackstatus.png" class="w-5/6 ml-3 h-5/6"
        /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>