<template>
  <div
    class="mx-auto mt-20 overflow-auto rounded-t-lg sm:mt-24 max-w-7xl sm:max-w-7xl"
    style="background-color: #fef1e6"
  >
    <table class="w-full text-xs table-auto sm:text-xl text-[#312A21]">
      <thead>
        <tr class="bg-white">
          <th class="p-3 px-4 rounded-t-lg lg:p-3">วันที่</th>
          <th>สถานที่ / พื่นที่</th>
          <th>ผู้แจ้ง / ผู้ร้องเรียน</th>
          <th>สถานะการแจ้งซ่อม / ร้องเรียน</th>
          <th class="rounded-t-lg">อัพเดทสถานะ</th>
        </tr>
      </thead>
      <tbody v-for="item in listRepair" :key="item.id">
        <tr>
          <td>{{ item.createDate }}</td>
          <td>{{ item.location }}</td>
          <td>{{ item.createBy }}</td>
          <td>
            <button 
            @click="redirectToPreviewPage(item.id)"
            class="p-2 bg-[#FFB33F] rounded-lg hover:bg-[#FFFFFF]">
              {{ item.status }}
            </button>
          </td>
          <td>
            <button
            @click="updateStatus(item.id)"
              class="p-1 bg-[#FFFFFF] rounded-lg hover:bg-[#02B072] hover:transition-all"
            >
              <img src="@/assets/UpdateRole.svg" class="w-5 sm:w-7" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <VSPagination
    :totalPages="totalPages"
    @page-number="getListRepairNotificationByDepartment"
  >
  </VSPagination>
</template>

<script>
import VSPagination from "@/components/VSPagination.vue";
import repairNotificationService from "@/services/repair-notification.service";

export default {
  components: {
    VSPagination,
  },
  data() {
    return {
      listRepair: [],
      totalPages: 0,
      pageNumber: 0,
    };
  },
  created() {
    this.getAllRepairNotification(this.user.deptId, this.pageNumber)
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    user() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    redirectToPreviewPage(id) {
      if (this.loggedIn) {
        this.$router.push({ path: `/preview/${id}` });
      }
      if (!this.loggedIn) {
        this.$router.push("/user-login");
      }
    },
    getListRepairNotificationByDepartment(pageNumber) {
      this.pageNumber = pageNumber;
      this.getAllRepairNotification(this.user.deptId, pageNumber);
    },
    getAllRepairNotification(deptId, pageNumber) {
      repairNotificationService
        .getAllRepairNotificationByDepartment(deptId, pageNumber)
        .then((response) => {
          this.listRepair = response.data.responseData.content;
          this.totalPages = response.data.responseData.totalPages;
        });
    },
    updateStatus(repairId) {
      if (repairId) {
        repairNotificationService.updateStatusComplete(repairId);
        this.$swal
          .fire({
            icon: "success",
            title: "อัปเดตสถานะ",
            text: "เสร็จสิ้น!",
          })
          .then(function () {
            window.location.reload();
          });
      }
    },
  },
};
</script>

<style scoped>
td {
  @apply px-1 py-3 sm:px-2 lg:p-4;
}
thead > tr > th {
  @apply whitespace-nowrap px-3;
}
</style>
