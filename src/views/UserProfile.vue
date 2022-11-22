<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div class="flex flex-col justify-around w-full mt-14 sm:mb-14 item-center ">
      <img
        v-if="!this.imageURL"
        src="@/assets/Profile.svg"
        class="h-36 sm:h-40"
      />
      <img
        v-else
        :src="this.imageURL"
        class="object-cover w-48 h-48 m-auto rounded-full sm:h-48 img-fluid"
      />
      <div class="flex flex-col mt-3 text-2xl font-semibold sm:mt-5">
        {{ this.userDetail.username }}
      </div>
    </div>
    <div
      class="flex flex-col w-full h-auto max-w-xl gap-3 p-3 mx-auto overflow-auto text-xl font-semibold bg-white rounded-2xl "
    >
      <div class="inline-flex flex-row flex-wrap justify-between gap-3">
        <span>ชื่อ - นามสกุล: {{ this.userDetail.userFullName }}</span>
        <span>อีเมล์: {{ this.userDetail.userEmail }}</span>
      </div>
      <div class="inline-flex flex-row flex-wrap justify-between gap-3">
        <span v-if="this.userDetail.userNo !== null"
          >รหัสสมาชิก: {{ this.userDetail.userNo }}
        </span>
        <span v-else>รหัสสมาชิก: ไม่มีการระบุ</span>
        <span>เบอร์ติดต่อ: {{ this.userDetail.userPhone }}</span>
      </div>
    </div>
    <div class="mt-5 space-x-8 " >
      <button
        @click="editImage"
        class="p-2 px-5 mt-1 bg-[#FFFFFF] rounded-xl hover:bg-[#02B072] hover:transition-all border border-slate-300"
      >
      <img src="@/assets/EditImage.svg" class="w-6 sm:w-7"/>
      </button>
      <button
        @click="alertDisplay"
        class="p-2 px-5 mt-1 bg-[#FFFFFF] rounded-xl hover:bg-[#02B072] hover:transition-all border border-slate-300"
      >
      <img src="@/assets/EditData.svg" class="w-6 sm:w-6"/>
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
      imageURL: "",
      imagesType: "PROFILE",
      text: "",
      editInfo: {
        username: '',
        firstName: '',
        lastName: '',
        phone: '',
        userNo: ''
      }
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
        console.log(this.userDetail)
        this.imageURL = response.data.responseData.fileStoreResponses.fileURL;
      });
    },
    async editImage() {
      const { value: file } = await this.$swal.fire({
        title: "เลือกรูปภาพ",
        input: "file",
        inputAttributes: {
          accept: "image/*",
          "aria-label": "Upload your profile picture",
        },
      });

      if (file) {
        this.uploadFile(this.user.uid, file, this.imagesType);
        const reader = new FileReader();
        reader.onload = (e) => {
          this.$swal
            .fire({
              title: "รูปภาพที่คุณอัปโหลด",
              imageUrl: e.target.result,
              imageAlt: "The uploaded picture",
            })
            .then(function () {
              window.location.reload();
            });
        };
        reader.readAsDataURL(file);
      }
    },
    async uploadFile(uid, image, imagesType) {
      await FileStoreService.uploadMultipleFile(uid, image, imagesType);
    },
    async alertDisplay() {
      const { value: formValues } = await this.$swal.fire({
        title: "แก้ไขโปรไฟล์",
        html:
          '<div>'+
          '<label for="swal-input1">ชื่อผู้ใช้</label> <br>' +
          `<input id="swal-input1" class="swal2-input" placeholder=${this.userDetail.username} disabled> <br>` +
          '<label for="swal-input2">ชื่อจริง</label> <br>' +
          `<input id="swal-input2" class="swal2-input" placeholder=${this.userDetail.userFName} > <br>` +
          '<label for="swal-input3">นามสกุล</label> <br>' +
          `<input id="swal-input3" class="swal2-input" placeholder=${this.userDetail.userLName} > <br>` +
          '<label for="swal-input4">เบอร์ติดต่อ</label> <br>' +
          `<input id="swal-input4" class="swal2-input " placeholder=${this.userDetail.userPhone} > <br>` +
          '<br> <label for="swal-input5">รหัสสมาชิก</label> <br>' +
          `<input id="swal-input5" class="swal2-input" placeholder=${this.userDetail.userNo}> <br>` +
          '</div>',
        focusConfirm: false,
        showCancelButton: true,
        preConfirm: () => {
          return [
            document.getElementById("swal-input2").value,
            document.getElementById("swal-input3").value,
            document.getElementById("swal-input4").value,
            document.getElementById("swal-input5").value,
          ];
        },
      });
      
      if (formValues) {
        this.editInfo.username = this.userDetail.username
        this.editInfo.firstName = formValues[0]
        this.editInfo.lastName = formValues[1]
        this.editInfo.phone = formValues[2]
        this.editInfo.userNo = formValues[3]
        this.editProfile(this.editInfo);
        this.$swal.fire({
          icon: "success",
          title: "แก้ไขโปรไฟล์",
          text: "เสร็จสิ้น!",
        }).then(function () {
              window.location.reload();
            });

      }
    },
    async editProfile (user){
      await UserService.editUser(user);
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
