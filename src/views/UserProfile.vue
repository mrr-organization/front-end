<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div class="flex flex-col justify-around w-full mt-14 sm:mb-16 item-center">
      <img src="@/assets/Profile.svg" class="h-36 sm:h-40" />
      <div class="flex flex-col mt-3 text-2xl font-semibold sm:mt-5">
        {{ this.userDetail.username }}
      </div>
    </div>
    <div
      class="flex flex-col w-full h-auto max-w-xl gap-3 p-3 mx-auto overflow-auto text-xl font-semibold bg-white p16 rounded-2xl"
    >
      <div class="inline-flex flex-row flex-wrap justify-between gap-3">
        <span>ชื่อ - นามสกุล: {{ this.userDetail.userFullName }}</span>
        <span>อีเมล์: {{ this.userDetail.userEmail }}</span>
      </div>
      <div class="inline-flex flex-row flex-wrap justify-between gap-3">
        <span v-if="this.userDetail.userId !== null"
          >รหัสสมาชิก: {{ this.userDetail.userId }}
        </span>
        <span v-else>รหัสสมาชิก: ไม่มีการระบุ</span>
        <span>เบอร์ติดต่อ: {{ this.userDetail.userPhone }}</span>
      </div>
    </div>
    <div class="space-x-5">
      <button
      class="p-1 mt-1 bg-[#FFFFFF] rounded hover:bg-[#02B072] hover:transition-all border border-slate-300"
    >
      edit picture
    </button>
    <button
      class="p-1 mt-1 bg-[#FFFFFF] rounded hover:bg-[#02B072] hover:transition-all border border-slate-300"
    >
      edit data
    </button>
    </div>
  </div>
</template>

<script>
import UserService from "../services/user.service";
export default {
  data() {
    return {
      userDetail: {},
    };
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
  created() {
    this.getUserDetail();
  },
  methods: {
    async getUserDetail() {
      console.log(this.userDetail);
      console.log(this.user);
      await UserService.getUserByUID(this.user.uid).then((response) => {
        this.userDetail = response.data.responseData;
        console.log(this.userDetail);
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
