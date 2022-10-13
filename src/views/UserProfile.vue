<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div class="flex flex-col justify-around w-full mt-14 sm:mb-16 item-center">
      <img src="@/assets/Profile.svg" class="h-36 sm:h-40" />
      <div class="flex flex-col mt-3 text-2xl font-semibold sm:mt-5">
        {{ this.userDetail.username }}
      </div>
    </div>
    <div
      class="
        flex flex-col
        w-full
        max-w-xl
        h-auto
        mx-auto
        text-xl
        gap-3
        font-semibold
        bg-white
        p-3
        p16
        rounded-2xl
        overflow-auto
      "
    >
      <div class="inline-flex flex-row flex-wrap gap-3 justify-between">
        <span>ชื่อ - นามสกุล: {{ this.userDetail.userFullName }}</span>
        <span>อีเมล์: {{ this.userDetail.userEmail }}</span>
      </div>
      <div class="inline-flex flex-row flex-wrap gap-3 justify-between">
        <span v-if="this.userDetail.userId !== null"
          >รหัสสมาชิก: {{ this.userDetail.userId }}
        </span>
        <span v-else>รหัสสมาชิก: ไม่มีการระบุ</span>
        <span>เบอร์ติดต่อ: {{ this.userDetail.userPhone }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from "../services/user.service";
export default {
  data() {
    return {
      userDetail: {},
      user: JSON.parse(localStorage.getItem("user")),
    };
  },
  created() {
    this.getUserDetail();
  },
  methods: {
    getUserDetail() {
      UserService.getUserDetailByUserNo(this.user.userNo).then((response) => {
        this.userDetail = response.data;
      });
    },
  },
};
</script>

<style scoped>
span {
  @apply text-left;
}
@media (min-width: 768px) {
  .p16 {
    padding: 24px /* 64px */ !important;
  }
}
</style>