<template>
  <div class="px-2 mx-auto mt-16 max-w-7xl " style="background-color: #fef1e6">
    <div class="p-6 -mx-2 text-2xl font-black text-left bg-white mt-14">
      <h2 style="color: #312a21">รายการแจ้งซ่อมรหัสที่ : {{repairData.repairResponse.id}}</h2>
    </div>
      <div class="flex flex-col max-w-4xl mx-auto mt-5 text-left ">
        <div>
          <h3 class="ml-2 text-xl font-bold text-left " style="color: #312a21">วัน / สถานะ</h3>
        <p class="mt-2 ml-3 text-lg font-semibold">วันที่ร้องเรียน: {{repairData.repairResponse.createDate}}</p>
        <p class="ml-3 text-lg font-semibold">สถานะ: {{repairData.repairResponse.status}}</p>
        </div>
      
      <div class="mt-6">
        <h3 class="ml-2 text-xl font-bold text-left" style="color: #312a21">หน่วยงานที่รับเรื่อง</h3>
        <p class="mt-2 ml-3 text-lg font-semibold">หน่วยงานที่รับเรื่อง: {{repairData.deptName}}</p>
      </div>
      <div class="mt-6">
        <h3 class="ml-2 text-xl font-bold text-left" style="color: #312a21">สถานที่</h3>
      <p class="mt-2 ml-3 text-lg font-semibold">สถานที่: {{repairData.repairResponse.location}}</p>
      </div>
      <div class="mt-6">
        <h3 class="ml-2 text-xl font-bold text-left" style="color: #312a21">รายละเอียด</h3>
      <p class="mt-2 ml-3 text-lg font-semibold">รายละเอียด: {{repairData.repairResponse.detail}}</p>
      </div>
      </div>
      <div class="max-w-4xl mx-auto mt-3">
      <div class="text-xl font-bold">รูปภาพประกอบ 
        <div v-for="item in repairData.fileStoreResponses" :key="item.fileName" class="grid grid-cols-1 gap-2 ">
            <img :src="url+item.fileName" class="w-56 h-56 m-auto mt-5 mb-2"/>
        </div>
      </div>
      </div>
    </div>
  
</template>

<script>
import repairNotificationService from "@/services/repair-notification.service";

export default {
  data() {
    return {
        // url: "https://www.k-mutt-mrr-service.systems/be-path/api/file-service/",
        url: "http://localhost:8080/api/file-service/",
      repairData: {},
    };
  },
  created() {
    this.getRepairData();
  },
  methods: {
    getRepairData() {
      repairNotificationService
        .getRepairNotificationById(this.$route.params.id)
        .then((response) => {
          this.repairData = response.data.responseData;
          console.log(this.repairData);
        });
    },
  },
};
</script>
