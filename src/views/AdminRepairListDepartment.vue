<template>
  <div
    class="
      mx-auto
      mt-20
      overflow-auto
      rounded-t-lg
      sm:mt-24
      max-w-7xl
      sm:max-w-7xl
    "
    style="background-color: #fef1e6"
  >
    <table class="w-full text-xs table-auto sm:text-xl text-[#312A21]">
      <thead>
        <tr class="bg-white">
          <th class="p-3 px-4 rounded-t-lg lg:p-3">วันที่</th>
          <th>สถานที่ / พื่นที่</th>
          <th>ผู้แจ้ง / ผู้ร้องเรียน</th>
          <th class="rounded-t-lg">สถานะการแจ้งซ่อม / ร้องเรียน</th>
        </tr>
      </thead>
      <tbody v-for="item in listRepairNotification" :key="item.id">
        <tr>
          <td>{{ item.updateDate }}</td>
          <td>{{ item.location }}</td>
          <td>{{ item.userFullName }}</td>
          <td>
            <button class="p-2 bg-[#FFB33F] rounded-lg hover:bg-[#FFFFFF]">
              {{ item.status }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
    <VSPagination
      :totalPages="1"
      @page-number="getListRepairNotificationByStatus"
    >
    </VSPagination>
</template>
  
<script >
import VSPagination from "@/components/VSPagination.vue";
import repairNotificationService from "@/services/repair-notification.service";
export default {
  components: {
    VSPagination,
  },
  data() {
    return {
      listRepairNotification: [],
    };
  },
  created() {
    this.getListRepairNotification();
  },
  methods: {
    getListRepairNotification() {
      repairNotificationService.getAllRepairNotification().then((response) => {
        this.listRepairNotification = response.data;
        console.log(this.listRepairNotification);
      });
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