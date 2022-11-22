<template>
  <div class="p-1 mx-auto mt-10 sm:mt-20 max-w-7xl">
    <div
      class="flex flex-row flex-wrap items-center justify-center w-full gap-10 mt-5 overflow-auto"
    >
      <div>
        <column-chart
          class="bg-white rounded-xl h-96"
          :data="this.countYearData"
          width="380px"
          height="288px"
          :colors="['#0000ff', '#ff0000']"
          xtitle="เดือน"
          ytitle="จำนวนเรื่องร้องเรียน"
        ></column-chart>
      </div>
      <div>
        <pie-chart
          class="bg-white rounded-xl h-96"
          :data="this.countStatusData"
          width="400px"
          height="300px"
        ></pie-chart>
      </div>
    </div>

    <div>
      <div class="flex justify-end">
        <div
          class="inline-flex items-center justify-center h-12 p-1 mt-6 rounded-lg sm:mt-10 sm:h-20"
          style="background-color: #fef1e6"
        >
          <p class="text-xs font-bold sm:text-base">Status:</p>
          <select
            @change="getNewRepair"
            class="text-xs font-bold border-2 sm:text-base"
            name="status"
            v-model="status"
          >
            <option
              v-for="(item, index) in allStatus"
              :key="index"
              :value="item.statusName"
            >
              {{ item.statusName }}
            </option>
          </select>
        </div>
      </div>

      <div
        class="mx-auto mt-3 overflow-auto rounded-t-lg sm:mt-10 max-w-7xl sm:max-w-7xl"
        style="background-color: #fef1e6"
      >
        <table class="w-full text-sm table-auto sm:text-xl">
          <thead>
            <tr class="bg-white">
              <th>รหัสร้องเรียน</th>
              <th class="p-3 px-4 rounded-t-lg lg:p-3">วันที่ร้องเรียน</th>
              <th>วันที่อัพเดท</th>
              <th>สถานที่ / พื่นที่</th>
              <th>รายละเอียด</th>
              <th class="rounded-t-lg">สถานะการแจ้งซ่อม / ร้องเรียน</th>
            </tr>
          </thead>
          <tbody v-for="(item, index) in listRepair" :key="index">
            <tr>
              <td>
                <button @click="redirectToPreviewPage(item.id)">
                  {{ item.id }}
                </button>
              </td>
              <td>
                <button @click="redirectToPreviewPage(item.id)">
                  {{ item.createDate }}
                </button>
              </td>
              <!-- วันที่ร้องเรียนล่าสุด -->
              <td>
                <button @click="redirectToPreviewPage(item.id)">
                  {{ item.updateDate }}
                </button>
              </td>
              <td>
                <button @click="redirectToPreviewPage(item.id)">
                  {{ item.location }}
                </button>
              </td>
              <td>
                <button @click="redirectToPreviewPage(item.id)">
                  {{ item.detail }}
                </button>
              </td>
              <td>
                <button
                  @click="redirectToPreviewPage(item.id)"
                  class="p-2 sm:p-1 font-bold rounded-lg hover:bg-[#FFFFFF] sm:w-44"
                  :class="filterStatusColor(item.status)"
                >
                  {{ item.status }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <VSPagination
    :totalPages="totalPages"
    @page-number="getListRepairNotificationByStatus"
  >
  </VSPagination>
</template>

<script>
import repairNotificationService from "@/services/repair-notification.service";
import VSPagination from "@/components/VSPagination.vue";
export default {
  components: {
    VSPagination,
  },
  data() {
    return {
      repairId: Number,
      listRepair: [],
      // allStatus: ["PENDING", "IN PROGRESS", "REJECT", "COMPLETED"],
      allStatus: [
        {
          statusName: "PENDING",
          bg: "bg-[#3366CC]",
        },
        {
          statusName: "IN PROGRESS",
          bg: "bg-[#DC3912]",
        },
        {
          statusName: "REJECT",
          bg: "bg-[#FF9900]",
        },
        {
          statusName: "COMPLETED",
          bg: "bg-[#109618]",
        },
      ],
      status: "",
      totalPages: 0,
      pageNumber: 0,
      countYearData: {},
      countStatusData: {},
      year : 2022
    };
  },
  created() {
    this.status = this.allStatus[3].statusName;
    this.getAllRepairNotificationByStatus(this.status, this.pageNumber);
    this.getCountStatus();
    this.getCountYear();
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
    getCountStatus() {
      repairNotificationService.getCountStatus().then((response) => {
        this.countStatusData = response.data.responseData;
      });
    },
    getCountYear() {
      repairNotificationService.getCountYear(this.year).then((response) => {
        this.countYearData = response.data.responseData;
      });
    },
    getNewRepair() {
      this.getAllRepairNotificationByStatus(this.status, 0);
    },
    getListRepairNotificationByStatus(pageNumber) {
      this.pageNumber = pageNumber;
      this.getAllRepairNotificationByStatus(this.status, pageNumber);
    },
    getAllRepairNotificationByStatus(status, pageNumber) {
      repairNotificationService
        .getAllRepairNotificationByStatus(status, pageNumber)
        .then((response) => {
          this.listRepair = response.data.responseData.content;
          this.totalPages = response.data.responseData.totalPages;
        });
    },
    filterStatusColor(status) {
      for (let i in this.allStatus) {
        if (this.allStatus[i].statusName == status) {
          return this.allStatus[i].bg;
        }
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
