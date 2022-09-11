<template>
  <div class="px-2 mx-auto mt-24 max-w-7xl" style="background-color: #fef1e6">
    <form @submit.prevent="createRepairNotification">
    <div class="p-6 -mx-2 text-left bg-white mt-14">
      <h2 style="color: #312a21">แจ้งซ่อม / ร้องเรียนปัญหา</h2>
    </div>
      <div class="max-w-4xl mx-auto mt-3">
      <div>
        <h3 class="text-left" style="color: #312a21">สถานที่ / บริเวณ</h3>
        <div>
          <!-- <input v-model="from.localtion" class="w-full h-12 p-4 ring-1 ring-black" type="text" list="auto-complete"
            placeholder="เลือกหน่วยงานที่รับเรื่อง" /> -->
            <select name="location" class="form-control"  v-model="from.location">
                        <option v-for="location in location_list" :key="location.id">{{location.locationName}}</option>
            </select>
          <!-- <datalist id="auto-complete">
            <option v-for="localtion in location_list" :value="location.locationName" :key="localtion.id">{{localtion.locationName}}</option>
          </datalist> -->
        </div>
      </div>
    </div>
    <!-- <div class="max-w-4xl mx-auto mt-3">
      <div>
        <h3 class="text-left" style="color: #312a21">สถานที่ / บริเวณ</h3>
        <textarea v-model="from.location" class="w-full p-4 h-28 ring-1 ring-black"
          placeholder="ใส่รายละเอียดสถานที่เรื่องร้องเรียน"></textarea>
      </div>
    </div> -->
    <div class="max-w-4xl mx-auto mt-3">
      <div>
        <h3 class="text-left" style="color: #312a21">รายละเอียด</h3>
        <textarea v-model="from.detail" class="w-full p-4 h-28 ring-1 ring-black"
          placeholder="ใส่รายละเอียด / อธิบายเพิ่มเติม"></textarea>
      </div>
    </div>
    <div class="max-w-4xl mx-auto mt-3">
      <div class="flex flex-col">
        <h3 class="text-left" style="color: #312a21">รูปภาพประกอบ</h3>
        <label for="files" class="self-end btn" style="background-color: #f9d5a7; color: #312a21">เลือกรูปภาพ</label>
        <input type="file" style="visibility: hidden" id="files" accept="image/*" multiple="multiple"
          @change="previewMultiImage" class="self-end" />
        <div class="p-2 mt-3 rounded ring-1 ring-black">
          <p style="color: #312a21">ตัวอย่างรูปภาพ:</p>
          <template v-if="preview_list.length">
            <div v-for="(item, index) in preview_list" :key="index" class="flex items-center justify-center mt-8">
              <img :src="item" class="w-48 h-48 img-fluid" />
              <p class="mb-0 ml-5">file name: {{ image_list[index].name }}</p>
                <!-- <p>size: {{ image_list[index].size/1024 }}KB</p> -->
            </div>
            <ButtonCom msg="Clear all" class="p-1 mt-7" style="background-color: #f9d5a7" @click="reset"></ButtonCom>
          </template>
          
        </div>
      </div>
    </div>
    <div class="flex justify-center space-x-24">
      <ButtonCom @handleClick="showAlert" msg="ยืนยัน" class="p-2 mt-6 mb-2 text-black w-28"
        style="background-color: #02b072"></ButtonCom>
      <ButtonCom msg="ยกเลิก" class="p-2 mt-6 mb-2 text-black w-28" style="background-color: #fc2525"></ButtonCom>
    </div>
    </form>
  </div>
</template>

<script>
import 'sweetalert2/dist/sweetalert2.min.css';
import ButtonCom from "@/components/ButtonCom.vue";
import LocationService from "../services/location.service";
import FileStoreService from "../services/file-store.service";
import repairNotificationService from '@/services/repair-notification.service';
export default {
  components: { ButtonCom },
  data() {
    return {
      location_list:[],
      image: null,
      preview: null,
      image_list:[],
      preview_list:[],
      repairId: 0,
      from: {
        id: 0,
        location: '',
        detail: '',
      }
    };
  },
  created(){
    this.getLocationList()
    this.preview

  },
  methods: {
    createRepairNotification (){
      console.log(this.from)
      repairNotificationService.createRepairNotification(this.from).then ((response) => {
        this.repairId = response.data.repairNotificationId
      }).then (() => {
        console.log(this.repairId)
        console.log(this.image_list)
        this.uploadFile(this.repairId,this.image_list)
      })
    
    
    },
    uploadFile (repairId, image_list){
      console.log(this.repairId)
      console.log(this.image_list)
      FileStoreService.uploadMultipleFiles(repairId,image_list)
    },
    getLocationList(){
      LocationService.getAllLocation().then(reponse => {
        this.location_list = reponse.data;
        console.log(reponse);
      }).catch(e => {
        console.log(e)
      })
    },
    previewMultiImage: function (event) {
      var input = event.target;
      var count = input.files.length;
      var index = 0;
      if (input.files) {
        while (count--) {
          var reader = new FileReader();
          reader.onload = (e) => {
            this.preview_list.push(e.target.result);
          };
          this.image_list.push(input.files[index]);
          reader.readAsDataURL(input.files[index]);
          index++;
        }
      }
    },
    reset: function () {
      this.image = null;
      this.preview = null;
      this.image_list = [];
      this.preview_list = [];
    },
    showAlert() {
      this.$swal({
        background: "#FF9817",
        color: "#fff",
        title: "ส่งข้อมูลเสร็จสิ้น",
        icon: "success",
        iconColor: "#fff",
        confirmButtonText: "ปิด",
        confirmButtonColor: "#17A87B",
        allowEnterKey: true,
      })
    }
  },
};
</script>

<style>
</style>