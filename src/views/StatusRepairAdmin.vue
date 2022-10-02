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
        </tr>
        <tr>
          <td>20-8-2000 18:04:02</td>
          <td>Lorem ipsum dolor</td>
          <td>Mr. abc edwin</td>
          <td>ไม่ผ่านการตรวจสอบ</td>
        </tr>
        <tr>
          <td>20-8-2000 18:04:02</td>
          <td>Lorem ipsum dolor</td>
          <td>Mr. abc edwin</td>
          <td>ไม่ผ่านการตรวจสอบ</td>
        </tr>
        <tr>
          <td>20-8-2000 18:04:02</td>
          <td>Lorem ipsum dolor</td>
          <td>Mr. abc edwin</td>
          <td>
            <button class="p-2 bg-[#FFB33F] rounded-lg hover:bg-[#FFFFFF]">
              การดำเนินการสำเร็จ
            </button>
          </td>
        </tr>
        <tr>
          <td>20-8-2000 18:04:02</td>
          <td>Lorem ipsum dolor</td>
          <td>Mr. abc edwin</td>
          <td>
            <button class="p-2 bg-[#FFB33F] rounded-lg hover:bg-[#FFFFFF]">
              การดำเนินการสำเร็จ
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
        </tr>
      </tbody>
    </table>
  </div>
  <div class="mt-2">
    <button
      class="
        inline-flex
        items-center
        p-2
        text-sm
        font-medium
        text-[#312A21]
        bg-[#F9D5A7]
        rounded-lg
        hover:bg-[#fef1e6]
      "
    >
      Previous
    </button>

    <button
      class="
        inline-flex
        items-center
        p-2
        ml-3
        text-sm
        font-medium
        text-[#312A21]
        bg-[#F9D5A7]
        rounded-lg
        hover:bg-[#fef1e6]
      "
    >
      Next
    </button>
  </div>
</template>
    
  <script >
</script>
    
    <style scoped>
td {
  @apply px-1 py-3 sm:px-2 lg:p-4;
}
thead > tr > th {
  @apply whitespace-nowrap px-3;
}
</style>