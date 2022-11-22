<template>
  <div
    class="mx-auto mt-20 overflow-auto rounded sm:mt-24 max-w-7xl sm:max-w-7xl"
    style="background-color: #fef1e6"
  >
    <table class="w-full text-xs table-auto sm:text-xl text-[#312A21]">
      <thead>
        <tr class="bg-white">
          <th class="p-3 px-4 rounded-t-lg lg:p-3">รหัสแจ้งซ่อม</th>
          <th >วันที่ / เวลาสมัคร </th>
          <th>สถานที่ / พื่นที่</th>
          <th>ผู้แจ้ง / ผู้ร้องเรียน</th>
          <th>สถานะการแจ้งซ่อม / ร้องเรียน</th>
          <th>เพิ่มหน่วยงาน</th>
          <th class="rounded-t-lg">ปฏิเสธคำร้อง</th>
        </tr>
      </thead>
      <tbody v-for="item in listRepair" :key="item.id">
        <tr>
          <td>{{ item.id}}</td>
          <td>{{ item.createDate }}</td>
          <td>{{ item.location }}</td>
          <td>{{ item.createBy }}</td>
          <td>
            <button
              @click="redirectToPreviewPage(item.id)"
              class="p-2 bg-[#FFB33F] rounded-lg hover:bg-[#FFFFFF]"
            >
              {{ item.status }}
            </button>
          </td>
          <td>
            <button
              @click="updateModerator(item.id)"
              class="p-1 bg-[#FFFFFF] rounded-lg hover:bg-[#02B072] hover:transition-all"
            >
              <img src="@/assets/ModeratorAdd.svg" class="w-5 sm:w-7" />
            </button>
          </td>
          <td>
            <button
              @click="updateReject(item.id)"
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
    @page-number="getListRepairNotificationByStatus"
  >
  </VSPagination>
</template>

<script>
import VSPagination from "@/components/VSPagination.vue";
import repairNotificationService from "@/services/repair-notification.service";
import DepartmentService from "@/services/dept.service";
export default {
  components: {
    VSPagination,
  },
  data() {
    return {
      deptRegisList: [],
      listRepair: [],
      totalPages: 0,
      pageNumber: 0,
      status: "PENDING",
    };
  },
  created() {
    this.getAllRepairNotificationByStatus(this.status, this.pageNumber);
    this.getDepartment();
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  methods: {
    getDepartment() {
      DepartmentService.getDepartmentsByCode(1).then((response) => {
        this.deptRegisList = response.data.responseData;
      });
    },
    async updateModerator(repairId) {
      const { value: department } = await this.$swal.fire({
        title: "Select department",
        input: "select",
        inputOptions: {
          1: this.deptRegisList[0].deptName,
          2: this.deptRegisList[1].deptName,
          3: this.deptRegisList[2].deptName,
          4: this.deptRegisList[3].deptName,
          5: this.deptRegisList[4].deptName,
          6: this.deptRegisList[5].deptName,
        },
        inputPlaceholder: "Select a department",
        showCancelButton: true,
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (value) {
              resolve();
            } else {
              resolve("select some department :)");
            }
          });
        },
      });

      if (department) {
        this.updateDepartment(repairId, department);
        this.$swal
          .fire({
            icon: "success",
            title: "Update Department",
            text: "successful!",
          })
          .then(function () {
            window.location.reload();
          });
      }
    },
    redirectToPreviewPage(id) {
      if (this.loggedIn) {
        this.$router.push({ path: `/preview/${id}` });
      }
      if (!this.loggedIn) {
        this.$router.push("/user-login");
      }
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
    async updateDepartment(repairId, department) {
      await repairNotificationService.updateDepartment(repairId, department);
    },
    updateReject(repairId) {
      if (repairId) {
        repairNotificationService.updateStatusReject(repairId);
        this.$swal
          .fire({
            icon: "success",
            title: "Update Status",
            text: "successful!",
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
