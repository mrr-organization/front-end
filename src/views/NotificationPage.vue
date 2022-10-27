<template>
    <div>
      <div
        class="mx-auto mt-20 overflow-auto rounded sm:mt-24 max-w-7xl sm:max-w-7xl"
        style="background-color: #fef1e6"
      >
        <table class="w-full text-xs table-auto sm:text-xl">
          <thead>
            <tr class="bg-white">
              <th>ลำดับ</th>
              <th class="p-3 px-4 rounded-t-lg lg:p-3">การแจ้งเตือน</th>
              <th>วันที่ / เวลา</th>
              <th>ลบแจ้งเตือน</th>
            </tr>
          </thead>
          <tbody  v-for="item in listNotification"
        :key="item.id" class="font-bold divide-y-2 divide-black">
            <tr>
              <td>{{item.id}}</td>
              <td>{{item.detail}}</td>
              <td>{{item.createDate}}</td>
              <td><button @click="deleteNotification(item.id)" class="p-1 font-medium text-black rounded-lg"><font-awesome-icon icon="xmark"  size="lg" />
            </button>
              </td>
            </tr>

          </tbody>
        </table>
        <Div class=""></Div>
      </div>
    </div>
    <div class="flex justify-end mt-2 max-w-screen-2xl">
        <button @click="deleteAllNotification" v-show="!listNotification" class="p-1 text-lg font-medium text-white uppercase bg-red-500 rounded-lg "  ><font-awesome-icon icon="xmark"  size="xl" /> ลบแจ้งเตือนทั้งหมด  </button>
    </div>
    <VSPagination :totalPages="totalPages" @page-number="getListNotiFromPageNumber">
    </VSPagination>
  </template>
      
  <script>
  import notificationService from "@/services/notification.service"
  import VSPagination from "../components/VSPagination.vue"
  export default {
  components: {
    VSPagination
  },
  data() {
    return {
      listNotification: {},
      totalPages: 0,
      pageNumber: 0
    };
  },

  computed:{
    user () {
      return  this.$store.state.auth.user;
    }
  },

  created(){
    this.getAllNotification(this.user.username, this.pageNumber);
    console.log(this.user)
  },

  methods : {
    getListNotiFromPageNumber(pageNumber){
      this.getAllNotification(this.user.username, pageNumber)
    },
    async getAllNotification(username, pageNumber) {
      await notificationService.getNotificationByUsername(username, pageNumber)
      .then(
        (response) => {
          this.listNotification = response.data.responseData.content;
          this.totalPages = response.data.responseData.totalPages;
          console.log(this.listNotification);
        }
      );
    },
    async deleteNotification (id) {
      await notificationService.deleteNotificationById(id).then(
        window.location.reload()
      )
    },
    deleteAllNotification () {
      notificationService.deleteAllNotification(this.user.uid).then(
        window.location.reload()
      )
    }
  }
}
  </script>
      
      <style scoped>
  td {
    @apply px-1 py-3 sm:px-2 lg:p-4;
  }
  thead > tr > th {
    @apply whitespace-nowrap px-3;
  }
  </style>