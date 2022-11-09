<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div class="flex flex-col justify-around w-full mt-14 sm:mb-16 item-center">
      <img v-if="!this.imageURL" src="@/assets/Profile.svg" class="h-36 sm:h-40" />
      <img v-else :src="imageURL" class="sm:h-40 w-48 h-48 img-fluid m-auto" />
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
        @change="editImage"
        class="self-end"
      />
      <button @click="alertDisplay"
        class="p-1 mt-1 bg-[#FFFFFF] rounded hover:bg-[#02B072] hover:transition-all border border-slate-300"
      >
        edit data
      </button>
    </div>
  </div>
</template>

<script>
import UserService from "../services/user.service";
import FileStoreService from "../services/file-store.service";
export default {
  data() {
    return {
      userDetail: {},
      imageURL: '',
      imagesType: "PROFILE",
      text : ''
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
    editImage : function (event) {
      var input = event.target;
      if (input.files) {
        this.image = input.files
        console.log(this.image);
        this.uploadFile(this.user.uid, this.image, this.imagesType);
      }
    },
    async uploadFile(uid, image, imagesType) {
      await FileStoreService.uploadMultipleFile(uid, image, imagesType).then(
        window.location.reload()
      );
    },
    async alertDisplay() {
  const { value: formValues } = await this.$swal.fire({
  title: 'Multiple inputs',
  html:
    `<input id="swal-input1" class="swal2-input" placeholder=${this.imagesType} disabled>` +
    '<input id="swal-input2" class="swal2-input">',
  focusConfirm: false,
  preConfirm: () => {
    return [
      document.getElementById('swal-input1').value,
      document.getElementById('swal-input2').value
    ]
  }
})

if (formValues) {
  this.text = formValues
  console.log(this.text)
  this.$swal.fire(JSON.stringify(formValues))
}
      }
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
