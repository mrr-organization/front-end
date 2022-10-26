<template>
  <div class="mt-20 ">
    <div class="flex flex-row items-center justify-center mt-5 gap-10 w-full">
     <div class="">
      <column-chart class="bg-white rounded-xl" :data=this.countYearData width="900px" height="288px" :colors="['#0000ff', '#ff0000']" xtitle="เดือน" ytitle="จำนวนเรื่องร้องเรียน" ></column-chart>
     </div>
     <div class="">
      <pie-chart class="bg-white rounded-xl " :data=this.countStatusData width="494px" height="300px"></pie-chart>
    </div>
    </div>
    
    <div >
    <div class=" mt-10 ml-80 w-1/5 h-20 bg-white rounded-lg flex items-center justify-center">
      <p class="p-2">Status:</p>
      <select @change="getNewRepair" class="border-2" name="status" v-model="status">
        <option v-for="(item, index) in allStatus" :key="index" :value=item>
                {{item}}
        </option>
      </select>
    </div>
    <div class="mx-auto overflow-auto rounded-t-lg sm:mt-16 max-w-7xl sm:max-w-7xl"
      style="background-color: #fef1e6">
      
      <table class="w-full text-xs table-auto sm:text-xl">
        <thead>
          <tr class="bg-white">
            <th>เรื่องร้องเรียนที่</th>
            <th class="p-3 px-4 rounded-t-lg lg:p-3">วันที่</th>
            <th>สถานที่ / พื่นที่</th>
            <th class="rounded-t-lg">สถานะการแจ้งซ่อม / ร้องเรียน</th>
          </tr>
        </thead>
        <tbody v-for="(item) in listRepair"
        :key="item.id">
          <tr>
            <td>{{item.id}}</td>
            <td>{{item.createDate}}</td>
            <td>{{item.location}}</td>
            <td>{{item.status}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  </div>
  <VSPagination :totalPages="totalPages" @page-number="getListRepairNotificationByStatus">
    </VSPagination>
</template>
    
  <script >
import repairNotificationService from "@/services/repair-notification.service";
import VSPagination from '@/components/VSPagination.vue';
export default {
  components: {
    VSPagination
  },
  data(){

    return {
      listRepair: [],
      allStatus:['PENDING','IN PROGRESS', 'REJECT', 'COMPLETED'],
      status: "",
      totalPages: 0,
      pageNumber: 0,
      year: 2022,
      countYearData: {},
      countStatusData: {}
    }
  },

  created() {
    this.status = this.allStatus[3];
    this.getAllRepairNotificationByStatus(this.status , this.pageNumber);
    this.getCountStatus();
    this.getCountYear();
  },

  methods: {
    getCountStatus (){
      repairNotificationService.getCountStatus().then((response) => {
        this.countStatusData = response.data.responseData;
    });
    },
    getCountYear (){
      repairNotificationService.getCountYear(this.year).then((response) => {
        this.countYearData = response.data.responseData;
    });
    },
    getNewRepair(){
      this.getAllRepairNotificationByStatus(this.status, 0);
    },
    getListRepairNotificationByStatus(pageNumber){
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