<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div class="flex flex-col justify-around w-full mt-14 sm:mb-16 item-center">
      <img v-if="!this.imageURL" src="@/assets/Profile.svg" class="h-36 sm:h-40" />
      <img v-else :src="imageURL" class="sm:h-40 w-48 h-48 img-fluid  m-auto" />
      <div class="flex flex-col mt-3 text-2xl font-semibold sm:mt-5">
        {{ this.userDetail.username }}
      </div>
    </div>
    <div
      class="flex flex-col w-full max-w-xl h-auto mx-auto text-xl gap-3 font-semibold bg-white p-3 p16 rounded-2xl overflow-auto"
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
    <div class="space-x-5">
      <label
        for="files"
        class="p-1 mt-1 bg-[#FFFFFF] rounded hover:bg-[#02B072] hover:transition-all border border-slate-300"
        style="background-color: #f9d5a7; color: #312a21"
        >edit picture</label
      >
      <input
        type="file"
        style="visibility: hidden"
        id="files"
        accept="image/*"
        multiple="multiple"
        @change="previewMultiImage"
        class="self-end"
      />
      <button
        class="p-1 mt-1 bg-[#FFFFFF] rounded-lg hover:bg-[#02B072] hover:transition-all border border-slate-300"
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
      imageURL: '',
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
      await UserService.getUserFullResponse(this.user.uid).then((response) => {
        this.userDetail = response.data.responseData.userResponse;
        this.imageURL = response.data.responseData.fileStoreResponses.fileURL;
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
