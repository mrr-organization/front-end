<template>
    <div class="mx-auto mt-24 max-w-7xl" style="background-color: #fef1e6">
      <div class="p-6 text-left bg-white mt-14">
        <h2 style="color: #312a21">ติดตามสถานะแจ้งซ่อม</h2>
      </div>   
      <div class="min-h-[500px]">
        <div v-for="(item,index) in listRepair" :key="item.id" class="flex justify-center p-4">
          <div class="flex w-full space-x-5">
            <div class="">เรื่องแจ้งซ่อม สามารถ คลิก Preview ดูข้อมูลได้</div>
            <div class="flex justify-around w-full items">
              <div class="flex flex-col items-center w-full">
                <div :class="`w-10 h-10 ${clrBgStatus(index, 'wait')} rounded-full`">
                </div>
                <span :class="`${clrTxtStatus(index, 'wait')}`">รอดำเนินการ</span>
              </div>

              <div :class="`w-full h-1 mt-3 ${clrBgStatus(index)}`" />

              <div class="flex flex-col items-center w-full">
                <div :class="`w-10 h-10  ${clrBgStatus(index, 'pending')} rounded-full`">
                </div>
                <span :class="`${clrTxtStatus(index, 'pending')}`">กำลังดำเนินการ</span>
              </div>

              <div :class="`w-full h-1 mt-3 ${clrBgStatus(index, 'successLine')}`" />
              
              <div class="flex flex-col items-center w-full">
                <div :class="`w-10 h-10 ${clrBgStatus(index, 'success')} rounded-full`">
              </div>
                <span :class="`${clrTxtStatus(index, 'success')}`">เสร็จสิ้น</span>
              </div>
            </div>
            <div v-if="item.status === '' || item.status === 'PENDING'" class="w-2/12">
              <router-link to="/editnotirepair"><button class="bg-[#FFB33F] text-white rounded-lg p-2 font-medium">แก้ไขข้อมูล</button></router-link>
            </div> 
            <div v-else class="w-2/12">

            </div>
          </div>
        </div>
      </div>
    </div>
</template>
  
  <script>
  import repairNotificationService from '@/services/repair-notification.service';
  export default {
    data() {
      return {
        user: JSON.parse(localStorage.getItem('user')),
        listRepair: [],
      };
    },
    created(){
      this.getListRepairNotificationByUsername(this.user.username)
      console.log(this.user)
    },
    methods: {
      clrBgStatus(index, status) {
        if (this.listRepair[index].status === '') {
          return 'bg-[#DDDDDD] fill-current text-green-600'
        } else if (this.listRepair[index].status === 'PENDING' && status === 'wait') {
          return 'bg-black'
        } else if ((this.listRepair[index].status === 'IN PROGRESS')) {
          return status === 'success' ? 'bg-[#DDDDDD]' : status === 'successLine' ? 'bg-[#DDDDDD]' : status === 'pending' ? 'bg-[#FFB33F]' : 'bg-black'
        } else if (this.listRepair[index].status === 'COMPLETED') {
          return status === 'success' ? 'bg-[#02B072]' : status === 'pending' ? 'bg-[#FFB33F]' : 'bg-black'
        } else {
          return 'bg-[#DDDDDD]'
        }
      },
      clrTxtStatus(index, status) {
        if (this.listRepair[index].status === '') {
          return 'text-[#DDDDDD]'
        } else if (this.listRepair[index].status === 'PENDING' && status === 'wait') {
          return 'text-black'
        } else if ((this.listRepair[index].status === 'IN PROGRESS')) {
          return status === 'success' ? 'text-[#DDDDDD]' : status === 'pending' ? 'text-[#FFB33F]' : 'text-black'
        } else if (this.listRepair[index].status === 'COMPLETED') {
          return status === 'success' ? 'text-[#02B072]' : status === 'pending' ? 'text-[#FFB33F]' : 'text-black'
        } else {
          return 'text-[#DDDDDD]'
        }
      },
      getListRepairNotificationByUsername (username){
        repairNotificationService.getAllRepairNotificationByUsername(username).then( reponse => {
          this.listRepair = reponse.data;
          console.log(this.listRepair);
        })
      },
    },
  };
  </script>
  
  <style>
  </style>