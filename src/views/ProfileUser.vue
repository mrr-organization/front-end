<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div class="flex flex-col justify-around w-full mt-14 sm:mb-16 item-center">
      <img src="@/assets/Profile.svg" class="h-36 sm:h-40 " />
      <div class="flex flex-col mt-3 text-2xl font-semibold sm:mt-5">
        Example
      </div>
    </div>
    <div
      class="flex flex-col w-full max-w-xl h-auto  mx-auto text-xl gap-3 font-semibold bg-white p-3  p16 rounded-2xl">
      <div class="inline-flex flex-row flex-wrap gap-3 justify-between">
        <span>ชื่อ - นามสกุล: xxxxxxxxxxxx xxxxx</span>
        <span>อีเมล์: xxxxxxxxxxxxxx</span>
      </div>
      <div class="inline-flex flex-row flex-wrap gap-3 justify-between">
        <span>รหัสสมาชิก: xxxxxxxxxx</span>
        <span>เบอร์ติดต่อ: xxxxxxxxxxxxxx</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
span {
  @apply whitespace-nowrap
}

@media (min-width: 768px) {
  .p16 {
    padding: 24px
      /* 64px */
       !important;
  }
}
</style>