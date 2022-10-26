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
              <td><button class="p-1 font-medium text-black rounded-lg"><font-awesome-icon icon="xmark"  size="lg" />
            </button>
              </td>
            </tr>

          </tbody>
        </table>
        
      </div>
    </div>
    <div  @click="deleteNotification(item.id)"  class="flex justify-end mt-2 max-w-screen-2xl">
        <button class="p-1 text-lg font-medium text-white uppercase bg-red-500 rounded-lg "  ><font-awesome-icon icon="xmark"  size="xl" /> ลบแจ้งเตือนทั้งหมด  </button>
    </div>
    <div class="mt-1">
      <button
        class="
          inline-flex
          items-center
          p-2
          text-sm
          font-medium
          text-[#312A21]
          bg-[#F9D5A7]
          rounded-lg
          hover:bg-[#fef1e6]
        "
      >
        Previous
      </button>
  
      <button
        class="
          inline-flex
          items-center
          p-2
          ml-3
          text-sm
          font-medium
          text-[#312A21]
          bg-[#F9D5A7]
          rounded-lg
          hover:bg-[#fef1e6]
        "
      >
        Next
      </button>
    </div>
  </template>
      
  <script>
  import notificationService from "@/services/notification.service"
  export default {
  data() {
    return {
      listNotification: {},
    };
  },

  computed:{
    user () {
      return  this.$store.state.auth.user;
    }
  },

  created(){
    this.getAllNotification(this.user.username);
    
  },

  methods : {
    async getAllNotification(username) {
      await notificationService.getNotificationByUsername(username)
      .then(
        (response) => {
          this.listNotification = response.data.responseData;
          console.log(this.listNotification);
          console.log(window.getSelection() +"asdasdasd")
        }
      );
    },
    async deleteNotification (id) {
      await notificationService.deleteNotificationById(id).then(
        window.location.reload(),
       
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