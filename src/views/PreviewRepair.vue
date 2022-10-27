<template>
  <div class="mt-20">
    <div
      class="mx-auto w-2/4 rounded-t-lg sm:mt-10 max-w-7xl sm:max-w-7xl"
      style="background-color: #fef1e6"
    >
      <div>รายการร้องเรียนที่ : {{repairData.repairResponse.id}}</div>
      <div class="flex justify-center">
        <p class="mr-10">วันที่ร้องเรียน: {{repairData.repairResponse.createDate}}</p>
        <p class="ml-10">สถานะ: {{repairData.repairResponse.status}}</p>
      </div>
      <div >หน่วยงานที่รับเรื่อง: {{repairData.deptName}}</div>
      <div>สถานที่: {{repairData.repairResponse.location}}</div>
      <div>รายละเอียด: {{repairData.repairResponse.detail}}</div>
      <div >รูปภาพประกอบ: 
        <div v-for="item in repairData.fileStoreResponses" :key="item.fileName" class="grid grid-cols-1 gap-2">
            <img :src="url+item.fileName" class="w-60 h-60 m-auto mt-5"/>
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
