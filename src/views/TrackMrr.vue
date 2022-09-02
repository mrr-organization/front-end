<template>
    <div class="mx-auto mt-24 max-w-7xl" style="background-color: #fef1e6">
      <div class="p-6 text-left bg-white mt-14">
        <h2 style="color: #312a21">ติดตามสถานะแจ้งซ่อม</h2>
      </div>   
      <div>
        <ButtonCom
          msg="ยืนยัน"
          class="p-2 mt-6 mb-2 text-black w-28"
          style="background-color: #f9d5a7"
        ></ButtonCom>
      </div>
    </div>
  </template>
  
  <script>
  import ButtonCom from "@/components/ButtonCom.vue";
  export default {
    components: { ButtonCom },
    data() {
      return {
        preview: null,
        image: null,
        preview_list: [],
        image_list: [],
      };
    },
    methods: {
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
    },
  };
  </script>
  
  <style>
  </style>