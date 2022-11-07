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
            <th >สถานะการแจ้งซ่อม / ร้องเรียน</th>
            <th class="rounded-t-lg">อัพเดทสถานะ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>20-8-2000 18:04:02</td>
            <td>Lorem ipsum dolor</td>
            <td>Mr. abc edwinx</td>
            <td>
              <button class="p-2 bg-[#FFB33F] rounded-lg hover:bg-[#FFFFFF]">
                กำลังดำเนินการ
              </button>
            </td>
            <td>
              <button class="p-1 bg-[#FFFFFF] rounded-lg hover:bg-[#02B072] hover:transition-all">
                <img src="@/assets/UpdateRole.svg" class="w-5 sm:w-7"/>
              </button>
            </td>
          </tr>
          <tr>
            <td>20-8-2000 18:04:02</td>
            <td>Lorem ipsum dolor</td>
            <td>Mr. abc edwin</td>
            <td>
              <button class="p-2 bg-[#FFB33F] rounded-lg hover:bg-[#FFFFFF]">
                กำลังดำเนินการ
              </button>
            </td>
            <td>
              <button class="p-1 bg-[#FFFFFF] rounded-lg hover:bg-[#02B072] hover:transition-all">
                <img src="@/assets/UpdateRole.svg" class="w-5 sm:w-7"/>
              </button>
            </td>
          </tr>
          <tr>
            <td>20-8-2000 18:04:02</td>
            <td>Lorem ipsum dolor</td>
            <td>Mr. abc edwin</td>
            <td>
              <button class="p-2 bg-[#FFB33F] rounded-lg hover:bg-[#FFFFFF]">
                กำลังดำเนินการ
              </button>
            </td>
            <td>
              <button class="p-1 bg-[#FFFFFF] rounded-lg hover:bg-[#02B072] hover:transition-all">
                <img src="@/assets/UpdateRole.svg" class="w-5 sm:w-7"/>
              </button>
            </td>
          </tr>
          <tr>
            <td>20-8-2000 18:04:02</td>
            <td>Lorem ipsum dolor</td>
            <td>Mr. abc edwin</td>
            <td>ไม่ผ่านการตรวจสอบ</td>
            <td>
              <button class="p-1 bg-[#FFFFFF] rounded-lg hover:bg-[#02B072] hover:transition-all">
                <img src="@/assets/UpdateRole.svg" class="w-5 sm:w-7"/>
              </button>
            </td>
          </tr>
          <tr>
            <td>20-8-2000 18:04:02</td>
            <td>Lorem ipsum dolor</td>
            <td>Mr. abc edwin</td>
            <td>ไม่ผ่านการตรวจสอบ</td>
            <td>
              <button class="p-1 bg-[#FFFFFF] rounded-lg hover:bg-[#02b072] hover:transition-all">
                <img src="@/assets/UpdateRole.svg" class="w-5 sm:w-7"/>
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
      
  <script >
  import VSPagination from "@/components/VSPagination.vue";
export default {
  components: {
    VSPagination,
  },
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