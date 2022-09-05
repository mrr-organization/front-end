<template>
    <div class="mx-auto mt-24 max-w-7xl" style="background-color: #fef1e6">
      <div class="p-6 text-left bg-white mt-14">
        <h2 style="color: #312a21">ติดตามสถานะแจ้งซ่อม</h2>
      </div>   
      <div class="min-h-[500px]">
        <div v-for="(item,index) in items" :key="item.id" class="flex justify-center p-4">
          <div class="flex w-full space-x-5">
            <div class="">เรื่องแจ้งซ่อม สามารถ คลิก Preview ดูข้อมูลได้ </div>
            <div class="flex justify-around w-full items">
              <div class="flex flex-col items-center w-full">
                <div :class="`w-10 h-10 ${clrBgStatus(index, 'wait')} rounded-full`">
                </div>
                <span :class="`${clrTxtStatus(index, 'wait')}`">รอดำเนินการ</span>
              </div>

              <div :class="`w-full h-1 mt-3 ${clrBgStatus(index, 'pending')}`" />

              <div class="flex flex-col items-center w-full">
                <div :class="`w-10 h-10 ${clrBgStatus(index, 'pending')} rounded-full`">
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
          </div>
        </div>
      </div>
    </div>
</template>
  
  <script>
  export default {
    components: { },
    data() {
      return {
        items: [
          {
          topic: 'สวดาเสวกาเ',
          status: 0
         },
          {
          topic: 'สวดาเสวกาเ',
          status: 1
         },
          {
          topic: 'สวดาเสวกาเ',
          status: 2
         },
          {
          topic: 'สวดาเสวกาเ',
          status: 3
         },
      ]
      };
    },
    computed: {

    }, 
    methods: {
      clrBgStatus(index, status) {
        if (this.items[index].status === 0) {
          return 'bg-[#DDDDDD]'
        } else if (this.items[index].status === 1 && status === 'wait') {
          return 'bg-black'
        } else if ((this.items[index].status === 2)) {
          return status === 'success' ? 'bg-[#DDDDDD]' : status === 'successLine' ? 'bg-[#DDDDDD]' : 'bg-black'
        } else if (this.items[index].status === 3) {
          return status === 'success' ? 'bg-[#02B072]' : 'bg-black'
        } else {
          return 'bg-[#DDDDDD]'
        }
      },
      clrTxtStatus(index, status) {
        if (this.items[index].status === 0) {
          return 'text-[#DDDDDD]'
        } else if (this.items[index].status === 1 && status === 'wait') {
          return 'text-black'
        } else if ((this.items[index].status === 2)) {
          return status === 'success' ? 'text-[#DDDDDD]' : 'text-black'
        } else if (this.items[index].status === 3) {
          return status === 'success' ? 'text-[#02B072]' : 'text-black'
        } else {
          return 'text-[#DDDDDD]'
        }
      },
    },
  };
  </script>
  
  <style>
  </style>